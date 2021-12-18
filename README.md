# Email-Server
www.cyberpost.xyz <br/>
This webmail allows you send emails to a specificed contact with subject and message through the website which is host by Heroku.

# Running the Script Locally
The project uses transactional email API from SendGrid by Twilio. SendGrid does not allow the API key file (sendgrid.env) to be publicly listed on the code repository on Github. Therefore, to run the service locally, you will need to generate your own API keys. See the following steps: <br/>

1. Generate a SendGrid API key at: <br/>
https://app.sendgrid.com/ <br/>
Go to "Email API" -> Click on "Integration Guide" -> Select "Web API" -> Choose "Node.js" -> Press the button "Create Key"<br/>

2. Bind the key to the code: (sendgrid.env)<br/>
Open the terminal and go the folder that contains the project code. <br/>
Follow steps 3 and 4 in the setup guide at SendGrid to create the key file. <br/>

3. Configure the port number<br/>
Go to the app.js file and scroll down to line 67. Change the port number to a port that is currently available for use. Then, open up your browser, and put localhost: YOUR_CUSTOMIZED_PORT_NUM.
