window.onload = function navigation() {
    this.document.getElementById("navigation").innerHTML =
        '<li id="home"><a href="home.html">Home</a></li>' +
        '<li id="contactUs"><a href="contactus.html">Contact Us</a></li>' +
        '<li id="aboutUs"><a href="aboutus.html">About Us</a></li>';
        this.active();
        this.footer();
}

function active() {
    /* Gets page name without the extension */
    var theLocation = location.href.split("/").slice(-1)[0].split(".")[0]; // https://stackoverflow.com/questions/16611497/how-can-i-get-the-name-of-an-html-page-in-javascript
    switch (theLocation) {
        case "index":
            document.getElementById("home").setAttribute("id", "active");
            break;
        case "contactus":
            document.getElementById("contactUs").setAttribute("id", "active");
            break;
        case "aboutus":
            document.getElementById("aboutUs").setAttribute("id", "active");
            break;
    }
}

function footer() {
    this.document.getElementById("footer").innerHTML = '<hr>' +
    '<img src="images/logo2.png" alt="W Design Studios" style="width:250px">' +
    '&copy; 2020';
}