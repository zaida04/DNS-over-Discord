module.exports = `
By using DNS over Discord, whether you have read these notices or not, you agree to the following data being used as needed for DNS over Discord to operate and provide its functionality.

DNS over Discord stores no data in a database and has a very limited in-memory cache that is wiped whenever the bot restarts.
DNS over Discord responds solely to messages and requires no stored user data for this.

For DNS lookup commands, the domain name and record types provided will be sent to Cloudflare's 1.1.1.1 DNS over HTTPS JSON API to provide the functionality for the bot.
You can read Cloudflare's Privacy Policies on their website: https://www.cloudflare.com/privacypolicy/ & https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/

For domain WHOIS lookup commands, the domain name will be sent to the WHOISJS API, which uses Cloudflare's WHOIS server to provide the functionality for the bot.
You can find out more about the service on their website: https://whoisjs.com/

For IP address WHOIS lookup commands, the IP address will be sent to the CFWHO API, which is provided by Cloudflare, to provide the functionality for the bot.
You can read Cloudflare's Privacy Policy on their website: https://www.cloudflare.com/privacypolicy/

For more information on what data we store and use, or why we need it, please contact IPv4 by joining our support server at https://dns-over-discord.v4.wtf/server, or by creating an issue on the GitHub repository: https://dns-over-discord.v4.wtf/github
`.trim();