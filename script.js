const thresholds={
lead:{safe:10,moderate:25},
mercury:{safe:6,moderate:10},
arsenic:{safe:10,moderate:50},
cadmium:{safe:3,moderate:10}
}

const map=L.map('map').setView([20,0],2)

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map)

function evaluate(levels){

let status="safe"

for(const metal in levels){
if(levels[metal]>thresholds[metal].moderate){
return "unsafe"
}
}

for(const metal in levels){
if(levels[metal]>thresholds[metal].safe){
status="moderate"
}
}

return status
}

function showResult(status){

const result=document.getElementById("result")

if(status==="safe"){
result.innerHTML="Safe to Drink ✅"
result.style.color="green"
return "green"
}

if(status==="moderate"){
result.innerHTML="Moderate Risk ⚠️"
result.style.color="orange"
return "orange"
}

result.innerHTML="Unsafe to Drink ❌"
result.style.color="red"
return "red"
}

async function geocode(place){

const url=`https://nominatim.openstreetmap.org/search?format=json&q=${place}`

const res=await fetch(url)
const data=await res.json()

if(data.length===0) return null

return{
lat:data[0].lat,
lon:data[0].lon,
name:data[0].display_name
}
}

document.getElementById("checkBtn").onclick=async function(){

const place=document.getElementById("place").value

const levels={
lead:parseFloat(document.getElementById("lead").value)||0,
mercury:parseFloat(document.getElementById("mercury").value)||0,
arsenic:parseFloat(document.getElementById("arsenic").value)||0,
cadmium:parseFloat(document.getElementById("cadmium").value)||0
}

const status=evaluate(levels)

const color=showResult(status)

const location=await geocode(place)

if(!location){
alert("Location not found")
return
}

const marker=L.circleMarker(
[location.lat,location.lon],
{
radius:10,
color:color,
fillColor:color,
fillOpacity:0.7
}
).addTo(map)

marker.bindPopup(
`<b>${location.name}</b><br>Water Status: ${status}`
)

map.setView([location.lat,location.lon],10)

}