namespace Conbent.Article.API.DTOs;

public class ArticleDto
{
    public int Id { get; set; }
    public  string? Name { get; set; }
    public  string? HashId { get; set; }
    public  decimal RelevantScore { get; set; }
    public int TechnologyId { get; set; }
    public string? Tag { get; set; }
    public DateTime CreateDateTime { get; set; }
    public string? TreePath { get; set; } 
    public ICollection<string>? Texts { get; set; }
}