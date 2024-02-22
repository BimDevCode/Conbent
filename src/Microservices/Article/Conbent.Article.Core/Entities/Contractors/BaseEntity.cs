namespace Conbent.Article.Core.Entities.Contractors;
public class BaseEntity
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string HashId { get; set; }
}
