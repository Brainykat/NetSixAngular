using System.ComponentModel.DataAnnotations;

namespace InspectionAPI.Models
{
  public class Inspection
  {
    public Guid Id { get; set; }
    [StringLength(20)]
    public string Status { get; set; } = string.Empty;
    [StringLength(200)]
    public string Comments { get; set; } = string.Empty;
    public Guid InspectionTypeId { get; set; }
    public InspectionType? InspectionType { get; set; }
  }
}
