
 async function check(){
    let a=document.getElementById('cityName').value;
   //console.log(a);
    const key='74a138b399a4f9ad392d2e26418d82ae'
     const url=`https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=${key}&units=metric`
        
      let res = await fetch(url);
      let data = await res.json();
      //console.log(data);
      document.querySelector('.box h1').innerHTML=data.name;
      document.querySelector('.box h2').innerHTML="Temp :"+data.main.temp+"℃";
      document.getElementById('humi').innerHTML="Humidity :"+data.main.humidity+" %"
    document.getElementById('pressure').innerHTML='Pressure :'+data.main.pressure+" atm";
     document.getElementById('Speed').innerHTML='Wind Speed :'+data.wind.speed+" km/h";

    }

//Web api 
//storage Api
 // 1. Local storage
 // size- 5-10MB
 //life-lifetime until manually or browser deleted
 //Function()=>.setItem,.removeItem,.clear
//2. Session Storage
//  size-5-10MB
//life- until browser closing
//Function()=>.setItem,.removeItem,.clear
//3. cookies 
 // size -> max-5MB
 //life-> unlimited until expiration
 //Function=>document.cookies

