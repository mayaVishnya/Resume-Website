function sendEmail() {
    let _message = document.getElementById("message").value;
    let _email = document.getElementById("email").value;
    let _subject = document.getElementById("subject").value;
    let _name = document.getElementById("name").value;
    if (_email === "" || _name === "")
        return;
    if ( _message=== "") 
        _message = "Please contact me! " + _email + "\n" + _name;
    if (_subject === "")
        _subject = "Contact me";

    let params = {
        name: _name,
        subject: _subject,
        message: _message,
        email: _email
    }
    emailjs.send("service_eyvtkxd","template_dhfp3b6", params).then(
        alert("Message sent!")
    );
}