using System.Linq.Expressions;
using Infrastructure.Entities.EntityInterface;

namespace Infrastructure.Repositories;

public interface IDbRepository
{
    IQueryable<T> Get<T>(Expression<Func<T, bool>> selector) where T : class, IEntity;
    IQueryable<T> Get<T>() where T : class, IEntity;
    IQueryable<T> GetAll<T>() where T : class, IEntity;

    Task<Guid> Add<T>(T newEntity) where T : class, IEntity;
    Task AddRange<T>(IEnumerable<T> newEntity) where T : class, IEntity;

    Task Delete<T>(Guid guid) where T : class, IEntity;

    Task Remove<T>(Guid entity) where T : class, IEntity;
    Task RemoveRange<T>(IEnumerable<T> entities) where T : class, IEntity;

    Task Update<T>(T entity) where T : class, IEntity;
    Task UpdateRange<T>(IEnumerable<T> entity) where T : class, IEntity;

    Task<int> SaveChangesAsync();

}