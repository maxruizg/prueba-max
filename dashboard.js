
(() => {

    const semana1 = JSON.parse(localStorage.getItem("Semana-1"))
    const semana2 = JSON.parse(localStorage.getItem("Semana-2"))
    const semana3 = JSON.parse(localStorage.getItem("Semana-3"))
    const semana4 = JSON.parse(localStorage.getItem("Semana-4"))

    let metrica = []
    if(JSON.parse(localStorage.getItem("filterData")) == null){
        metrica[0] = 0
    }else {
        metrica = JSON.parse(localStorage.getItem("filterData"))
    }

    const arreglo = [0, 0, 0, 0]
    switch(metrica[0]){
        case '0': 
            if(semana1 == undefined || semana1 == 0 || semana1 == '0'){ arreglo[0] = 0 }else {arreglo[0] = semana1.spend}
            if(semana2 == undefined || semana2 == 0 || semana2 == '0'){ arreglo[1] = 0 }else {arreglo[1] = semana2.spend}
            if(semana3 == undefined || semana3 == 0 || semana3 == '0'){ arreglo[2] = 0 }else {arreglo[2] = semana3.spend}
            if(semana4 == undefined || semana4 == 0 || semana4 == '0'){ arreglo[3] = 0 }else {arreglo[3] = semana4.spend}
            break;
        case '1': if(semana1 == undefined || semana1 == 0 || semana1 == '0'){ arreglo[0] = 0 }else {arreglo[0] = semana1.clicks}
            if(semana2 == undefined || semana2 == 0 || semana2 == '0'){ arreglo[1] = 0 }else {arreglo[1] = semana2.clicks}
            if(semana3 == undefined || semana3 == 0 || semana3 == '0'){ arreglo[2] = 0 }else {arreglo[2] = semana3.clicks}
            if(semana4 == undefined || semana4 == 0 || semana4 == '0'){ arreglo[3] = 0 }else {arreglo[3] = semana4.clicks}
            break;
        case '2': if(semana1 == undefined || semana1 == 0 || semana1 == '0'){ arreglo[0] = 0 }else {arreglo[0] = semana1.impressions}
            if(semana2 == undefined || semana2 == 0 || semana2 == '0'){ arreglo[1] = 0 }else {arreglo[1] = semana2.impressions}
            if(semana3 == undefined || semana3 == 0 || semana3 == '0'){ arreglo[2] = 0 }else {arreglo[2] = semana3.impressions}
            if(semana4 == undefined || semana4 == 0 || semana4 == '0'){ arreglo[3] = 0 }else {arreglo[3] = semana4.impressions}
            break;
        case '3': if(semana1 == undefined || semana1 == 0 || semana1 == '0'){ arreglo[0] = 0 }else {arreglo[0] = semana1.ctr}
            if(semana2 == undefined || semana2 == 0 || semana2 == '0'){ arreglo[1] = 0 }else {arreglo[1] = semana2.ctr}
            if(semana3 == undefined || semana3 == 0 || semana3 == '0'){ arreglo[2] = 0 }else {arreglo[2] = semana3.ctr}
            if(semana4 == undefined || semana4 == 0 || semana4 == '0'){ arreglo[3] = 0 }else {arreglo[3] = semana4.ctr}
            break;
        case '4': if(semana1 == undefined || semana1 == 0 || semana1 == '0'){ arreglo[0] = 0 }else {arreglo[0] = semana1.cpc}
            if(semana2 == undefined || semana2 == 0 || semana2 == '0'){ arreglo[1] = 0 }else {arreglo[1] = semana2.cpc}
            if(semana3 == undefined || semana3 == 0 || semana3 == '0'){ arreglo[2] = 0 }else {arreglo[2] = semana3.cpc}
            if(semana4 == undefined || semana4 == 0 || semana4 == '0'){ arreglo[3] = 0 }else {arreglo[3] = semana4.cpc}
            break;
    }


    const semana1a = JSON.parse(localStorage.getItem("Semana-1a"))
    const semana2a = JSON.parse(localStorage.getItem("Semana-2a"))
    const semana3a = JSON.parse(localStorage.getItem("Semana-3a"))
    const semana4a = JSON.parse(localStorage.getItem("Semana-4a"))

    let metricaA = []
    if(JSON.parse(localStorage.getItem("filterData")) == null){
        metricaA[0] = 0
    }else {
        metricaA = JSON.parse(localStorage.getItem("filterData"))
    }

    const arregloA = [0, 0, 0, 0]
    switch(metricaA[0]){
        case '0': 
            if(semana1a == undefined || semana1a == 0 || semana1a == '0'){ arregloA[0] = 0 }else {arregloA[0] = semana1a.spend}
            if(semana2a == undefined || semana2a == 0 || semana2a == '0'){ arregloA[1] = 0 }else {arregloA[1] = semana2a.spend}
            if(semana3a == undefined || semana3a == 0 || semana3a == '0'){ arregloA[2] = 0 }else {arregloA[2] = semana3a.spend}
            if(semana4a == undefined || semana4a == 0 || semana4a == '0'){ arregloA[3] = 0 }else {arregloA[3] = semana4a.spend}
            break;
        case '1': if(semana1a == undefined || semana1a == 0 || semana1a == '0'){ arregloA[0] = 0 }else {arregloA[0] = semana1a.clicks}
            if(semana2a == undefined || semana2a == 0 || semana2a == '0'){ arregloA[1] = 0 }else {arregloA[1] = semana2a.clicks}
            if(semana3a == undefined || semana3a == 0 || semana3a == '0'){ arregloA[2] = 0 }else {arregloA[2] = semana3a.clicks}
            if(semana4a == undefined || semana4a == 0 || semana4a == '0'){ arregloA[3] = 0 }else {arregloA[3] = semana4a.clicks}
            break;
        case '2': if(semana1a == undefined || semana1a == 0 || semana1a == '0'){ arregloA[0] = 0 }else {arregloA[0] = semana1a.impressions}
            if(semana2a == undefined || semana2a == 0 || semana2a == '0'){ arregloA[1] = 0 }else {arregloA[1] = semana2a.impressions}
            if(semana3a == undefined || semana3a == 0 || semana3a == '0'){ arregloA[2] = 0 }else {arregloA[2] = semana3a.impressions}
            if(semana4a == undefined || semana4a == 0 || semana4a == '0'){ arregloA[3] = 0 }else {arregloA[3] = semana4a.impressions}
            break;
        case '3': if(semana1a == undefined || semana1a == 0 || semana1a == '0'){ arregloA[0] = 0 }else {arregloA[0] = semana1a.ctr}
            if(semana2a == undefined || semana2a == 0 || semana2a == '0'){ arregloA[1] = 0 }else {arregloA[1] = semana2a.ctr}
            if(semana3a == undefined || semana3a == 0 || semana3a == '0'){ arregloA[2] = 0 }else {arregloA[2] = semana3a.ctr}
            if(semana4a == undefined || semana4a == 0 || semana4a == '0'){ arregloA[3] = 0 }else {arregloA[3] = semana4a.ctr}
            break;
        case '4': if(semana1a == undefined || semana1a == 0 || semana1a == '0'){ arregloA[0] = 0 }else {arregloA[0] = semana1a.cpc}
            if(semana2a == undefined || semana2a == 0 || semana2a == '0'){ arregloA[1] = 0 }else {arregloA[1] = semana2a.cpc}
            if(semana3a == undefined || semana3a == 0 || semana3a == '0'){ arregloA[2] = 0 }else {arregloA[2] = semana3a.cpc}
            if(semana4a == undefined || semana4a == 0 || semana4a == '0'){ arregloA[3] = 0 }else {arregloA[3] = semana4a.cpc}
            break;
    }


    var ctx = document.getElementById('myChart1');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Semana-1', 'Semana-2', 'Semana-3', 'Semana-4'],
        datasets: [
        {
            label: "Actual",
            data: arreglo,

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
            data: arregloA,
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
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'],
        datasets: [
        {
            label: "Actual",
            data: arreglo,
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
            data: arregloA,
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

// Funcion para salvar metricas desde un boton
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
    console.log(month)
    localStorage.setItem("filterMonth", JSON.stringify(month));
}

// Cambio de ciclo para condicionar null en readData
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
    month = JSON.parse(localStorage.getItem("filterMonth"))
    var select = document.getElementById(`selectMonth`)
    var options = select.options
    options[month].selected = true
}