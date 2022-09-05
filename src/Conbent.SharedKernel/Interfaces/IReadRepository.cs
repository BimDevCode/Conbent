using Ardalis.Specification;

namespace Conbent.SharedKernel.Interfaces
{
  public interface IReadRepository<T> : IReadRepositoryBase<T> where T : class, IAggregateRoot
  {
  }
}