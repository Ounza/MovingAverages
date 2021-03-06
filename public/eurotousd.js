

var data = [
    {
      "Date": "Apr 06, 2021",
      "Price": 1.1809,
      "Open": 1.1817,
      "High": 1.1822,
      "Low": 1.1797,
      "Change %": "-0.02%"
    },
    {
      "Date": "Apr 05, 2021",
      "Price": 1.1811,
      "Open": 1.1761,
      "High": 1.182,
      "Low": 1.1738,
      "Change %": "0.37%"
    },
    {
      "Date": "Apr 04, 2021",
      "Price": 1.1768,
      "Open": 1.1761,
      "High": 1.1768,
      "Low": 1.1755,
      "Change %": "0.05%"
    },
    {
      "Date": "Apr 02, 2021",
      "Price": 1.1762,
      "Open": 1.1777,
      "High": 1.1788,
      "Low": 1.1748,
      "Change %": "-0.11%"
    },
    {
      "Date": "Apr 01, 2021",
      "Price": 1.1775,
      "Open": 1.1731,
      "High": 1.1781,
      "Low": 1.1712,
      "Change %": "0.40%"
    },
    {
      "Date": "Mar 31, 2021",
      "Price": 1.1728,
      "Open": 1.1716,
      "High": 1.176,
      "Low": 1.1703,
      "Change %": "0.12%"
    },
    {
      "Date": "Mar 30, 2021",
      "Price": 1.1714,
      "Open": 1.1764,
      "High": 1.1774,
      "Low": 1.1711,
      "Change %": "-0.41%"
    },
    {
      "Date": "Mar 29, 2021",
      "Price": 1.1762,
      "Open": 1.1795,
      "High": 1.1797,
      "Low": 1.176,
      "Change %": "-0.29%"
    },
    {
      "Date": "Mar 26, 2021",
      "Price": 1.1796,
      "Open": 1.1763,
      "High": 1.1805,
      "Low": 1.1763,
      "Change %": "0.27%"
    },
    {
      "Date": "Mar 25, 2021",
      "Price": 1.1764,
      "Open": 1.1813,
      "High": 1.1829,
      "Low": 1.1761,
      "Change %": "-0.41%"
    },
    {
      "Date": "Mar 24, 2021",
      "Price": 1.1812,
      "Open": 1.1851,
      "High": 1.1854,
      "Low": 1.1809,
      "Change %": "-0.31%"
    },
    {
      "Date": "Mar 23, 2021",
      "Price": 1.1849,
      "Open": 1.1935,
      "High": 1.1941,
      "Low": 1.1841,
      "Change %": "-0.69%"
    },
    {
      "Date": "Mar 22, 2021",
      "Price": 1.1931,
      "Open": 1.1899,
      "High": 1.1947,
      "Low": 1.1871,
      "Change %": "0.24%"
    },
    {
      "Date": "Mar 19, 2021",
      "Price": 1.1903,
      "Open": 1.1915,
      "High": 1.1939,
      "Low": 1.1874,
      "Change %": "-0.10%"
    },
    {
      "Date": "Mar 18, 2021",
      "Price": 1.1915,
      "Open": 1.1979,
      "High": 1.199,
      "Low": 1.1906,
      "Change %": "-0.53%"
    },
    {
      "Date": "Mar 17, 2021",
      "Price": 1.1978,
      "Open": 1.1906,
      "High": 1.1986,
      "Low": 1.1885,
      "Change %": "0.66%"
    },
    {
      "Date": "Mar 16, 2021",
      "Price": 1.19,
      "Open": 1.1929,
      "High": 1.1953,
      "Low": 1.1882,
      "Change %": "-0.23%"
    },
    {
      "Date": "Mar 15, 2021",
      "Price": 1.1928,
      "Open": 1.1952,
      "High": 1.1968,
      "Low": 1.1911,
      "Change %": "-0.20%"
    },
    {
      "Date": "Mar 12, 2021",
      "Price": 1.1952,
      "Open": 1.1983,
      "High": 1.199,
      "Low": 1.191,
      "Change %": "-0.27%"
    },
    {
      "Date": "Mar 11, 2021",
      "Price": 1.1984,
      "Open": 1.1928,
      "High": 1.199,
      "Low": 1.1916,
      "Change %": "0.49%"
    },
    {
      "Date": "Mar 10, 2021",
      "Price": 1.1925,
      "Open": 1.19,
      "High": 1.1931,
      "Low": 1.1868,
      "Change %": "0.23%"
    },
    {
      "Date": "Mar 09, 2021",
      "Price": 1.1898,
      "Open": 1.1847,
      "High": 1.1917,
      "Low": 1.1835,
      "Change %": "0.46%"
    },
    {
      "Date": "Mar 08, 2021",
      "Price": 1.1843,
      "Open": 1.1922,
      "High": 1.1933,
      "Low": 1.1844,
      "Change %": "-0.62%"
    }
   ];

   //Create the chart
    anychart.onDocumentReady(function () {

      
        // create a data table
        var dataTable = anychart.data.table('Date');
        dataTable.addData(data);

        // map data
        var mapping = dataTable.mapAs({'open':'Open', 'high': 'High', 'low': 'Low', 'close': 'Price'});

        // set the chart type
        var chart = anychart.stock();

        // set the series
        var series = chart.plot(0).candlestick(mapping);
        series.name("EUR USD Trade Data");

        // set the chart title
        chart.title("EUR/USD Trade Data");

        // create a plot
        var plot = chart.plot(0);
        // create an EMA indicator with period 20
        var ema5 = plot.ema(mapping, 5).series();
        // set the EMA color
        ema5.stroke('#bf360c');
    
        // disable the scroller axis
        chart.scroller().xAxis(false);
        // map "open" values for the scroller
        var openValue = dataTable.mapAs();
        openValue.addField('value', 2);
        // create a scroller series with the mapped data
        chart.scroller().column(openValue);
    
        // modify the color of candlesticks making them black and white
        series.fallingFill("black");
        series.fallingStroke("black");
        series.risingFill("white");
        series.risingStroke("black");

        // set the container id
        chart.container('root');

        // draw the chart
        chart.draw();

      });