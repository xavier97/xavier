using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Xadev.Api.Models
{
    public class Email
    {

        public Email() { }

        public string senderName { get; set; }
        public string senderAddress { get; set; }
        public string senderMessage {get; set;}

    }
}