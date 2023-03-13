const sumbitBtn = document.getElementById("submit-btn");
sumbitBtn.addEventListener("click", function() {
    const result = document.getElementById("result");
//chiedere a utente mail
const userMailInput = document.getElementById ("user-mail");
const userMail = userMailInput.value
console.log(userMail);

//la mail è nella lista
let usersEmails = ["tizio@tizio.com", "caio@caio.com", "sempronio@sempronio.com"];
//se si messaggio di ok

let isFound = false;

for (let i = 0; i < usersEmails.length; i++) {
        let userEmail = usersEmails[i];
        console.log(usersEmails);
        if (usersEmails === userEmail) {
            isFound = true;
        }
    }
    if (isFound === true) {
            console.log("mail corretta");
        } else {
            console.log("mail sbagliata");
        }

})