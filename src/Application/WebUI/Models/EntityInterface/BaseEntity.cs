using System.ComponentModel.DataAnnotations;

namespace WebUi.Models.EntityInterface;

public class BaseEntity : IEntity
{
    [Key]
    public Guid Id { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime CreatedDateTime { get; set; } = DateTime.Now;
    public DateTime UpdateDateTime { get; set; } = DateTime.Now;
    public Guid? UserCreatedGuid { get; set; } = Guid.NewGuid();//Test
    public Guid? UserUpdatedGuid { get; set; } = Guid.NewGuid();//Test

    public static string ToStringUtc( DateTime time)
    {
        return $"DateTime({time.Ticks}, DateTimeKind.Utc)";
    }
}