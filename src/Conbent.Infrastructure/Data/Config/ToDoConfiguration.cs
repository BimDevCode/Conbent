using Conbent.Core.ProjectAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Conbent.Infrastructure.Data.Config
{
  public class ToDoConfiguration : IEntityTypeConfiguration<ToDoItem>
  {
    public void Configure(EntityTypeBuilder<ToDoItem> builder)
    {
      builder.Property(t => t.Title)
          .IsRequired();
    }
  }
}