using Conbent.Article.Core.Entities.Contractors;

namespace Conbent.Article.Core.Entities;

 public class TextContent : BaseEntity
 {
     public bool IsCode { get; set; } = false;
     public bool IsHighlighted { get; set; } = false;
     public required string Content { get; set; } = string.Empty;
     public ArticleEntity? Article { get; set; } = null;
     public int ArticleId { get; set; }
 }
