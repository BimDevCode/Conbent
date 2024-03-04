using Conbent.Article.Core.Entities.Contractors;

namespace Conbent.Article.Core.Entities;

public class ArticleEntity : BaseEntity
{
    public required decimal RelevantScore { get; set; }
    public required Technology Technology { get; set; }
    public int TechnologyId { get; set; }
    public string TreePath { get; set; } = string.Empty;
    public DateTime CreateDateTime { get; } = DateTime.Now.ToUniversalTime();
    public ICollection<Tag>? Tags { get; set; }
    public ICollection<TextContent>? Texts { get; set; }
    public ICollection<ImageContent>? Images { get; set; }

    //TODO: Implement Following Release Features
    //public string Path { get; set; }
    //public string Extension { get; set; }
    //public string MimeType { get; set; }
    //public string Size { get; set; }
    //public string Alt { get; set; }
    //public string Title { get; set; }
    //public string Caption { get; set; }
    //public string Credit { get; set; }
    //public string Source { get; set; }
    //public string Author { get; set; }
    //public string License { get; set; }
    //public string LicenseUrl { get; set; }
    //public string Tags { get; set; }
    //public string ArticleTypes { get; set; }
    //public string Categories { get; set; }
    //public string Status { get; set; }
    //public string CreatedBy { get; set; }
    //public string UpdatedBy { get; set; }
    //public DateTime CreatedAt { get; set; }
    //public DateTime UpdatedAt { get; set; }
    //public string DeletedBy { get; set; }
    //public DateTime DeletedAt { get; set; }
    //public string DeletedReason { get; set; }
    //public string DeletedStatus { get; set; }
    //public string Deleted { get; set; }
    //public string IsDeleted { get; set; }
    //public string IsPublished { get; set; }
    //public string IsDraft { get; set; }
    //public string IsPending { get; set; }
    //public string IsApproved { get; set; }
    //public string IsRejected { get; set; }
    //public string IsSpam { get; set; }
    //public string IsTrash { get; set; }
    //public string IsArchived { get; set; }
    //public string IsFeatured { get; set; }
    //public string IsSponsored { get; set; }
    //public string IsPinned { get; set; }
    //public string IsPromoted { get; set; }
    //public string IsBoosted { get; set; }
    //public string IsTop { get; set; }
    //public string IsBreaking { get; set; }
    //public string IsPopular { get; set; }
    //public string IsTrending { get; set; }
}
