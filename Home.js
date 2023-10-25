
let CommentBox = document.getElementById("CommentBox");
let commentBtn = document.getElementById("commentBtn");

// function toggleMenu(){
//     CommentBox.classList.toggle("open-comment")
// }

commentBtn.addEventListener("click", function(){
    CommentBox.classList.toggle("comment-wrap")
});