
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Policy;
using WebUi.Models.EntityInterface;

namespace WebUi.Models.EntityImplementation;

[Table("Content")]
[Index(nameof(Name), IsUnique = true)]
public class Article : BaseEntity
{
    [Column("Name_of_article", Order = 1)]
    public string Name { get; set; }//https://www.npgsql.org/doc/types/basic.html

    public string Path { get; set; } = String.Empty;
    public string IntroTextPart { get; set; } = String.Empty;
    public string IntroCodePart { get; set; } = String.Empty;

    public string BodyTextPart { get; set; } = String.Empty;
    public string BodyCodePart { get; set; } = String.Empty;

    public string ConclusionTextPart { get; set; } = String.Empty;

    public string HttpRefs1 { get; set; } = String.Empty;
    public string HttpRefs2 { get; set; } = String.Empty;
    public string PicHttpRefs1 { get; set; } = String.Empty;
    public string PicHttpRefs2 { get; set; } = String.Empty;
}