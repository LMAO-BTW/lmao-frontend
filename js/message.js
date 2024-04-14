
const messageId = "msg-btn";
const messageBtnId = document.getElementById(messageId);
const modalId = "modal-id";
const modal = document.getElementById(modalId);
const msgCloseId = "msg-close";
const msgClose = document.getElementById(msgCloseId);

console.log(messageBtnId);
console.log(modal);

messageBtnId.onclick = function() {
    modal.style.display = "block";
}

msgClose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

