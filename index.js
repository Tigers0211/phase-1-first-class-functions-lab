// Code your solution in this file!

//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers = function(array){
   
    return array.slice(0,2);
        
}

const returnLastTwoDrivers = function(array){

    return array.slice(2,4);

}

let selectingDrivers = []

selectingDrivers.unshift(returnFirstTwoDrivers)
selectingDrivers.push(returnLastTwoDrivers)

function createFareMultiplier(multiplier){
    return function fareMultiplier(total){
        return total * multiplier
    }
}

function fareDoubler(doubler){
let fare = doubler * 2;
    return fare
}

function fareTripler(tripler){
    let fare = tripler * 3;
    return fare
}
//selectDifferentDrivers(arrayOfDrivers, function)
//1) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
//2) returns the last two drivers when passed returnLastTwoDrivers() as the second argument

function selectDifferentDrivers(drivers, func){

    return func(drivers)

}