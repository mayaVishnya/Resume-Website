const contactForm = document.getElementById("contact-form")
const sendBtn = document.getElementById("send-btn");
let isSending = false;
function sendEmail(event) {
    if(event) event.preventDefault();
    if(!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    if(isSending) return;
    isSending = true;
    
    sendBtn.disabled = true;
    sendBtn.innerText = "Sending";

    emailjs.init("jJxcj0PryYSoWXzXt");

    let _message = document.getElementById("message").value;
    let _email = document.getElementById("email").value;
    let _subject = document.getElementById("subject").value;
    let _name = document.getElementById("name").value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (_email === "" || _name === "" || !emailRegex.test(_email)) {
        resetButton();
        return;
    }
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
            sendBtn.disabled = false;
            resetButton();
        },
        function(error) {
            console.log("FAILED...", error);
            alert("Failed to send message, please try again later");
            sendBtn.disabled = false;
            resetButton();
        }
    );
}

function resetButton() {
    isSending = false;
    sendBtn.disabled = false;
    sendBtn.innerText = "Send";
}
