//  Variables que contengan el dataset del chart

let response = prueba
console.log(response)

const semanas = [
    JSON.parse(localStorage.getItem("Semana-1")), 
    JSON.parse(localStorage.getItem("Semana-2")), 
    JSON.parse(localStorage.getItem("Semana-3")),
    JSON.parse(localStorage.getItem("Semana-4"))
]

const semanasA = [
    JSON.parse(localStorage.getItem("Semana-1a")), 
    JSON.parse(localStorage.getItem("Semana-2a")), 
    JSON.parse(localStorage.getItem("Semana-3a")),
    JSON.parse(localStorage.getItem("Semana-4a"))
]


metrica = []
metrica = JSON.parse(localStorage.getItem("filterData"))

function ArregloDatos(metrica, semanas){
    const arreglo = [0, 0, 0, 0]
    switch(metrica){
        case '0': 
            if(semanas[0] == undefined || semanas[0] == 0 || semanas[0] == '0'){ arreglo[0] = 0 }else {arreglo[0] = semanas[0].spend}
            if(semanas[1] == undefined || semanas[1] == 0 || semanas[1] == '0'){ arreglo[1] = 0 }else {arreglo[1] = semanas[1].spend}
            if(semanas[2] == undefined || semanas[2] == 0 || semanas[2] == '0'){ arreglo[2] = 0 }else {arreglo[2] = semanas[2].spend}
            if(semanas[3] == undefined || semanas[3] == 0 || semanas[3] == '0'){ arreglo[3] = 0 }else {arreglo[3] = semanas[3].spend}
            break;
        case '1': if(semanas[0] == undefined || semanas[0] == 0 || semanas[0] == '0'){ arreglo[0] = 0 }else {arreglo[0] = semanas[0].clicks}
            if(semanas[1] == undefined || semanas[1] == 0 || semanas[1] == '0'){ arreglo[1] = 0 }else {arreglo[1] = semanas[1].clicks}
            if(semanas[2] == undefined || semanas[2] == 0 || semanas[2] == '0'){ arreglo[2] = 0 }else {arreglo[2] = semanas[2].clicks}
            if(semanas[3] == undefined || semanas[3] == 0 || semanas[3] == '0'){ arreglo[3] = 0 }else {arreglo[3] = semanas[3].clicks}
            break;
        case '2': if(semanas[0] == undefined || semanas[0] == 0 || semanas[0] == '0'){ arreglo[0] = 0 }else {arreglo[0] = semanas[0].impressions}
            if(semanas[1] == undefined || semanas[1] == 0 || semanas[1] == '0'){ arreglo[1] = 0 }else {arreglo[1] = semanas[1].impressions}
            if(semanas[2] == undefined || semanas[2] == 0 || semanas[2] == '0'){ arreglo[2] = 0 }else {arreglo[2] = semanas[2].impressions}
            if(semanas[3] == undefined || semanas[3] == 0 || semanas[3] == '0'){ arreglo[3] = 0 }else {arreglo[3] = semanas[3].impressions}
            break;
        case '3': if(semanas[0] == undefined || semanas[0] == 0 || semanas[0] == '0'){ arreglo[0] = 0 }else {arreglo[0] = semanas[0].ctr}
            if(semanas[1] == undefined || semanas[1] == 0 || semanas[1] == '0'){ arreglo[1] = 0 }else {arreglo[1] = semanas[1].ctr}
            if(semanas[2] == undefined || semanas[2] == 0 || semanas[2] == '0'){ arreglo[2] = 0 }else {arreglo[2] = semanas[2].ctr}
            if(semanas[3] == undefined || semanas[3] == 0 || semanas[3] == '0'){ arreglo[3] = 0 }else {arreglo[3] = semanas[3].ctr}
            break;
        case '4': if(semanas[0] == undefined || semanas[0] == 0 || semanas[0] == '0'){ arreglo[0] = 0 }else {arreglo[0] = semanas[0].cpc}
            if(semanas[1] == undefined || semanas[1] == 0 || semanas[1] == '0'){ arreglo[1] = 0 }else {arreglo[1] = semanas[1].cpc}
            if(semanas[2] == undefined || semanas[2] == 0 || semanas[2] == '0'){ arreglo[2] = 0 }else {arreglo[2] = semanas[2].cpc}
            if(semanas[3] == undefined || semanas[3] == 0 || semanas[3] == '0'){ arreglo[3] = 0 }else {arreglo[3] = semanas[3].cpc}
            break;
        case '5': if(semanas[0] == undefined || semanas[0] == 0 || semanas[0] == '0'){ arreglo[0] = 0 }else {arreglo[0] = semanas[0].frequency}
            if(semanas[1] == undefined || semanas[1] == 0 || semanas[1] == '0'){ arreglo[1] = 0 }else {arreglo[1] = semanas[1].frequency}
            if(semanas[2] == undefined || semanas[2] == 0 || semanas[2] == '0'){ arreglo[2] = 0 }else {arreglo[2] = semanas[2].frequency}
            if(semanas[3] == undefined || semanas[3] == 0 || semanas[3] == '0'){ arreglo[3] = 0 }else {arreglo[3] = semanas[3].frequency}
            break;
    }
    return arreglo
}

(() => {
    let datosGrafica1Actual = ArregloDatos(metrica[0], semanas)
    let datosGrafica1Anterior = ArregloDatos(metrica[0], semanasA)
    let datosGrafica2Actual = ArregloDatos(metrica[1], semanas)
    let datosGrafica2Anterior = ArregloDatos(metrica[1], semanasA)

    var ctx = document.getElementById('myChart1');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Semana-1', 'Semana-2', 'Semana-3', 'Semana-4'],
            datasets: [
            {
                label: "Actual",
                data: ArregloDatos(metrica[0], semanas),

                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 2
            },
            {
                label: "Anterior",
                data: ArregloDatos(metrica[0], semanasA),
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 2
            }
        ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctx = document.getElementById('myChart2');
    var myChart1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Semana-1', 'Semana-2', 'Semana-3', 'Semana-4'],
        datasets: [
        {
            label: "Actual",
            data: ArregloDatos(metrica[1], semanas),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 2
        },
        {
            label: "Anterior",
            data: ArregloDatos(metrica[1], semanasA),
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 2
        }
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    });
    myChart1.resize(20, 20)

    // function addData(chart, actual, anterior){
    //     console.log(chart.data.datasets)
    //     chart.data.datasets[0].data.push(actual)
    //     chart.data.datasets[1].data.push(anterior)
    //     chart.update()
    // }

})();


// Funcion para salvar metricas desde un el boton salvar filtros
// iteradores = 10
function saveMetrics() {
    // Guardar valores metricas en localstorage
    var i = 0
    var filters = []
    do{
        filters[i] = document.getElementById(`selectMetrica${i + 1}`).value
        i++
    }while(i < 10)
    localStorage.setItem("filterData", JSON.stringify(filters));

    //Guardar valor de month localstorage
    var month = document.getElementById(`selectMonth`).value
    localStorage.setItem("filterMonth", JSON.stringify(month));

    // Guardar valor del año
    var year = document.getElementById('selectYear').value
    let yearValue = 0
    switch(year) {
        case '0': yearValue = '2019'; break
        case '1': yearValue = '2020'; break
        case '2': yearValue = '2021'; break
    }
    localStorage.setItem("filterYear", JSON.stringify(yearValue))
}

let readData = []
if(JSON.parse(localStorage.getItem("filterData")) == null){
    var i = 0
    while(i < 10){
        var select = document.getElementById(`selectMetrica${i+1}`)
        var options = select.options
        options[0].selected = true
        i++
    }
}else {
    readData = JSON.parse(localStorage.getItem("filterData"))
    var i = 0
    while(i < 10){
        var select = document.getElementById(`selectMetrica${i+1}`)
        var options = select.options
        options[readData[i]].selected = true
        i++
    }
}

if(JSON.parse(localStorage.getItem("filterMonth")) == null) {
    var select = document.getElementById(`selectMonth`)
    var options = select.options
    options[0].selected = true
}else {
    var month = JSON.parse(localStorage.getItem("filterMonth"))
    var select = document.getElementById(`selectMonth`)
    var options = select.options
    options[month].selected = true
}

if(JSON.parse(localStorage.getItem("filterYear")) == null) {
    var select = document.getElementById(`selectYear`)
    var options = select.options
    options[2].selected = true
}else {
    year = JSON.parse(localStorage.getItem("filterYear"))
    let yearValue
    switch(year) {
        case "2019": yearValue = 0; break
        case "2020": yearValue = 1; break
        case "2021": yearValue = 2; break
    }
    var select = document.getElementById(`selectYear`)
    var options = select.options
    options[yearValue].selected = true
}

// Cuadrante inferior izquierdo
// Funcion para darle formato y sacar los porcentajes
function Datos(metrica, idMetrica, idSuma, idPorcentaje, idIcono){
    const options = ArregloDatos(metrica[idMetrica], semanas)
    const optionsA = ArregloDatos(metrica[idMetrica], semanasA)

    let sumOptions = 0
    let sumOptionsA = 0
    let porcentaje = 0

    options.forEach(element => {
        if(element != undefined){
            element = parseFloat(element)
        }else {
            element = 0
        }
        sumOptions += element 
    });
    
    optionsA.forEach(element => {
        if(element != undefined){
            element = parseFloat(element)
        }else {
            element = 0
        }
        sumOptionsA += element
    });
    
    var myNumeral = numeral (sumOptions);
    if(metrica[idMetrica] == '0' || metrica[idMetrica] == '4'){
        var currencyString = myNumeral.format('$0,0.00');
    }else {
        var currencyString = myNumeral.format('0,0');
    }
    document.getElementById(`${idSuma}`).innerHTML = currencyString
    
    if((sumOptions - sumOptionsA) < 0){
        // Color Rojo
        document.getElementById(`${idIcono}`).className = "fas fa-sort-down"
        document.getElementById(`${idIcono}`).style.color = "red"
    }else {
        // Color Verde
        document.getElementById(`${idIcono}`).className = "fas fa-sort-up"
        document.getElementById(`${idIcono}`).style.color = "green"
    }
    
    if(sumOptionsA != 0){
        porcentaje = sumOptionsA / sumOptions
    }else {
        porcentaje = 0
    }
    myNumeral = numeral (porcentaje)
    var currencyString = myNumeral.format('0.00%')
    document.getElementById(`${idPorcentaje}`).innerHTML = currencyString
}

Datos(metrica, 2, 'suma1', 'porcentaje1', 'icono1')
Datos(metrica, 3, 'suma2', 'porcentaje2', 'icono2')
Datos(metrica, 4, 'suma3', 'porcentaje3', 'icono3')
Datos(metrica, 5, 'suma4', 'porcentaje4', 'icono4')
Datos(metrica, 6, 'suma5', 'porcentaje5', 'icono5')
Datos(metrica, 7, 'suma6', 'porcentaje6', 'icono6')


function DatosTop(metrica, idMetrica, data, nombre, valor) {
    const arregloTop = []
    switch(metrica[idMetrica]){
        case '0': 
            for(var i = 0; i < data.length; i++){
                if(data[i].insights == undefined){
                    arregloTop.push({name: data[i].name, value: '0'})    
                }else {
                    arregloTop.push({name: data[i].name, value: data[i].insights.data[0].spend})
                }
            }
            break;
        case '1': 
            for(var i = 0; i < data.length; i++){
                if(data[i].insights == undefined){
                    arregloTop.push({name: data[i].name, value: '0'})    
                }else {
                    arregloTop.push({name: data[i].name, value: data[i].insights.data[0].clicks})
                }
            }
            break;
        case '2': 
            for(var i = 0; i < data.length; i++){
                if(data[i].insights == undefined){
                    arregloTop.push({name: data[i].name, value: '0'})    
                }else {
                    arregloTop.push({name: data[i].name, value: data[i].insights.data[0].impressions})
                }
            }
            break;
        case '3':
            for(var i = 0; i < data.length; i++){
                if(data[i].insights == undefined){
                    arregloTop.push({name: data[i].name, value: '0'})    
                }else {
                    arregloTop.push({name: data[i].name, value: data[i].insights.data[0].ctr})
                }
            }
            break;
        case '4':
            for(var i = 0; i < data.length; i++){
                if(data[i].insights == undefined){
                    arregloTop.push({name: data[i].name, value: '0'})    
                }else {
                    arregloTop.push({name: data[i].name, value: data[i].insights.data[0].cpc})
                }
            }
            break;
        case '5':
            for(var i = 0; i < data.length; i++){
                if(data[i].insights == undefined){
                    arregloTop.push({name: data[i].name, value: '0'})    
                }else {
                    arregloTop.push({name: data[i].name, value: data[i].insights.data[0].frequency})
                }
            }
            break;
    }
    arregloTop.sort((a, b) => {
        let valorA = parseFloat(a.value)
        let valorB = parseFloat(b.value)
        return valorA - valorB
    })
    
    if(arregloTop.length > 0){
        let j = 1
        for(var i = arregloTop.length; i > (arregloTop.length - 5); i--){
            document.getElementById(`${nombre}${j}`).innerHTML = arregloTop[i - 1].name
        
            var myNumeral = numeral (arregloTop[i - 1].value);
            if(metrica[idMetrica] == '0' || metrica[idMetrica] == '4'){
                var currencyString = myNumeral.format('$0,0.00');
                document.getElementById(`${valor}${j}`).innerHTML = currencyString
            }else {
                var currencyString = myNumeral.format('0,0');
                document.getElementById(`${valor}${j}`).innerHTML = currencyString
            }
            j++
        }
    }
}

if(JSON.parse(localStorage.getItem("Campaigns")) != null && JSON.parse(localStorage.getItem("Campaigns")) != undefined){
    const campaignsData = JSON.parse(localStorage.getItem("Campaigns")).data
    DatosTop(metrica, 8, campaignsData, 'nombreCampaign', 'valorCampaign')
}

if(JSON.parse(localStorage.getItem("Ads")) != null && JSON.parse(localStorage.getItem("Campaigns")) != undefined) {
    const adsData = JSON.parse(localStorage.getItem("Ads")).data
    DatosTop(metrica, 9, adsData, 'nombreAd', 'valorAd')
}

// Posibilidad de reload
const elementoMetrica = document.getElementById('selectMonth')
elementoMetrica.addEventListener('change', (event) => {
    console.log(event.target.value)
    const valorMetrica = event.target.value
    localStorage.setItem('filterMonth', JSON.stringify(valorMetrica))
    location.reload(true)
})

function Actualizacion3(){
    const valorMetrica = document.getElementById('selectMetrica3').value
    
    let metrica = []
    metrica = JSON.parse(localStorage.getItem("filterData"))
    metrica[2] = valorMetrica

    Datos(metrica, 2, 'suma1', 'porcentaje1', 'icono1')

    localStorage.setItem('filterData', JSON.stringify(metrica))
}

function Actualizacion4(){
    const valorMetrica = document.getElementById('selectMetrica4').value
    
    let metrica = []
    metrica = JSON.parse(localStorage.getItem("filterData"))
    metrica[3] = valorMetrica

    Datos(metrica, 3, 'suma2', 'porcentaje2', 'icono2')

    localStorage.setItem('filterData', JSON.stringify(metrica))
}

function Actualizacion5() {
    const valorMetrica = document.getElementById('selectMetrica5').value

    let metrica = []
    metrica = JSON.parse(localStorage.getItem("filterData"))
    metrica[4] = valorMetrica

    Datos(metrica, 4, 'suma3', 'porcentaje3', 'icono3')

    localStorage.setItem('filterData', JSON.stringify(metrica))
}

function Actualizacion6() {
    const valorMetrica = document.getElementById('selectMetrica6').value
    
    let metrica = []
    metrica = JSON.parse(localStorage.getItem("filterData"))
    metrica[5] = valorMetrica

    Datos(metrica, 5, 'suma4', 'porcentaje4', 'icono4')

    localStorage.setItem('filterData', JSON.stringify(metrica))
}

function Actualizacion7() {
    const valorMetrica = document.getElementById('selectMetrica7').value
    
    let metrica = []
    metrica = JSON.parse(localStorage.getItem("filterData"))
    metrica[6] = valorMetrica

    Datos(metrica, 6, 'suma5', 'porcentaje5', 'icono5')

    localStorage.setItem('filterData', JSON.stringify(metrica))
}

function Actualizacion8() {
    const valorMetrica = document.getElementById('selectMetrica8').value

    let metrica = []
    metrica = JSON.parse(localStorage.getItem("filterData"))
    metrica[7] = valorMetrica

    Datos(metrica, 7, 'suma6', 'porcentaje6', 'icono6')

    localStorage.setItem('filterData', JSON.stringify(metrica))
}

function ActualizacionCampaigns() {
    const valorMetrica = document.getElementById('selectMetrica9').value

    const campaignsData = JSON.parse(localStorage.getItem("Campaigns")).data
    
    let metrica = []
    metrica = JSON.parse(localStorage.getItem("filterData"))
    metrica[8] = valorMetrica

    DatosTop(metrica, 8, campaignsData, 'nombreCampaign', 'valorCampaign')
    localStorage.setItem('filterData', JSON.stringify(metrica))
}

function ActualizacionAds() {
    const valorMetrica = document.getElementById('selectMetrica10').value
    const adsData = JSON.parse(localStorage.getItem("Ads")).data
    
    let metrica = []
    metrica = JSON.parse(localStorage.getItem("filterData"))
    metrica[9] = valorMetrica

    DatosTop(metrica, 9, adsData, 'nombreAd', 'valorAd')
    localStorage.setItem('filterData', JSON.stringify(metrica))
}

// const elementoMetrica = document.getElementById('selectMonth')
// elementoMetrica.addEventListener('change', (event) => {
//     console.log(event.target.value)
//     const valorMetrica = event.target.value
//     localStorage.setItem('filterMonth', JSON.stringify(valorMetrica))
//     location.reload()
// })