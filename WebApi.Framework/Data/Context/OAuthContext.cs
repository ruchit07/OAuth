using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;
using WebApi.Framework.Entities;

namespace WebApi.Framework
{
    public class OAuthContext : IdentityDbContext<IdentityUser>
    {
        public OAuthContext()
           : base("OAuthContext")
        {

        }

        public DbSet<Client> Clients { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }
    }
}