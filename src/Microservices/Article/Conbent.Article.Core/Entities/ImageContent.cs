using System.ComponentModel.DataAnnotations.Schema;
using Conbent.Article.Core.Entities.Contractors;

namespace Conbent.Article.Core.Entities;
public class ImageContent : BaseEntity
{
    [Column(TypeName = "bytea")]
    public required byte[] ContentBytes { get; set; }
    public required ArticleEntity Article { get; set; }
    public required int ArticleId { get; set; }

    public string? Description { get; set; }
    public string? MimeType { get; set; }
    public string? Size { get; set; }
}
