emailjs.init("jJxcj0PryYSoWXzXt");
function sendEmail() {
    let _message = document.getElementById("message").value;
    let _email = document.getElementById("email").value;
    let _subject = document.getElementById("subject").value;
    let _name = document.getElementById("name").value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (_email === "" || _name === "" || !emailRegex.test(_email))
        return;
    if ( _message === "") 
        _message = "Please contact me! " + _email + ", " + _name;
    if (_subject === "")
        _subject = "Contact me";

    let params = {
        name: _name,
        subject: _subject,
        message: _message,
        email: _email
    }

    emailjs.send("service_eyvtkxd","template_dhfp3b6", params).then(
        function(response) {
            console.log("SUCCESS!", response.status, response.text)
            alert("Message sent!");
        },
        function(error) {
            console.log("FAILED...", error);
            alert("Failed to send message, please try again later");
        }
    );
}