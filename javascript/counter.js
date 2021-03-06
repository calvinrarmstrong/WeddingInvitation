// Set the date we're counting down to
var countDownDate = new Date("Aug 18, 2018 16:00:00").getTime();

// Update the count down 60 times per second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    if(distance > 0){
    document.getElementById("counter").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    }
    else if (hours > - 10){
        document.getElementById("counter").innerHTML = "It's Finally Here!";
    }
    else{
        clearInterval(x);
        document.getElementById("counter").innerHTML = "We are now happily ever after.";
    }
}, 1000/60);