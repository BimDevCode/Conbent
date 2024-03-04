import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ArticleEntity } from '../../core/models/articleEntity';
import { Technology } from '../../core/models/technology';
import { Tag } from '../../core/models/tag';
import { Pagination } from '../../core/models-shared/pagination';
import { ArticleSpecParams } from '../../core/models/articleSpecParams';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcademyService {
  readonly academyControllerUrl = 'articles';
  readonly tagsControllerUrl = this.academyControllerUrl + '/tags';
  readonly technologiesControllerUrl = this.academyControllerUrl + '/technologies';

  baseUrl = environment.apiUrl;
  articleEntities: ArticleEntity[] = [];
  technologies: Technology[] = [];
  tags: Tag[] = [];
  pagination?: Pagination<ArticleEntity[]>;
  articleParameters = new ArticleSpecParams();
  articleCache = new Map<string, Pagination<ArticleEntity[]>>();

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
    //TODO: Add tag
    //if (this.articleParameters.tag) params = params.append('typeId', this.articleParameters.tag);
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
  getArticle(id: number) {
    const article = [...this.articleCache.values()]
      .reduce((acc, paginatedResult) => {
        return {...acc, ...paginatedResult.data.find(x => x.id === id)}
      }, {} as ArticleEntity)

    if (Object.keys(article).length !== 0) return of(article);
    return this.http.get<ArticleEntity>(this.baseUrl + this.academyControllerUrl + id);
  }

  getTechnologies() {
    if (this.technologies.length > 0) return of(this.technologies);
    return this.http.get<Technology[]>(this.baseUrl + this.technologiesControllerUrl).pipe(
      map(technologies => this.technologies = technologies)
    );
  }

  getTags() {
    if (this.tags.length > 0) return of(this.tags);
    return this.http.get<Tag[]>(this.baseUrl + this.tagsControllerUrl).pipe(
      map(tags => this.technologies = tags)
    );
  }

}
