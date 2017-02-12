google.load('visualization', '1', { packages: ['corechart'] });
google.setOnLoadCallback(drawChart1);

function drawChart1() {
	var data = new google.visualization.DataTable();
	data.addColumn('date', 'Date');
	data.addColumn('number', 'Money Spent');

	data.addRows([
		[new Date('2017-01-01'), 10],
		[new Date('2017-01-04'), 30],
		[new Date('2017-01-07'), 40],
		[new Date('2017-01-10'), 60],
		[new Date('2017-01-13'), 40],
		[new Date('2017-01-16'), 18],
		[new Date('2017-01-19'), 20],
		[new Date('2017-01-22'), 60],
		[new Date('2017-01-25'), 40],
		[new Date('2017-01-28'), 20],
		[new Date('2017-01-31'), 25]
	]);

	var dateTicks = [];
	for (var m = 01; m <= 30; m+=3)
		dateTicks.push(new Date('2017-' + '01-' + m));

	var options = {
		hAxis: {
			format: 'MMM d',
			//title: 'Date'},
			ticks: dateTicks},
			legend: 'none',
	};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	chart.draw(data, options);
}

$(window).resize(function(){
  drawChart1();
});