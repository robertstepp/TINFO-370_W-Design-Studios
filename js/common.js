window.onload = function navigation() {
    this.document.getElementById("navigation").innerHTML =
        '<li id="home"><a href="index.html">Home</a></li>' +
        '<li id="partners"><a href="partners.html">Partners</a></li>' + 
        '<li id="faq"><a href="faq.html">FAQ</a></li>' +
        '<li id="aboutUs"><a href="aboutus.html">About Us</a></li>';
        this.active();
        this.footer();
        /* this.disclaimer(); */ // Disabled for public use without issues
}

function active() {
    /* Gets page name without the extension */
    var theLocation = location.href.split("/").slice(-1)[0].split(".")[0]; // https://stackoverflow.com/questions/16611497/how-can-i-get-the-name-of-an-html-page-in-javascript
    switch (theLocation) {
        case "index":
            document.getElementById("home").setAttribute("id", "active");
            break;
        case "partners":
            document.getElementById("partners").setAttribute("id", "active");
            break;
        case "faq":
            document.getElementById("faq").setAttribute("id", "active");
            break;
        case "aboutus":
            document.getElementById("aboutUs").setAttribute("id", "active");
            break;
    }
}

function footer() {
    this.document.getElementById("footer").innerHTML = '<hr>' +
    '<img src="images/Transparent.png" alt="W Design Studios" style="width:250px">' +
    '&copy; 2020' +
    '<div id="myModal" class="modal">' +
    '<div class="modal-content">' +
    '<span class="close">&times;</span>' +
    '<p>This website only contains <u>Informational</u> contents.<br>Use at your own risk.</p>' +
    '</div></div>';
}

function disclaimer() {
    var x = document.cookie;
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    const now = new Date();
    now.setDate(now.getDate() + 1);
    if (x.indexOf('clicked=') == -1) {
        modal.style.display="block";
        span.onclick = function() {
            modal.style.display="none";
            x = "clicked=true; path=/; Expires=" + now.toUTCString();
            console.log(x);
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display="none";
                x = "clicked=true; path=/; Expires=" + now.toUTCString();
                console.log(x);
            }
        }
    }
   
}
