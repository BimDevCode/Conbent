using Infrastructure.Entities.EntityInterface;

namespace Infrastructure.Entities.EntityImplementation;

public class AccountCreditional : BaseEntity
{
    public Guid Id { get; set; }
    public string Login { get; set; }
    public string HashedPassword { get; set; }
}