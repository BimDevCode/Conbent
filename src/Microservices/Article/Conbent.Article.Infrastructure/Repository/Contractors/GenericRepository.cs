using System.Linq.Expressions;
using Conbent.Article.Core.Entities.Contractors;
using Conbent.Article.Core.Interfaces.Contractors;
using Conbent.Article.Core.Specifications.Contractors;
using Conbent.Article.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;


namespace Conbent.Article.Infrastructure.Repository.Contractors;
public class GenericRepository<T>(ArticleContext context) : IGenericRepository<T> where T : BaseEntity
{

    public void Add(T entity)
    {
        context.Set<T>().Add(entity);
    }
    public async Task<IEnumerable<TProperty>?> GetAllPropertyAsync<TProperty>(Expression<Func<T, TProperty>>? predicate)
    {
        if (predicate is null) throw new Exception("Cant use predicate");
        return await context.Set<T>().Select(predicate).ToListAsync();
    }

    public async Task<int> CountAsync(ISpecification<T> spec)
    {
        return await ApplySpecification(spec).CountAsync();
    }

    public void Delete(T entity)
    {
        context.Set<T>().Remove(entity);
    }

    public async Task<T?> GetByIdAsync(int id, List<Expression<Func<T, object>>>? includes = null)
    {
        if (includes is null) return await context.Set<T>().FindAsync(id);
        var query = context.Set<T>().AsQueryable();
        query = includes.Aggregate(query, (current, include) => current.Include(include));
        return await query.FirstOrDefaultAsync(x => x.Id == id);

    }

    public async Task<T?> GetByHashNameAsync(string hashId, List<Expression<Func<T, object>>>? includes = null)
    {
        if (includes is null) return await context.Set<T>().FirstOrDefaultAsync(x => x.HashId == hashId);
        var query = context.Set<T>().AsQueryable();
        query = includes.Aggregate(query, (current, include) => current.Include(include));
        return await query.FirstOrDefaultAsync(x => x.HashId == hashId);
    }

    public async Task<T?> GetEntityWithSpec(ISpecification<T> spec)
    {
        return await ApplySpecification(spec).FirstOrDefaultAsync();
    }

    public async Task<IReadOnlyList<T>> ListAllAsync()
    {
        return await context.Set<T>().ToListAsync();
    }

    public async Task<IReadOnlyList<T?>> ListAsync(ISpecification<T> spec)
    {
        return await ApplySpecification(spec).ToListAsync();
    }

    public void Update(T entity)
    {
        context.Set<T>().Attach(entity);
        context.Entry(entity).State = EntityState.Modified;
    }

    private IQueryable<T?> ApplySpecification(ISpecification<T> spec)
    {
        return SpecificationEvaluator<T>.GetQuery(context.Set<T>().AsQueryable(), spec);
    }

    
}
