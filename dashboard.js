
(() => {

    const semana1 = JSON.parse(localStorage.getItem("Semana-1"))
    const semana2 = JSON.parse(localStorage.getItem("Semana-2"))
    const semana3 = JSON.parse(localStorage.getItem("Semana-3"))
    const semana4 = JSON.parse(localStorage.getItem("Semana-4"))

    const metrica = JSON.parse(localStorage.getItem("filterData"))

    console.log(semana2.clicks)
    // console.log(metrica[1])
    // console.log(typeof(metrica[1]))
    // console.log(semana2)

    const arreglo = [4]
    switch(metrica[1]){
        case '0': 
            if(semana1 == undefined || semana1 == 0 || semana1 == '0'){ arreglo[0] = 0 }else {arreglo[1] = semana1.spend}
            if(semana2 == undefined || semana2 == 0 || semana2 == '0'){ arreglo[1] = 0 }else {arreglo[2] = semana2.spend}
            if(semana3 == undefined || semana3 == 0 || semana3 == '0'){ arreglo[2] = 0 }else {arreglo[3] = semana3.spend}
            if(semana4 == undefined || semana4 == 0 || semana4 == '0'){ arreglo[3] = 0 }else {arreglo[4] = semana4.spend}
            break;
        case '1': if(semana1 == undefined || semana1 == 0 || semana1 == '0'){ arreglo[0] = 0 }else {arreglo[1] = semana1.clicks}
            if(semana2 == undefined || semana2 == 0 || semana2 == '0'){ arreglo[1] = 0 }else {arreglo[2] = semana2.clicks}
            if(semana3 == undefined || semana3 == 0 || semana3 == '0'){ arreglo[2] = 0 }else {arreglo[3] = semana3.clicks}
            if(semana4 == undefined || semana4 == 0 || semana4 == '0'){ arreglo[3] = 0 }else {arreglo[4] = semana4.clicks}
            break;
        case '2': if(semana1 == undefined || semana1 == 0 || semana1 == '0'){ arreglo[0] = 0 }else {arreglo[1] = semana1.impressions}
            if(semana2 == undefined || semana2 == 0 || semana2 == '0'){ arreglo[1] = 0 }else {arreglo[2] = semana2.impressions}
            if(semana3 == undefined || semana3 == 0 || semana3 == '0'){ arreglo[2] = 0 }else {arreglo[3] = semana3.impressions}
            if(semana4 == undefined || semana4 == 0 || semana4 == '0'){ arreglo[3] = 0 }else {arreglo[4] = semana4.impressions}
            break;
        case '3': if(semana1 == undefined || semana1 == 0 || semana1 == '0'){ arreglo[0] = 0 }else {arreglo[1] = semana1.ctr}
            if(semana2 == undefined || semana2 == 0 || semana2 == '0'){ arreglo[1] = 0 }else {arreglo[2] = semana2.ctr}
            if(semana3 == undefined || semana3 == 0 || semana3 == '0'){ arreglo[2] = 0 }else {arreglo[3] = semana3.ctr}
            if(semana4 == undefined || semana4 == 0 || semana4 == '0'){ arreglo[3] = 0 }else {arreglo[4] = semana4.ctr}
            break;
        case '4': if(semana1 == undefined || semana1 == 0 || semana1 == '0'){ arreglo[0] = 0 }else {arreglo[1] = semana1.ctc}
            if(semana2 == undefined || semana2 == 0 || semana2 == '0'){ arreglo[1] = 0 }else {arreglo[2] = semana2.ctc}
            if(semana3 == undefined || semana3 == 0 || semana3 == '0'){ arreglo[2] = 0 }else {arreglo[3] = semana3.ctc}
            if(semana4 == undefined || semana4 == 0 || semana4 == '0'){ arreglo[3] = 0 }else {arreglo[4] = semana4.ctc}
            break;
    }

    console.log(arreglo[0], arreglo[1], arreglo[2], arreglo[3])

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
            data: [4, 5, 3, 2, 5, 3, 12, 22],
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
            data: [12, 19, 3, 5, 2, 3, 5, 4],
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
            data: [8, 12, 23, 16 , 17, 20, 3, 4],
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
function saveMetrics() {
    var i = 0
    var filters = []
    do{
        filters[i] = document.getElementById(`selectMetrica${i + 1}`).value
        i++
    }while(i < 10)

    localStorage.setItem("filterData", JSON.stringify(filters));

    var j = 0
    filters = []
    do{
        filters[j] = document.getElementById(`selectMonth${j + 1}`).value
        j++
    }while(j < 10)

    localStorage.setItem("filterMonth", JSON.stringify(filters));
}

let readData = JSON.parse(localStorage.getItem("filterData"))
var i = 0

// Cambio de ciclo para condicionar null en readData
while(i < 10){
    var select = document.getElementById(`selectMetrica${i+1}`)
    var options = select.options
    options[readData[i]].selected = true
    i++
}

readData = JSON.parse(localStorage.getItem("filterMonth"))
var j = 0
while(j < 10){
    var select = document.getElementById(`selectMonth${j+1}`)
    var options = select.options
    options[readData[j]].selected = true
    j++
}