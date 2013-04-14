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


/* DatePicker Plugin implementation */
function handleDates(elm, options) {
    event.stopPropagation();
    var currentField = $(elm);
    var opts = options || {};
    var minVal = opts.min || 0;
    var maxVal = opts.max || 0;

    var myNewDate = Date.parse(currentField.val()) || new Date();
    if(typeof myNewDate === "number") {
    	myNewDate = new Date (myNewDate);
    }

    window.plugins.datePicker.show({
        date : myNewDate,
        mode : 'date',
        minDate: Date.parse(minVal),
        maxDate: Date.parse(maxVal)
    }, function(returnDate) {
        if(returnDate !== "") {
            var newDate = new Date(returnDate);
            currentField.val(getFormattedDate(newDate));
        }
        currentField.blur();
    });
}

function getFormattedDate(date) {
    var month = date.getMonth() + 1;
    if(month <= 9) {
        month= "0" + month;
    }
    var day = date.getDate();
    var year = date.getFullYear();
    return (day + "/" + month + "/" + year);
}

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
    handleDates(elm, {min: minVal, max: maxVal});
}

function handleTime(elm) {
    var currentField = $(elm);
    var time = currentField.val();
    var myNewTime = new Date();

    if(time) {
        myNewTime.setHours(time.substr(0, 2));
        myNewTime.setMinutes(time.substr(3, 2));
    }
    plugins.datePicker.show({
        date : myNewTime,
        mode : 'time'
    }, function(returnDate) {
        if(returnDate !== "") {
            var newDate = new Date(returnDate);
            currentField.val(getFormattedTime(newDate));
        }

        currentField.blur();
    });
}

function getFormattedTime(time) {
    var hour = time.getHours();
    var minute = time.getMinutes();
    if(hour <= 9) {
        hour = "0" + hour;
    }
    if(minute <= 9) {
        minute = "0" + minute;
    }

    return (hour + ":" + minute);
}

/* End of DatePicker plugin */

/* Shar plugin implementation */
share = function(inputArray) {
    window.plugins.share.show(
        inputArray,
        function() {}, // Success function
        function() {alert('Share failed')} // Failure function
    );
};

shareLink = function(Urltext) {
    var shareArr = {subject: "Share Article", text: Urltext};
    share(shareArr);
};

sendEmail = function() {
    var shareArr = {chooser: false, subject: "Email Subject.", text: "Test email body.", email: "bikasvaibhav@gmail.com", cc: "abc@xyz.com", type: "email"};
    share(shareArr);
}

/* End of Share plugin */