using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Conbent.Article.Infrastructure.ArticlesMigration
{
    /// <inheritdoc />
    public partial class ChangeTextContent : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsCode",
                table: "TextContents",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsHighlighted",
                table: "TextContents",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsCode",
                table: "TextContents");

            migrationBuilder.DropColumn(
                name: "IsHighlighted",
                table: "TextContents");
        }
    }
}
