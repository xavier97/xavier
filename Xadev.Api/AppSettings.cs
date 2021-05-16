using System;

namespace FetchAppSettingsValue
{
    public class AppSettings
    {
        public Logging Logging { get; set; }

        public MailSettings MailSettings { get; set; }

        public string AllowedHosts { get; set; }
    }

    public class Logging
    {
        public LogLevel LogLevel { get; set; }
    }

    public class LogLevel
    {
        public string Default { get; set; }

        public string Warning { get; set; }

        public string Error { get; set; }
    }

    public class MailSettings
    {
        public string ServerEmailAddress { get; set; }

        public string ServerEmailName { get; set; }

        public SmtpSettings SmtpSettings { get; set; }
    }

    public class SmtpSettings
    {
        public string Host { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        public int Port { get; set; }

        public Boolean SSL { get; set; }
    }
}
