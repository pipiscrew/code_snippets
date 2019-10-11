*DISABLE SSL - http://rainyjune.net/node/119*
Edit the Apache config file httpd.conf, you can find this file by clicking on the Config button in the line of Apache module.
Comment out the following two lines:
#LoadModule ssl_module modules/mod_ssl.so
#Include conf/extra/httpd-ssl.conf

*Make apache only accessible via 127.0.0.1 - http://serverfault.com/a/276968 - http://stackoverflow.com/a/21914920*
he easiest way to do this is through the Listen directive. By defaults, there's a line in our httpd.conf that reads:

Listen *:80
Meaning it will respond ro requests on port 80 on all of your computer's network addresses. Changing it to:

Listen 127.0.0.1:80
Will tell apache only to only respond to requests on the local adaptor, thus ignoring anything else.



*Restricting MySQL connections from localhost - http://stackoverflow.com/a/13208652*
@ mysql\bin\my.ini file. adding the following line

bind-address = 127.0.0.1



--or
http://www.ytechie.com/2008/10/secure-xampp-by-only-allowing-local-access/
http://stackoverflow.com/a/23917649
http://serverfault.com/a/277003
