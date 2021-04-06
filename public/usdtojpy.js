var data = [
    {
        "Date": "Apr 06, 2021",
        "Price": 110.39,
        "Open": 110.19,
        "High": 110.4,
        "Low": 110.14,
        "Change %": "0.20%"
      },
      {
        "Date": "Apr 05, 2021",
        "Price": 110.17,
        "Open": 110.63,
        "High": 110.75,
        "Low": 109.96,
        "Change %": "-0.46%"
      },
      {
        "Date": "Apr 04, 2021",
        "Price": 110.68,
        "Open": 110.71,
        "High": 110.75,
        "Low": 110.62,
        "Change %": "-0.03%"
      },
      {
        "Date": "Apr 02, 2021",
        "Price": 110.71,
        "Open": 110.63,
        "High": 110.75,
        "Low": 110.36,
        "Change %": "0.10%"
      },
      {
        "Date": "Apr 01, 2021",
        "Price": 110.6,
        "Open": 110.75,
        "High": 110.86,
        "Low": 110.54,
        "Change %": "-0.09%"
      },
      {
        "Date": "Mar 31, 2021",
        "Price": 110.7,
        "Open": 110.36,
        "High": 110.97,
        "Low": 110.26,
        "Change %": "0.33%"
      },
      {
        "Date": "Mar 30, 2021",
        "Price": 110.34,
        "Open": 109.79,
        "High": 110.43,
        "Low": 109.75,
        "Change %": "0.51%"
      },
      {
        "Date": "Mar 29, 2021",
        "Price": 109.78,
        "Open": 109.65,
        "High": 109.86,
        "Low": 109.37,
        "Change %": "0.13%"
      },
      {
        "Date": "Mar 26, 2021",
        "Price": 109.64,
        "Open": 109.18,
        "High": 109.86,
        "Low": 109.13,
        "Change %": "0.43%"
      },
      {
        "Date": "Mar 25, 2021",
        "Price": 109.17,
        "Open": 108.74,
        "High": 109.24,
        "Low": 108.71,
        "Change %": "0.41%"
      },
      {
        "Date": "Mar 24, 2021",
        "Price": 108.72,
        "Open": 108.59,
        "High": 108.96,
        "Low": 108.44,
        "Change %": "0.15%"
      },
      {
        "Date": "Mar 23, 2021",
        "Price": 108.56,
        "Open": 108.85,
        "High": 108.89,
        "Low": 108.4,
        "Change %": "-0.25%"
      },
      {
        "Date": "Mar 22, 2021",
        "Price": 108.83,
        "Open": 108.86,
        "High": 108.96,
        "Low": 108.51,
        "Change %": "-0.04%"
      },
      {
        "Date": "Mar 19, 2021",
        "Price": 108.87,
        "Open": 108.89,
        "High": 109.13,
        "Low": 108.61,
        "Change %": "-0.01%"
      },
      {
        "Date": "Mar 18, 2021",
        "Price": 108.88,
        "Open": 108.85,
        "High": 109.31,
        "Low": 108.63,
        "Change %": "0.05%"
      },
      {
        "Date": "Mar 17, 2021",
        "Price": 108.83,
        "Open": 109,
        "High": 109.33,
        "Low": 108.75,
        "Change %": "-0.14%"
      },
      {
        "Date": "Mar 16, 2021",
        "Price": 108.98,
        "Open": 109.13,
        "High": 109.29,
        "Low": 108.77,
        "Change %": "-0.13%"
      },
      {
        "Date": "Mar 15, 2021",
        "Price": 109.12,
        "Open": 109.07,
        "High": 109.37,
        "Low": 108.91,
        "Change %": "0.11%"
      },
      {
        "Date": "Mar 12, 2021",
        "Price": 109,
        "Open": 108.5,
        "High": 109.17,
        "Low": 108.49,
        "Change %": "0.47%"
      },
      {
        "Date": "Mar 11, 2021",
        "Price": 108.49,
        "Open": 108.38,
        "High": 108.82,
        "Low": 108.36,
        "Change %": "0.10%"
      },
      {
        "Date": "Mar 10, 2021",
        "Price": 108.38,
        "Open": 108.47,
        "High": 108.93,
        "Low": 108.33,
        "Change %": "-0.07%"
      },
      {
        "Date": "Mar 09, 2021",
        "Price": 108.46,
        "Open": 108.89,
        "High": 109.25,
        "Low": 108.41,
        "Change %": "-0.37%"
      },
      {
        "Date": "Mar 08, 2021",
        "Price": 108.86,
        "Open": 108.4,
        "High": 108.95,
        "Low": 108.31,
        "Change %": "0.48%"
      }
   ];
 // create a data table
 var dataTable = anychart.data.table('Date');
 dataTable.addData(data);

 // map data
 var mapping = dataTable.mapAs({'open':'Open', 'high': 'High', 'low': 'Low', 'close': 'Price'});

 // set the chart type
 var chart = anychart.stock();

 // set the series
 var series = chart.plot(0).candlestick(mapping);
 series.name("USD JPY Trade Data");

 // set the chart title
 chart.title("USD/JPY Trade Data");

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
