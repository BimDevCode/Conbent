using System.Linq.Expressions;
using Infrastructure.Entities.EntityInterface;

namespace Infrastructure.Repositories;

public class DbRepository : IDbRepository
{

    public IQueryable<T> Get<T>(Expression<Func<T, bool>> selector) where T : class, IEntity
    {
        throw new NotImplementedException();
    }

    public IQueryable<T> Get<T>() where T : class, IEntity
    {
        throw new NotImplementedException();
    }

    public IQueryable<T> GetAll<T>() where T : class, IEntity
    {
        throw new NotImplementedException();
    }

    public async Task<Guid> Add<T>(T newEntity) where T : class, IEntity
    {
        throw new NotImplementedException();
    }

    public async Task AddRange<T>(IEnumerable<T> newEntity) where T : class, IEntity
    {
        throw new NotImplementedException();
    }

    public async Task Delete<T>(Guid guid) where T : class, IEntity
    {
        throw new NotImplementedException();
        //await Task.Run(() => _context.Set<T>().Delete(guid));
    }

    public async Task Remove<T>(Guid entity) where T : class, IEntity
    {
        throw new NotImplementedException();
    }

    public async Task RemoveRange<T>(IEnumerable<T> entities) where T : class, IEntity
    {
        throw new NotImplementedException();
    }

    public async Task Update<T>(T entity) where T : class, IEntity
    {
        throw new NotImplementedException();
    }

    public async Task UpdateRange<T>(IEnumerable<T> entity) where T : class, IEntity
    {
        throw new NotImplementedException();
    }

    public async Task<int> SaveChangesAsync()
    {
        throw new NotImplementedException();
    }
}