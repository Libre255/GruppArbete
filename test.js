
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