namespace Infrastructure.Entities.EntityInterface;

public interface IEntity
{
    Guid Id { get; set; }
    bool IsActive { get; set; }
    //ToDo - devide interfaces !!!! 
    DateTime CreatedDateTime { get; set; } 
    DateTime UpdateDateTime { get; set; }
    Guid? UserCreatedGuid { get; set; }
    Guid? UserUpdatedGuid { get; set; }
}