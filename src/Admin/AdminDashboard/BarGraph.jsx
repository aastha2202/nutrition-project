import axios from "axios";
import React, { useEffect, useState } from "react";

const BarGraph = () =>{
    const [countData,setCountData] = useState("")
useEffect(() => {
    count ();
}, [])
const count = async => {
    var config = {
        method: 'GET',
        maxBodyLength: Infinity,
        url: 'https://aipse.in/api/count',
        headers: { } 
      };
      
      axios(config)
      
      .then(function (response) {
        console.log(response?.data,"<-zwertyu")
        const realData = [
            {
             name: "Active Users",
             y:response?.data?.totalCountOfActiveUser

            },
            {
                name: "Inactive Users",
                y:response?.data?.totalCountOfInactiveUser
   
               },
               {
                name: "Total Users",
                y:response?.data?.totalCountOfUsers
   
               },
               {
                name: "No of Users Diet Plan Created",
                y:response?.data?.totalNoOfUserDietPlanCreated
   
               },
               {
                name: "No of Users Diet Plan Not Created",
                y:response?.data?.totalNoofUserDietPlanNotCreated
   
               }
        ]
        setCountData(realData)
        
        // setCountData({
        //   ...countData,
        //   realData
        // })
// const mappedData = Object?.keys(response?.data)?.map(itm=>{
//     if(response?.data[itm]==="success"){
//         console.log(itm,"<----itmersss",response?.data[itm])
       
//     }
//     else if(
//         itm==="Code"
//     )
//     {
        
//     }
//     else if(
//         itm==="Status"
//     )
//     {
        
//     }
//     else{
//         return{name:itm,
//             y:response?.data[itm]
//         }
//     }
   
// })
        //setCountData(response.data)
        //setIsActive([response.data?.totalCountOfActiveUser,response.data?.totalCountOfInactiveUser,response.data?.totalCountOfUsers,response.data?.totalNoOfUserDietPlanCreated,response.data?.totalNoofUserDietPlanNotCreated])
        // const filterdata = mappedData.filter(function( element ) {
        //     return element !== undefined;
        //  });
        //setCountData(filterdata)
        console.log(countData,"<--------------setCountDatasetCountData-");
      })
      .catch(function (error) {
        console.log(error);
      });
}
  

    return (
      // <View style={{bottom:130}}> 
      //   {/* <PieChart highcharts={Highcharts} options={options} /> */}
      //   <ChartView style={{height:250,width:400}} config={conf} options={options}></ChartView>

      // </View>
      <div>
        <h1>hvvhjvjhvhjvjh</h1>
      </div>
    );

}

export default BarGraph