let mesActual = ''
let mesAnterior = ''
var d = new Date()
const year = d.getFullYear()

if(JSON.parse(localStorage.getItem("filterMonth")) == null){
  mesActual = d.getMonth().toString()
  if(mesActual == '1'){
    mesAnterior = '12'
  }else {
    mesAnterior = parseInt(mesActual - 1).toString()
  }
}else {
  var aux = parseInt(JSON.parse(localStorage.getItem("filterMonth"))) + 1
  mesActual = aux.toString()
  if(mesActual == '1'){
    mesAnterior = '12'
  }else {
    mesAnterior = parseInt(mesActual - 1).toString()
  }
}

console.log(mesActual)
console.log(mesAnterior)


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

       //Datos mes actual
        if((parseInt(mesActual) == d.getMonth() && 8 > d.getDate()) || parseInt(mesActual) > d.getMonth()){
          localStorage.setItem('Semana-1', JSON.stringify(0))
        }else {
          FB.api(
            '/act_704269000261751/insights',
            'GET',
            {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'"+ year +"-"+ mesActual + "-01',until:'"+ year +"-"+ mesActual +"-08'}]"},
            function(response) {
              if(response.data[0] != undefined || parseInt(mesActual) > d.getMonth){
                localStorage.setItem('Semana-1', JSON.stringify(response.data[0]))
              }else {
                localStorage.setItem('Semana-1', JSON.stringify(0))
              }
            }
          );
        }

        if((parseInt(mesActual) == d.getMonth() && 8 > d.getDate()) || parseInt(mesActual) > d.getMonth()){
          localStorage.setItem('Semana-1', JSON.stringify(0))
        }else {
          
        } 
        FB.api(
          '/act_704269000261751/insights',
          'GET',
          {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-"+ mesActual +"-09',until:'2021-"+ mesActual +"-15'}]"},
          function(response) {
            if(response.data[0] != undefined){
              localStorage.setItem('Semana-2', JSON.stringify(response.data[0]))
            }else {
              localStorage.setItem('Semana-2', JSON.stringify(0))
            }
          }
        );

        if((parseInt(mesActual) == d.getMonth() && 8 > d.getDate()) || parseInt(mesActual) > d.getMonth()){
          localStorage.setItem('Semana-1', JSON.stringify(0))
        }else {
          
        }
        FB.api(
          '/act_704269000261751/insights',
          'GET',
          {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-"+ mesActual +"-16',until:'2021-0"+ mesActual +"-24'}]"},
          function(response) {
            if(response.data[0] != undefined){
              localStorage.setItem('Semana-3', JSON.stringify(response.data[0]))
            }else {
              localStorage.setItem('Semana-3', JSON.stringify(0))
            }
          }
        );

        if((parseInt(mesActual) == d.getMonth() && 8 > d.getDate()) || parseInt(mesActual) > d.getMonth()){
          localStorage.setItem('Semana-1', JSON.stringify(0))
        }else {
          
        }
        FB.api(
          '/act_704269000261751/insights',
          'GET',
          {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-"+ mesActual +"-25',until:'2021-"+ mesActual +"-31'}]"},
          function(response) {
            if(response.data[0] != undefined){
              localStorage.setItem('Semana-4', JSON.stringify(response.data[0]))
            }else {
              localStorage.setItem('Semana-4', JSON.stringify(0))
            }
          }
        );


        // Datos mes anterior

        if((parseInt(mesActual) == d.getMonth() && 8 > d.getDate()) || parseInt(mesActual) > d.getMonth()){
          localStorage.setItem('Semana-1', JSON.stringify(0))
        }else {
          
        }
        FB.api(
          '/act_704269000261751/insights',
          'GET',
          {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-"+ mesAnterior + "-01',until:'2021-"+ mesAnterior +"-08'}]"},
          function(response) {
            if(response.data[0] != undefined){
              localStorage.setItem('Semana-1a', JSON.stringify(response.data[0]))
            }else {
              localStorage.setItem('Semana-1a', JSON.stringify(0))
            }
          }
        );

        if((parseInt(mesActual) == d.getMonth() && 8 > d.getDate()) || parseInt(mesActual) > d.getMonth()){
          localStorage.setItem('Semana-1', JSON.stringify(0))
        }else {
          
        }
        FB.api(
          '/act_704269000261751/insights',
          'GET',
          {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-"+ mesAnterior +"-09',until:'2021-"+ mesAnterior +"-15'}]"},
          function(response) {
            console.log(response)
            if(response.data[0] != undefined){
              localStorage.setItem('Semana-2a', JSON.stringify(response.data[0]))
            }else {
              localStorage.setItem('Semana-2a', JSON.stringify(0))
            }
          }
        );

        if((parseInt(mesActual) == d.getMonth() && 8 > d.getDate()) || parseInt(mesActual) > d.getMonth()){
          localStorage.setItem('Semana-1', JSON.stringify(0))
        }else {
          
        }
        FB.api(
          '/act_704269000261751/insights',
          'GET',
          {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-"+ mesAnterior +"-16',until:'2021-0"+ mesAnterior +"-24'}]"},
          function(response) {
            if(response.data[0] != undefined){
              localStorage.setItem('Semana-3a', JSON.stringify(response.data[0]))
            }else {
              localStorage.setItem('Semana-3a', JSON.stringify(0))
            }
          }
        );

        if((parseInt(mesActual) == d.getMonth() && 8 > d.getDate()) || parseInt(mesActual) > d.getMonth()){
          localStorage.setItem('Semana-1', JSON.stringify(0))
        }else {
          
        }
        FB.api(
          '/act_704269000261751/insights',
          'GET',
          {"fields":"spend,clicks,impressions,ctr,cpc","time_ranges":"[{since:'2021-"+ mesAnterior +"-25',until:'2021-"+ mesAnterior +"-31'}]"},
          function(response) {
            if(response.data[0] != undefined){
              localStorage.setItem('Semana-4a', JSON.stringify(response.data[0]))
            }else {
              localStorage.setItem('Semana-4a', JSON.stringify(0))
            }
          }
        );

      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
    });
}