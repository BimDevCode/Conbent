using Conbent.Article.Core.Entities.Contractors;

namespace Conbent.Article.Core.Entities;

 public class TextContent : BaseEntity
 {
     public required string Content { get; set; }
     public required ArticleEntity Article { get; set; }
     public required int ArticleId { get; set; }
 }
