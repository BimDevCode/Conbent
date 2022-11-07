
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace WebUi.Models;

// Add profile data for application users by adding properties to the ConbentUser class
public class ConbentUser : IdentityUser
{
    public string? PersonDescribeEstimation { get; set; } = "Default Describe";
}