using Conbent.Article.Core.Entities;
using Conbent.Article.Core.Specifications.Contractors;

namespace Conbent.Article.Core.Specifications;

public class ArticlesWithFiltersForCountSpecification(ArticleSpecParams articleParams)
    : BaseSpecification<ArticleEntity>(x =>
        (string.IsNullOrEmpty(articleParams.Search) || x.Name.ToLower().Contains(articleParams.Search)) &&
        (!articleParams.TechnologyId.HasValue || x.TechnologyId == articleParams.TechnologyId));
