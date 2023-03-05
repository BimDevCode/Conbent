﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using WebUi.Models;

#nullable disable

namespace WebUi.Migrations
{
    [DbContext(typeof(ContentDbContext))]
    partial class ContentDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("WebUi.Models.EntityImplementation.Article", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("BodyCodePart")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("BodyTextPart")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ConclusionTextPart")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedDateTime")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("HttpRefs1")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("HttpRefs2")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("IntroCodePart")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("IntroTextPart")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<bool>("IsActive")
                        .HasColumnType("boolean");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("Name_of_article")
                        .HasColumnOrder(1);

                    b.Property<string>("Path")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("PicHttpRefs1")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("PicHttpRefs2")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("UpdateDateTime")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid?>("UserCreatedGuid")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("UserUpdatedGuid")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("Name")
                        .IsUnique();

                    b.ToTable("Content");
                });
#pragma warning restore 612, 618
        }
    }
}