
// myKey : d56cf30a-f156-4636-8682-73d3095f1ff0

// MeasureSites/{APPID}:
// http://data.goteborg.se/RiverService/v1.1/MeasureSites/d56cf30a-f156-4636-8682-73d3095f1ff0?format=Json

// Measurements/{APPID}/{MEASURESITECODE}/{MEASUREPARAMETERCODE}
// http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0//Level?format=Json



let placesData = []
console.log(placesData);
// Overall Data of Gothenburg
async function getDataGothenburg(){
  let MainDataLink = "http://data.goteborg.se/RiverService/v1.1/MeasureSites/d56cf30a-f156-4636-8682-73d3095f1ff0?format=Json"
  let response = await fetch(MainDataLink)
  let dataObject = await response.json()
    //Archiving Object List
    dataObject.forEach(element => placesData.push(element))
}
getDataGothenburg().catch(error =>{
    console.log("Check Errors!"); 
    console.error(error);
})


// Agnesberg Time and Values
let AgnesbergTnv = [{}]
async function AgnesbergTnvData(){
    let Codes = ["Level"]
    let Levgrensvagen = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Agnesberg/${Codes}?format=Json`
    let getData = await fetch(Levgrensvagen)
    let convert = await getData.json()
    AgnesbergTnv[0].Level = convert[0]
    // let tesaa = document.getElementById("test")
    // tesaa.innerHTML = `hELLO : ${AgnesbergTnv[0].Level.TimeStamp}` // This is how you insert Via DOM 
}
AgnesbergTnvData()

//Arketjarn Times and Values
let ArketjarnTnv = [{}]
async function ArketjarnTnvData(){
    let Codes = ["Level"]
    let Levgrensvagen = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Arketjarn/${Codes}?format=Json`
    let getData = await fetch(Levgrensvagen)
    let convert = await getData.json()
    ArketjarnTnv[0].Level = convert[0]
}
ArketjarnTnvData()

// Eriksberg Times and Values
let EriksbergTnV = [{}]
async function EriksbergTnvData(){
    let Codes = ["Level"]
    let Levgrensvagen = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Eriksberg/${Codes}?format=Json`
    let getData = await fetch(Levgrensvagen)
    let convert = await getData.json()
    EriksbergTnV[0].Level = convert[0]
}
EriksbergTnvData()

//Garda
let GardaTnV = [{},{},{}]
async function GardaTnvData(){
    let Codes = ["Level", "LevelDownstream", "Tapping"]
    //Level
    let Level = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Garda/${Codes[0]}?format=Json`
     let getData = await fetch(Level)
     let convert = await getData.json()
    GardaTnV[0].Level = convert[0];
    //LevelDownstream
    let LevelDownstream = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Garda/${Codes[1]}?format=Json`
     let getData2 = await fetch(LevelDownstream)
     let convert2 = await getData2.json()
    GardaTnV[1].LevelDowstream = convert2[0];
    //Tapping
    let Tapping = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Garda/${Codes[2]}?format=Json`
     let getData3 = await fetch(Tapping)
     let convert3 = await getData3.json()
    GardaTnV[2].Tapping = convert3[0];
}
GardaTnvData()

// Harsjo
let HarsjoTnV = [{},{},{}]
async function HarsjoTnvData(){
    let Codes = ["Level", "Tapping", "RainFall"]
    //Level
    let url = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Harsjo/${Codes[0]}?format=Json`
    let getData = await fetch(url)
    let convert = await getData.json()
    HarsjoTnV[0].Level = convert[0]
   //Tapping
   let Tapping = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Harsjo/${Codes[1]}?format=Json`
   let getData2 = await fetch(Tapping)
   let convert2 = await getData2.json()
   HarsjoTnV[1].Tapping = convert2[0]
   //RainFall
   let RainFall = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Harsjo/${Codes[2]}?format=Json`
   let getData3 = await fetch(RainFall)
   let convert3 = await getData3.json()
   HarsjoTnV[2].RainFall = convert3[0]
}
HarsjoTnvData()

// Kalleredsbacken
let KalleredsbackenTnV = [{}]
async function KalleredsbackenTnvData(){
    let Codes = ["Level"]
    let url = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Kalleredsbacken/${Codes[0]}?format=Json`
    let getData = await fetch(url)
    let convert = await getData.json()
    KalleredsbackenTnV[0].Level = convert[0]
}
KalleredsbackenTnvData()

//Landvetter
let LandvetterTnV = [{},{},{},{}]
async function LandvetterTnvData(){
    let Codes = ["Level", "LevelDownstream","Tapping", "RainFall"]
    //Levels
    let url = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Landvetter/${Codes[0]}?format=Json` 
    let getData = await fetch(url)
    let convert = await getData.json()
    LandvetterTnV[0].Level = convert[0]
    //LevelDownstream
    let LevelDowstream = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Landvetter/${Codes[1]}?format=Json`
    let getData2 = await fetch(LevelDowstream)
    let convert2 = await getData2.json()
    LandvetterTnV[1].LevelDownstream = convert2[0]
    //Tapping
    let Tapping = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Landvetter/${Codes[2]}?format=Json`  
    let getData3 = await fetch(Tapping)
    let convert3 = await getData3.json()
    LandvetterTnV[2].Tapping = convert3[0]
    //RainFall
    let RainFall = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Landvetter/${Codes[3]}?format=Json` 
    let getData4 = await fetch(RainFall)
    let convert4 = await getData4.json()
    LandvetterTnV[3].RainFall = convert4[0]
}
LandvetterTnvData()

//Levgrensvagen
let LevgrensvagenTnV = [{},{}]
async function LevgrensvagenTnvData(){
    let Codes = ["Level", "Flow"]
    //Level
    let url = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Levgrensvagen/${Codes[0]}?format=Json`
    let getData = await fetch(url)
    let convert = await getData.json()
    LevgrensvagenTnV[0].Level = convert[0]
    //Flow
    let Flow = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Levgrensvagen/${Codes[1]}?format=Json`
    let getData2 = await fetch(Flow)
    let convert2 = await getData2.json()
    LevgrensvagenTnV[1].Flow = convert2[0]
}
LevgrensvagenTnvData()

//Larjean
let LarjeanTnV = [{}]
async function LarjeanTnvData(){
    let Codes = ["Level"]
    //Level
    let url = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Larjean/${Codes[0]}?format=Json`
    let getData = await fetch(url)
    let convert = await getData.json()
    LarjeanTnV[0].Level = convert[0]
}
LarjeanTnvData()

//MolndalCentrum
let MolndalCentrumTnV = [{},{}]
async function MolndalCentrumTnvData(){
    let Codes = ["Level", "Flow"]
    //Level
    let url = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/MolndalCentrum/${Codes[0]}?format=Json`
    let getData = await fetch(url)
    let convert = await getData.json()
    MolndalCentrumTnV[0].Level = convert[0]
    //Flow
    let Flow = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/MolndalCentrum/${Codes[1]}?format=Json`
    let getData2 = await fetch(Flow)
    let convert2 = await getData2.json()
    MolndalCentrumTnV[1].Flow = convert2[0]
}
MolndalCentrumTnvData()

//Nedsjon
let NedsjonTnV = [{},{},{},{}]
async function NedsjonTnvData(){
    let Codes = ["Level", "LevelDownstream","Tapping", "RainFall"]
    //Levels
    let url = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Nedsjon/${Codes[0]}?format=Json` 
    let getData = await fetch(url)
    let convert = await getData.json()
    NedsjonTnV[0].Level = convert[0]
    //LevelDownstream
    let LevelDowstream = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Nedsjon/${Codes[1]}?format=Json`
    let getData2 = await fetch(LevelDowstream)
    let convert2 = await getData2.json()
    NedsjonTnV[1].LevelDownstream = convert2[0]
    //Tapping
    let Tapping = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Nedsjon/${Codes[2]}?format=Json`  
    let getData3 = await fetch(Tapping)
    let convert3 = await getData3.json()
    NedsjonTnV[2].Tapping = convert3[0]
    //RainFall
    let RainFall = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Nedsjon/${Codes[3]}?format=Json` 
    let getData4 = await fetch(RainFall)
    let convert4 = await getData4.json()
    NedsjonTnV[3].RainFall = convert4[0]
}
NedsjonTnvData()

//Rada
let RadaTnV = [{}]
async function RadaTnvData(){
    let Codes = ["Level"]
    //Level
    let url = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Rada/${Codes[0]}?format=Json`
    let getData = await fetch(url)
    let convert = await getData.json()
    RadaTnV[0].Level = convert[0]
}
RadaTnvData()

//Skars led
let SkarsledTnV = [{}]
async function SkarsledTnvData(){
    let Codes = ["Level"]
    //Level
    let url = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Skarsled/${Codes[0]}?format=Json`
    let getData = await fetch(url)
    let convert = await getData.json()
    SkarsledTnV[0].Level = convert[0]
}
SkarsledTnvData()

//Slussen
let SlussenTnV = [{},{},{}]
async function SlussenTnvData(){
    let Codes = ["Level", "LevelDownstream","Tapping"]
    //Levels
    let url = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Slussen/${Codes[0]}?format=Json` 
    let getData = await fetch(url)
    let convert = await getData.json()
    SlussenTnV[0].Level = convert[0]
    //LevelDownstream
    let LevelDowstream = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Slussen/${Codes[1]}?format=Json`
    let getData2 = await fetch(LevelDowstream)
    let convert2 = await getData2.json()
    SlussenTnV[1].LevelDownstream = convert2[0]
    //Tapping
    let Tapping = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Slussen/${Codes[2]}?format=Json`  
    let getData3 = await fetch(Tapping)
    let convert3 = await getData3.json()
    SlussenTnV[2].Tapping = convert3[0]
}
SlussenTnvData()

//Stensjon
let StensjonTnV = [{},{},{},{}]
async function StensjonTnvData(){
    let Codes = ["Level", "Tapping", "RainFall"]
    //Levels
    let url = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Stensjon/${Codes[0]}?format=Json` 
    let getData = await fetch(url)
    let convert = await getData.json()
    StensjonTnV[0].Level = convert[0]
    //Tapping
    let Tapping = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Stensjon/${Codes[1]}?format=Json`  
    let getData3 = await fetch(Tapping)
    let convert3 = await getData3.json()
    StensjonTnV[2].Tapping = convert3[0]
    //RainFall
    let RainFall = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Stensjon/${Codes[2]}?format=Json` 
    let getData4 = await fetch(RainFall)
    let convert4 = await getData4.json()
    StensjonTnV[3].RainFall = convert4[0]
}
StensjonTnvData()

//Tingstad
let TingstadTnV = [{}]
async function TingstadTnvData(){
    let Codes = ["Level"]
    //Level
    let url = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Tingstad/${Codes[0]}?format=Json`
    let getData = await fetch(url)
    let convert = await getData.json()
    TingstadTnV[0].Level = convert[0]
}
TingstadTnvData()

//Torshamnen
let TorshamnenTnV = [{}]
async function TorshamnenTnvData(){
    let Codes = ["Level"]
    //Level
    let url = `http://data.goteborg.se/RiverService/v1.1/Measurements/d56cf30a-f156-4636-8682-73d3095f1ff0/Torshamnen/${Codes[0]}?format=Json`
    let getData = await fetch(url)
    let convert = await getData.json()
    TorshamnenTnV[0].Level = convert[0]
}
TorshamnenTnvData()



