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
  baseUrl = environment.apiUrl;
  articleEntities: ArticleEntity[] = [];
  technologies: Technology[] = [];
  tags: Tag[] = [];
  pagination?: Pagination<ArticleEntity[]>;
  articleParameters = new ArticleSpecParams();
  productCache = new Map<string, Pagination<ArticleEntity[]>>();

  constructor(private http: HttpClient) { }

  setShopParams(params: ArticleSpecParams) {
    this.articleParameters = params;
  }

  getArticleParameters(): any {
    return this.articleParameters;
  }

  getArticleEntities(useCache = true): Observable<Pagination<ArticleEntity[]>> {

    if (!useCache) this.productCache = new Map();

    if (this.productCache.size > 0 && useCache) {
      if (this.productCache.has(Object.values(this.articleParameters).join('-'))) {
        this.pagination = this.productCache.get(Object.values(this.articleParameters).join('-'));
        if(this.pagination)
          return of(this.pagination);
      }
    }

    let params = new HttpParams();

    if (this.articleParameters.technologyId > 0) params = params.append('technologyId', this.articleParameters.technologyId);
    //TODO: Add tag
    //if (this.articleParameters.tag) params = params.append('typeId', this.articleParameters.tag);
    params = params.append('sort', this.articleParameters.sort);
    params = params.append('pageIndex', this.articleParameters.pageIndex);
    params = params.append('pageSize', this.articleParameters.pageSize);
    if (this.articleParameters.search) params = params.append('search', this.articleParameters.search);

    return this.http.get<Pagination<ArticleEntity[]>>(this.baseUrl + 'products', {params}).pipe(
      map(response => {
        this.productCache.set(Object.values(this.articleParameters).join('-'), response)
        this.pagination = response;
        return response;
      })
    )
  }
  getProduct(id: number) {
    const product = [...this.productCache.values()]
      .reduce((acc, paginatedResult) => {
        return {...acc, ...paginatedResult.data.find(x => x.id === id)}
      }, {} as ArticleEntity)

    if (Object.keys(product).length !== 0) return of(product);

    return this.http.get<ArticleEntity>(this.baseUrl + 'products/' + id);
  }

  getTechnologies() {
    if (this.brands.length > 0) return of(this.brands);

    return this.http.get<Brand[]>(this.baseUrl + 'products/brands').pipe(
      map(brands => this.brands = brands)
    );
  }


}
