using Infrastructure.Entities.EntityInterface;

namespace Infrastructure.Entities.EntityImplementation;

public class BaseEntity : IEntity
{
    public Guid Id { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedDateTime { get; set; } 
    public DateTime UpdateDateTime { get; set; }
    public Guid? UserCreatedGuid { get; set; }
    public Guid? UserUpdatedGuid { get; set; }
}