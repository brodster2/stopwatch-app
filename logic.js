$(function(){
    
    //Variables
    var mode = 0;//App mode
    var timeCounter = 0;//time counter
    var lapCounter = 0;//lap counter
    var action;//variable for setInterval
    var lapNumber = 0//Number of laps
    //minutes, seconds, centi seconds for time and lap
    var timeMinutes, timeSeconds, timeCentiseconds, lapMinutes, lapSeconds, lapCentiseconds;
    
    //On App load show start and lap buttons
    hideShowButtons("#startButton", "#lapButton");
    //click on startButton
    $('#startButton').click(function(){
        //mode on
        mode = 1;
        //show stop and lap buttons
        hideShowButtons("#stopButton", "#lapButton");
        //start counter
        startAction();
    });
    
    //click on stopButton
    $('#stopButton').click(function(){
        //show resume and reset buttons
        hideShowButtons("#resumeButton", "#resetButton");
        //stop counter
        clearInterval(action);
    });
        
    //click on resumeButton
        //show stop and lap buttons
        //resume counter
    
    //click on resetButton
        //reload the page
    $('#resetButton').click(function(){
        location.reload();
    });
    
    //click on lapButton
        //if mode is on
            //stop timer
            //resetLap and print lap details
            //start timer
    
    //functions
    /**
    * First hides all buttons then displays two required buttons
    **/
    function hideShowButtons(btnId1, btnId2){
        $('.control').hide();
        $(btnId1).show();
        $(btnId2).show();
    }
    
    /**
    * Starts interval and increases lap/time counters
    **/
    function startAction(){
        action = setInterval(function(){
            timeCounter++;
            lapCounter++;
            updateTime();
        }, 10);
    }
    
    /**
    * Divide lap/time counters to produce min,sec,centisec elapsed and display them.
    **/
    function updateTime(){
        timeMinutes = Math.floor(timeCounter/6000);
        timeSeconds = Math.floor((timeCounter%6000)/100);
        timeCentiseconds = Math.floor(timeCounter%6000)%100;
        
        $('#timeminute').text(format(timeMinutes));
        $('#timesecond').text(format(timeSeconds));
        $('#timecentisecond').text(format(timeCentiseconds));
        
        lapMinutes = Math.floor(lapCounter/6000);
        lapSeconds = Math.floor((lapCounter%6000)/100);
        lapCentiseconds = Math.floor(lapCounter%6000)%100;
        
        $('#lapminute').text(format(lapMinutes));
        $('#lapsecond').text(format(lapSeconds));
        $('#lapcentisecond').text(format(lapCentiseconds));
    }
    
    /**
    * Adds a 0 before number if less than 10
    **/
    function format(number){
        if(number < 10){
            return "0" + number;
        } else {
            return number;
        }
    }
});