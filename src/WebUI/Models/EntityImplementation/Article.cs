
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
    public string Content { get; set; }
    public string HttpRefs { get; set; }
}