//http://stackoverflow.com/questions/12301236/how-can-i-get-the-max-value-of-a-y-axis-at-highcharts
//http://jsfiddle.net/m7gV5/1/

        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                type: 'line',
                marginRight: 130,
                marginBottom: 25,
                events: {
                    redraw: function() {
                        console.log(this.yAxis[0].max);
                    },
                    load: function() {
                        console.log(this.yAxis[0].max);
                    }
                }
            },