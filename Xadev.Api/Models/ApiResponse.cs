using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Xadev.Api.Models
{
    public class ApiResponse
    {
        public ApiResponse() { }

        public Boolean success { get; set; } = false;
        public Object data { get; set; }
    }
}