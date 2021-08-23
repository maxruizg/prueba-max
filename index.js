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
          '/act_1468139590049416/campaigns',
          'GET',
          {"fields":"id"},
          function(response) {
            const idCampaigns = response
            console.log(idCampaigns)
            for(const id in idCampaigns){
              FB.api(
                '/' + idCampaigns.data.id + '/insights',
                'GET',
                {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2020-08-01',until:'2020-08-31'}]"},
                function(response) {
                    console.log(response)
                }
              );
            }
          }
        );

      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
    });
}