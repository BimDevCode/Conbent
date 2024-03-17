import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ArticleEntity } from '../../core/models/articleEntity';
import { Technology } from '../../core/models/technology';
import { Tag } from '../../core/models/tag';
import { Pagination } from '../../core/models-shared/pagination';
import { ArticleSpecParams } from '../../core/models/articleSpecParams';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { TreeNode } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AcademyService {
  readonly academyControllerUrl = 'articles/';
  readonly tagsControllerUrl = this.academyControllerUrl + 'tags';
  readonly pathsControllerUrl = this.academyControllerUrl + 'paths';
  readonly technologiesControllerUrl = this.academyControllerUrl + 'technologies';

  baseUrl = environment.apiUrl;
  articleEntities: ArticleEntity[] = [];
  technologies: Technology[] = [];
  tags: Tag[] = [];
  paths: string[] = [];
  pagination?: Pagination<ArticleEntity[]>;
  articleParameters = new ArticleSpecParams();
  articleCache = new Map<string, Pagination<ArticleEntity[]>>();
  tagsDict!: { [key: string]: number; };

  constructor(private http: HttpClient) { }

  setArticleParameters(params: ArticleSpecParams) {
    this.articleParameters = params;
  }

  getArticleParameters(): ArticleSpecParams {
    return this.articleParameters;
  }

  getArticleEntities(useCache = true): Observable<Pagination<ArticleEntity[]>> {

    if (!useCache) this.articleCache = new Map();

    if (this.articleCache.size > 0 && useCache) {
      if (this.articleCache.has(Object.values(this.articleParameters).join('-'))) {
        this.pagination = this.articleCache.get(Object.values(this.articleParameters).join('-'));
        if(this.pagination)
          return of(this.pagination);
      }
    }

    let params = new HttpParams();
    let headers = new Headers();
    headers.append('Origin', 'https://localhost:4200');
    if (this.articleParameters.technologyId > 0) params = params.append('technologyId', this.articleParameters.technologyId);
    if (this.articleParameters.tagId > 0) params = params.append('tagId', this.articleParameters.tagId);
    params = params.append('sort', this.articleParameters.sort);
    params = params.append('pageIndex', this.articleParameters.pageIndex);
    params = params.append('pageSize', this.articleParameters.pageSize);
    if (this.articleParameters.search) params = params.append('search', this.articleParameters.search);
    return this.http.get<Pagination<ArticleEntity[]>>(this.baseUrl + this.academyControllerUrl, {
      params : params,
    }).pipe(
      map(response => {
        this.articleCache.set(Object.values(this.articleParameters).join('-'), response)
        this.pagination = response;
        return response;
      })
    )
  }

  getTreePathNodes(treePaths: string[],tags: Tag[]): TreeNode[] {
    this.tagsDict = tags.reduce((dict, tag) => {
      dict[tag.name] = tag.id;
      return dict;
    }, {} as { [key: string]: number });
    const rootNode: TreeNode = {
      label: 'root',
      data: 0,
      children: []
    };

    for (const path of treePaths) {
      //const pathParts = path.split('/');For MacOS
      const pathParts = path.split('\\');
      let currentSubTree = rootNode;

      for (let part of pathParts) {
        part = part.replace('.md','')
        let childNode = currentSubTree.children?.find(child => child.label === part);
        let dataNode = this.tagsDict[part] ?? part;
        if (!childNode) {
          childNode = {
            label: part,
            data: dataNode,
            children: []
          };
          if (!currentSubTree.children) {
            currentSubTree.children = [];
          }
          currentSubTree.children.push(childNode);
        }

        currentSubTree = childNode;
      }
    }
    return rootNode.children || [];
    }

  getArticle(id: number) {
    const article = [...this.articleCache.values()]
      .reduce((acc, paginatedResult) => {
        return {...acc, ...paginatedResult.data.find(x => x.id === id)}
      }, {} as ArticleEntity)

    if (Object.keys(article).length !== 0) return of(article);
    return this.http.get<ArticleEntity>(this.baseUrl + this.academyControllerUrl + id);
  }

  getArticleByName(name: string) {
    const article = [...this.articleCache.values()]
      .reduce((acc, paginatedResult) => {
        return {...acc, ...paginatedResult.data.find(x => x.name === name)}
      }, {} as ArticleEntity)

    if (Object.keys(article).length !== 0) return of(article);
    return this.http.get<ArticleEntity>(this.baseUrl + this.academyControllerUrl +"HashId/" + name);
  }

  getTechnologies() : Observable<Technology[]> {
    if (this.technologies.length > 0) return of(this.technologies);
    return this.http.get<Technology[]>(this.baseUrl + this.technologiesControllerUrl).pipe(
      map(technologies => this.technologies = technologies)
    );
  }

  getTags() : Observable<Tag[]> {
    if (this.tags.length > 0) return of(this.tags);
    return this.http.get<Tag[]>(this.baseUrl + this.tagsControllerUrl).pipe(
      map(tags => this.tags = tags)
    );
  }

  setTags(article: ArticleEntity) : void {
    let parts = article.treePath.split('\\');
    if (parts[parts.length - 1].endsWith('.md')) {
      parts.pop();
    }
    article.tags = parts;
  }
  getPaths() : Observable<string[]> {
    if (this.paths.length > 0) return of(this.paths);
    return this.http.get<string[]>(this.baseUrl + this.pathsControllerUrl).pipe(
      map(paths => this.paths = paths)
    );
  }
}
