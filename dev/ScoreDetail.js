var StudentDetail = require('./StudentDetail').getStudent();

 var getScore = function(){
        return {
            name:StudentDetail.name,
            roll:StudentDetail.roll,
            score:95
        }
    }

var score = getScore();
console.log("getScore() method: ",score)