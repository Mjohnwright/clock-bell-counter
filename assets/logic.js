// grab inputs for start and end time
// validate for correct format
// convert those values to integers
// iterate through the difference and accumulate the total
// return the total number

// alert("connected");

var Input;
var endTimeInput;
var clockStrikes = 0;

/*****************************
         CLICK EVENTS
*****************************/
// // SUBMIT BUTTON TO CAPTURE TIME
$("#button").on("click", function() {
  event.preventDefault();
  // Grabs user input
  startTimeInput = $("#startTime")
    .val()
    .trim();
  console.log(Input);

  endTimeInput = $("#endTime")
    .val()
    .trim();
  console.log(endTimeInput);

  convert(startTimeInput, endTimeInput);
});

// Converts time to integers
function convert(a, b) {
  a = startTimeInput.split(":"); // 1
  startTime = parseInt(a[0]);
  console.log("diff1 " + startTime);

  b = endTimeInput.split(":"); // 23
  endTime = parseInt(b[0]);
  console.log("diff2 " + endTime);

  var timeDifference = Math.abs(startTime - endTime) + 1;
  //   console.log("TOTAL after if statements = " + timeDifference);

  // START TIME = END TIME......24 HOURS
  if (startTime === endTime) {
    console.log("24 hours = 78");
  }

  // IF START TIME IS GREATER THAN END TIME
  if (startTime > endTime ) {
    console.log("(1 startTime > 12 && endTimeInput > 12)");

    for (var i = 24; i >= startTime; i--) {
        clockStrikes += i;
        console.log("Higher than 24 = " + clockStrikes);
    }
    for (var j = 1; j <= endTime; j++) {
        clockStrikes += j;
        console.log("Higher than 12 = " + clockStrikes);
        }
  }

  //   if (startTime > 12 || endTime > 12 && startTime > endTime) {
  //     console.log("(startTime || endTime > 12 && startTime > endTime)");

  //     while (startTime >= endTime) {
  //       for (var i = 0; i < timeDifference; i++) {
  //         clockStrikes += startTime;
  //         startTime--;
  //         console.log("FIRST EX = " + clockStrikes);
  //       }
  //     }
  //   }



  if (endTime < 24 && endTime > startTime) {
    console.log("(2 endTime > startTime)");
    while (endTime >= startTime) {
      for (var i = 0; i < timeDifference; i++) {
        clockStrikes += endTime;
        endTime--;
        console.log("SECONED EX = " + clockStrikes);
      }
    }
  }

//   if (startTime > endTime && startTime + endTime > 24) {
//     console.log("(3 startTime > endTime && startTime + endTime > 24)");
//     for (var i = 24; i >= startTime; i--) {
//       clockStrikes += i;
//       console.log("Higher than 24 = " + clockStrikes);
//     }
//   }
}