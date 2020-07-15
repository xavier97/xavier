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
    [Route("api/email")]
    [ApiController]
    public class EmailController : Controller
    {
        private readonly IOptions<MailSettings> _mailSettings;

        public EmailController(IOptions<MailSettings> mailSettings)
        {
            _mailSettings = mailSettings;
        }

        [HttpPost]
        [Route("send-email")]
        public IActionResult SendEmail([FromBody] Email emailContent)
        {
            ApiResponse response = new ApiResponse();
            var mailConfig = _mailSettings.Value;

            if (emailContent != null && !string.IsNullOrEmpty(emailContent.senderName) && !string.IsNullOrEmpty(emailContent.senderMessage) && !string.IsNullOrEmpty(emailContent.senderAddress))
            {
                using (var message = new MailMessage())
                {
                    message.To.Add(new MailAddress(mailConfig.ServerEmailAddress, mailConfig.ServerEmailName));
                    message.From = new MailAddress(emailContent.senderAddress, emailContent.senderName);
                    message.Subject = "New Message from XADEV.ME";
                    message.Body = emailContent.senderMessage;
                    message.IsBodyHtml = true;

                    using (var client = new SmtpClient(mailConfig.SmtpSettings.Host))
                    {
                        var smtpSettings = mailConfig.SmtpSettings;
                        client.Port = smtpSettings.Port;
                        client.Credentials = new NetworkCredential(smtpSettings.Username, smtpSettings.Password);
                        client.EnableSsl = smtpSettings.SSL;
                        client.Send(message);
                    }
                }

                response.success = true;
            }

            return Ok(response);
        }
    }
}
