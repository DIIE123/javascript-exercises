let date = new Date();

const findTheOldest = function(arr) {
    return arr.reduce(compareDates, { name: "", yearOfBirth: date.getFullYear()});
};

function compareDates(curOldest, person) {
    let age = 0;
    
    if ("yearOfDeath" in person) {
        age = person.yearOfDeath - person.yearOfBirth;
    }
    else {
        age = date.getFullYear() - person.yearOfBirth;
    }

    let oldestAge = 0;
    if ("yearOfDeath" in curOldest) {
        oldestAge = curOldest.yearOfDeath - curOldest.yearOfBirth;
    }
    else {
        oldestAge = date.getFullYear() - curOldest.yearOfBirth;
    }

    if (age > oldestAge) return person;
    else return curOldest;
}

// Do not edit below this line
module.exports = findTheOldest;
