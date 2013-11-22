/**
 * 
 * Phonegap share plugin for Android
 * Kevin Schaul 2011
 *
 */

var Share = function() {};
            
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

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.share) {
    window.plugins.share = new Share();
}
