"use strict";


//generates a random number with a minimum of 1 and a maximum of maxNumber
function generateRandomNum(maxNumber) {
    var randomNum = 0;
    
    randomNum = Math.floor((Math.random() * maxNumber) + 1);
    
    return randomNum;
}

var MAX = 10;

function testRNG() {
    var rngOutputString = "";
    var rngOutputNumTracker= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    //int j= 0;
    var k = 0;
    
    
    for (var j = 0; j < 1000; j++)
    {
        var randomNum= generateRandomNum(MAX);
        //k++;
        switch(randomNum){
            case 1:
                rngOutputNumTracker[1]++;
                break;
            case 2:
                rngOutputNumTracker[2]++;
                break;
            case 3:
                rngOutputNumTracker[3]++;
                break;
            case 4:
                rngOutputNumTracker[4]++;
                break;
            case 5:
                rngOutputNumTracker[5]++;
                break;
            case 6:
                rngOutputNumTracker[6]++;
                break;
            case 7:
                rngOutputNumTracker[7]++;
                break;
            case 8:
                rngOutputNumTracker[8]++;
                break;
            case 9:
                rngOutputNumTracker[9]++;
                break;
            case 10:
                rngOutputNumTracker[10]++;
                break;
            default:
                rngOutputNumTracker[0]++;
                
        }
        
    }
    
//    rngOutputString = generateRandomNum(MAX);
//    var i = 1;
//    
//    while(i < 100) {
//        rngOutputString += ", " + generateRandomNum(MAX);
//        i++;
//    }
    //console.log(rngOutputString);
    console.log(rngOutputNumTracker);
    document.getElementById("jonnytestes").innerHTML = k + " numbers generated.";
}

function populateAdjectives() {
    var adjectives = ["big", "small", "red", "blue", "average"];
    //console.log(adjectives.length);
    //console.log(adjectives);
    return adjectives;
}

function getAdjective() {
    var adjectives= populateAdjectives();
    var i = adjectives.length;
    var j = generateRandomNum(i) - 1;
    
    var adjective = "<strong>" + adjectives[j] + "</strong>";
    
    return adjective;
}


function populateNouns() {
    var nouns = ["dragon", "mouse", "king", "banana", "spaghetti"];
    return nouns;
}

function getNoun() {
    var nouns = populateNouns();
    var i = nouns.length;
    var j = generateRandomNum(i) - 1;
    var noun = "<strong>" + nouns[j] + "</strong>";
    
    return noun;
}


function populateLocations() {
    var locations = ["the moon", "ewa beach", "kalihi", "the dream world", "the ocean", "the mountains"];
    return locations;
}

function getLocation() {
    var locations = populateLocations();
    var i = locations.length;
    var j = generateRandomNum(i) - 1;
    var location = "<strong>" + locations[j] + "</strong>";
    
    return location;
}


function generatePrompt() {
    var adjective = getAdjective();
    var noun = getNoun();
    var location = getLocation();

    document.getElementById("prompt").innerHTML = "Draw a/an " + adjective + " " + noun + " in/at " + location;
    //populateAdjectives();
    //testRNG();
}

function timer() {

}