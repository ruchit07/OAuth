using WebApi.Framework.Entities;

namespace WebApi.Framework.Repository
{
    public class ClientRepository : Repository
    {
        public Client FindClient(string clientId)
        {
           return _context.Clients.Find(clientId);
        }
    }
}