using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;

namespace WebApi.Framework.Repository
{
    public abstract class Repository : IDisposable
    {
        protected OAuthContext _context;
        protected UserManager<IdentityUser> _userManager;

        public Repository()
        {
            _context = new OAuthContext();
            _userManager = new UserManager<IdentityUser>(new UserStore<IdentityUser>(_context));
        }

        public void Dispose()
        {
            _context.Dispose();
            _userManager.Dispose();
        }
    }
}