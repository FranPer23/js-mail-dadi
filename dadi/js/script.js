const sumbitBtn = document.getElementById("submit-btn");
sumbitBtn.addEventListener("click", function() {

const userNumber = Math.floor(Math.random() * 101);
const computerNumber = Math.floor(Math.random() * 101);

console.log(userNumber, computerNumber);



if (userNumber > computerNumber) {
    alert ('Complimenti hai vinto')
} else {
    alert ('Ritenta sarai più fortunato')
}

})