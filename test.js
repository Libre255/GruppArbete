
//Measurements/{APPID}/{MEASURESITECODE}/{MEASUREPARAMETERCODE}/{FROMDATE}/{TODATE}


// Agnesberg Time and Values
let AgnesbergTnv = [{}]
async function AgnesbergTnvData(){
    let Codes = ["Level"]
    let Levgrensvagen = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Agnesberg/${Codes}?format=Json`
    let getData = await fetch(Levgrensvagen)
    let convert = await getData.json()
    AgnesbergTnv[0].Level = convert[0]
    
}
AgnesbergTnvData()
console.log(AgnesbergTnv);


let startDate = document.getElementById("startDate").value
    let endDate = document.getElementById("endDate").value
    let station = document.getElementById("station").value
    let measurmentType = document.getElementById("measureParameters").value
    let getData = await fetch(`http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/${station}/${measurmentType}/${startDate}/${endDate}?format=Json`)
    let Data = await getData.json()
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
            ListDatesAndValues.innerHTML += `<ol>${actualDate} <span>${Values}</span></ol>`
        });
   