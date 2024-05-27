export function defineBar(name, id) {

    const bars = echarts.init(document.getElementById(id));

    const options = {
        title: {
            text: name,
        },
        tooltip: {},
        xAxis: {
            data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks', 'shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks', 'shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks',]
        },
        yAxis: {},
        series: [
            {
                name: 'sales',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20]
            }
        ]
    }

    bars.setOption(options);

    new ResizeObserver(() => bars.resize()).observe(document.getElementById(id));
}