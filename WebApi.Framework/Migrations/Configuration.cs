using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using WebApi.Framework.Entities;
using WebApi.Framework.Enum;
using WebApi.OAuth.Helper;

namespace WebApi.Framework.Migrations
{
    public class Configuration : DbMigrationsConfiguration<OAuthContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(OAuthContext context)
        {
            if (context.Clients.Count() > 0)
            {
                return;
            }

            context.Clients.AddRange(BuildClientsList());
            context.SaveChanges();
        }

        private static List<Client> BuildClientsList()
        {
            List<Client> ClientsList = new List<Client>
            {
                new Client
                { 
                    ClientId = "WebApp",
                    Secret = Utility.GetHash("WebApp@123"),
                    Name = "Web App",
                    ApplicationType = ApplicationTypes.WebApp,
                    IsActive = true,
                    RefreshTokenLifeTime = 7200,
                    AllowedOrigin = "*",
                    CreatedOn = DateTime.UtcNow,
                    IsDeleted = false
                },
                new Client
                {
                    ClientId = "MobileApp",
                    Secret = Utility.GetHash("MobileApp@456"),
                    Name ="Console Application",
                    ApplicationType = ApplicationTypes.MobileApp,
                    IsActive = true,
                    RefreshTokenLifeTime = 14400,
                    AllowedOrigin = "*",
                    CreatedOn = DateTime.UtcNow,
                    IsDeleted = false
                }
            };

            return ClientsList;
        }
    }
}