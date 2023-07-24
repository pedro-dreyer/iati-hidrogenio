const sensorsNames = ["sensor1", "sensor2", "sensor3", "sensor4", "sensor5", "sensor6", "sensor7", "sensor8", "sensor9", "sensor10"]

const NUM_SENSORS = 10
const NUM_LEDS = 6

const min_led_values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const max_led_values = [3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3]

const ledRanges = []

for (let iSensor = 0; iSensor < NUM_SENSORS; iSensor++) {
	increment = (max_led_values[iSensor] - min_led_values[iSensor]) / (NUM_LEDS-1)
	ledRanges[iSensor] = []
    for (let iLed=0; iLed < NUM_LEDS; iLed++) {
		ledRanges[iSensor][iLed] = min_led_values[iSensor] + increment*(iLed)
    }
}

function updateSensors(sensorData, sensorName, ledRange) {

	let ledState = NUM_LEDS

	// find indice where value is higher than current sensor data
	for (let iLed = 0; iLed < NUM_LEDS; iLed ++) {
		if (ledRange[iLed] > sensorData ) {
			ledState = iLed
			break;
		}
	}

	updateBattery(sensorName.concat('_battery'), ledState);
	updateValues(sensorName.concat('_value'), sensorData)
}

function updateValues(id, value){
	document.getElementById(id).innerHTML = value;
}


var chartT = new Highcharts.Chart({
	chart:{ renderTo : 'chart-temperature' },
	title: { text: 'Gráfico Temperatura' },
	series: [{
        name: 'Sensor 1',
        data: []
    }, {
        name: 'Sensor 2',
        data: []
    },  {
        name: 'Sensor 3',
        data: []
	},  {
        name: 'Sensor 4',
        data: []
	},  {
        name: 'Sensor 5',
        data: []
	},  {
        name: 'Sensor 6',
        data: []
	},  {
        name: 'Sensor 7',
        data: []
	},  {
        name: 'Sensor 8',
        data: []
	},  {
        name: 'Sensor 9',
        data: []
	},  {
        name: 'Sensor 10',
        data: []
    }],

	plotOptions: {
	  line: { animation: false,
		dataLabels: { enabled: false }
	  },
	},
	xAxis: { type: 'datetime',
	  dateTimeLabelFormats: { second: '%H:%M:%S' }
	},
	yAxis: {
	  title: { text: 'Temperatura (Celsius)' }

	},
	credits: { enabled: false }
  });


setInterval(function(){
   $.ajax({
        url: '/sensor1',
        type: 'GET',
        success: function(response) {
	    	for (let iSensor = 0; iSensor < 10; iSensor++) {
				updateSensors(response[iSensor], sensorsNames[iSensor], ledRanges[iSensor]);
	    	}
        },
    });
}, 1000);



setInterval(function(){
	$.ajax({
		 url: '/sensor1',
		 type: 'GET',
		 success: function(response) {

                x = (new Date()).getTime()
                y1 = parseFloat(response[0]);
                y2 = parseFloat(response[1]);
                y3 = parseFloat(response[2]);
                y4 = parseFloat(response[3]);
                y5 = parseFloat(response[4]);
                y6 = parseFloat(response[5]);
                y7 = parseFloat(response[6]);
                y8 = parseFloat(response[7]);
                y9 = parseFloat(response[8]);
                y10 = parseFloat(response[9]);

                chartT.series[0].addPoint([x, y1], true, false, true);
                chartT.series[1].addPoint([x, y2], true, false, true);
                chartT.series[2].addPoint([x, y3], true, false, true);
                chartT.series[3].addPoint([x, y4], true, false, true);
                chartT.series[4].addPoint([x, y5], true, false, true);
                chartT.series[5].addPoint([x, y6], true, false, true);
                chartT.series[6].addPoint([x, y7], true, false, true);
                chartT.series[7].addPoint([x, y8], true, false, true);
                chartT.series[8].addPoint([x, y9], true, false, true);
                chartT.series[9].addPoint([x, y10], true, false, true);
	

		 },
	 });
 }, 1000);


