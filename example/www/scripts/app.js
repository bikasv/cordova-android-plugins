/* Device ready actions */
document.addEventListener('deviceready', function() {
    cordova.exec(null, null, "SplashScreen", "hide", []);
    document.addEventListener("backbutton", function(e){
        if($.mobile.activePage.attr("id") == "Home") {
            e.preventDefault();
            navigator.app.exitApp();
        }
        else {
            $.mobile.changePage("#Home", { transition: "slide"});
        }
    }, false);
}, false);
/* End actions */

function getCalendar(elm, param) {
    var minVal = 0;
    var maxVal = 0;
    if(param === "min") {
        minVal = new Date("January 1, 2013");
    }
    if(param === "max") {
        maxVal = new Date("December 31, 2015");
    }
    if(param === "both") {
        minVal = new Date("January 1, 2013");
        maxVal = new Date("December 31, 2015");
    }
    app.handleDates(elm, {min: minVal, max: maxVal});
}

function shareLink(Urltext) {
    var shareArr = {subject: "Share Article", text: Urltext};
    app.handleShare(shareArr);
}

function shareVal() {
    var value = $("#shareUrl").val();
    shareLink(value);
}

function sendEmail() {
    var shareArr = {chooser: false, subject: "Email Subject.", text: "Test email body.", email: "bikasvaibhav@gmail.com", cc: "abc@xyz.com", type: "email"};
    app.handleShare(shareArr);
}