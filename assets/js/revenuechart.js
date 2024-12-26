let isDark = 0;
let isRtl = 0;

var options = {
    series: [
        {
            name: 'Income',
            data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],
        },
        {
            name: 'Expenses',
            data: [16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000, 19000, 18000, 19000],
        },
    ],
    chart: {
        height: 300,
        type: 'area',
        fontFamily: 'Nunito, sans-serif',
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        curve: 'smooth',
        width: 2,
        lineCap: 'square',
    },
    dropShadow: {
        enabled: true,
        opacity: 0.2,
        blur: 10,
        left: -7,
        top: 22,
    },
    colors: isDark ? ['#2196f3', '#e7515a'] : ['#1b55e2', '#e7515a'],
    markers: {
        discrete: [
            {
                seriesIndex: 0,
                dataPointIndex: 6,
                fillColor: '#1b55e2',
                strokeColor: 'transparent',
                size: 7,
            },
            {
                seriesIndex: 1,
                dataPointIndex: 5,
                fillColor: '#e7515a',
                strokeColor: 'transparent',
                size: 7,
            },
        ],
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    xaxis: {
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        crosshairs: {
            show: true,
        },
        labels: {
            offsetX: isRtl ? 2 : 0,
            offsetY: 5,
            style: {
                fontSize: '12px',
                cssClass: 'apexcharts-xaxis-title',
            },
        },
    },
    yaxis: {
        tickAmount: 7,
        labels: {
            formatter: (value) => {
                return value / 1000 + 'K';
            },
            offsetX: isRtl ? -30 : -10,
            offsetY: 0,
            style: {
                fontSize: '12px',
                cssClass: 'apexcharts-yaxis-title',
            },
        },
        opposite: isRtl ? true : false,
    },
    grid: {
        borderColor: isDark ? '#191e3a' : '#e0e6ed',
        strokeDashArray: 5,
        xaxis: {
            lines: {
                show: true,
            },
        },
        yaxis: {
            lines: {
                show: false,
            },
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        fontSize: '16px',
        markers: {
            width: 10,
            height: 10,
            offsetX: -2,
        },
        itemMargin: {
            horizontal: 10,
            vertical: 5,
        },
    },
    tooltip: {
        marker: {
            show: true,
        },
        x: {
            show: false,
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: isDark ? 0.19 : 0.28,
            opacityTo: 0.05,
            stops: isDark ? [100, 100] : [45, 100],
        },
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();