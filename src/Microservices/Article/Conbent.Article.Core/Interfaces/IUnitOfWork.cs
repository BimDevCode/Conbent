using Conbent.Article.Core.Entities.Contractors;
using Conbent.Article.Core.Interfaces.Contractors;

namespace Conbent.Article.Core.Interfaces;

public interface IUnitOfWork : IDisposable
{
    IGenericRepository<TEntity>? Repository<TEntity>() where TEntity : BaseEntity;
    Task<int> Complete();
}