https://www.exclamationsoft.com/exclamationsoft/netmailbot/help/website/HowToFindTheSMTPMailServerForAnEmailAddress.html
find smtp with nslookup
1-run nslookup
2-type
	set type=mx
3-type the url you want ex.
	gmail.com
Note the first line after "Non-authoritative answer".
  
The "MX preference" specifies which mail server to use and in which order. The lower the number, the more preferred the mail server is