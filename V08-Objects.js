//Objects are similar to arrays, instead of indices properties has value.

var dailyNeed = {
    "sleep" : "5 hrs",
    "yoga" : "2 hrs",
    "work" : "envolevment",
    "every Moments" : "exctacy"
}
console.log(dailyNeed["every Moments"]);
console.log(dailyNeed.yoga);
console.log(dailyNeed);
dailyNeed.food ="sutaible for the activity";
dailyNeed.rough ="rough Work";
console.log(dailyNeed);
delete dailyNeed.rough;
console.log(dailyNeed);

function checkObj(prop){
    if(dailyNeed.hasOwnProperty(prop)){
        return dailyNeed[prop];
    }else{
        return "not found";
    }
}

console.log(checkObj("sleep"));
console.log(checkObj(10));