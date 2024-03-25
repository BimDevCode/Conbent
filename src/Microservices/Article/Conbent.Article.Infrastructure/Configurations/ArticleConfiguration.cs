using Conbent.Article.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Conbent.Article.Infrastructure.Configurations;
public class ArticleConfiguration : IEntityTypeConfiguration<ArticleEntity>
{
    private const string ArticlesTagTableName = "ArticlesTags";
    public void Configure(EntityTypeBuilder<ArticleEntity> builder)
    {
        builder.Property(p => p.Id).IsRequired();
        builder.Property(p => p.Name).IsRequired().HasMaxLength(100);
        builder.Property(p => p.HashId).IsRequired();
        builder.Property(p => p.RelevantScore).HasColumnType("decimal(18,2)");

        builder.HasOne(p => p.Technology)
            .WithMany()
            .HasForeignKey(p => p.TechnologyId);

        builder.HasOne(p => p.Author)
            .WithMany()
            .HasForeignKey(p => p.AuthorId);

        builder.HasMany(p => p.Tags)
            .WithMany(t=>t.Articles)
            .UsingEntity(e => e.ToTable(ArticlesTagTableName));

        builder.HasMany(p => p.Images)
            .WithOne(e => e.Article)
            .HasForeignKey(f => f.ArticleId);

        builder.HasMany(p => p.Texts)
            .WithOne(e => e.Article)
            .HasForeignKey(f => f.ArticleId);
    }
}
