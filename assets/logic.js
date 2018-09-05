// grab inputs for start and end time
// validate for correct format
// convert those values to integers
// iterate through the difference and accumulate the total
// return the total number to DOM

// alert("connected");

var clockStrikes = 0;

/*****************************
         CLICK EVENT
*****************************/
// // SUBMIT BUTTON TO CAPTURE TIME variables
$("#button").on("click", function() {
  event.preventDefault();
  // Grabs user input
  startTimeInput = $("#startTime")
    .val()
    .trim();
  // console.log(startTimeInput);

  endTimeInput = $("#endTime")
    .val()
    .trim();
  //console.log(endTimeInput);

  convert(startTimeInput, endTimeInput);
});

// Converts time to integers and processes clockStrike scenarios
function convert(a, b) {
  // grabs the first part of the START time input
  a = startTimeInput.split(":"); // 1
  startTime = parseInt(a[0]);
  //console.log("startTime = " + startTime);

  // grabs the second part of the START time input
  exception = parseInt(a[1]);
  //console.log("exception = " + exception);

  // grabs the first part of the END time input
  b = endTimeInput.split(":"); // 23
  endTime = parseInt(b[0]);
  //console.log("endTime " + endTime);

  // calulation used to determine differnce in time inputs
  var timeDifference = Math.abs(startTime - endTime) + 1;
  console.log("TOTAL after if statements = " + timeDifference);

  // *******************************
  //        TIME SECENARIOS
  // *******************************

  // Scenario 0 - START TIME = END TIME......24 HOURS - clockStrikes = 78
  console.log("scenario 0");

  if (startTime === endTime) {
    $("#time").append("CLOCK STRIKES = 78");
    console.log("24 hours = 78");
    return;
  }

  // Scenario 1 - startTime < 12 && endTime < 12 && startTime < endTime
  if (startTime < 12 && endTime < 12 && startTime < endTime) {
    console.log("scenario 1");
    // 1:00 - 3:00

    for (var i = 0; i <= endTime; i++) {
      clockStrikes += i;

      console.log("SECONED EX = " + clockStrikes);
    }
    $("#time").append("CLOCK STRIKES = " + clockStrikes);
    //startTimeInput = 0;
    //endTimeInput = 0;
    return;
  }

  // Scenario 2 - startTime > 12 && startTime > 12 && startTime < endTime
  if (startTime > 12 && startTime > 12 && startTime < endTime) {
    console.log("scenario 2");
    // ex. 19:00 - 21:00 = 24

    for (var i = startTime; i <= endTime; i++) {
      clockStrikes += startTime - 12;
      startTime++;
      console.log("ClockStrikes = " + clockStrikes);
    }
    $("#time").append("CLOCK STRIKES = " + clockStrikes);
    return;
  }

  // Scenario 3 - startTime > 12 && endTime < 12
  if (startTime > 12 && endTime < 12) {
    console.log("scenario 3");
    // ex. 22:00 - 2:00 = 36

    for (var i = startTime; i <= endTime + 24; i++) {
      if (i <= 24) {
        clockStrikes += i - 12;
        console.log("less than 12 = " + clockStrikes);
      } else {
        clockStrikes += i - 24;
        console.log("more than 13 = " + clockStrikes);
      }
    }
    $("#time").append("CLOCK STRIKES = " + clockStrikes);
    return;
  }

  // Scenario 4 - endTime >= 12 && startTime <= 12
  if (endTime >= 12 && startTime <= 12) {
    console.log("scenario 4");
    // ex. 7:00 - 13:00 = 58

    for (var i = endTime; i >= startTime; i--) {
      if (i >= 13) {
        clockStrikes += endTime - 12;
        console.log("more than 12 = " + clockStrikes);
        endTime--;
      } else {
        clockStrikes += endTime;
        endTime--;
        console.log(" less than 13 = " + clockStrikes);
      }
    }
    $("#time").append("CLOCK STRIKES = " + clockStrikes);
    return;
  }

  // Scenario 5 - endTime > 12 && startTime > 12
  if (endTime > 12 && startTime > 12) {
    console.log("scenario 5");
    // 13:00 - 15:00 = 6

    for (var i = startTime; i <= endTime; i++) clockStrikes += endTime - 12;
    console.log("more than 12 = " + clockStrikes);
  }
  $("#time").append("CLOCK STRIKES = " + clockStrikes);
  return;
}
