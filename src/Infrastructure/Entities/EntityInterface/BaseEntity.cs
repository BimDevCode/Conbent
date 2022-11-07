using System.ComponentModel.DataAnnotations;

namespace Infrastructure.Entities.EntityInterface;

public class BaseEntity : IEntity
{
    [Key]
    public Guid Id { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime CreatedDateTime { get; set; } = DateTime.Now;
    public DateTime UpdateDateTime { get; set; }
    public Guid? UserCreatedGuid { get; set; }
    public Guid? UserUpdatedGuid { get; set; }
}