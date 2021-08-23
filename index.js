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
            const idCampaigns = response.data
            console.log(idCampaigns)
            idCampaigns.forEach(element => {
              console.log(element.id)
              FB.api(
                '/' + element + '/insights',
                'GET',
                {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-07-01',until:'2021-08-01'}]"},
                function(response) {
                    console.log(response)
                }
              );
            });
            // fore(const id in idCampaigns){
            //   console.log(id.id)
            //   FB.api(
            //     '/' + idCampaigns[id] + '/insights',
            //     'GET',
            //     {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-06-01',until:'2021-06-31'}]"},
            //     function(response) {
            //         console.log(response)
            //     }
            //   );
            // }
          }
        );

      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
    });
}