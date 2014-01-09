Install Instructions:
----

   `cordova plugin add https://github.com/bikasv/cordova-android-plugins.git`

Usage Instructions:
----

1. Currently share can be of 2 types only - all or email.
2. You can set following options in Share -
    * type - can be `all` or `email`
    * subject - Text to be shared. Will be email subject in case of email sharing
    * text - Text to be shared. It'll be email body in case of email sharing
    * email - Only applicable to email sharing. It'll fill the `To` field of email
    * cc - Only applicable to email sharing. It'll fill the `cc` field of email
    * bcc - Only applicable to email sharing. It'll fill the `bcc` field of email
    * chooser - This boolean value decides whether user is allowed to select any application as default for sharing.
3. Add following (or similar) jQuery code to handle free sharing -

```
    shareLink = function(Urltext) {
        var shareArr = {subject: "Share Article", text: Urltext};
        window.plugins.share.show(
            shareArr,
            function() {}, // Success function
            function() {alert('Share failed')} // Failure function
        );
    };
```
4. Add following (or similar) jQuery code to handle email sharing -

```
    sendEmail = function() {
        var shareArr = {chooser: false, subject: "Email Subject.", text: "Test email body.", email: "bikasvaibhav@gmail.com", cc: "abc@xyz.com", type: "email"};
        window.plugins.share.show(
            shareArr,
            function() {}, // Success function
            function() {alert('Share failed')} // Failure function
        );
    }
```
5. Optionally see app.share.js for tentative implementation.
