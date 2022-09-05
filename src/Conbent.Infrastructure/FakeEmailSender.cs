using Conbent.Core.Interfaces;

namespace Conbent.Infrastructure
{
  public class FakeEmailSender : IEmailSender
  {
    public Task SendEmailAsync(string to, string from, string subject, string body)
    {
      return Task.CompletedTask;
    }
  }
}