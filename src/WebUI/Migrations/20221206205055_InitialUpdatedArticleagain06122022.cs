using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebUi.Migrations
{
    public partial class InitialUpdatedArticleagain06122022 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Content",
                columns: table => new
                {
                    Name_of_article = table.Column<string>(type: "text", nullable: false),
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Path = table.Column<string>(type: "text", nullable: false),
                    IntroTextPart = table.Column<string>(type: "text", nullable: false),
                    IntroCodePart = table.Column<string>(type: "text", nullable: false),
                    BodyTextPart = table.Column<string>(type: "text", nullable: false),
                    BodyCodePart = table.Column<string>(type: "text", nullable: false),
                    ConclusionTextPart = table.Column<string>(type: "text", nullable: false),
                    HttpRefs1 = table.Column<string>(type: "text", nullable: false),
                    HttpRefs2 = table.Column<string>(type: "text", nullable: false),
                    PicHttpRefs1 = table.Column<string>(type: "text", nullable: false),
                    PicHttpRefs2 = table.Column<string>(type: "text", nullable: false),
                    IsActive = table.Column<bool>(type: "boolean", nullable: false),
                    CreatedDateTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    UpdateDateTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    UserCreatedGuid = table.Column<Guid>(type: "uuid", nullable: true),
                    UserUpdatedGuid = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Content", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Content_Name_of_article",
                table: "Content",
                column: "Name_of_article",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Content");
        }
    }
}
