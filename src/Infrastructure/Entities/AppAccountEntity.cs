using System;
using System.Data;
using Infrastructure.Entities.EntityInterface;

namespace Infrastructure.Entities;

public class AppAccountEntity : BaseEntity
{
    public string Name { get; set; }
    public string Surname { get; set; }
    public DateTime RegDateTime { get; set; }
    public string Phone { get; set; }
}