
// myKey : d56cf30a-f156-4636-8682-73d3095f1ff0

// MeasureSites/{APPID}:
// http://data.goteborg.se/RiverService/v1.1/MeasureSites/d56cf30a-f156-4636-8682-73d3095f1ff0?format=Json

// Measurements/{APPID}/{MEASURESITECODE}/{MEASUREPARAMETERCODE}
// http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0//Level?format=Json



let placeName = []
let timeAndValues = []
fetch("http://data.goteborg.se/RiverService/v1.1/MeasureSites/d56cf30a-f156-4636-8682-73d3095f1ff0?format=Json")
 .then(data => data.json())
 .then(object => {
    console.log(object);
    object.forEach(element => placeName.push(element.Code));  
    placeName.forEach(name =>{
        fetch(`http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/${name}/Level?format=Json`)
        .then(data => data.json())
        .then(newObject => {timeAndValues.push(newObject[0])})
    })   
 })
 
 console.log(timeAndValues);



