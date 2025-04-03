const messageInput = document.getElementById("msg-input");
const sendButton = document.getElementById("msg-send-btn");
const messageContainer = document.getElementById("msg-container");
const Chat = document.getElementById("chat");

function sendMessage() {
  const message = messageInput.value.trim();
  if (message === "") return;
  console.log(message);
  addMessage(message, "user");
  messageInput.value = "";
  messageInput.focus();

  setTimeout(() => {
    simulateBotResponse();
  }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
}
function simulateBotResponse() {
  const botResponses = [
    "Hello! How can I help?",
    "That's interesting!",
    "Tell me more!",
    "I'm just a bot, but I'm learning!",
    "Can you rephrase that?",
    "Good question!",
    "Let's keep the conversation going!",
  ];
  const response =
    botResponses[Math.floor(Math.random() * botResponses.length)];
  addMessage(response, "bot");
}

function getTimestamp() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(`${sender}-msg`);
  messageDiv.innerHTML = `
          <div class="msg-info">
            <span class="msg-name">${sender}</span>
            <span class="msg-time">${getTimestamp()}</span>
            <div class="msg-text">${text}</div>
        </div>`;
  Chat.appendChild(messageDiv);
  Chat.scrollTop = Chat.scrollHeight;
}
function getTimestamp() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});
