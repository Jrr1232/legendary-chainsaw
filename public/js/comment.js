
const postNewComment = async (event) => {
    event.preventDefault();
    let comment = "";
    const textarea = document.querySelector('.new-comment');
    const blogId = event.target.getAttribute('data-blogid');
    if (textarea) {
        comment = textarea.value;
    }
    console.log(comment)
    console.log(blogId)
    try {
        const response = await fetch(`/api/comment`, {
            method: "POST",
            body: JSON.stringify({
                comment,
                blogId


            }),
            headers: { "Content-Type": "application/json" }
        });

        if (response.ok) {
            document.location.replace("/");
            alert("Successfully posted comment!");
        } else {
            alert("Failed to post new comment.");
        }
    } catch (err) {
        console.error(err);
        alert("An error occurred while posting the comment.");
    }
};


document.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('add-comment-btn')) {
        postNewComment(event);
    }
});