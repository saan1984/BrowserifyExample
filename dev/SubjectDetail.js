var StudentDetail = require('./StudentDetail').getStudent();

var getSubject = function(){
     return {
        name:StudentDetail.name,
        subject:"Computer"
     }
};

var subject = getSubject();
console.log("getSubject() method: ",subject)
