var arreglo = []
var arreglo1 = []
var arreglo2 = []
var arreglo3 = []
var arreglo4 = []

// Semana 1 = 0
// Semana 2 = 4,305.93
// Semana 3 = 36,128.34
// Semana 4 = 25,976.89

//  if(spend1 == null || spend1 == undefined || spend1 == ''){
        //    spend1 = 0
        //  }
   
         // console.log(spend1)
        //  console.log(numLocal)
        //  totalSpend += spend1
        //  localStorage.setItem(`${nombreLocal}_${numLocal}`, JSON.stringify(totalSpend));

  // if(response || response.error){
       //   console.log(response)
       //   console.log(response.error)
       //   {alert("FALLO")}
       // }
       // console.log('querie')

// function Queries (mes, element, startDay, endDay, numLocal, nombreLocal) {
  
//     FB.api(
//      '/' + element.id + '/insights',
//      'GET',
//      {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-"+ mes +"-"+ startDay +"',until:'2021-"+ mes + "-"+ endDay +"'}]"},
//      function(response) {
       
//         console.log(response)
//         var string = JSON.stringify(response)
//         var obj = JSON.parse(string)
//         var data = obj.data
        
//         if(data[0] != undefined){
//           var spend = data[0].spend
//           var spend1 = parseFloat(spend)
//           arreglo1.push(spend1)
//         }
//      }
//    )
// }


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

          
          // idCampaigns.forEach((element, index) => {
          //   FB.api(
          //     '/' + element.id + '/insights',
          //     'GET',
          //     {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-"+ mes +"-01',until:'2021-"+ mes + "-08'}]"},
          //     function(response) {
                
          //       //  console.log(response)
          //        var string = JSON.stringify(response)
          //        var obj = JSON.parse(string)
          //        var data = obj.data
                 
          //        if(data[0] != undefined){
          //          var spend = data[0].spend
          //          var spend1 = parseFloat(spend)
          //          arreglo1[index] = spend1
          //        }
          //     }
          //   )
          // });
            
          //   idCampaigns.forEach((element, index) => {
          //   FB.api(
          //     '/' + element.id + '/insights',
          //     'GET',
          //     {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-"+ mes +"-09',until:'2021-"+ mes + "-15'}]"},
          //     function(response) {
                
          //       //  console.log(response)
          //        var string = JSON.stringify(response)
          //        var obj = JSON.parse(string)
          //        var data = obj.data
                 
          //        if(data[0] != undefined){
          //          var spend = data[0].spend
          //          var spend2 = parseFloat(spend)
          //          arreglo2[index] = spend2
          //        }
          //     }
          //   )
          // });


          idCampaigns.forEach((element, index) => {
            FB.api(
              '/' + element.id + '/insights',
              'GET',
              {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-"+ mes +"-16',until:'2021-"+ mes + "-24'}]"},
              function(response) {
                
                //  console.log(response)
                 var string = JSON.stringify(response)
                 var obj = JSON.parse(string)
                 var data = obj.data
                 
                 if(data[0] != undefined){
                   var spend = data[0].spend
                   var spend3 = parseFloat(spend)
                   arreglo3[index] = spend3
                 }

                var totalSpend3 = 0
                var i = 0
                for(var i = 0; i <= arreglo3.length; i++) {
                  totalSpend3 += parseFloat(arreglo3[i])
                }
                localStorage.setItem('Spend_3', JSON.stringify(totalSpend3))
              }
            )
          });

          idCampaigns.forEach((element, index) => {
            FB.api(
              '/' + element.id + '/insights',
              'GET',
              {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-"+ mes +"-25',until:'2021-"+ mes + "-31'}]"},
              function(response) {
                var string = JSON.stringify(response)
                var obj = JSON.parse(string)
                var data = obj.data
               
                if(data[0] != undefined){
                  var spend = data[0].spend
                  var spend4 = parseFloat(spend)
                  arreglo4[index] = spend4
                }
                console.log(arreglo4.length)
                console.log(arreglo4)
                var totalSpend4 = 0
                var i = 0
                for(var i = 0; i <= arreglo4.length; i++) {
                  totalSpend4 += parseFloat(arreglo4[i])
                  if (i==arreglo4.length){ 
                    localStorage.setItem('Spend_4', JSON.stringify(totalSpend4))
                  }
                }
              })
          });
        }
      );
    } else {
     console.log('User cancelled login or did not fully authorize.');
    }
  });
}

// var totalSpend1 = 0
// var i = 0
// for(var i = 0; i <= arreglo.length; i++) {
//   totalSpend1 += parseFloat(arreglo[i])
// }
// localStorage.setItem('Spend_1', JSON.stringify(totalSpend1))
console.log(arreglo1, arreglo2, arreglo3, arreglo4)