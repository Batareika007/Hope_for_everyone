$("#header").load("../assets/header.html");
$("#footer").load("../assets/footer.html");

//paste this code under head tag or in a seperate js file.
// Wait for window load
$(window).load(function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});