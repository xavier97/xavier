using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using FetchAppSettingsValue;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Xadev.Api.Models;

namespace Xadev.Api.Controllers
{
    [Route("")]
    [ApiController]
    public class TestController : Controller
    {
        public TestController() { }

        [HttpGet]
        [Route("")]
        public IActionResult TestRoute()
        {
            return Ok("Hello World!");
        }
    }
}
