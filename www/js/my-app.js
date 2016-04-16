// Initialize app
//open panels with swipe
var myApp = new Framework7({
    //swipePanel: 'left'
});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    alert("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})


// for the amount-visibility-change
$$('#flash').on('click', function (){
  var visibility = document.getElementById('visibility');
  var amount = document.getElementById('amount');
  if (counter % 2 == 0) {
    visibility.innerHTML = '<embed src="svg/eye-on.svg" width="40px" height="40px">';
    amount.innerHTML = '****';
  }
  else{
    visibility.innerHTML = '<embed src="svg/eye-off.svg" width="40px" height="40px">';
    amount.innerHTML = '1234.56';
  };
  counter++;
})

$$('.pull-to-refresh-content').on('refresh',function(){setTimeout("myApp.pullToRefreshDone()",2000)})

$$(document).on('pageInit', function (e) {
  var page = e.detail.page;
  // Code for home page
  if (page.name === 'home') {
    $$('.pull-to-refresh-content').on('refresh',function(){setTimeout("myApp.pullToRefreshDone()",2000)})
  };

  // Code for balance page
  if (page.name === 'balance') {
    lineChart_balance();
    $$('.pull-to-refresh-content').on('refresh',function(){setTimeout("myApp.pullToRefreshDone()",2000)})
  };

  // Code for electr page
  if (page.name === 'electr') {   
    barChart_electr();
    $$('.pull-to-refresh-content').on('refresh',function(){setTimeout("myApp.pullToRefreshDone()",2000)})
  };

  // Code for schedule page
  if (page.name === 'schedule') {
    $$('.pull-to-refresh-content').on('refresh',function(){setTimeout("myApp.pullToRefreshDone()",2000)});
    $$('#sche-day').on('click', function () {
      var buttons = [
          {
              text: '星期一',
              bold: true
          },
          {
              text: '星期二',
              bold: true
          },
          {
              text: '星期三',
              bold: true
              
          },
          {
              text: '星期四',
              bold: true
          },
          {
              text: '星期五',
              bold: true
          },
          {
              text: '星期六',
              bold: true
          },
          {
              text: '星期日',
              bold: true
          },
      ];
      myApp.actions(buttons);
    });
  };

})

// Chart.js

function lineChart_balance(){
  var ctx1 = document.getElementById('Chart_balance').getContext("2d");
  
  var data = {
    labels : ["January","February","March","April","May"],
    datasets : [
      {
        fillColor : "rgba(151,187,205,0.5)",
        strokeColor : "rgba(151,187,205,1)",
        pointColor : "rgba(151,187,205,1)",
        pointStrokeColor : "#fff",
        data : [600,480,540,619,596]
      }
    ]
  }

  var defaults = {
          
    //Boolean - If we show the scale above the chart data     
    scaleOverlay : false,
    
    //Boolean - If we want to override with a hard coded scale
    scaleOverride : false,
    
    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps : null,
    //Number - The value jump in the hard coded scale
    scaleStepWidth : null,
    //Number - The scale starting value
    scaleStartValue : null,

    //String - Colour of the scale line 
    scaleLineColor : "rgba(0,0,0,.1)",
    
    //Number - Pixel width of the scale line  
    scaleLineWidth : 1,

    //Boolean - Whether to show labels on the scale 
    scaleShowLabels : true,
    
    //Interpolated JS string - can access value
    scaleLabel : "<%=value%>",
    
    //String - Scale label font declaration for the scale label
    scaleFontFamily : "'Arial'",
    
    //Number - Scale label font size in pixels  
    scaleFontSize : 12,
    
    //String - Scale label font weight style  
    scaleFontStyle : "normal",
    
    //String - Scale label font colour  
    scaleFontColor : "#666",  
    
    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,
    
    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",
    
    //Number - Width of the grid lines
    scaleGridLineWidth : 1, 
    
    //Boolean - Whether the line is curved between points
    bezierCurve : true,
    
    //Boolean - Whether to show a dot for each point
    pointDot : true,
    
    //Number - Radius of each point dot in pixels
    pointDotRadius : 3,
    
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,
    
    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,
    
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,
    
    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,
    
    //Boolean - Whether to animate the chart
    animation : true,

    //Number - Number of animation steps
    animationSteps : 60,
    
    //String - Animation easing effect
    animationEasing : "easeOutQuart",

    //Function - Fires when the animation is complete
    onAnimationComplete : null
    
  }

  var myChart1 = new Chart(ctx1).Line(data, defaults);
}

function barChart_electr(){
  var ctx2 = document.getElementById('Chart_electr').getContext("2d");
  
  var data = {
    labels : ["7日","8日","9日","10日","11日","12日","13日"],
    datasets : [
      {
        fillColor : "rgba(151,187,205,0.5)",
        strokeColor : "rgba(151,187,205,1)",
        pointColor : "rgba(151,187,205,1)",
        pointStrokeColor : "#fff",
        data : [7.1,7.8,7.5,8.0,8.3,6.5,7.8]
      }
    ]
  }

  var defaults = {
          
    //Boolean - If we show the scale above the chart data     
    scaleOverlay : false,
    
    //Boolean - If we want to override with a hard coded scale
    scaleOverride : false,
    
    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps : null,
    //Number - The value jump in the hard coded scale
    scaleStepWidth : null,
    //Number - The scale starting value
    scaleStartValue : null,

    //String - Colour of the scale line 
    scaleLineColor : "rgba(0,0,0,.1)",
    
    //Number - Pixel width of the scale line  
    scaleLineWidth : 1,

    //Boolean - Whether to show labels on the scale 
    scaleShowLabels : true,
    
    //Interpolated JS string - can access value
    scaleLabel : "<%=value%>",
    
    //String - Scale label font declaration for the scale label
    scaleFontFamily : "'Arial'",
    
    //Number - Scale label font size in pixels  
    scaleFontSize : 12,
    
    //String - Scale label font weight style  
    scaleFontStyle : "normal",
    
    //String - Scale label font colour  
    scaleFontColor : "#666",  
    
    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,
    
    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",
    
    //Number - Width of the grid lines
    scaleGridLineWidth : 1, 
    
    //Boolean - Whether the line is curved between points
    bezierCurve : true,
    
    //Boolean - Whether to show a dot for each point
    pointDot : true,
    
    //Number - Radius of each point dot in pixels
    pointDotRadius : 3,
    
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,
    
    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,
    
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,
    
    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,
    
    //Boolean - Whether to animate the chart
    animation : true,

    //Number - Number of animation steps
    animationSteps : 60,
    
    //String - Animation easing effect
    animationEasing : "easeOutQuart",

    //Function - Fires when the animation is complete
    onAnimationComplete : null
    
  }

  var myChart2 = new Chart(ctx2).Line(data, defaults);

}

/*
function barChart_electr(){
  var ctx2 = document.getElementById('Chart_electr').getContext("2d");
  
  var data = {
    labels : ["7日","8日","9日","10日","11日","12日","13日"],
    datasets : [
      {
        fillColor : "rgba(151,187,205,0.5)",
        strokeColor : "rgba(151,187,205,1)",
        data : [7.1,7.8,7.5,8.0,8.3,6.5,7.8]
      }
    ]
  }

  var defaults = {
          
    //Boolean - If we show the scale above the chart data           
    scaleOverlay : false,
    
    //Boolean - If we want to override with a hard coded scale
    scaleOverride : false,
    
    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps : null,
    //Number - The value jump in the hard coded scale
    scaleStepWidth : null,
    //Number - The scale starting value
    scaleStartValue : null,

    //String - Colour of the scale line 
    scaleLineColor : "rgba(0,0,0,.1)",
    
    //Number - Pixel width of the scale line    
    scaleLineWidth : 1,

    //Boolean - Whether to show labels on the scale 
    scaleShowLabels : true,
    
    //Interpolated JS string - can access value
    scaleLabel : "<%=value%>",
    
    //String - Scale label font declaration for the scale label
    scaleFontFamily : "'Arial'",
    
    //Number - Scale label font size in pixels  
    scaleFontSize : 12,
    
    //String - Scale label font weight style    
    scaleFontStyle : "normal",
    
    //String - Scale label font colour  
    scaleFontColor : "#666",    
    
    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,
    
    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",
    
    //Number - Width of the grid lines
    scaleGridLineWidth : 1, 

    //Boolean - If there is a stroke on each bar    
    barShowStroke : true,
    
    //Number - Pixel width of the bar stroke    
    barStrokeWidth : 2,
    
    //Number - Spacing between each of the X value sets
    barValueSpacing : 5,
    
    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1,
    
    //Boolean - Whether to animate the chart
    animation : true,

    //Number - Number of animation steps
    animationSteps : 60,
    
    //String - Animation easing effect
    animationEasing : "easeOutQuart",

    //Function - Fires when the animation is complete
    onAnimationComplete : null
    
  }

  var myChart2 = new Chart(ctx2).Bar(data, defaults);
  console.log('jiji');
}

*/
