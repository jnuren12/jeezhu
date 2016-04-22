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
    console.log("Device is ready!");
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
Chart.defaults.global = {
    // Boolean - Whether to animate the chart
    animation: true,

    // Number - Number of animation steps
    animationSteps: 60,

    // String - Animation easing effect
    // Possible effects are:
    // [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
    //  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
    //  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
    //  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
    //  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
    //  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
    //  easeOutElastic, easeInCubic]
    animationEasing: "easeOutQuart",

    // Boolean - If we should show the scale at all
    showScale: true,

    // Boolean - If we want to override with a hard coded scale
    scaleOverride: false,

    // ** Required if scaleOverride is true **
    // Number - The number of steps in a hard coded scale
    scaleSteps: null,
    // Number - The value jump in the hard coded scale
    scaleStepWidth: null,
    // Number - The scale starting value
    scaleStartValue: null,

    // String - Colour of the scale line
    scaleLineColor: "rgba(0,0,0,.1)",

    // Number - Pixel width of the scale line
    scaleLineWidth: 1,

    // Boolean - Whether to show labels on the scale
    scaleShowLabels: true,

    // Interpolated JS string - can access value
    scaleLabel: "<%=value%>",

    // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
    scaleIntegersOnly: true,

    // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero: false,

    // String - Scale label font declaration for the scale label
    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Scale label font size in pixels
    scaleFontSize: 12,

    // String - Scale label font weight style
    scaleFontStyle: "normal",

    // String - Scale label font colour
    scaleFontColor: "#666",

    // Boolean - whether or not the chart should be responsive and resize when the browser does.
    responsive: false,

    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: true,

    // Boolean - Determines whether to draw tooltips on the canvas or not
    showTooltips: true,

    // Function - Determines whether to execute the customTooltips function instead of drawing the built in tooltips (See [Advanced - External Tooltips](#advanced-usage-custom-tooltips))
    customTooltips: false,

    // Array - Array of string names to attach tooltip events
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],

    // String - Tooltip background colour
    tooltipFillColor: "rgba(0,0,0,0.8)",

    // String - Tooltip label font declaration for the scale label
    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip label font size in pixels
    tooltipFontSize: 14,

    // String - Tooltip font weight style
    tooltipFontStyle: "normal",

    // String - Tooltip label font colour
    tooltipFontColor: "#fff",

    // String - Tooltip title font declaration for the scale label
    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip title font size in pixels
    tooltipTitleFontSize: 14,

    // String - Tooltip title font weight style
    tooltipTitleFontStyle: "bold",

    // String - Tooltip title font colour
    tooltipTitleFontColor: "#fff",

    // Number - pixel width of padding around tooltip text
    tooltipYPadding: 6,

    // Number - pixel width of padding around tooltip text
    tooltipXPadding: 6,

    // Number - Size of the caret on the tooltip
    tooltipCaretSize: 8,

    // Number - Pixel radius of the tooltip border
    tooltipCornerRadius: 6,

    // Number - Pixel offset from point x to tooltip edge
    tooltipXOffset: 10,

    // String - Template string for single tooltips
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

    // String - Template string for multiple tooltips
    multiTooltipTemplate: "<%= value %>",

    // Function - Will fire on animation progression.
    onAnimationProgress: function(){},

    // Function - Will fire on animation completion.
    onAnimationComplete: function(){}
}

Chart.defaults.global.responsive = true;

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

  var myChart1 = new Chart(ctx1).Line(data, Chart.defaults);
}

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

  var myChart2 = new Chart(ctx2).Bar(data, Chart.defaults);
}


// welcomescreen //
var welcomescreen_slides = [
  {
    id: 'slide0',
    picture: '<div class="tutorialicon">♥</div>',
    text: 'Welcome to this tutorial. In the next steps we will guide you through a manual that will teach you how to use this app.'
  },
  {
    id: 'slide1',
    picture: '<div class="tutorialicon">✲</div>',
    text: '查课表，查电费，查余额'
  },
  {
    id: 'slide2',
    picture: '<div class="tutorialicon">♫</div>',
    text: '你可以通过下拉页面来更新内容'
  },
  {
    id: 'slide3',
    picture: '<div class="tutorialicon">☆</div>',
    text: '与你相遇是一种缘分<br><br><a id="tutorial-close-btn" href="#">End Tutorial</a>'
  }
];

var options = {
  'bgcolor': '#0da6ec',
  'fontcolor': '#fff'
}

var welcomescreen = myApp.welcomescreen(welcomescreen_slides, options);

$$('#tutorial-close-btn').on('click', function () {
  welcomescreen.close();
});

$$('#tutorial-open-btn').on('click', function () {
  welcomescreen.open();  
});

$$('#tutorial-next-link').on('click', function (e) {
  welcomescreen.next(); 
});

$$('#tutorial-previous-slide').on('click', function (e) {
  welcomescreen.previous(); 
});
