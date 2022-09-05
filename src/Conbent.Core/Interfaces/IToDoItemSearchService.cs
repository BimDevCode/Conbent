using Ardalis.Result;
using Conbent.Core.ProjectAggregate;

namespace Conbent.Core.Interfaces
{
  public interface IToDoItemSearchService
  {
    Task<Result<ToDoItem>> GetNextIncompleteItemAsync(int projectId);
    Task<Result<List<ToDoItem>>> GetAllIncompleteItemsAsync(int projectId, string searchString);
  }
}