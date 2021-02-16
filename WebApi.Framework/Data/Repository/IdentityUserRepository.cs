using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Threading.Tasks;
using WebApi.Framework.Model;

namespace WebApi.Framework.Repository
{
    public class IdentityUserRepository : Repository
    {
        public async Task<IdentityResult> RegisterUser(User user)
        {
            return await _userManager.CreateAsync(new IdentityUser
            {
                UserName = user.UserName
            }, user.Password);
        }

        public async Task<IdentityUser> FindUser(string userName, string password)
        {
            return await _userManager.FindAsync(userName, password);
        }

        public async Task<IdentityUser> FindAsync(UserLoginInfo loginInfo)
        {
            return await _userManager.FindAsync(loginInfo);
        }

        public async Task<IdentityResult> CreateAsync(IdentityUser identityUser)
        {
            return await _userManager.CreateAsync(identityUser);
        }

        public async Task<IdentityResult> AddLoginAsync(string userId, UserLoginInfo login)
        {
            return await _userManager.AddLoginAsync(userId, login);
        }
    }
}