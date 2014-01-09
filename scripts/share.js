/**
 * 
 * Phonegap share plugin for Android
 * Kevin Schaul 2011
 *
 */

var Share = function() {};

Share.prototype.available = function (callback) {
	cordova.exec(function (avail) {
		callback(avail ? true : false);
	}, null, "Share", "available", []);
};
            
Share.prototype.show = function(content, success, fail) {
    var defaults = {
		type : "all",
		subject : "",
		text: "",
		email: "",
		cc: "",
		bcc: "",
		chooser: true
	};
	for ( var key in defaults) {
		if (typeof content[key] !== "undefined") {
			defaults[key] = content[key];
		}		
	}

    return cordova.exec( function(args) {
        success(args);
    }, function(args) {
        fail(args);
    }, 'Share', '', new Array(defaults));
};

Share.install = function () {
	if (!window.plugins) {
		window.plugins = {};
	}

	window.plugins.share = new Share();
	return window.plugins.share;
};

cordova.addConstructor(Share.install);
