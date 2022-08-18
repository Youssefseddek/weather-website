
var search = document.getElementById("search")

var myDate = new Date()

// day 1
var day1 = document.getElementById("day1")
var date = document.getElementById("date")
var city = document.getElementById("city")
var degree =document.getElementById("degree")
var forcasticon1 =document.getElementById("forcasticon1")
var conditions1= document.getElementById("conditions1")




// day 2
var day2 = document.getElementById("day2")
var forcasticon2 = document.getElementById("forcasticon2")
var maxdeg2 = document.getElementById("maxdeg2")
var mindeg2 = document.getElementById("mindeg2")
var conditions2 = document.getElementById("conditions2")


// day 3
// var icon = document.getElementById("icon")
var day3 = document.getElementById("day3")
var forcasticon3 = document.getElementById("forcasticon3")
var maxdeg3 = document.getElementById("maxdeg3")
var mindeg3 = document.getElementById("mindeg3")
var conditions3 = document.getElementById("conditions3")


var month = [`January` , `February ` ,`March ` ,`April ` , `May`, `June`,"July","August" ," September"," October"," November","December"]

var days = ["Sunday" ,"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
console.log(days[myDate.getDay()])
console.log(myDate.getDay())


var list = []


function weather(x){


    var myhttp = new XMLHttpRequest()

    myhttp.open("get" , `http://api.weatherapi.com/v1/forecast.json?key=f0c8be0ef6b642ca89815421220406&q=${x}&days=3&aqi=no&alerts=no`)
    myhttp.send()
    
    myhttp.addEventListener("readystatechange" , function(){
    
        if(myhttp.readyState==4 && myhttp.status == 200){
    
            console.log(JSON.parse(myhttp.response))
            list = JSON.parse(myhttp.response)
            console.log(list)
            display()
    
        }
    
    })


}
weather("cairo")

search.addEventListener("keyup" , function(){

    weather(search.value)
    

})


function display(){

    // day 1
    day1.innerHTML = days[myDate.getDay()]
    date.innerHTML = myDate.getDate()+month[myDate.getMonth()]
    city.innerHTML = list.location.name 
    degree.innerHTML = list.current.temp_c +"<sup>o</sup>"+"C"
    forcasticon1.src =`https:${list.current.condition.icon}`
    
    conditions1.innerHTML = list.current.condition.text
    console.log(list.current.condition.icon)
   

    // day 2


    if(myDate.getDay()==6){

        day2.innerHTML = days[0]
        
    }
    else{

        day2.innerHTML = days[myDate.getDay()+1]

    }


    
    forcasticon2.src = `https:${list.forecast.forecastday[1].day.condition.icon}`
    maxdeg2.innerHTML = list.forecast.forecastday[1].day.maxtemp_c+"<sup>o</sup>"+"C"
    mindeg2.innerHTML = list.forecast.forecastday[1].day.mintemp_c+"<sup>o</sup>"
    conditions2.innerHTML = list.forecast.forecastday[1].day.condition.text
   

    // day 3
        
    if(myDate.getDay()==5){

        day3.innerHTML = days[0]
        
    }
    else if(myDate.getDay()==6){

        day3.innerHTML = days[1]

    }
    else{

        day3.innerHTML = days[myDate.getDay()+2]

    }


    forcasticon3.src = `https:${list.forecast.forecastday[2].day.condition.icon}`
    maxdeg3.innerHTML = list.forecast.forecastday[2].day.maxtemp_c+"<sup>o</sup>"+"C"
    mindeg3.innerHTML = list.forecast.forecastday[2].day.mintemp_c+"<sup>o</sup>"
    conditions3.innerHTML = list.forecast.forecastday[2].day.condition.text
    


}






$('.nav-link').click(function(){

    $(this).addClass('active')

    $(this).parent().siblings().find('a').removeClass('active')

})
console.log($('.nav-link'))