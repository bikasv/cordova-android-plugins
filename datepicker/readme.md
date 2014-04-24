Install Instructions:
----

   `cordova plugin add https://github.com/native5/cordova-android-plugins.git`

Usage Instructions:
----

1. In order or avoid keyboard popping up when calendar is shown, you may want to set the attribute of `<input>` to readonly.
2. You can set following options in datePicker -
    * action - Can be `date` or `time`
    * date - Can be the custome date set by user or current date
    * minDate - Date before which datepicker will be unselectable
    * maxDate - Date after which datepicker will be unselectable
3. Add following (or similar) jQuery code to handle click events for date picker -

```
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
```
4. Add following (or similar) jQuery code to handle click events for time picker -

```
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
```
5. Optionally see app.datePicker.js for tentative implementation.
