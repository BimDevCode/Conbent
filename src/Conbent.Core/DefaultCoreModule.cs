using Autofac;
using Conbent.Core.Interfaces;
using Conbent.Core.Services;

namespace Conbent.Core
{
  public class DefaultCoreModule : Module
  {
    protected override void Load(ContainerBuilder builder)
    {
      builder.RegisterType<ToDoItemSearchService>()
          .As<IToDoItemSearchService>().InstancePerLifetimeScope();
    }
  }
}