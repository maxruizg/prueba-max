let mesActual = ''
let mesAnterior = ''
var d = new Date()
let year = ''
let sinceDay = ''
let untilDay = ''
var flagReload;

let prueba = []

// Guardamos los filtros default en local storage
metrica = []
if(JSON.parse(localStorage.getItem("filterData")) == null){
    metrica = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    localStorage.setItem("filterData", JSON.stringify(metrica))
}

if(JSON.parse(localStorage.getItem("filterMonth")) == null){
  mesActual = d.getMonth().toString()
  if(mesActual == '1'){
    mesAnterior = '12'
  }else {
    mesAnterior = parseInt(mesActual - 1).toString()
  }
  localStorage.setItem("filterMonth", JSON.stringify(mesAnterior))
  var select = document.getElementById(`selectMonth`)
  console.log(select)
  var options = select.options
  console.log(options)
  options[mesAnterior].selected = true
}else {
  var aux = parseInt(JSON.parse(localStorage.getItem("filterMonth"))) + 1
  mesActual = aux.toString()
  if(mesActual == '1'){
    mesAnterior = '12'
  }else {
    mesAnterior = parseInt(mesActual - 1).toString()
  }
}

if(JSON.parse(localStorage.getItem("filterYear")) == null){
  year = d.getFullYear().toString()
  localStorage.setItem("filterYear", JSON.stringify(year))
  let yearValue
    switch(year) {
        case "2019": yearValue = 0; break
        case "2020": yearValue = 1; break
        case "2021": yearValue = 2; break
    }
    select = document.getElementById('selectYear')
    var options = select.options
    options[yearValue].selected = true
}else {
  year = JSON.parse(localStorage.getItem("filterYear"))
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

       //Datos mes actual
       if(parseInt(mesActual) > d.getMonth()){
        localStorage.setItem('Semana-1', JSON.stringify(0))
       }else {
         FB.api(
           '/act_704269000261751/insights',
           'GET',
           {"fields":"spend,clicks,impressions,ctr,cpc,frequency","time_ranges":"[{since:'"+ year +"-"+ mesActual + "-01',until:'"+ year +"-"+ mesActual +"-08'}]"},

           function(response) {
             if(response.data[0] != undefined || parseInt(mesActual) > d.getMonth){
               localStorage.setItem('Semana-1', JSON.stringify(response.data[0]))
               prueba = response
             }else {
               localStorage.setItem('Semana-1', JSON.stringify(0))
             }
           }
         );
         console.log(response)
       }

        if(parseInt(mesActual) > d.getMonth()){
          localStorage.setItem('Semana-2', JSON.stringify(0))
        }else {
          FB.api(
            '/act_704269000261751/insights',
            'GET',
            {"fields":"spend,clicks,impressions,ctr,cpc,frequency","time_ranges":"[{since:'"+ year +"-"+ mesActual +"-09',until:'"+ year +"-"+ mesActual +"-15'}]"},
            function(response) {
              if(response.data[0] != undefined){
                localStorage.setItem('Semana-2', JSON.stringify(response.data[0]))
              }else {
                localStorage.setItem('Semana-2', JSON.stringify(0))
              }
            }
          );
        } 

        if(parseInt(mesActual) > d.getMonth()){
          localStorage.setItem('Semana-3', JSON.stringify(0))
        }else {
          FB.api(
            '/act_704269000261751/insights',
            'GET',
            {"fields":"spend,clicks,impressions,ctr,cpc,frequency","time_ranges":"[{since:'"+ year +"-"+ mesActual +"-16',until:'"+ year +"-"+ mesActual +"-24'}]"},
            function(response) {
              if(response.data[0] != undefined){
                localStorage.setItem('Semana-3', JSON.stringify(response.data[0]))
              }else {
                localStorage.setItem('Semana-3', JSON.stringify(0))
              }
            }
          );
        }

        if(parseInt(mesActual) > d.getMonth()){
          localStorage.setItem('Semana-4', JSON.stringify(0))
        }else {
          FB.api(
            '/act_704269000261751/insights',
            'GET',
            {"fields":"spend,clicks,impressions,ctr,cpc,frequency","time_ranges":"[{since:'"+ year +"-"+ mesActual +"-25',until:'"+ year +"-"+ mesActual +"-31'}]"},
            function(response) {
              if(response.data[0] != undefined){
                localStorage.setItem('Semana-4', JSON.stringify(response.data[0]))
              }else {
                localStorage.setItem('Semana-4', JSON.stringify(0))
              }
            }
          );
        }


        // Datos mes anterior

        if(parseInt(mesActual) > d.getMonth()){
          localStorage.setItem('Semana-1a', JSON.stringify(0))
        }else {
          FB.api(
            '/act_704269000261751/insights',
            'GET',
            {"fields":"spend,clicks,impressions,ctr,cpc,frequency","time_ranges":"[{since:'"+ year +"-"+ mesAnterior + "-01',until:'"+ year +"-"+ mesAnterior +"-08'}]"},
            function(response) {
              if(response.data[0] != undefined){
                localStorage.setItem('Semana-1a', JSON.stringify(response.data[0]))
              }else {
                localStorage.setItem('Semana-1a', JSON.stringify(0))
              }
            }
          );
        }

        if(parseInt(mesActual) > d.getMonth()){
          localStorage.setItem('Semana-2a', JSON.stringify(0))
        }else {
          FB.api(
            '/act_704269000261751/insights',
            'GET',
            {"fields":"spend,clicks,impressions,ctr,cpc,frequency","time_ranges":"[{since:'"+ year +"-"+ mesAnterior +"-09',until:'"+ year +"-"+ mesAnterior +"-15'}]"},
            function(response) {
              if(response.data[0] != undefined){
                localStorage.setItem('Semana-2a', JSON.stringify(response.data[0]))
              }else {
                localStorage.setItem('Semana-2a', JSON.stringify(0))
              }
            }
          );
        }

        if(parseInt(mesActual) > d.getMonth()){
          localStorage.setItem('Semana-3a', JSON.stringify(0))
        }else {
          FB.api(
            '/act_704269000261751/insights',
            'GET',
            {"fields":"spend,clicks,impressions,ctr,cpc,frequency","time_ranges":"[{since:'"+ year +"-"+ mesAnterior +"-16',until:'"+ year +"-"+ mesAnterior +"-24'}]"},
            function(response) {
              if(response.data[0] != undefined){
                localStorage.setItem('Semana-3a', JSON.stringify(response.data[0]))
              }else {
                localStorage.setItem('Semana-3a', JSON.stringify(0))
              }
            }
          );
        }

        if(parseInt(mesActual) > d.getMonth()){
          localStorage.setItem('Semana-4a', JSON.stringify(0))
        }else {
          FB.api(
            '/act_704269000261751/insights',
            'GET',
            {"fields":"spend,clicks,impressions,ctr,cpc,frequency","time_ranges":"[{since:'"+ year +"-"+ mesAnterior +"-25',until:'"+ year +"-"+ mesAnterior +"-31'}]"},
            function(response) {
              if(response.data[0] != undefined){
                localStorage.setItem('Semana-4a', JSON.stringify(response.data[0]))
              }else {
                localStorage.setItem('Semana-4a', JSON.stringify(0))
              }
            }
          );
        }

        FB.api(
          '/act_704269000261751/campaigns',
          'GET',
          {"fields":"name,id,insights{spend,clicks,impressions,cpc,ctr,frequency}"},
          function(response) {
              localStorage.setItem('Campaigns', JSON.stringify(response))
          }
        );

        FB.api(
          '/act_704269000261751/ads',
          'GET',
          {"fields":"name,id,insights{spend,impressions,clicks,cpc,ctr,frequency}"},
          function(response) {
              localStorage.setItem('Ads', JSON.stringify(response))
          }
        );

      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
    });
    saveMetrics();
flagReload=setInterval(evaluarRecarga,3000 ) /*5*/
}
function evaluarRecarga() {
  console.log("evaluarRecarga");
  let s1=JSON.parse(localStorage.getItem("Semana-1"))
  let s2=JSON.parse(localStorage.getItem("Semana-2"))
  let s3=JSON.parse(localStorage.getItem("Semana-3"))
  let s4=JSON.parse(localStorage.getItem("Semana-4"))
  let s1a=JSON.parse(localStorage.getItem("Semana-1a"))
  let s2a=JSON.parse(localStorage.getItem("Semana-2a"))
  let s3a=JSON.parse(localStorage.getItem("Semana-3a"))
  let s4a=JSON.parse(localStorage.getItem("Semana-4a"))
  let p1 = document.getElementById('suma1').value
  if(s1==null ){
    clearTimeout(flagReload);
    console.log("voy a reiniciar");
    location.reload(true)
  }
}

// const elementoMetrica1 = document.getElementById('selectMonth')
// elementoMetrica1.addEventListener('change', (event) => {
//     console.log(event.target.value)
//     const valorMetrica = event.target.value
//     localStorage.setItem('filterMonth', JSON.stringify(valorMetrica))
//     location.reload()
// })