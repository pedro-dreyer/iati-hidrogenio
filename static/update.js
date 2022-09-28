const sensorsNames = ["sinal_ac", "sensor_h2_1", "sw_hidropneumatica"];

const ledRanges = [
	[0, 0, 0, 0, 0, 0, 3.4],
	[0, 0, 0, 0, 0, 0, 3.4],
	[0, 0, 0, 0, 0, 0, 3.4],
	];

for (let jj = 0; jj < 3; jj++) {
	increment = (ledRanges[jj][6] - ledRanges[jj][0]) / 6
    for (let ii=1; ii < 7; ii++) {
		ledRanges[jj][ii] = ledRanges[jj][ii-1] + increment
    }
}

function updateSensors(sensorData, sensorName, ledRange) {
    for (let iLed = 0; iLed < 7; iLed ++) {
		if (sensorData < ledRange[iLed]) {
	    	updateBattery(sensorName.concat('_battery'), iLed);
			updateValues(sensorName.concat('_value'), sensorData)
	    break;
		}
    }
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
	    	for (let iSensor = 0; iSensor < 3; iSensor++) {
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


		 if(chartT.series[0].data.length > 100) {
			 chartT.series[0].addPoint([x, y1], true, true, true);
			 chartT.series[1].addPoint([x, y2], true, true, true);
			 chartT.series[2].addPoint([x, y3], true, true, true);
		 }
		 else {
			 chartT.series[0].addPoint([x, y1], true, false, true);
			 chartT.series[1].addPoint([x, y2], true, false, true);
			 chartT.series[2].addPoint([x, y3], true, false, true);
		 }

		 },
	 });
 }, 3000);


