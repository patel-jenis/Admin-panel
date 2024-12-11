
var options1 = {
    series: [285, 237, 270, 100, 100],
    chart: {
        type: 'donut',
        height: 460,
        fontFamily: 'Nunito, sans-serif',
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 25,
        colors: isDark ? ['#0e1726', '#0e1726', '#0e1726', '#0e1726'] : ['#fff', '#fff', '#fff'],
    },
    colors: isDark ? ['#5c1ac3', '#e2a03f', '#e7515a', '#e2a03f'] : ['#e2a03f', '#5c1ac3', '#e7515a'],
    legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '14px',
        markers: {
            width: 10,
            height: 10,
            offsetX: -2,
        },
        height: 50,
        offsetY: 20,
    },
    plotOptions: {
        pie: {
            donut: {
                size: '65%',
                background: 'transparent',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '29px',
                        offsetY: -10,
                    },
                    value: {
                        show: true,
                        fontSize: '26px',
                        color: isDark ? '#bfc9d4' : undefined,
                        offsetY: 16,
                        formatter: (val) => {
                            return val;
                        },
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        color: '#888ea8',
                        fontSize: '29px',
                        formatter: (w) => {
                            return w.globals.seriesTotals.reduce(function (a, b) {
                                return a + b;
                            }, 0);
                        },
                    },
                },
            },
        },
    },
    labels: ['Apparel', 'Sports', 'Others', 'test', 'tets1'],
    states: {
        hover: {
            filter: {
                type: 'none',
                value: 0.15,
            },
        },
        active: {
            filter: {
                type: 'none',
                value: 0.15,
            },
        },
    },
};

var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
chart1.render();