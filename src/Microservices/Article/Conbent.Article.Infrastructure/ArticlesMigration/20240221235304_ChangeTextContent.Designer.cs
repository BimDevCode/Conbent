﻿// <auto-generated />
using Conbent.Article.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Conbent.Article.Infrastructure.ArticlesMigration
{
    [DbContext(typeof(ArticleContext))]
    [Migration("20240221235304_ChangeTextContent")]
    partial class ChangeTextContent
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.0-preview.1.24081.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("ArticleEntityTag", b =>
                {
                    b.Property<int>("ArticlesId")
                        .HasColumnType("integer");

                    b.Property<int>("TagsId")
                        .HasColumnType("integer");

                    b.HasKey("ArticlesId", "TagsId");

                    b.HasIndex("TagsId");

                    b.ToTable("ArticlesTags", (string)null);
                });

            modelBuilder.Entity("Conbent.Article.Core.Entities.ArticleEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("HashId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("character varying(100)");

                    b.Property<decimal>("RelevantScore")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("TechnologyId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("TechnologyId");

                    b.ToTable("Articles");
                });

            modelBuilder.Entity("Conbent.Article.Core.Entities.ImageContent", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("ArticleId")
                        .HasColumnType("integer");

                    b.Property<byte[]>("ContentBytes")
                        .IsRequired()
                        .HasColumnType("bytea");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("HashId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("MimeType")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Size")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("ArticleId");

                    b.ToTable("ImageContents");
                });

            modelBuilder.Entity("Conbent.Article.Core.Entities.Tag", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("HashId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Tag");
                });

            modelBuilder.Entity("Conbent.Article.Core.Entities.Technology", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("HashId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Technologies");
                });

            modelBuilder.Entity("Conbent.Article.Core.Entities.TextContent", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("ArticleId")
                        .HasColumnType("integer");

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("HashId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<bool>("IsCode")
                        .HasColumnType("boolean");

                    b.Property<bool>("IsHighlighted")
                        .HasColumnType("boolean");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("ArticleId");

                    b.ToTable("TextContents");
                });

            modelBuilder.Entity("ArticleEntityTag", b =>
                {
                    b.HasOne("Conbent.Article.Core.Entities.ArticleEntity", null)
                        .WithMany()
                        .HasForeignKey("ArticlesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Conbent.Article.Core.Entities.Tag", null)
                        .WithMany()
                        .HasForeignKey("TagsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Conbent.Article.Core.Entities.ArticleEntity", b =>
                {
                    b.HasOne("Conbent.Article.Core.Entities.Technology", "Technology")
                        .WithMany()
                        .HasForeignKey("TechnologyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Technology");
                });

            modelBuilder.Entity("Conbent.Article.Core.Entities.ImageContent", b =>
                {
                    b.HasOne("Conbent.Article.Core.Entities.ArticleEntity", "Article")
                        .WithMany("Images")
                        .HasForeignKey("ArticleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Article");
                });

            modelBuilder.Entity("Conbent.Article.Core.Entities.TextContent", b =>
                {
                    b.HasOne("Conbent.Article.Core.Entities.ArticleEntity", "Article")
                        .WithMany("Texts")
                        .HasForeignKey("ArticleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Article");
                });

            modelBuilder.Entity("Conbent.Article.Core.Entities.ArticleEntity", b =>
                {
                    b.Navigation("Images");

                    b.Navigation("Texts");
                });
#pragma warning restore 612, 618
        }
    }
}
