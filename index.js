$("#aboutBtn").on("click", function (event) {
    location.href="about.html";
});
$("#homeBtn").on("click", function (event) {
    location.href="index.html";
});
$("#contactBtn").on("click", function (event) {
    location.href="contact.html";
});
$(".picture").on("click", function (event) {
    let id = $(this).data("id");
    switch(id){
        case "funWithForums":
            location.href = "https://funwithforums.herokuapp.com/";
        break;
        case "soundFound":
            location.href = "https://foundsound.herokuapp.com/";
        break;
        case "ricoDepot":
            location.href = "https://ricodepot.herokuapp.com/";
        break;
    };
});