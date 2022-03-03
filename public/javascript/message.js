var messages = document.getElementById("messages");
var chatbox =document.getElementById("chatbox");
var button = document.getElementById("button");

button.addEventListener("click", function() {
    var newMessage = document.createElement("li");
    newMessage.innerHTML = chatbox.value;
    messages.appendChild(newMessage);
});