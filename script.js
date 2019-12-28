// Variable declarations
let vacationType = "";
let groupSize;
let destination;
let travelSuggestion;

// While loop to make sure user in putting in desired input
while (
    vacationType.toLowerCase() !== "musical" &&
    vacationType.toLowerCase() !== "tropical" &&
    vacationType.toLowerCase() !== "adventurous"
) {
    vacationType = prompt(
        "What kind of trip would you like to go on? (Musical, tropical, or adventurous)"
    );
}

// While loop to make sure user is putting in a number
while (isNaN(parseInt(groupSize))) {
    groupSize = prompt('How many people are you going with?');

}

// Parsing group size to int to eliminate redundancy
groupSize = parseInt(groupSize);

// Lower casing vacationType to eliminate redundancy
vacationType = vacationType.toLowerCase();

// Vacation type conditional to determine destination
if (vacationType === 'musical') {

    destination = 'New Orleans';
}
else if (vacationType === 'tropical') {

    destination = 'beach vacation in Mexico.';
}
else if (vacationType === 'adventurous') {

    destination = 'whitewater rafting in the Grand Canyon';
}


// Group size conditional to determine travel suggestion
if (groupSize <= 2) {
    travelSuggestion = 'first class flight';
}

else if (groupSize >= 3 && groupSize <= 5) {
    travelSuggestion = 'helicopter'
}

else if (groupSize > 5) {
    travelSuggestion = 'charter flight'
}

// Alerting results to window
alert(`Since you are a group of ${groupSize} going on a ${vacationType} vacation, you should take a ${travelSuggestion} to ${destination} (Also printed to console)`)

// Logging results to console
console.log(`Since you are a group of ${groupSize} going on a ${vacationType} vacation, you should take a ${travelSuggestion} to ${destination}`)