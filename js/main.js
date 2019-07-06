$(function(){

    // Initialization code
    $('ons-button').on('click', function(e) {
      ons.notification.alert('Button is tapped!');
    })

    // Main page init.
    document.addEventListener('init', function(event) {
        console.log('This is a lifecycle event!', event.target);
      
        
        var page = event.target;
        if (page.matches('#dashboard-page')) {
          $('#main-page ons-toolbar .center').text('Fevi');
        }else if(page.matches('#pef-page')){
          var pefData = [130, 100, 150, 210, 200, 300, 450];
          var ctx = document.getElementById('myChart').getContext('2d');
          var chart = new Chart(ctx, {
              // The type of chart we want to create
              type: 'line',

              // The data for our dataset
              data: {
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                  datasets: [{
                      label: 'Peak Expiratory Flow',
                      backgroundColor: '#043a91',
                      borderColor: '#023761',
                      data: pefData
                  }]
              },

              // Configuration options go here
              options: {}
          });
          $.each(pefData,function(i,v){
            console.log('working')
            $('#pef-page .page__content').append('<ons-card><div class="title">Today</div><div class="content">'+v+'</div></ons-card>');
          });
        }
    });

    // App Tabs Initialization
    document.addEventListener('prechange', function(event) {
        //on page transition
    });

    $('.js-gauge--1').kumaGauge({
      value : Math.floor((Math.random() * 99) + 1),
      label : {
        display : true,
        left : 'Low Risk',
        right : 'High Risk',
        fontFamily : 'Helvetica',
        fontColor : '#1E4147',
        fontSize : '11',
        fontWeight : 'bold'
      }

    });
    $('.js-gauge--1').kumaGauge('update', {
      value : Math.floor((Math.random() * 99) + 1)
    });

    
    //getLocation();


    


});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
 var latlong = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude; 

  console.log(latlong);
  $.ajax({
    url: 'https://api.airvisual.com/v2/nearest_city?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&key=98fbbc6e-b0ec-40a5-952f-fb55fffea363',
    type: 'GET',
    success: function(data) {
      console.log(data);
      $('.weather-info').html('<ons-row><ons-col><img src="https://d25jl8yaav4s0u.cloudfront.net/images/'+data.data.current.weather.ic+'.png" class="rounded-icon" width="48px"></ons-col><ons-col><div>Temperature</div><div>'+data.data.current.weather.tp+'&#8451;</div></ons-col><ons-col><div>Humidity</div><div>'+data.data.current.weather.hu+'</div></ons-col><ons-col><div>US AQI</div><div>'+data.data.current.pollution.aqius+'</div></ons-col></ons-row>')
      $('.w-location').text(data.data.city+", "+data.data.state+", "+data.data.country);
    },
    error: function(e) {
    //called when there is an error
    console.log(e.message);
    }
  });

}