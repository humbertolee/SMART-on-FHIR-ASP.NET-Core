## SMART-on-FHIR EHR Integration
This sample project shows you how to create a simple [SMART on FHIR](https://docs.smarthealthit.org/) provider-facing application to be embedded withing the patient chart (i.e. Epic Activity Tab), and then making [FHIR](https://hl7.org/fhir/) calls to retrieve different resources

### Epic Integration

 - Login to your [Epic on FHIR](https://fhir.epic.com/) account.
 - Create a new app.
 - Under Application Audience select "**Clinicians or Administrative Users**".
 - Select the FHIR APIs you'd like access to.
 - Under Redirect URI add https://localhost:8080/epic/callback (or any other URL or port number you are using).
 - Save your app and get the **Non-Production Client ID**.
 - Modify Views/Epic/Launch.cshtml and change the client_id and redirectUri to the ones you used in the steps above
 - Run the project.

Please note, if you make a change to your Epic app sandbox settings, it may be a few hours before they take effect as Epic only deploys changes to the sandbox twice a day.
