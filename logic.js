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
        mode = 1;
        hideShowButtons("#stopButton", "#lapButton");
        startAction();
    });
        //mode on
        //show stop and lap buttons
        //start counter
    
    //click on stopButton
        //show resume and reset buttons
        //stop counter
    
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
    * Divide lap/time counters to produce min,sec,centisec elapsed.
    **/
    function updateTime(){
        timeMinutes = Math.floor(timeCounter/6000);
        timeSeconds = Math.floor((timeCounter%6000)/100);
        timeCentiseconds = Math.floor(timeCounter%6000)%100;
        
        lapMinutes = Math.floor(lapCounter/6000);
        lapSeconds = Math.floor((lapCounter%6000)/100);
        lapCentiseconds = Math.floor(lapCounter%6000)%100;
    }
});