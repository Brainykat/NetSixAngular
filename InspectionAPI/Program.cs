using InspectionAPI.Data;
using Microsoft.EntityFrameworkCore;

var myAllowSpecificOrigins = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//Add DBContext
builder.Services.AddDbContext<InspectionContext>(options =>
{
  options.UseSqlServer(builder.Configuration.GetConnectionString("InspectionDbConnection"));
});
//Enable Cors
builder.Services.AddCors(options =>
{
  options.AddPolicy(name: myAllowSpecificOrigins, builder =>
   {
     builder.WithOrigins("http://localhost:4200")
     .AllowAnyHeader()
     .AllowAnyMethod();
   });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();
//Use Cors
app.UseCors(myAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
