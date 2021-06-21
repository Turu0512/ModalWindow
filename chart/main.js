
(function(){
    'use strict'

    let type = 'line';
    let data = {
      labels:[2010,2011,2012,2013],
      datasets:[{
        label: '@taguchi',
        data: [120,300,200,210],
        borderColor:'red',
        borderWidth:5,
      } ,{
        label: '@koji',
      data: [180,250,320,180],
      borderColor:'blue',
        borderWidth:5,
    }]
  };

  let options= {
    scales:{
yAxes: [{
  ticks:{
    suggestedMin:0,
    suggestedMax:400
  }
}]
    }
  };

    let ctx = document.getElementById('my_chart').getContext('2d');
    let myChart = new Chart(ctx,{
      type:type,
      data:data,
      options:options
    });
  })();



