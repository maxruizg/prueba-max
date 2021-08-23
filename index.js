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

        var since = "since:'2021-07-31'"
        var until = "until:'2021-07-31'"
        
        FB.api(
          '/23848541904820038/insights',
          'GET',
          {"fields":"impressions,clicks,ctr,spend,cpc","time_ranges":"[{" + since + "," + until + "}]"},
          function(response) {
              console.log(response)
          }
        );
        
      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
    });

    // FB.getLoginStatus(function(response) {
    //   if (response.status === 'connected') {
    //     var accessToken = response.authResponse.accessToken;
    //     console.log(accessToken)
    //   } 
    // });
}

console.log('hola')