using System.ComponentModel.DataAnnotations;

namespace WebUi.Models;

public class AdditionalConbentUserData
{
    public string? AdditionalDescribe{ get; set; }
    [Key]
    public Guid ? UserId { get; set; }
}