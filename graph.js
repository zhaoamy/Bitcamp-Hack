function drawChart() {

  prepare data...

  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

  // The select handler. Call the chart's getSelection() method
  function selectHandler() {
    var selectedItem = chart.getSelection()[0];
    if (selectedItem) {
      var value = data.getValue(selectedItem.row, selectedItem.column);
      alert('The user selected ' + value);
    }
  }

  // Listen for the 'select' event, and call my function selectHandler() when
  // the user selects something on the chart.
  google.visualization.events.addListener(chart, 'select', selectHandler);

  draw the chart...

}