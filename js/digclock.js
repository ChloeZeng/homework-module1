 //Create a time data function
    function currentTime() {
        //Declare variables
        var d = new Date(); //Get current data
        var hr = d.getHours(); //Get current hours
        var min = d.getMinutes(); // Get current minutes
        var sec = d.getSeconds(); // Get current seconds
        var ampm; // Declare empty variable to store AM or PM

        //Add 0 to single digits for seconds
        if (sec <10) {
            sec = "0" + sec;
        }
        //Add 0 to single digits for minutes
        if (min < 10) {
            min = "0" + min;
        }
        //Determine AM or PM string
        if (hr == 12) {
            ampm = "PM"; //Set to PM
        } else if (hr > 12) {
            hr -=12; //Deduct 12 from hours greater than 12 (millitary time)
            ampm = "PM"; //Set to PM
        } else {
            ampm = "AM"; // Set to AM
        }
        if (hr == 0) {
            hr = 12;
        }

        //Caculate the timezone
            var utchr = d.getUTCHours(); // GMT 时间
            var timeDiff = d.getHours() - utchr; 
            var adjTimeDiff = (timeDiff + 24) % 24; 
            var timeZone;
        //Focus on American timezone
            if (adjTimeDiff == 8) {
            timeZone = "PT";
        } else if (adjTimeDiff == 7) {
            timeZone = "MT";
        } else if (adjTimeDiff == 6) {
            timeZone = "CT";
        } else if (adjTimeDiff == 5) {
            timeZone = "ET";
        } else {
            timeZone = "Local";
        }
        //Assemble time format to display
        var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
        //Display current local time and time zone on HTML elements
        document.getElementById("clock").innerText = time; // adding time
    }

    //Run time data function every 1 second
    setInterval(currentTime, 1000); // setting timer
    //Initial run of time data function
    currentTime();
        