using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace WebApi.Migrations
{
    /// <inheritdoc />
    public partial class fixError : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3bb8ee90-1d2d-4fd9-95c4-8442c23028dc");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "74ab0872-96c6-4cfa-8af2-3e13821a18bb");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "532c4d93-556e-4d9c-9b8f-26ab81db2c27", null, "Admin", "ADMIN" },
                    { "a9202caa-1cd2-418e-a01a-5cb190949d83", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "532c4d93-556e-4d9c-9b8f-26ab81db2c27");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a9202caa-1cd2-418e-a01a-5cb190949d83");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "3bb8ee90-1d2d-4fd9-95c4-8442c23028dc", null, "User", "USER" },
                    { "74ab0872-96c6-4cfa-8af2-3e13821a18bb", null, "Admin", "ADMIN" }
                });
        }
    }
}
