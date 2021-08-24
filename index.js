let totalSpend = 0
let totalClicks = 0
let totalImpressions = 0
let totalCtr = 0
let totalCpc = 0

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
              var months = JSON.parse(localStorage.getItem("filterMonth"))
              if(months[1] == null){
                actual = new Date()
                months[1] = actual.getMonth()
                console.log(months[1])
              }
              FB.api(
                '/' + element.id + '/insights',
                'GET',
                {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-"+ months[1] +"-01',until:'2021-06-30'}]"},
                function(response) {
                    response.data.forEach(element => {
                    totalSpend += parseFloat(element.spend)
                    totalClicks += parseInt(element.clicks)
                    totalImpressions += parseInt(element.impressions)
                    totalCtr += parseFloat(element.ctr)
                    totalCpc += parseFloat(element.cpc)
                  });
                  localStorage.setItem("totalSpend", JSON.stringify(totalSpend))
                }
              );
            });
          }
        );

      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
    });
}