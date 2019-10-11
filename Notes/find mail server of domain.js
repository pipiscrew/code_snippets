//http://www.exclamationsoft.com/exclamationsoft/netmailbot/help/website/HowToFindTheSMTPMailServerForAnEmailAddress.html

Open a DOS Command Prompt 
Type "nslookup". 
Your computer's DNS Server name and IP address will be displayed. 
Type "set type=mx" - This will cause NSLOOKUP to only return what are known as MX (Mail eXchange) records from the DNS servers. 
For an example, type "hotmail.com" or use your own domain name. 
Results returned should look similar to this: