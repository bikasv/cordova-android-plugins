1. Copy the share.js file to your 'www' folder (or similar folder of choosing)
2. Create a package com.bikasv.plugins.share
3. Copy the Share.java file into this package
4. Update your res/xml/config.xml file with the following line:

   `<plugin name="Share" value="com.bikasv.plugins.share.Share"/>`

5. Currently share can be of 2 types only - all or email.
6. You can set following options in Share -
    * type - can be `all` or `email`
    * subject - Text to be shared. Will be email subject in case of email sharing
    * text - Text to be shared. It'll be email body in case of email sharing
    * email - Only applicable to email sharing. It'll fill the `To` field of email
    * cc - Only applicable to email sharing. It'll fill the `cc` field of email
    * bcc - Only applicable to email sharing. It'll fill the `bcc` field of email
    * chooser - This boolean value decides whether user is allowed to select any application as default for sharing.
7. Add following (or similar) jQuery code to handle free sharing -

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
8. Add following (or similar) jQuery code to handle email sharing -

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
