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


});