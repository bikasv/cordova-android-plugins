/*jshint loopfunc: true, quotmark:false */
/*global jQuery:false, alert:false */
var app = (function ($, app) {
    "use strict";

    app.handleShare = function(inputArr, successCallBack, errorCallBack) {
		var successFunction = successCallBack || {};
	    var errorFunction = errorCallBack || function() {alert("Share Failed");};
		var inputData = inputArr || {};
	    window.plugins.share.show(inputData, successFunction, errorFunction);
    };

    return app;
}(jQuery, app || {}));