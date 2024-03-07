using Conbent.Article.Core.Entities;
using Conbent.Article.Core.Specifications.Contractors;
namespace Conbent.Article.Core.Specifications;

public class ArticlesWithTechnologySpecification : BaseSpecification<ArticleEntity>
{
    public ArticlesWithTechnologySpecification(ArticleSpecParams articleParams)
        : base(x =>
        (string.IsNullOrEmpty(articleParams.Search) || x.Name.Contains(articleParams.Search, StringComparison.CurrentCultureIgnoreCase)) &&
        (!articleParams.TechnologyId.HasValue || x.TechnologyId == articleParams.TechnologyId) && 
        (!articleParams.TagId.HasValue || (x.Tags!.FirstOrDefault(a => a.Id == articleParams.TagId) != null))
        )
    {
        AddInclude(x => x.Technology);
        AddInclude(x => x.Texts!);
        AddInclude(x => x.Tags!);
        AddOrderBy(x => x.Name);
        ApplyPaging(articleParams.PageSize * (articleParams.PageIndex - 1), articleParams.PageSize);

        if (string.IsNullOrEmpty(articleParams.Sort)) return;
        switch (articleParams.Sort)
        {
            case "priceAsc":
                AddOrderBy(p => p.RelevantScore);
                break;
            case "priceDesc":
                AddOrderByDescending(p => p.RelevantScore);
                break;
            default:
                AddOrderBy(n => n.Name);
                break;
        }
    }

    public ArticlesWithTechnologySpecification(int id) : base(x => x.Id == id)
    {
        AddInclude(x => x.Technology);
    }
}
