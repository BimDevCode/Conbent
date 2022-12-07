using System.Net.Mime;
using WebUi.Models.EntityImplementation;

namespace WebUi.Models.Contents;
public class FirstArticle: Article
{
    public FirstArticle() : base()
    {
        this.Name = "First seed article!!";
        this.IntroCodePart = "This article create as a respect to web site metainit proffessionweb" +
                       "My final targe is a multi configured platform for Bim engineer communacions";
        this.HttpRefs1 = "https://metanit.com/sharp/";

        this.CreatedDateTime = DateTime.Now.SetKindUtc();
        this.UpdateDateTime = DateTime.Now.SetKindUtc();
    }
}
