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


});