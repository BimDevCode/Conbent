using System.Text;
using System.Xml.Linq;
using Conbent.Article.Core.Entities;
using Conbent.CommonInfrastructure.Helpers;
using Markdig;

namespace Conbent.Article.Infrastructure.Parser;

public static class MarkdownParser
{
    //TODO Change static
    public static IEnumerable<TextContent> ParseToStringContent(this string filePath)
    {
        if (!File.Exists(filePath))
            throw new FileNotFoundException($"The file {filePath} does not exist.");
        var text = File.ReadAllText(filePath, Encoding.UTF8);
        var htmlContent = Markdown.ToHtml(text);
        //TODO add IsCodeBlock check
        //TODO Change list of strings to Span of Chars
        var clearPath = Path.GetFileNameWithoutExtension(filePath);
        var textContents = new List<TextContent>()
        {
            new()
            {
                Name = clearPath,
                HashId = clearPath.ComputeSha256Hash(),
                Content = htmlContent,
            }
        };
        return textContents;
    }
}