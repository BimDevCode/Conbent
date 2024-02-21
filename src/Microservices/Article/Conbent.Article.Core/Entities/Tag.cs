using Conbent.Article.Core.Entities.Contractors;

namespace Conbent.Article.Core.Entities;
public class Tag : BaseEntity
{
    public string? Description { get; set; }
    public required ICollection<ArticleEntity> Articles { get; set; }
}
