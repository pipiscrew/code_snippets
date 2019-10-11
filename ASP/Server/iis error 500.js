//http://www.pipiscrew.com/2016/01/asp-classic-show-error-on-500-internal-error/

*iis6 - An error occurred on the server when processing the URL. Please contact the system administrator.*

Step 1. Open IIS Manager

Step 2. Double click on the computer icon (most likely local computer)

Step 3. Open the Web Sites folder

Step 4. Right click on your site and choose ‘Properties’

Step 5. Click the Home Directory tab and click Configuration
Step 6. Under the Debugging tab, click the “Send detailed ASP error messages to client” radio button.

Step 7. Click ‘Ok’ twice.




*iis7 - 500 internal server error*

All you need to change here is Send Errors To Browser = True

This should give you the real error in a browser on the server.

To see that error in a remote computer click on the Error Pages icon for the site in IIS Manager
and click Edit Feature Settings in the Actions pane on the right. Here choose Detailed errors.