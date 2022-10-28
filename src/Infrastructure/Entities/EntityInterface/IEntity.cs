namespace Infrastructure.Entities.EntityInterface;

public interface IEntity
{
    Guid Id { get; set; }
    bool IsActive { get; set; }
    //To Do - devide interfaces !!!! 
    DateTime CreatedDateTime { get; set; }
    DateTime UpdateDateTime { get; set; }
    Guid? UserCreatedGuid { get; set; }
    Guid? UserUpdatedGuid { get; set; }
}