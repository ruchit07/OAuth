using Microsoft.Owin.Security.Infrastructure;
using System;
using System.Threading.Tasks;
using WebApi.Framework.Entities;
using WebApi.Framework.Repository;
using WebApi.OAuth.Helper;

namespace WebApi.OAuth.Provider
{
    public class OAuthRefreshTokenProvider : IAuthenticationTokenProvider
    {
        public async Task CreateAsync(AuthenticationTokenCreateContext context)
        {
            var clientid = context.Ticket.Properties.Dictionary["ou:client_id"];

            if (string.IsNullOrEmpty(clientid))
            {
                return;
            }

            var refreshTokenId = Guid.NewGuid().ToString("n");

            using (RefreshTokenRepository _refreshTokenRepository = new RefreshTokenRepository())
            {
                var refreshTokenLifeTime = context.OwinContext.Get<string>("ou:clientRefreshTokenLifeTime");

                var token = new RefreshToken()
                {
                    RefreshTokenId = Utility.GetHash(refreshTokenId),
                    ClientId = clientid,
                    Subject = context.Ticket.Identity.Name,
                    IssuedOn = DateTime.UtcNow,
                    ExpiresOn = DateTime.UtcNow.AddMinutes(Convert.ToDouble(refreshTokenLifeTime))
                };

                context.Ticket.Properties.IssuedUtc = token.IssuedOn;
                context.Ticket.Properties.ExpiresUtc = token.ExpiresOn;
                token.ProtectedTicket = context.SerializeTicket();

                var result = await _refreshTokenRepository.AddRefreshToken(token);
                if (result)
                {
                    context.SetToken(refreshTokenId);
                }
            }
        }

        public async Task ReceiveAsync(AuthenticationTokenReceiveContext context)
        {
            var allowedOrigin = context.OwinContext.Get<string>("ou:clientAllowedOrigin");
            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { allowedOrigin });

            string hashedTokenId = Utility.GetHash(context.Token);
            using (RefreshTokenRepository _refreshTokenRepository = new RefreshTokenRepository())
            {
                var refreshToken = await _refreshTokenRepository.FindRefreshToken(hashedTokenId);
                if (refreshToken != null)
                {
                    context.DeserializeTicket(refreshToken.ProtectedTicket);
                    await _refreshTokenRepository.RemoveRefreshToken(hashedTokenId);
                }
            }
        }

        public void Create(AuthenticationTokenCreateContext context)
        {
            CreateAsync(context);
        }

        public void Receive(AuthenticationTokenReceiveContext context)
        {
            ReceiveAsync(context);
        }
    }
}