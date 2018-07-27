<html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawChart);

 /*     function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['City', 'GSDP'],
          ['Andhra Pradesh',6],
          ['Arunachal Pradesh',16],
          ['Assam',7],
          ['Bihar',15],
          ['Chhattisgarh',5],
          ['Delhi',17],
          ['Goa',27],
          ['Gujarat',25],
          ['Haryana',14],
          ['Himachal Pradesh',4],
          ['Jammu and Kashmir',20],
          ['Jharkhand',2],
          ['Karnataka',29],
          ['Kerala',24],
          ['Madhya Pradesh',1],
          ['Maharashtra',21],
          ['Manipur',19],
          ['Meghalaya',10],
          ['Mizoram',28],
          ['Nagaland',8],
          ['Orissa',22],
          ['Punjab',23],
          ['Rajasthan',26],
          ['Sikkim',3],
          ['Tamil Nadu',18],
          ['Tripura',12],
          ['Uttar Pradesh',9],
          ['Uttarakhand',11],
          ['West Bengal',13]
        ]);

        
        var options = {datalessRegionColor: '#e31b23', displayMode: 'regions', region:'IN', resolution: 'provinces',colorAxis:{colors:['#c9df8a','#006400']}};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }
      */
      function drawChart() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/167ChxWu2U_p8H43QofoIWU5VRMqo2dxuP6jeJ9qZwt0/edit?usp=sharing');
  query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
  var options = {datalessRegionColor: '#e31b23', displayMode: 'regions', region:'IN', resolution: 'provinces',colorAxis:{colors:['#c9df8a','#006400']}};

  var data = response.getDataTable();
  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
  chart.draw(data, options);
}

    </script>
  </head>
  <body>
    <div id="regions_div" style="width: 900px; height: 500px;"></div>
  </body>
</html>
