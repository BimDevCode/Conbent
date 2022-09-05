using Conbent.Core.Interfaces;
using Conbent.Core.ProjectAggregate;
using Conbent.Core.ProjectAggregate.Events;
using Conbent.Core.ProjectAggregate.Handlers;
using Moq;
using Xunit;

namespace Conbent.UnitTests.Core.Handlers
{
  public class ItemCompletedEmailNotificationHandlerHandle
  {
    private ItemCompletedEmailNotificationHandler _handler;
    private Mock<IEmailSender> _emailSenderMock;

    public ItemCompletedEmailNotificationHandlerHandle()
    {
      _emailSenderMock = new Mock<IEmailSender>();
      _handler = new ItemCompletedEmailNotificationHandler(_emailSenderMock.Object);
    }

    [Fact]
    public async Task ThrowsExceptionGivenNullEventArgument()
    {
#nullable disable
      Exception ex = await Assert.ThrowsAsync<ArgumentNullException>(() => _handler.Handle(null, CancellationToken.None));
#nullable enable
    }

    [Fact]
    public async Task SendsEmailGivenEventInstance()
    {
      await _handler.Handle(new ToDoItemCompletedEvent(new ToDoItem()), CancellationToken.None);

      _emailSenderMock.Verify(sender => sender.SendEmailAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>()), Times.Once);
    }
  }
}