
// myKey : d56cf30a-f156-4636-8682-73d3095f1ff0

// MeasureSites/{APPID}:
// http://data.goteborg.se/RiverService/v1.1/MeasureSites/d56cf30a-f156-4636-8682-73d3095f1ff0?format=Json

// Measurements/{APPID}/{MEASURESITECODE}/{MEASUREPARAMETERCODE}
// http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0//Level?format=Json

// data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Agnesberg/Level/1800-05-31/2200-01-09?format=Json
async function info(){
    let ta = await fetch("http://data.goteborg.se/RiverService/v1.1/MeasureSites/d56cf30a-f156-4636-8682-73d3095f1ff0?format=Json")
    let response = await ta.json()
    console.log(response);
}
info()

let formOfDate = document.getElementById("submitDate")
let ListDatesAndValues = document.querySelector(".listOfMeasurments")
formOfDate.addEventListener("submit", historiskData);     
console.log(ListDatesAndValues.children.length);
async function historiskData(e){   
    e.preventDefault()
    try{
     let startDate = document.getElementById("startDate").value
     let endDate = document.getElementById("endDate").value
     let station = document.getElementById("station").value
     let measurmentType = document.getElementById("measureParameters").value
     let getData = await fetch(`http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/${station}/${measurmentType}/${startDate}/${endDate}?format=Json`)
     let Data = await getData.json()
     //Adding Title To each List according to the measurment Type  & Error Handling if Measurment Not Found ^_^/
      if(Data.length == 0){
        alert("Data Not Found")
      }else{
        ListDatesAndValues.innerHTML +=`<span id="titleType">${measurmentType} of ${station}</span>`
      }  
     //Adjusting Data and Inserting into DOM 
        Data.forEach(element => {
            //Get and Convert Date into Something readble xD
            let onlyDateCode = element.TimeStamp
            let dateString = onlyDateCode.substring(
                onlyDateCode.lastIndexOf("(") + 1,
                onlyDateCode.lastIndexOf(")")
                ); 
            let converIntoNr = parseFloat(dateString);
            let actualDate = new Date(converIntoNr).toString();
            //Get Values
            let Values = element.Value;
            //Imerge into HTML :D
            ListDatesAndValues.innerHTML += `<ul id="historiskData">
            <ol>${actualDate} <span>${Values}</span></ol>
            </ul>`
            
        });
        //Reset Button ::D
        document.getElementById("resetBtn").onclick = (e)=>{
            e.preventDefault()
            ListDatesAndValues.innerHTML = ""
        }
        
    }catch(error){
        alert("Insert Date")
     }
    
}



//ideas 

// Data.forEach(element =>{
//     var dateString = element.TimeStamp;
//     //Display only the Date numbers
//     var cutOutOnlyDate = dateString.substring(
//         dateString.lastIndexOf("(") + 1,
//         dateString.lastIndexOf(")")
//      );
//     var dateConvertNr = parseFloat(cutOutOnlyDate);
//     // Convert the date into a string
//     actualDate = new Date(dateConvertNr)
//  });


