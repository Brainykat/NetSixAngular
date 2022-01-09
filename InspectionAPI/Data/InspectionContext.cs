using InspectionAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace InspectionAPI.Data
{
  public class InspectionContext : DbContext
  {
    public InspectionContext(DbContextOptions<InspectionContext> options) : base(options){ }
    public DbSet<Inspection> Inspections { get; set; }
    public DbSet<InspectionType> InspectionTypes { get; set; }
    public DbSet<Status> Statuss { get; set; }
  }
}
