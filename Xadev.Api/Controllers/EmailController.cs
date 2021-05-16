using System;
using System.IO;
using System.Collections;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using FetchAppSettingsValue;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Xadev.Api.Models;
using System.Text;

namespace Xadev.Api.Controllers
{
    [Route("api/email")]
    [ApiController]
    public class EmailController : Controller
    {
        private readonly IOptions<MailSettings> _mailSettings;
        private readonly string emailBodyPath = "./Assets/email-body.html";

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
                try
                {
                    using (var message = new MailMessage())
                    {
                        SmtpSettings smtpSettings = mailConfig.SmtpSettings;
                        string emailBody = GetEmailBody();

                        message.To.Add(new MailAddress(mailConfig.ServerEmailAddress, mailConfig.ServerEmailName));
                        message.From = new MailAddress(smtpSettings.Username, mailConfig.ServerEmailName);
                        message.Subject = "New Message from XADEV.ME";
                        message.Body = String.Format(emailBody, emailContent.senderName, emailContent.senderAddress, emailContent.senderMessage);
                        message.IsBodyHtml = true;

                        using (var client = new SmtpClient(mailConfig.SmtpSettings.Host))
                        {
                            client.Port = smtpSettings.Port;
                            client.Credentials = new NetworkCredential(smtpSettings.Username, smtpSettings.Password);
                            client.EnableSsl = smtpSettings.SSL;
                            client.Send(message);
                        }
                    }

                    response.success = true;
                }
                catch (Exception e)
                {
                    // It would be nice to have logging here
                    response.success = false;
                    response.data = e;
                }
            }

            return Ok(response);
        }

        private string GetEmailBody()
        {
            string emailBody = String.Empty;

            if (System.IO.File.Exists(emailBodyPath))
            {
                using (var sr = new StreamReader(emailBodyPath, Encoding.UTF8))
                {
                    emailBody = sr.ReadToEnd();
                }
                return emailBody;
            }
            else
            {
                Console.WriteLine("{0} is not a valid file or directory.", emailBodyPath);
            }

            return "";
        }
    }
}
