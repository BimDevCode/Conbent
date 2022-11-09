using System.Net.Mime;
using WebUi.Models.EntityImplementation;

namespace WebUi.Models.Contents;
public class FirstArticle: Article
{
    public FirstArticle()
    {
        this.Name = "First seed article!!";
        this.Content = "This article create as a respect to web site metainit proffessionweb" +
                       "My final targe is a multi configured platform for Bim engineer communacions";
        this.HttpRefs = "https://metanit.com/sharp/";

        this.CreatedDateTime = DateTimeExtensions.SetKindUtc(DateTime.Now);
        this.UpdateDateTime = DateTimeExtensions.SetKindUtc(DateTime.Now);
    }
}
