var totalSpend = 0
// 23848541904780038

var queries = (mes, element, startDay, endDay, numLocal, nombreLocal) => {
  FB.api(
    '/' + element.id + '/insights',
    'GET',
    {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-"+ mes +"-"+ startDay +"',until:'2021-"+ mes + "-"+ endDay +"'}]"},
    function(response) {
      console.log('querie')
      console.log(response)
      var string = JSON.stringify(response)
      var obj = JSON.parse(string)
      var data = obj.data
      
      if(data[0] != undefined){
        var spend = data[0].spend
        var spend1 = parseFloat(spend)
        totalSpend += spend1
        localStorage.setItem(`${nombreLocal}_${numLocal}`, JSON.stringify(totalSpend));
      }
    }
  );
}

// var queries = (mes, startDay, endDay, numLocal, nombreLocal) => {
//   FB.api(
//     '/23848541904780038/insights',
//     'GET',
//     {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-"+ mes +"-"+ startDay +"',until:'2021-"+ mes + "-"+ endDay +"'}]"},
//     function(response) {
//       console.log('querie')
//       console.log(response)
//       var string = JSON.stringify(response)
//       var obj = JSON.parse(string)
//       var data = obj.data
      
//       if(data[0] != undefined){
//         var spend = data[0].spend
//         var spend1 = parseFloat(spend)
//         totalSpend += spend1
//         localStorage.setItem(`${nombreLocal}_${numLocal}`, JSON.stringify(totalSpend));
//       }
//     }
//   );
// }

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
            var months = JSON.parse(localStorage.getItem("filterMonth"))
            var mes = parseInt(months[0]) + 1
            var mesAnterior = parseInt(months[0])

            idCampaigns.forEach(element => {

              queries(mes, element, '1', '8', 1, 'Spend')

            });

            // totalSpend = 0
            // idCampaigns.forEach(element => {

            //   queries(mes, element, '9', '15', 2, 'Spend')

            // });

            // totalSpend = 0
            // idCampaigns.forEach(element => {

            //   queries(mes, element, '16', '24', 3, 'Spend')

            // });

            // totalSpend = 0
            // idCampaigns.forEach(element => {

            //   queries(mes, element, '25', '31', 4, 'Spend')

            // });
          }
        );

      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
    });
}