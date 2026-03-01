function addComment(button) {

    let commentSection = button.parentElement;
    let nameInput = commentSection.querySelector(".name");
    let messageInput = commentSection.querySelector(".message");
    let commentList = commentSection.querySelector(".comment-list");

    let name = nameInput.value.trim();
    let message = messageInput.value.trim();

    if (name === "" || message === "") {
        alert("Please fill in both fields.");
        return;
    }

    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment-item");
    commentDiv.innerHTML = "<strong>" + name + "</strong><p>" + message + "</p>";

    commentList.appendChild(commentDiv);

    nameInput.value = "";
    messageInput.value = "";
}
