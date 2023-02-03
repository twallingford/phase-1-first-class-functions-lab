const returnFirstTwoDrivers = (function(nameArray) 
{
    return nameArray.slice(0,2);
})

const returnLastTwoDrivers = (function(nameArray)
{
    return nameArray.slice(-2);
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare){
    return (function() {
        return fare * fare; 
    });
}

const fareDoubler = function(createFareMultiplier) {
    return createFareMultiplier * 2;
}

const fareTripler = function(createFareMultiplier) {
    return createFareMultiplier * 3;
}

function selectDifferentDrivers(nameArray, firstOrLast) {
    if(firstOrLast === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(nameArray);
    }
    else if(firstOrLast === returnLastTwoDrivers)
    {
        return returnLastTwoDrivers(nameArray);
    }
}