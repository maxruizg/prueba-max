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
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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
const options2 = ArregloDatos(metrica[2], semanas)
console.log(options2)
let sumOptions2 = 0

options2.forEach(element => {
    element = parseFloat(element)
    sumOptions2 += element 
});

var myNumeral = numeral (sumOptions2);
console.log(metrica[2])
if(metrica[2] == '0' || metrica[2] == '4'){
    var currencyString = myNumeral.format('$0,0.00');
}else {
    var currencyString = myNumeral.format('0,0');
}
document.getElementById('suma1').innerHTML = currencyString
