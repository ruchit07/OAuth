using System.Web.Http;

namespace WebApi.Resource.Api.Controllers
{   
    [RoutePrefix("api/home")]
    public class HomeController : ApiController
    {
        [Route("")]
        public IHttpActionResult Get()
        {
            string content = "Hello Worl!";
            return Ok(content);
        }
    }
}