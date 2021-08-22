window.fbAsyncInit = function()
{
    FB.init({
        appId   : "1345101055833302",
        cookie  : true,  // enable cookies to allow the server to access
                // the session
        xfbml   : true,  // parse social plugins on this page
        version : 'v11.0', // use version 2.1
        status  : false
    });

    FB.login(function(response) {
        console.log('Running login');
      if (response.authResponse) {
       console.log('Welcome!  Fetching your information.... ');
       FB.api('/me', function(response) {
         console.log('Good to see you, ' + response.name + '.');
       });

       FB.api(
        '/23848541904820038/insights',
        'GET',
        {"fields":"impressions,clicks,ctr,spend,cpc","time_ranges":"[{since:'2021-07-21',until:'2021-08-01'}]"},
        function(response) {
            console.log(response)
        }
      );
      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
    });

    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        var accessToken = response.authResponse.accessToken;
        console.log(accessToken)
      } 
    });

    // FB.login(function(response) { alert(response.authResponse.accessToken);
    // }, {perms:'read_stream,publish_stream,offline_access'});

    // FB.Event.subscribe('auth.statusChange', function(response) {
    //     console.log( "FB.Event.subscribe auth.statusChange" );
    //     console.log( response );
    // });



    // FB.getLoginStatus(function(response){
    //     console.log( "FB.getLoginStatus" );
    //     console.log( response );
    // });
}

console.log('hola')