using System.ComponentModel.DataAnnotations;

namespace InspectionAPI.Models
{
  public class InspectionType
  {
    public Guid Id { get; set; }
    [StringLength(20)]
    public string InspectionName { get; set; } = String.Empty;
    public IEnumerable<Inspection>? Inspections { get; set; }
  }
}
