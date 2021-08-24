var totalSpend = 0

// Semana 1 = 0
// Semana 2 = 4,305.93
// Semana 3 = 36,128.34
// Semana 4 = 25,976.89

function Queries (mes, element, startDay, endDay, numLocal, nombreLocal) {
   FB.api(
    '/' + element.id + '/insights',
    'GET',
    {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-"+ mes +"-"+ startDay +"',until:'2021-"+ mes + "-"+ endDay +"'}]"},
    function(response) {
      // if(response || response.error){
      //   console.log(response)
      //   console.log(response.error)
      //   {alert("FALLO")}
      // }
      // console.log('querie')
      console.log(response)
      var string = JSON.stringify(response)
      var obj = JSON.parse(string)
      var data = obj.data
      
      if(data[0] != undefined){
        var spend = data[0].spend
        var spend1 = parseFloat(spend)
      }

      if(spend1 == null || spend1 == undefined || spend1 == ''){
        spend1 = 0
      }

      // console.log(spend1)
      console.log(numLocal)
      totalSpend += spend1
      localStorage.setItem(`${nombreLocal}_${numLocal}`, JSON.stringify(totalSpend));
    }
  );
}

const Error = () => {
  console.log('Error en el foreach')
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

            // console.log(response)
            var idCampaigns = response.data
            var months = JSON.parse(localStorage.getItem("filterMonth"))
            var mes = parseInt(months[0]) + 1
            var mesAnterior = parseInt(months[0])

            for(var element of idCampaigns){
              Queries(mes, element, '1', '8', '1', 'Spend')
            }

            for(var element of idCampaigns){
              Queries(mes, element, '9', '15', '2', 'Spend')
            }
            
            // totalSpend = 0
            // idCampaigns.forEach((element, index) => {
            //   console.log('Llamado1')
            //   Queries(mes, element, '1', '8', '1', 'Spend')
            //   console.log(index)
            // });

            // totalSpend = 0
            // idCampaigns.forEach((element, index) => {
            //   console.log('Llamado2')
            //   Queries(mes, element, '9', '15', '2', 'Spend')
            //   console.log(index)
            // });

            // totalSpend = 0
            // idCampaigns.forEach((element, index) => {
            //   console.log('Llamado3')
            //   Queries(mes, element, '16', '24', '3', 'Spend')
            //   console.log(index)
            // });

            // totalSpend = 0
            // idCampaigns.forEach((element, index) => {
            //   console.log('Llamado4')
            //   Queries(mes, element, '25', '31', '4', 'Spend')
            //   console.log(index)
            // });
          }
        );
      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
    });
}