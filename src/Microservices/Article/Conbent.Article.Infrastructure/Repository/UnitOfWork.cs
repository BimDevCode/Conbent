using System.Collections;
using Conbent.Article.Core.Entities.Contractors;
using Conbent.Article.Core.Interfaces;
using Conbent.Article.Core.Interfaces.Contractors;
using Conbent.Article.Infrastructure.Context;
using Conbent.Article.Infrastructure.Repository.Contractors;
using Microsoft.EntityFrameworkCore;

namespace Conbent.Article.Infrastructure.Repository;
public class UnitOfWork : IUnitOfWork
{
    private Hashtable? _repositories;
    private readonly DbContext _context;

    public UnitOfWork(ArticleContext context)
    {
        _context = context;
    }
    public async Task<int> Complete()
    {
        return await _context.SaveChangesAsync();
    }

    public void Dispose()
    {
        _context.Dispose();
    }

    public IGenericRepository<TEntity>? Repository<TEntity>() where TEntity : BaseEntity
    {
        _repositories ??= new();

        var type = typeof(TEntity).Name;

        if (!_repositories.ContainsKey(type))
        {
            var repositoryType = typeof(GenericRepository<>);
            var repositoryInstance = Activator.CreateInstance(repositoryType.MakeGenericType(typeof(TEntity)), _context);

            _repositories.Add(type, repositoryInstance);
        }
        var repository = _repositories[type] as IGenericRepository<TEntity>;
        return repository;
    }
}
