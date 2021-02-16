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

        
        [Route("content")]
        [Authorize]
        public IHttpActionResult GetContent()
        {
            string content = "You are authorised!";
            return Ok(content);
        }
    }
}