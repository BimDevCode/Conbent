using Ardalis.Specification;

namespace Conbent.Core.ProjectAggregate.Specifications
{
  public class IncompleteItemsSpec : Specification<ToDoItem>
  {
    public IncompleteItemsSpec()
    {
      Query.Where(item => !item.IsDone);
    }
  }
}