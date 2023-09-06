console.log("Welcome to whatsapp");
showChats();
let sendBtn = document.getElementById("sendBtn");
sendBtn.addEventListener("click", function(e) {
  console.log("hi");
  let addTxt = document.getElementById("sendMessage");
  let chat = localStorage.getItem("newChat");
  if (chat == null) {
    chatObj = [];
  } else {
    chatObj = JSON.parse(chat);
  }
  chatObj.push(addTxt.value);
  localStorage.setItem("newChat", JSON.stringify(chatObj));
  addTxt.value = "";
//   console.log(notesObj);
  showChats();
});

// Function to show elements from localStorage
function showChats() {
  let chat = localStorage.getItem("newChat");
  if (chat == null) {
    chatObj = [];
  } else {
    chatObj = JSON.parse(chat);
  }  /** */
  let html = "";
  chatObj.forEach(function(element, index) {
    html += `
    <div class="message my_message">
    <p>${element}<br><span>12:15pm</span></p>
    <button id="${index}"onclick="deleteChat(this.id)" class="btn btn-primary">Delete</button>
</div>`;
  });
  let chatsElm = document.getElementById("newChat");
  if (chatObj.length != 0) {
    chatsElm.innerHTML = html;
  } else {
    
  }
}

function deleteChat(index) {
//   console.log("I am deleting", index);

  let chats = localStorage.getItem("newChat");
  if (chats == null) {
    chatsObj = [];
  } else {
    chatsObj = JSON.parse(chats);
  }

  chatsObj.splice(index, 1);
  localStorage.setItem("newChat", JSON.stringify(chatsObj));
  showChats();
}