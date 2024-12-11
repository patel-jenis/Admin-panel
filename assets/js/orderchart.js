
var options3 = {
    series: [
        {
            name: 'Sales',
            data: [28, 40, 36, 52, 38, 60, 38, 52, 36, 40],
        },
    ],
    chart: {
        height: 290,
        type: 'area',
        fontFamily: 'Nunito, sans-serif',
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: isDark ? ['#00ab55'] : ['#00ab55'],
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    yaxis: {
        min: 0,
        show: false,
    },
    grid: {
        padding: {
            top: 125,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
    fill: {
        opacity: 1,
        type: 'gradient',
        gradient: {
            type: 'vertical',
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.3,
            opacityTo: 0.05,
            stops: [100, 100],
        },
    },
    tooltip: {
        x: {
            show: false,
        },
    },
};

var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
chart3.render();