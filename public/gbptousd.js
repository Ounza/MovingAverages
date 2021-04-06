var data = [
    {
        "Date": "Apr 06, 2021",
        "Price": 1.3878,
        "Open": 1.3912,
        "High": 1.392,
        "Low": 1.3868,
        "Change %": "-0.14%"
      },
      {
        "Date": "Apr 05, 2021",
        "Price": 1.3897,
        "Open": 1.3827,
        "High": 1.3915,
        "Low": 1.3813,
        "Change %": "0.48%"
      },
      {
        "Date": "Apr 04, 2021",
        "Price": 1.383,
        "Open": 1.3826,
        "High": 1.3833,
        "Low": 1.3817,
        "Change %": "0.01%"
      },
      {
        "Date": "Apr 02, 2021",
        "Price": 1.3829,
        "Open": 1.3833,
        "High": 1.3854,
        "Low": 1.3813,
        "Change %": "-0.01%"
      },
      {
        "Date": "Apr 01, 2021",
        "Price": 1.383,
        "Open": 1.3781,
        "High": 1.3837,
        "Low": 1.3745,
        "Change %": "0.37%"
      },
      {
        "Date": "Mar 31, 2021",
        "Price": 1.3779,
        "Open": 1.374,
        "High": 1.3813,
        "Low": 1.3715,
        "Change %": "0.29%"
      },
      {
        "Date": "Mar 30, 2021",
        "Price": 1.3739,
        "Open": 1.3763,
        "High": 1.3785,
        "Low": 1.3706,
        "Change %": "-0.15%"
      },
      {
        "Date": "Mar 29, 2021",
        "Price": 1.3759,
        "Open": 1.3793,
        "High": 1.3848,
        "Low": 1.3756,
        "Change %": "-0.20%"
      },
      {
        "Date": "Mar 26, 2021",
        "Price": 1.3787,
        "Open": 1.3731,
        "High": 1.3814,
        "Low": 1.3728,
        "Change %": "0.40%"
      },
      {
        "Date": "Mar 25, 2021",
        "Price": 1.3732,
        "Open": 1.3687,
        "High": 1.3747,
        "Low": 1.367,
        "Change %": "0.36%"
      },
      {
        "Date": "Mar 24, 2021",
        "Price": 1.3683,
        "Open": 1.3752,
        "High": 1.3762,
        "Low": 1.3673,
        "Change %": "-0.49%"
      },
      {
        "Date": "Mar 23, 2021",
        "Price": 1.375,
        "Open": 1.3863,
        "High": 1.3868,
        "Low": 1.374,
        "Change %": "-0.82%"
      },
      {
        "Date": "Mar 22, 2021",
        "Price": 1.3863,
        "Open": 1.3866,
        "High": 1.3878,
        "Low": 1.3817,
        "Change %": "-0.04%"
      },
      {
        "Date": "Mar 19, 2021",
        "Price": 1.3868,
        "Open": 1.3924,
        "High": 1.3959,
        "Low": 1.383,
        "Change %": "-0.37%"
      },
      {
        "Date": "Mar 18, 2021",
        "Price": 1.392,
        "Open": 1.3968,
        "High": 1.4002,
        "Low": 1.3896,
        "Change %": "-0.31%"
      },
      {
        "Date": "Mar 17, 2021",
        "Price": 1.3963,
        "Open": 1.389,
        "High": 1.3972,
        "Low": 1.3851,
        "Change %": "0.55%"
      },
      {
        "Date": "Mar 16, 2021",
        "Price": 1.3887,
        "Open": 1.3899,
        "High": 1.3908,
        "Low": 1.3808,
        "Change %": "-0.04%"
      },
      {
        "Date": "Mar 15, 2021",
        "Price": 1.3893,
        "Open": 1.392,
        "High": 1.3951,
        "Low": 1.3851,
        "Change %": "-0.21%"
      },
      {
        "Date": "Mar 12, 2021",
        "Price": 1.3922,
        "Open": 1.3989,
        "High": 1.4006,
        "Low": 1.3863,
        "Change %": "-0.49%"
      },
      {
        "Date": "Mar 11, 2021",
        "Price": 1.399,
        "Open": 1.3934,
        "High": 1.3995,
        "Low": 1.3917,
        "Change %": "0.43%"
      },
      {
        "Date": "Mar 10, 2021",
        "Price": 1.393,
        "Open": 1.3893,
        "High": 1.3939,
        "Low": 1.3845,
        "Change %": "0.27%"
      },
      {
        "Date": "Mar 09, 2021",
        "Price": 1.3893,
        "Open": 1.3827,
        "High": 1.3927,
        "Low": 1.3801,
        "Change %": "0.50%"
      },
      {
        "Date": "Mar 08, 2021",
        "Price": 1.3824,
        "Open": 1.3837,
        "High": 1.3866,
        "Low": 1.38,
        "Change %": "-0.12%"
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
 series.name("GBP USD Trade Data");

 // set the chart title
 chart.title("GBP/USD Trade Data");

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
