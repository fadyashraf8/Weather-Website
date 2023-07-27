
async function getWheather(city) {
    let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=1eb0536e19714696b95145523232207&q=${city}&days=3`)
  
    if (data.ok && 400 != data.status) {
        let myData = await data.json();
        display1(myData)
        display2(myData)
        display3(myData)
    }
}


    document.getElementById("search").addEventListener("keyup",myData =>{
            getWheather(myData.target.value)
    
    });




var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function display1(myData) {
    if (myData != null) {
        let d = new Date(myData.current.last_updated)
        let temp = `            <div class="row border border-1 border-dark">
        <div class="col-md-6">
            <h5>${days[d.getDay()]}</h5>
        </div>
        <div class="col-md-6">
            <h5>${d.getDate() + monthNames[d.getMonth()]}</h5>
        </div>
    </div>
    <h5>${myData.location.name}</h5>
    <div class="row border border-1 border-dark">
        <div class="col-md-6">
            <h5 class="fs-7 fw-bold">${myData.current.temp_c}<span>oC</span></h5>
        </div>
        <div class="col-md-6">
        <img src="https:${myData.current.condition.icon}" alt="" class="w-100">
        </div>
    </div>
    <h5 >${myData.current.condition.text}</h5>
    <div class="row border border-1 border-dark">
        <div class="col-md-4">
            <h5> <i class="fa-solid fs-4 my-1 fa-umbrella"></i>20%</h5>
        </div>
        <div class="col-md-4 my-2">
            <h5> <i class="fa-solid fs-5 fa-wind"></i>18km/h</h5>
        </div>
        <div class="col-md-4">
        <h5> <i class="fa-solid fs-5 fa-compass"></i>east</h5>
        </div>
    </div>`;

    document.getElementById("myrow1").innerHTML = temp
}
}




function display2(myData) {
    let thisDate=myData.forecast.forecastday[1]
     let d = new Date(thisDate.date)
    let temp = ""
  

         temp += `  <div class="row">

         <div class="col-md-12 text-center mt-2">
            <h5>${days[d.getDay()]}</h5>
         </div>
     </div>
    <div class="row">
        <div class="col-md-12 text-center">
        <img src="https:${thisDate.day.condition.icon}" alt="" class="w-1000">
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 text-center">
            <h5 class="fs-1">${thisDate.day.maxtemp_c}</h5>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 text-center ">
            <h5>${thisDate.day.mintemp_c}</h5>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 text-center ">
            <h5>${thisDate.day.condition.text}</h5>
        </div>
    </div>`
    

document.getElementById("myrow2").innerHTML = temp

    
}
function display3(myData) {
    let thisDate=myData.forecast.forecastday[2]
     let d = new Date(thisDate.date)
    let temp = ""
  

         temp += `  <div class="row">

         <div class="col-md-12 text-center mt-2">
            <h5>${days[d.getDay()]}</h5>
         </div>
     </div>
    <div class="row">
        <div class="col-md-12 text-center">
        <img src="https:${thisDate.day.condition.icon}" alt="" class="w-1000">
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 text-center">
            <h5 class="fs-1">${thisDate.day.maxtemp_c}</h5>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 text-center ">
            <h5>${thisDate.day.mintemp_c}</h5>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 text-center ">
            <h5>${thisDate.day.condition.text}</h5>
        </div>
    </div>`
    

document.getElementById("myrow3").innerHTML = temp

    
}


getWheather("cairo")








