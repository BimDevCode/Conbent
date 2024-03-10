using Conbent.Article.Core.Entities.Contractors;
using Conbent.Article.Core.Specifications.Contractors;
using System.Linq.Expressions;

namespace Conbent.Article.Core.Interfaces.Contractors;

public interface IGenericRepository<T> where T : BaseEntity
{
    Task<T?> GetByIdAsync(int id, List<Expression<Func<T, object>>>? includes = null);
    Task<T?> GetByHashNameAsync(string hashId, List<Expression<Func<T, object>>>? includes = null);
    Task<IReadOnlyList<T>> ListAllAsync();
    Task<T?> GetEntityWithSpec(ISpecification<T> spec);
    Task<IReadOnlyList<T?>> ListAsync(ISpecification<T> spec);
    Task<IEnumerable<TProperty>?> GetAllPropertyAsync<TProperty>(Expression<Func<T, TProperty>>? predicate);
    Task<int> CountAsync(ISpecification<T> spec);
    void Add(T entity);
    void Update(T entity);
    void Delete(T entity);
}
