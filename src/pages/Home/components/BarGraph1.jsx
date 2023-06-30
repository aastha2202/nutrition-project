import React from 'react'

import { useState,useEffect } from 'react';

// import Dialog from '@mui/material/Dialog';
import {useImperativeHandle,forwardRef} from 'react';

import Highcharts from "highcharts/highstock";

import {

  HighchartsStockChart,

  Chart,

  HighchartsProvider,

  XAxis,

  YAxis,

  Title,

  Legend,

  AreaSplineSeries,

  SplineSeries,

  Navigator,

  RangeSelector,

  Tooltip,

} from "highcharts/highstock";

import PieChart from "highcharts-react-official";
import { Dialog } from '@mui/material';




const BarGraph1  = forwardRef((props, ref) => {
 
  const [open, setOpen] = React.useState(false);
    var [recommended_servings, setRecommendedServings] = useState([])

  var [servings_consumed,setServingsConsumed]=useState([])


  useImperativeHandle(ref, () => ({
    handleClickOpen () {
     setOpen(true);
   }
 }))
 const handleClickOpen = () => {
  setOpen(true);

  
};
const onClose=()=>{
  setOpen(false);
}


    const isFocused = true;

  var responseData = [

    {

      "start_date": "12-06-2023",

      "end_date": "18-06-2023",

      "status": "ongoing",

      "data": [

        {

          "recommended_servings": 3,

          "servings_consumed": 1,

          "difference": 0,

          "log_date": "14-06-2023",

          "status": "excessive"

        },

        {

          "recommended_servings": 3,

          "servings_consumed": 1,

          "difference": 0,

          "log_date": "15-06-2023",

          "status": "excessive"

        }

      ]

    },

    {

      "start_date": "12-05-2023",

      "end_date": "18-05-2023",

      "status": "previous",

      "data": [

        {

          "recommended_servings": 3,

          "servings_consumed": 3,

          "difference": 0,

          "log_date": "14-06-2023",

          "status": "excessive"

        }

      ]

    },

    {

      "start_date": "12-04-2023",

      "end_date": "18-04-2023",

      "status": "previous",

      "data": [

        {

          "recommended_servings": 3,

          "servings_consumed": 3,

          "difference": 0,

          "log_date": "14-06-2023",

          "status": "excessive"

        }

      ]

    }

  ]

  useEffect(() => {

    if (isFocused) {

      recommended_servings = []

      servings_consumed=[]

      setRecommendedServings(recommended_servings)

      setServingsConsumed(servings_consumed)

      //setValues()

      apiCall("12-06-2023", "18-06-2023")

    }




  }, [isFocused])

  const apiCall = (start_date,end_date) => {

    let tempResponse = responseData.filter(e => e.start_date == start_date && e.end_date == end_date)

   

    if (tempResponse.length > 0) {

      tempResponse = tempResponse[0].data;

      if (tempResponse.length > 0) {

        for (let i = 0; i < tempResponse.length; i++) {

          let servingStatus = tempResponse[i]

          recommended_servings.push(servingStatus.recommended_servings)

          servings_consumed.push(servingStatus.servings_consumed)

          if (i == tempResponse.length - 1) {

            setRecommendedServings(recommended_servings)

            setServingsConsumed(servings_consumed)

          }

        }

      }

    }

  }




//   var Highcharts = 'Highcharts';

 

  var conf = {

    chart: {

      type: 'column'

    },

    credits: {

      enabled: false

  },

    title: {

      text: 'Diet Status'

    },

    xAxis: {

      categories: [

        ' Jun 14',

        'Jun 15',

        'Jun 16'

      ],

      labels: {

        style: {

          padding:100

        }

      }

    },

    yAxis: [{

      min: 0,

      title: {

        text: 'Servings Status'

      }

    },

     ],

    legend: {

      shadow: false

    },

    tooltip: {

      shared: true

    },

    plotOptions: {

      column: {

        grouping: false,

        shadow: false,

        borderWidth: 0

      }

    },

    series: [{

      name: 'Recommended Servings',

      color: 'rgba(165,170,217,1)',

      data: [1,2,3],

      pointPadding: 0.3,

      pointPlacement: -0.2

    }, {

      name: 'Consumed Servings',

      color: 'rgba(126,86,134,.9)',

      data: [5,8,9],

      // pointPadding: 0.4,

      // pointPlacement: -0.2

      }

    //   , {

    //   name: 'Profit',

    //   color: 'rgba(248,161,63,1)',

    //   data: [183.6, 178.8, 198.5],

    //   tooltip: {

    //     valuePrefix: '$',

    //     valueSuffix: ' M'

    //   },

    //   pointPadding: 0.3,

    //   pointPlacement: 0.2,

    //   yAxis: 1

    // }, {

    //   name: 'Profit Optimized',

    //   color: 'rgba(186,60,61,.9)',

    //   data: [203.6, 198.8, 208.5],

    //   tooltip: {

    //     valuePrefix: '$',

    //     valueSuffix: ' M'

    //   },

    //   pointPadding: 0.4,

    //   pointPlacement: 0.2,

    //   yAxis: 1

    //   }

    ]

  }

  console.log(conf?.series, "cpnffff")

  const options = {

    global: {

      useUTC: false

    },

    lang: {

      decimalPoint: ',',

      thousandsSep: '.'

    }

  };




    const dataPrev = {

        2020: [

            ['kr', 9],

            ['jp', 12],

            ['au', 8],

            ['de', 17],

            ['ru', 19],

            ['cn', 26],

            ['gb', 27],

            ['us', 46]

        ],

        2016: [

            ['kr', 13],

            ['jp', 7],

            ['au', 8],

            ['de', 11],

            ['ru', 20],

            ['cn', 38],

            ['gb', 29],

            ['us', 47]

        ],

        2012: [

            ['kr', 13],

            ['jp', 9],

            ['au', 14],

            ['de', 16],

            ['ru', 24],

            ['cn', 48],

            ['gb', 19],

            ['us', 36]

        ],

        2008: [

            ['kr', 9],

            ['jp', 17],

            ['au', 18],

            ['de', 13],

            ['ru', 29],

            ['cn', 33],

            ['gb', 9],

            ['us', 37]

        ],

        2004: [

            ['kr', 8],

            ['jp', 5],

            ['au', 16],

            ['de', 13],

            ['ru', 32],

            ['cn', 28],

            ['gb', 11],

            ['us', 37]

        ],

        2000: [

            ['kr', 7],

            ['jp', 3],

            ['au', 9],

            ['de', 20],

            ['ru', 26],

            ['cn', 16],

            ['gb', 1],

            ['us', 44]

        ]

    };

   

    const data = {

        2020: [

            ['kr', 6],

            ['jp', 27],

            ['au', 17],

            ['de', 10],

            ['ru', 20],

            ['cn', 38],

            ['gb', 22],

            ['us', 39]

        ],

        2016: [

            ['kr', 9],

            ['jp', 12],

            ['au', 8],

            ['de', 17],

            ['ru', 19],

            ['cn', 26],

            ['gb', 27],

            ['us', 46]

        ],

        2012: [

            ['kr', 13],

            ['jp', 7],

            ['au', 8],

            ['de', 11],

            ['ru', 20],

            ['cn', 38],

            ['gb', 29],

            ['us', 47]

        ],

        2008: [

            ['kr', 13],

            ['jp', 9],

            ['au', 14],

            ['de', 16],

            ['ru', 24],

            ['cn', 48],

            ['gb', 19],

            ['us', 36]

        ],

        2004: [

            ['kr', 9],

            ['jp', 17],

            ['au', 18],

            ['de', 13],

            ['ru', 29],

            ['cn', 33],

            ['gb', 9],

            ['us', 37]

        ],

        2000: [

            ['kr', 8],

            ['jp', 5],

            ['au', 16],

            ['de', 13],

            ['ru', 32],

            ['cn', 28],

            ['gb', 11],

            ['us', 37]

        ]

    };

   

    const countries = {

        kr: {

            name: 'South Korea',

            color: 'rgb(201, 36, 39)'

        },

        jp: {

            name: 'Japan',

            color: 'rgb(201, 36, 39)'

        },

        au: {

            name: 'Australia',

            color: 'rgb(0, 82, 180)'

        },

        de: {

            flag: 'de',

            color: 'rgb(0, 0, 0)'

        },

        ru: {

            name: 'Russia',

            color: 'rgb(240, 240, 240)'

        },

        cn: {

            name: 'China',

            color: 'rgb(255, 217, 68)'

        },

        gb: {

            name: 'Great Britain',

            color: 'rgb(0, 82, 180)'

        },

        us: {

            name: 'United States',

            color: 'rgb(215, 0, 38)'

        }

    };

   

    // Add upper case country code

    for (const [key, value] of Object.entries(countries)) {

        value.ucCode = key.toUpperCase();

    }

   

   

    const getData = data => data.map(point => ({

        name: point[0],

        y: point[1],

        color: countries[point[0]].color

    }));

   

    const chart = {

        chart: {

            type: 'column'

        },

        // Custom option for templates

        countries,

        title: {

            text: 'Summer Olympics 2020 - Top 5 countries by Gold medals',

            align: 'left'

        },

        subtitle: {

            text: 'Comparing to results from Summer Olympics 2016 - Source: <a ' +

                'href="https://olympics.com/en/olympic-games/tokyo-2020/medals"' +

                'target="_blank">Olympics</a>',

            align: 'left'

        },

        plotOptions: {

            series: {

                grouping: false,

                borderWidth: 0

            }

        },

        legend: {

            enabled: false

        },

        tooltip: {

            shared: true,

            headerFormat: '<span style="font-size: 15px">' +

                '{series.chart.options.countries.(point.key).name}' +

                '</span><br/>',

            pointFormat: '<span style="color:{point.color}">\u25CF</span> ' +

                '{series.name}: <b>{point.y} medals</b><br/>'

        },

        xAxis: {

            type: 'category',

            accessibility: {

                description: 'Countries'

            },

            max: 4,

            labels: {

                useHTML: true,

                animate: true,

                format: '{chart.options.countries.(value).ucCode}<br>' +

                    '<span class="f32"><span class="flag {value}"></span></span>',

                style: {

                    textAlign: 'center'

                }

            }

        },

        yAxis: [{

            title: {

                text: 'Gold medals'

            },

            showFirstLabel: false

        }],

        series: [{

            color: 'rgba(158, 159, 163, 0.5)',

            pointPlacement: -0.2,

            linkedTo: 'main',

            data: dataPrev[2020].slice(),

            name: '2016'

        }, {

            name: '2020',

            id: 'main',

            dataSorting: {

                enabled: true,

                matchByName: true

            },

            dataLabels: [{

                enabled: true,

                inside: true,

                style: {

                    fontSize: '16px'

                }

            }],

            data: getData(data[2020]).slice()

        }],

        exporting: {

            allowHTML: true

        }

    };

   

    const locations = [

        {

            city: 'Tokyo',

            year: 2020

        }, {

            city: 'Rio',

            year: 2016

        }, {

            city: 'London',

            year: 2012

        }, {

            city: 'Beijing',

            year: 2008

        }, {

            city: 'Athens',

            year: 2004

        }, {

            city: 'Sydney',

            year: 2000

        }

    ];

   

    // locations.forEach(location => {

    //     const btn = document.getElementById(location.year);

   

    //     btn.addEventListener('click', () => {

   

    //         document.querySelectorAll('.buttons button.active')

    //             .forEach(active => {

    //                 active.className = '';

    //             });

    //         btn.className = 'active';

   

    //         chart.update({

    //             title: {

    //                 text: 'Summer Olympics ' + location.year +

    //                     ' - Top 5 countries by Gold medals'

    //             },

    //             subtitle: {

    //                 text: 'Comparing to results from Summer Olympics ' +

    //                     (location.year - 4) + ' - Source: <a href="https://olympics.com/en/olympic-games/' +

    //                     (location.city.toLowerCase()) + '-' + (location.year) + '/medals" target="_blank">Olympics</a>'

    //             },

    //             series: [{

    //                 name: location.year - 4,

    //                 data: dataPrev[location.year].slice()

    //             }, {

    //                 name: location.year,

    //                 data: getData(data[location.year]).slice()

    //             }]

    //         }, true, false, {

    //             duration: 800

    //         });

    //     });

    // });

  return (

    <Dialog
    open={open}
    // TransitionComponent={Transition}
    keepMounted
    onClose={onClose}
    aria-describedby="alert-dialog-slide-description">
    <div> <PieChart highcharts={Highcharts} options={conf} /></div>
    </Dialog>

  )

}


)

export default BarGraph1