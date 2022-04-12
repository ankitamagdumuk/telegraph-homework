const Utils = require("./utils");

new Utils();

async function getUsers() {
  let url =
    "https://my-json-server.typicode.com/telegraph/frontend-exercise/comments";
  try {
    let res = await fetch(url);
    console.log("helloooo");
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

var users;
async function renderUsers() {
  users = await getUsers();
  renderComments();
}

function renderComments() {
  let html = "";
  users.forEach((user) => {
    let htmlSegment = ` <div class="commentsSection">
    <div class="userNameLikes">
      <span class="userName">${user.name}</span>
      <span class="likes">${user.likes} likes</span>
    </div>
    <div class="comment">
      ${user.body}
    </div>
  </div>`;

    html += htmlSegment;
  });

  let container = document.querySelector(".commentsSection");
  container.innerHTML = html;
}
renderUsers();

window.onload = function () {
  var button = document.getElementById("likeButton");
  button.onclick = async function () {
    users.sort(function (a, b) {
      return b.likes - a.likes;
    });
    renderComments();
  };
};
