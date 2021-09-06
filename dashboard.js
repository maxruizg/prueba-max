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

let metrica = []
if(JSON.parse(localStorage.getItem("filterData")) == null){
    metrica[0] = 0
    metrica[1] = 0
    metrica[2] = 0
    metrica[3] = 0
    metrica[4] = 0
    metrica[5] = 0
    metrica[6] = 0
    metrica[7] = 0
    metrica[8] = 0
    metrica[9] = 0
}else {
    metrica = JSON.parse(localStorage.getItem("filterData"))
}

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
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        },
        {
            label: "Anterior",
            data: ArregloDatos(metrica[0], semanasA),
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                // 'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
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
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Semana-1', 'Semana-2', 'Semana-3', 'Semana-4'],
        datasets: [
        {
            label: "Actual",
            data: ArregloDatos(metrica[1], semanas),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        },
        {
            label: "Anterior",
            data: ArregloDatos(metrica[1], semanasA),
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                // 'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
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
    myChart.resize(20, 20)
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
    var yearValue = document.getElementById('selectYear').value
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
    var yearValue = JSON.parse(localStorage.getItem("filterYear"))
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

const campaignsData = JSON.parse(localStorage.getItem("Campaigns")).data
const adsData = JSON.parse(localStorage.getItem("Ads")).data

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

DatosTop(metrica, 8, campaignsData, 'nombreCampaign', 'valorCampaign')
DatosTop(metrica, 9, adsData, 'nombreAd', 'valorAd')

function Actualizacion3(){
    const valorMetrica = document.getElementById('selectMetrica3').value
    let metrica = []
    if(JSON.parse(localStorage.getItem("filterData")) == null){
        metrica[0] = 0
        metrica[1] = 0
        metrica[2] = 0
        metrica[3] = 0
        metrica[4] = 0
        metrica[5] = 0
        metrica[6] = 0
        metrica[7] = 0
        metrica[8] = 0
        metrica[9] = 0
    }else {
        metrica = JSON.parse(localStorage.getItem("filterData"))
    }

    metrica[3] = valorMetrica

    console.log(valorMetrica)

    Datos(metrica, 3, 'suma1', 'porcentaje1', 'icono1')

    localStorage.setItem('filterData', JSON.stringify(metrica))
}

function MiFuncion(){
    const date = document.getElementById('selectYear').value
    document.getElementById('Date').innerHTML = date
}
// const selectElement = document.getElementById('selectMetrica3')

// selectElement.addEventListener('change', (event) => {
//     const valorMetrica = document.getElementById('selectMetrica3').value
//     let metrica = []
//     if(JSON.parse(localStorage.getItem("filterData")) == null){
//         metrica[0] = 0
//         metrica[1] = 0
//         metrica[2] = 0
//         metrica[3] = 0
//         metrica[4] = 0
//         metrica[5] = 0
//         metrica[6] = 0
//         metrica[7] = 0
//         metrica[8] = 0
//         metrica[9] = 0
//     }else {
//         metrica = JSON.parse(localStorage.getItem("filterData"))
//     }

//     metrica[3] = valorMetrica

//     console.log(valorMetrica)

//     Datos(metrica, 3, 'suma1', 'porcentaje1', 'icono1')

//     localStorage.setItem('filterData', JSON.stringify(metrica))
// })