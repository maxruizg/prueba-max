var totalSpend = 0

var queries = (mes, element, startDay, endDay) => {
  FB.api(
    '/' + element.id + '/insights',
    'GET',
    {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-"+ mes +"-"+ startDay +"',until:'2021-"+ mes + "-"+ endDay +"'}]"},
    function(response) {
      console.log(response)
      console.log(mes)
      var string = JSON.stringify(response)
      var obj = JSON.parse(string)
      var data = obj.data
      
      if(data[0] != undefined){
        var spend = data[0].spend
        var spend1 = parseFloat(spend)
        console.log(spend1)
      }
      return spend
    }
  );
}

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

            console.log(response)
            const idCampaigns = response.data
            idCampaigns.forEach(element => {
              var months = JSON.parse(localStorage.getItem("filterMonth"))
              consolelog(months)
              var mes = parseInt(months[0]) + 1

              queries(totalSpend, mes, element, '1', '31')
              // totalSpend += queries(totalSpend, mes, element, '1', '31')
              // localStorage.setItem("Spend_1", JSON.stringify(totalSpend));
              

              // FB.api(
              //   '/' + element.id + '/insights',
              //   'GET',
              //   {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-"+ mes +"-01',until:'2021-"+ mes + "-08'}]"},
              //   function(response) {
                  
              //   }
              // );
              // totalSpend = 0     
              // FB.api(
              //   '/' + element.id + '/insights',
              //   'GET',
              //   {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-"+ mes +"-09',until:'2021-"+ mes + "-15'}]"},
              //   function(response) {
                  
              //   }
              // );
              // totalSpend = 0
              // FB.api(
              //   '/' + element.id + '/insights',
              //   'GET',
              //   {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-"+ mes +"-16',until:'2021-"+ mes + "-23'}]"},
              //   function(response) {
              //     console.log(response)
              //   }
              // );

              

            });
          }
        );

      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
    });
}