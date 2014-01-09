/*jshint loopfunc: true, quotmark:false */
/*global jQuery:false, plugins:false */
var app = (function ($, app) {
    "use strict";

    function getFormattedDate(date) {
		var dayVal = getDayName(parseInt(date.getDay(), 10));
		var month = getMonthName(parseInt(date.getMonth(), 10));
		var day = date.getDate();
	    if(day <= 9) {
	        day= "0" + day;
	    }
	    var year = date.getFullYear();
	    return (dayVal + ", " + month + " " + day + ", " + year);
	}

	function getMonthName(month) {
		var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		return monthName[month];
	}

	function getDayName(day) {
		var dayName = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
		return dayName[day];
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

    app.handleDates = function(elm, options) {
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
	        mode : "date",
	        minDate: Date.parse(minVal),
	        maxDate: Date.parse(maxVal)
	    }, function(returnDate) {
	        if(returnDate !== "") {
	            var newDate = new Date(returnDate);
	            currentField.val(getFormattedDate(newDate));
	        }
	        currentField.blur();
	    });
    };

	app.handleTime = function(elm) {
	    var currentField = $(elm);
	    var time = currentField.val();
	    var myNewTime = new Date();

	    if(time) {
	        myNewTime.setHours(time.substr(0, 2));
	        myNewTime.setMinutes(time.substr(3, 2));
	    }
	    plugins.datePicker.show({
	        date : myNewTime,
	        mode : "time"
	    }, function(returnDate) {
	        if(returnDate !== "") {
	            var newDate = new Date(returnDate);
	            currentField.val(getFormattedTime(newDate));
	        }

	        currentField.blur();
	    });
	};

    return app;
}(jQuery, app || {}));