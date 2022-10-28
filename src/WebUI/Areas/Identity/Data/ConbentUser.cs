using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace WebUi.Areas.Identity.Data;

// Add profile data for application users by adding properties to the ConbentUser class
public class ConbentUser : IdentityUser
{
    [PersonalData]
    [Column(TypeName = "nvarchar(100)")]
    public string? Name { get; set; }

    [PersonalData]
    [Column(TypeName = "nvarchar(100)")]
    public string? Surname { get; set; }

    [PersonalData]
    public int? Age { get; set; }

}