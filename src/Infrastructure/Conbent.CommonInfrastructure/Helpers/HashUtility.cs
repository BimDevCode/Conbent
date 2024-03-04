using System.Security.Cryptography;
using System.Text;

namespace Conbent.CommonInfrastructure.Helpers;
public static class HashUtility
{
    public static string ComputeSha256Hash(this string input)
    {
        //TODO: Change to span<char>
        using SHA256 sha256Hash = SHA256.Create();
        // ComputeHash - returns byte array
        var bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(input));
        // Convert byte array to a string
        var builder = new StringBuilder();
        foreach (var @byte in bytes)
            builder.Append(@byte.ToString("x2"));
        return builder.ToString();
    }
}