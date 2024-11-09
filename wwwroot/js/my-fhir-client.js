FHIR.oauth2.ready().then(function (client) {

    // If you want to grab the patient ID and JWT token
    var jwt = client.state.tokenResponse.access_token;
    var pid = client.patient.id;

    // Render the current patient (or any error)
    client.patient.read()
    .then(
        function (data) {
            displayPatient(data);
            var editor = new JsonEditor('#json-patient', data);            
        },
        function (error) {
            alert(error.stack);
        }
    );

    
    // Render the patient encounters (or any error)
    client.request("/Encounter?patient=" + client.patient.id, {
        resolverReference: ["encounterReference"],
        graph: true,
        pageLimit: 1        
    })
    .then(
        function (data) {
            var editor = new JsonEditor('#json-encounters', data);
        },
        function (error) {
            alert(error.stack);
        }
    );

    // Render the patient observations (or any error)
    client.request("/Observation?patient=" + client.patient.id + "&category=vital-signs", {
        resolverReference: ["observationReference"],
        graph: true,
        pageLimit: 1
    })
    .then(
        function (data) {
            var editor = new JsonEditor('#json-observations', data);
        },
        function (error) {
            alert(error.stack);
        }
    );

    function displayPatient(patient) {
        var patientName = patient.name[0].family;
        if (patient.name[0].given.length > 0) {
            patientName = patientName + ', ' + patient.name[0].given[0];
        }
        document.getElementById("patientName").innerText = patientName;
        document.getElementById("patientDob").innerText = patient.birthDate;
    }
});