// Which team is the best NFL team?
// Seahawks, Patriots, Browns, Dolphins
// Who is the best quarterback in NFL?
// Russell Wilson, Tom Brady, Rivers, Aaron Rodgers
// Who is the best head coach in NFL?
// Pete Caroll, Bill Belicheck, Mike McCarthy, Nick Saben 

window.onload = function() {
    $("#start").on("click", start);
    $("#done").on("click", done);
    $(".form-check-input1").hide();
    $(".form-check-input2").hide();
    $(".form-check-input3").hide();
    $(".form-check-input4").hide();
    $(".form-check-input5").hide();
    $(".form-check-input6").hide();
    $(".form-check-input7").hide();
    $(".form-check-input8").hide();
    $(".form-check-input9").hide();
    $(".form-check-input10").hide();
    $(".form-check-input11").hide();
    $(".form-check-input12").hide();

  };
  var correctAns = 0;
  var incorrectAns = 0;
  var unAns = 0;
  var Seahawks;

  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  // prevents the clock from being sped up unnecessarily
  var clockRunning = false;
  var time = 31;

  function start() {
  
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
    $("#start").hide();
    $(".form-check-input1").show();
    $(".form-check-input2").show();
    $(".form-check-input3").show();
    $(".form-check-input4").show();
    $(".form-check-input5").show();
    $(".form-check-input6").show();
    $(".form-check-input7").show();
    $(".form-check-input8").show();
    $(".form-check-input9").show();
    $(".form-check-input10").show();
    $(".form-check-input11").show();
    $(".form-check-input12").show();

    $(".q1").prepend("<p>Which team is the best NFL team?</p>");
    $(".form-check-label1").prepend("<p>Seahawks</p>");
    $(".form-check-label2").prepend("<p>Patriots</p>");
    $(".form-check-label3").prepend("<p>Browns</p>");
    $(".form-check-label4").prepend("<p>Packers</p>");
    
    $(".q2").prepend("<p>Who is the best quarterback in NFL?</p>");
    $(".form-check-label5").prepend("<p>Tom Brady</p>");
    $(".form-check-label6").prepend("<p>Aaron Rodgers</p>");
    $(".form-check-label7").prepend("<p>Philip Rivers</p>");
    $(".form-check-label8").prepend("<p>Russell Wilson</p>");

    $(".q3").prepend("<p>Who is the best head coach in NFL?</p>");
    $(".form-check-label9").prepend("<p>Bill Belichick</p>");
    $(".form-check-label10").prepend("<p>Andy Reid</p>");
    $(".form-check-label11").prepend("<p>Pete Carroll</p>");
    $(".form-check-label12").prepend("<p>Doug Pederson</p>");
    
    //TODO: I need to work on the counting the correct answer, incorrect answer and unanswerd questions! 

  }

  function done() {
    $(".form-check-input1").hide();
    $(".form-check-input2").hide();
    $(".form-check-input3").hide();
    $(".form-check-input4").hide();
    $(".form-check-input5").hide();
    $(".form-check-input6").hide();
    $(".form-check-input7").hide();
    $(".form-check-input8").hide();
    $(".form-check-input9").hide();
    $(".form-check-input10").hide();
    $(".form-check-input11").hide();
    $(".form-check-input12").hide();

    
      $(".q1").hide();
      $(".form-check-label1").hide();
      $(".form-check-label2").hide();
      $(".form-check-label3").hide();
      $(".form-check-label4").hide();
      
      $(".q2").hide();
      $(".form-check-label5").hide();
      $(".form-check-label6").hide();
      $(".form-check-label7").hide();
      $(".form-check-label8").hide();
      
      $(".q3").hide();
      $(".form-check-label9").hide();
      $(".form-check-label10").hide();
      $(".form-check-label11").hide();
      $(".form-check-label12").hide();

      $(".q4").prepend("<p>ALL DONE!</p>");
      $(".q5").prepend("<p>Correct Answer: " + correctAns + "</p>");
      $(".q6").prepend("<p>Incorrect Answer: "+ incorrectAns + "</p>");
      $(".q7").prepend("<p>Unanswered: "+ unAns + "</p>");

  }
  
  function count() {
  
    // DONE: increment time by 1, remember we cant use "this" here.
    time--;
  
    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
    console.log(converted);
  
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text("Time Remaining: " + converted);

    if(time === 0) {
        clearInterval(intervalId);
    clockRunning = false;
        done();
    }
  }

  function timeConverter(t) {
  
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }