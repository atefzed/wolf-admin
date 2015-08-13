(function () {
  var get_timestamp = function (less_days) {
    return moment().subtract('days', less_days).toDate().getTime();
  }
  
  var page_scripts = function () {
    if (!$("#dashboard").length) return;

    // Range Datepicker
    $('.input-daterange').datepicker({
      autoclose: true,
      orientation: 'right top',
      endDate: new Date()
    });

    // Flot Charts
    var chart_border_color = "#efefef";
    var chart_color = "#b0b3e3";

    var d = [[get_timestamp(15), 1290], [get_timestamp(14), 1050], [get_timestamp(13), 1100], [get_timestamp(12), 1300], [get_timestamp(11), 1050], [get_timestamp(10), 1521], [get_timestamp(9), 950], [get_timestamp(8), 1130], [get_timestamp(7), 1100], [get_timestamp(6), 1472], [get_timestamp(5), 1410], [get_timestamp(4), 1684], [get_timestamp(3), 1410], [get_timestamp(2), 1322], [get_timestamp(1), 1050], [get_timestamp(0), 1238]];

    var d2 = [[get_timestamp(14), 1500], [get_timestamp(13), 1600], [get_timestamp(12), 1630], [get_timestamp(11), 1310], [get_timestamp(10), 1530], [get_timestamp(9), 2050], [get_timestamp(8), 2310], [get_timestamp(7), 2050], [get_timestamp(6), 2125], [get_timestamp(5), 1400], [get_timestamp(4), 1600], [get_timestamp(3), 1930], [get_timestamp(2), 2000], [get_timestamp(1), 2320]];
  
    var options = {
      xaxis : {
        mode : "time",
        tickLength : 10
      },
      series : {
        lines : {
          show : true,
          lineWidth : 2,
          fill : true,
          fillColor : {
            colors : [{
              opacity : 0.04
            }, {
              opacity : 0.1
            }]
          }
        },
        shadowSize : 0
      },
      selection : {
        mode : "x"
      },
      grid : {
        hoverable : true,
        clickable : true,
        tickColor : chart_border_color,
        borderWidth : 0,
        borderColor : chart_border_color,
      },
      tooltip : true,
      colors : [chart_color]
    };
  
    var plot = $.plot($("#visitors-chart"), [d], $.extend(options, {
      tooltipOpts : {
        content : "Visitors on <b>%x</b>: <span class='value'>%y</span>",
        defaultTheme : false,
        shifts: {
          x: -75,
          y: -70
        }
      }
    }));

    var plot2 = $.plot($("#payments-chart"), [d2], $.extend(options, {
      tooltipOpts : {
        content : "Payments on <b>%x</b>: <span class='value'>$%y</span>",
        defaultTheme : false,
        shifts: {
          x: -75,
          y: -70
        }
      }
    }));

    var plot3 = $.plot($("#signups-chart"), [d], $.extend(options, {
      tooltipOpts : {
        content : "New signups on <b>%x</b>: <b class='value'>%y</b>",
        defaultTheme : false,
        shifts: {
          x: -78,
          y: -70
        }
      }
    }));


    // Bar chart (visitors)

    var dBar = [[get_timestamp(30), 930], [get_timestamp(29), 1200], [get_timestamp(28), 980], [get_timestamp(27), 950], [get_timestamp(26), 1000], [get_timestamp(25), 1050], [get_timestamp(24), 1150], [get_timestamp(23), 2300], [get_timestamp(22), 1200], [get_timestamp(21), 1300], [get_timestamp(20), 1700], [get_timestamp(19), 1450], [get_timestamp(18), 1500], [get_timestamp(17), 546], [get_timestamp(16), 614], [get_timestamp(15), 954], [get_timestamp(14), 1700], [get_timestamp(13), 1800], [get_timestamp(12), 1900], [get_timestamp(11), 2000], [get_timestamp(10), 2100], [get_timestamp(9), 2200], [get_timestamp(8), 2300], [get_timestamp(7), 2400], [get_timestamp(6), 2550], [get_timestamp(5), 2600], [get_timestamp(4), 1800], [get_timestamp(3), 2200], [get_timestamp(2), 2350], [get_timestamp(1), 2800], [get_timestamp(0), 3245]];

    var options2 = {
      yaxes: {
        min: 0
      },
      xaxis : {
        mode : "time",
        timeformat: "%a %d"
      },
      series : {
        bars : {
          show : true,
          lineWidth: 0,
          barWidth: 47000000, // for bar charts, this is width in milliseconds (86400000 would be the width of a day)
          align: 'center',
          fillColor : {
            colors : [{ opacity : 0.7 }, { opacity : 0.7 }]
          }
        }
      },
      grid : {
        show: true,
        hoverable : true,
        clickable : true,
        tickColor : chart_border_color,
        borderWidth : 0,
        borderColor : chart_border_color,
      },
      tooltip : true,
      tooltipOpts : {
        content : "Visits on <b>%x</b>: <span class='value'>%y</span>",
        defaultTheme : false,
        shifts: {
          x: -65,
          y: -70
        }
      },
      colors : ["#4fa3d5"]
    };

    var plot4 = $.plot($("#bar-chart"), [dBar], options2);
  };

  $(document).on("ready page:load", page_scripts);
})();
