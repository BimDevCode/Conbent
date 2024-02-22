using System.Text;

namespace Conbent.Article.Infrastructure.Parser;

public static class MarkdownParser
{
    //TODO Change static
    public static IEnumerable<string> ParseToStringContent(this string filePath)
    {
        if (!File.Exists(filePath))
            throw new FileNotFoundException($"The file {filePath} does not exist.");
        var text = File.ReadAllText(filePath, Encoding.UTF8);
        //TODO add IsCodeBlock check
        //TODO Change list of strings to Span of Chars
        return new List<string>(){ text };
    }
}