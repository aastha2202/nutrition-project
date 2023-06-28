// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
//   TextInput,
//   ScrollView,
//   Button,
//   FlatList,
//   RefreshControl,
//   ActivityIndicator,
//   Alert,
// } from 'react-native';
// import SpeedFabView from '../components/SpeedFabView';
// import Dropdown from './Components/DropdownComponent';
// import Header from './Components/DietHeader';
// import Datei from './Components/DatePickerM';
// import CategoryItemDropdown from './Components/CategoryItemDropdown';
// import CategoryDropdown from './Components/CategoryDropdown';
// import moment from 'moment';
// import {PlanValue} from '../../Context';
// import axios from 'axios';
// import {baseUrl} from '../../common/config';
// const CreateDiet = ({navigation, route}) => {
//   const [{plans}, dispatch] = PlanValue();
//   console.log(route?.params,"<---routeroute")
//   useEffect(() => {
//     if (route?.params?.item) {
//       console.log(
//         route?.params,
//         '<-route?.params?.item?',
//         route?.params?.item?.start_date,
//       );
//       const data = route?.params?.item?.Category?.map(itm => {
//         console.log(itm, '<---wewqeqe');
//         return {
//           Category: itm?.Category,
//           category: itm?.Category,
//           value: itm?.recommended_servings,
//           Diet_id: itm?.Diet_id,
//           total_servings: itm?.total_servings,
//         };
//       });
//        console.log(route?.params?.item,"<---qwwewqeqweq")
//       setValuesD({
//         ...valuesD,
//         interval:
//           route?.params?.item?.interval === 'month'
//             ? 30
//             : route?.params?.item?.interval === 'week'
//             ? 7
//             : 90,
//         startDate:moment?.(route?.params?.item?.start_date,"DD-MM-YYYY")?.format("DD-MM-YYYY"),
//         endDate: moment?.(route?.params?.item?.end_date,"DD-MM-YYYY")?.format("DD-MM-YYYY"),
//         plan_id: route?.params?.item?.plan_id,

//         items: data,
//       });
//     }
//   }, [route?.params?.item]);
//   const today = new Date();
//   const Obj1 = {
//     category: '',
//     value: '',
//   };
//   const intialValues = {
//     interval: 0,
//     startDate: moment(today)?.format('DD-MM-YYYY'),
//     endDate: moment(today)?.format('DD-MM-YYYY'),
//     category: '',
//     items: [Obj1],
//   };

//  console.log(intialValues,"<---vyuvyuvuvyu")
//   const [valuesD, setValuesD] = useState(intialValues);
//   const [loading, setLoading] = useState(true);
//   // useEffect(()=>{
//   //   setTimeout(()=>{
//   //       setLoading(false)
//   //   },2000)

//   // },[])
//   const [dateVisible, setDateVisible] = useState(false);
//   // console.log(valuesD,"<--wqeqweqweqweqw")
//   const onPressTitle = () => {
//     setTitleText("Bird's Nest [pressed]");
//   };

//   const addButton = () => {
//     setValuesD({...valuesD, items: [...valuesD?.items, Obj1]});
//   };

//   const dataDelete = (i,index) => {
   
//     let firstData = [...valuesD?.items]
//     console.log(i,"<---asdasdas", firstData)
//     const filterData  =firstData?.filter((itm,ind)=>ind!==index)
//     console.log(filterData,"<--fghbjnk")
//     if(i?.Diet_id){
//     var data = JSON.stringify({
//       "diet_id": i?.Diet_id
//     });
    
//     var config = {
//       method: 'post',
//     maxBodyLength: Infinity,
//       url: baseUrl+'deleteDiet',
//       headers: { 
//         'Content-Type': 'application/json'
//       },
//       data : data
//     };
    
//     axios(config)
//     .then(function (response) {
//    setValuesD({...valuesD,items:filterData})
//   Alert?.alert("delete")
//       console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }
//   else{
//     setValuesD({...valuesD,items:filterData})
//     // Alert?.alert("delete")
//   }
//     // const data = {...valuesD};
//     // data?.items.pop();

//     // setValuesD(data);
//   };
//   // if(loading){
//   //   return (
//   //       <View>
//   //           <ActivityIndicator/>
//   //       </View>
//   //   )
//   // }
//   console.log(valuesD?.items, '<-----somrthing like that');
//   const addItems = () => {
//     let newss = {};
//     const categoryData = valuesD?.items?.map(itm => {
//       newss = {...newss, [itm?.category]: parseInt(itm?.value)};
//       return {
//         [itm?.category]: parseInt(itm?.value),
//       };
//     });
//     let alldata = {};
//     const totaldata = valuesD?.items?.map(itm => {
//       alldata = {
//         ...alldata,
//         [itm?.category]: parseInt(itm?.value * valuesD?.interval),
//       };
//       return {
//         [itm?.category]: parseInt(itm?.value * valuesD?.interval),
//       };
//     });
//     // console.log(categoryData,"<--fdcghvbj")
//     const reqyest = {
//       user_id: route?.params?.id,
//       start_date:moment(valuesD?.startDate,"DD-MM-YYYY").format('DD-MM-YYYY'),
//       end_date:moment(valuesD?.endDate,"DD-MM-YYYY").format('DD-MM-YYYY'),
//       type: 'food', 
//       interval:
//         valuesD?.interval == 7
//           ? 'week'
//           : valuesD?.interval == 30
//           ? 'month'
//           : '2 month',
//       category: newss,
//       total_servings: alldata,
//     //   "category": {
//     //     "Carbohydrates Vegetables": 30
//     //   },
//     //   "end_date": "22-05-2023",
//     //   "interval": "week",
//     //   "start_date": "15-05-2023",
//     //   "total_servings": {
//     //     "Carbohydrates Vegetables": 210
//     //   },
//     //   "type": "food",
//     //   "user_id": 10
//      };
//     let config = {
//       method: 'POST',
//       maxBodyLength: Infinity,
//     //  url: baseUrl + '/assignDietPlanForPatient',
//      url: `http://44.212.136.151:8081/api/assignDietPlanForPatient`,

//       headers: {
//         'Content-Type': 'application/json',
//       },
//       data: [reqyest],
//     };

//     axios
//       .request(config)
//       .then(response => {
//         Alert?.alert('info', 'sucesss');
//         navigation?.navigate('CreateDietDetail',{
//           name:route?.params?.name
//         });
//         // console.log(JSON.stringify(response.data));
//       })
//       .catch(error => {
//         _DEV_ && console.log(error);
//       });
//       {  console.log([reqyest],"<--gdfhdfdfhdfh")}

//     // console.log([reqyest],"<--qwerty222")
//     //  dispatch({type:"addPlan",payload:[...plans,valuesD]})
//     //  navigation?.navigate("CreateDietDetail")
//   };
//   const editSave = () => {
//     const valuess = valuesD?.items?.map(itm => {
//       console.log(itm, '<--dssfsdfsd');
//       return {
//         Category: itm?.category,
//         recommended_servings: parseInt(itm?.value),
//         Diet_id: itm?.Diet_id?itm?.Diet_id:0,
//         total_servings: itm?.total_servings,
//       };
//     });
//     console.log(valuess, '<--valuesD?.items', valuesD);
//     var data = JSON.stringify({
//       user_id: route?.params?.id,
//       start_date: valuesD?.startDate,
//       end_date: valuesD?.endDate,
//       type: 'food',
//       interval:
//         valuesD?.interval === 7
//           ? 'week'
//           : valuesD?.interval === 30
//           ? 'month'
//           : 'two month',
//       plan_id: valuesD?.plan_id,
//       Category: valuess,
//     });

//     var config = {
//       method: 'put',
//       maxBodyLength: Infinity,
//       url: baseUrl + 'editDietPlanAssigned',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       data: data,
//     };

//     axios(config)
//       .then(function (response) {
//         Alert?.alert('info', 'sucesss');
//         navigation?.navigate('CreateDietDetail');
//         console.log(response.data,"<------editDietPlanAssignededitDietPlanAssigned");
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//     console.log(valuesD, '<----qwewq');
//   };
//   return (
//     <View>
//       <Header
//         header={
//           route?.params?.item ? 'Edit Diet Plan ' : 'Create New Diet Plan '
//         }
//       />

//       <View style={styles.vw}>
//         <Text style={styles.head} marginTop={'-1%'}>
//           {' '}
//           Select Interval
//         </Text>
//       </View>
//       <Dropdown
//         value={JSON?.stringify(valuesD?.interval)}
//         onChange={e => {
//             console.log(valuesD?.startDate,"<--valuesD?.startDate")
//           const newDate = moment(valuesD?.startDate,"DD-MM-YYYY")
//             ?.add( e, 'days')
//              ?.format('DD-MM-YYYY');
//             console.log(newDate,"<---newDate",e,typeof e,valuesD?.startDate)
//           setValuesD({
//             ...valuesD,
//             interval:parseInt(e) ,
//             endDate: newDate,
//           });
//           // console.log(e,"<---qwerty")
//         }}
//       />
//      { console.log("newDate",)}
//       <Datei
//         dateVisible={dateVisible}
//         onChange={e => {
//           if (e) {
//              console.log(e,"<---eee")
//             const newDate = moment(e)
//               ?.add(valuesD?.interval, 'days')
//               ?.format('DD-MM-YYYY');
//               console.log(newDate,e,valuesD?.interval,"<--qwert")
//             setValuesD({
//               ...valuesD,
//               startDate: moment(e)?.format('DD-MM-YYYY'),
//               endDate: newDate,
//             });
//           }
//         }}
//         setDateVisible={() => {
//           setDateVisible(false);
//         }}
//       />
//       {console.log(valuesD,"<-dcfgvhbjnk")}
//       <Text style={styles.head}>
//         Start Date :
//         <TouchableOpacity
//           onPress={() => {
//             setDateVisible(true);
//           }}>
//           <Text style={styles.titleText}> {valuesD?.startDate?.toString()}</Text>
//         </TouchableOpacity>
//       </Text>
//       {/* {console.log(valuesD?.startDate,"<---valuessddd",moment(valuesD?.startDate)?.format("DD-MM-YYY"))} */}

//       {/* <TextInput
//             style={styles.input}
//             placeholderTextColor="#8E9AA7"
//             placeholder="Start-Date"
//             keyboardType="default"
//           /> */}

//       <Text style={styles.head} marginTop={'5%'}>
//         {' '}
//         End Date
//         <Text> {valuesD?.endDate}</Text>
//       </Text>

//       <FlatList
//         style={{height: '60%', alignSelf: 'center', paddingBottom: 160}}
//         data={valuesD?.items}
//         ListFooterComponent={
//           <TouchableOpacity
//             style={styles.buttonvw}
//             onPress={() => (route?.params?.item ? editSave() : addItems())}>
//             <Text allowFontScaling={false} style={styles.textApple}>
//               Save
//             </Text>
//           </TouchableOpacity>
//         }
//         keyExtractor={({id}, index) => id}
//         renderItem={({item, index}) => (
//           <View style={styles.card}>
//             <View style={styles.vw}>
//               <CategoryDropdown
//                 valuess={valuesD?.items[index]?.category}
//                 onChange={e => {
//                   if (e) {
//                     const data = [...valuesD?.items];
//                     data[index] = {...data[index], category: e};
//                     setValuesD({...valuesD, items: data});
//                   }
//                 }}
//               />

//               <TextInput
//                 style={styles.input1}
//                 placeholderTextColor="#8E9AA7"
//                 editable={true}
//                 value={valuesD?.items[index]?.value?.toString()}
//                 keyboardType="number-pad"
//                 onChangeText={e => {
//                   // console.log(e,"<---drftvgybhunj")
//                   const data = [...valuesD?.items];
//                   data[index] = {...data[index], value: e};
//                   setValuesD({...valuesD, items: data});
//                 }}
//                 placeholder="Enter  "
//                 // keyboardType="default"
//               />
//             </View>
//             {index !== 0 && (
//               <TouchableOpacity 
//                 onPress={() => {
//                   dataDelete(valuesD?.items[index],index);
//                 }}>
//                 <Text style={styles.deletetxt}>Delete</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         )}
//       />

//       <SpeedFabView
//         setModal={() => {
//           addButton();
//         }}
//         height={120}
//       />
//       {/* {console.log(valuesD,"<---bnbjhhbhj")} */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     height: 120,
//     width: '100%',
//     backgroundColor: '#fff',
//     marginTop: '8%',
//     alignSelf: 'center',
//     borderRadius: 17,
//   },
//   deletetxt: {
//     color: '#FB5D5F',
//     //alignSelf: 'center',
//     fontFamily: 'Inter-Regular',
//     fontWeight: '600',
//     fontSize: 10,
//    // marginStart: 300,
//      alignSelf:"flex-end",
//   },
//   titleText: {
//     fontFamily: 'Inter-Regular',
//     fontWeight: '600',
//     fontSize: 14,
//     top: 2,
//     marginStart: 15,
//     color: '#112866',
//   },
//   row: {
//     flexDirection: 'row',
//   },
//   head: {
//     fontFamily: 'Inter-Regular',
//     fontWeight: '600',
//     fontstyle: 'normal',
//     fontSize: 14,
//     top: 10,
//     marginStart: 15,
//     color: '#112866',
//   },
//   vw: {
//     flexDirection: 'row',
//     marginTop: '5%',
//     // justifyContent:'space-between'
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 8,
//     marginTop: '5%',
//     color: '#112866',
//     borderColor: '#C8CEDD',
//     fontFamily: 'Inter-Regular',
//     fontSize: 14,
//     backgroundColor: '#fff',
//   },
//   input1: {
//     height: '60%',
//     width: '40%',
//     margin: 4,
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 8,
//     top: '3%',
//     color: '#112866',
//     borderColor: '#C8CEDD',
//     fontFamily: 'Inter-Regular',
//     fontSize: 14,
//     backgroundColor: '#fff',
//   },
//   buttonvw: {
//     width: 328,
//     height: 44,
//     marginTop: '10%',
//     backgroundColor: '#702963',
//     borderRadius: 12,
//     alignSelf: 'center',
//     borderWidth: 2.6,
//     borderColor: '#702963',
//   },
//   textApple: {
//     fontFamily: 'Inter-Regular',
//     fontWeight: '600',
//     fontSize: 14,
//     top: 11,
//     color: '#fff',
//     justifyContent: 'center',
//     textAlign: 'center',
//   },
// });

// export default CreateDiet;




// import * as React from 'react';
// import { useState,useEffect } from 'react';
// import moment from 'moment';
// import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
// import dayjs, { Dayjs } from 'dayjs';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import ListItemText from '@mui/material/ListItemText';
// import ListItem from '@mui/material/ListItem';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import AppBar from '@mui/material/AppBar';
// // import Box from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import CloseIcon from '@mui/icons-material/Close';
// import Slide from '@mui/material/Slide';
// import { format } from 'date-fns';

// import { DemoContainer , DemoItem} from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Select from '@mui/material/Select';
// import InputBase from '@mui/material/InputBase';

// import axios from 'axios'

// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import {CardContent, Card, Stack, Grid, TextField ,MenuItem,InputLabel,NativeSelect,FormControl} from '@mui/material';




// // import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// // import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import { Action } from 'history';




// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
  
// });
// // const Item = styled(Paper)(({ theme }) => ({
// //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
// //     ...theme.typography.body2,
// //     padding: theme.spacing(1),
// //     textAlign: 'center',
// //     color: theme.palette.text.secondary,
// //   }));
// const currencies = [
//     {
//       value: 'week',
//       label: 'week',
//     },
//     {
//       value: 'month',
//       label: 'month',
//     },
//     {
//       value: 'day',
//       label: 'day',
//     }
//   ];

//   function changeHandler(e){
//     console.log(e?.target.value)
    
//   }

//   const BootstrapInput = styled(InputBase)(({ theme }) => ({
//     'label + &': {
//       marginTop: theme.spacing(3),
//     },
//     '& .MuiInputBase-input': {
//       borderRadius: 4,
//       position: 'relative',
//       backgroundColor: theme.palette.background.paper,
//       border: '1px solid #ced4da',
//       fontSize: 16,
//       padding: '10px 26px 10px 12px',
//       transition: theme.transitions.create(['border-color', 'box-shadow']),
//       // Use the system font instead of the default Roboto font.
//       fontFamily: [
//         '-apple-system',
//         'BlinkMacSystemFont',
//         '"Segoe UI"',
//         'Roboto',
//         '"Helvetica Neue"',
//         'Arial',
//         'sans-serif',
//         '"Apple Color Emoji"',
//         '"Segoe UI Emoji"',
//         '"Segoe UI Symbol"',
//       ].join(','),
//       '&:focus': {
//         borderRadius: 4,
//         borderColor: '#80bdff',
//         boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//       },
//     },
//   }));


//   const datepicker={
//     minWidth: 200,
//     maxWidth: 400,
//     '@media (max-width: 600px)': {
//       minWidth: 150,
//       maxWidth: 300,
//     },
//   }



  
//   const  CreateDietPlan= React.forwardRef((props, ref) => {
//     const [open, setOpen] = React.useState(false);
//     const [cardsCount,setCardsCount]=useState(1);
//     const initialDate = new Date(2023, 4, 23)
//     const [selectedDateStart, setSelectedDateStart] = useState("");
//     const [selectedDateEnd, setSelectedDateEnd] = useState("");
//     const [val,setVal]=useState("");
//     const [categoryValue,setCategoryValue]=useState("");
//     const[valueFromEdit,setValueFromEdit]=useState({})
//     const [interval, setIntervalValue] = useState('');
//     const [selectedDateTest, setSelectedDateTest] = useState(null);
//     const [categoryList,setCategoryList]=useState([])
//     const [actionToDo,setAcionToDo]=useState('Create'); 
//     const [editCategory,setEditCategory]=useState([])
//     const [editCategory2d,setEditCategoy2d]=useState([[]])
//     const [categoryData,setCategoryData]=useState([])
//     var [createBoxLoop,setCreateBoxLoop]=useState([1]);
//     const [categoryToUpdate,setCategoryToUpdate]=useState([]);
//     const [formDataEdit,setFormDataEditHit]=useState(
//       {
//         "user_id": 7,
//         "start_date": "23-05-2023",
//         "end_date": "23-06-2023",
//         "type": "food",
//         "interval": "",
//         "plan_id": 32,
//         "Category": [
            
//         ]
//     }




//     )
//     const today = new Date();
//     const Obj1 = {
//       category: '',
//       value: '',
//     };

//     const intialValuesData = {
//       interval: 0,
//       startDate: moment(today)?.format('DD-MM-YYYY'),
//       endDate: moment(today)?.format('DD-MM-YYYY'),
//       category: '',
//       items: [Obj1],
//     };
//     const [valuesD, setValuesD] = useState(intialValuesData);

 
//     const [formData,setFormdata]=useState({
       
//       "user_id": "",
//        "start_date":"",
//       "end_date":"",
//       "type": "food",
//       "interval": "",
//       "category": {
//         // "aerobic": 10,
//         // "water": 70,
//         // "walk": 40
//       },
//       "total_servings": {
//         "aerobic": 150,
//         "water": 3224,
//         "walk": 450
//       }
  
// })

//     function handleInterval(e){
//       setIntervalValue(e.target?.value);
//       setFormdata({...formData,interval:e.target?.value})
//       //formData.interval=e.target?.value
//       console.log(formData,'----interval formdata');

//     }

//     React.useImperativeHandle(ref, () => ({
//       editClick
//     }));

//     function funSetcategory(item){
//       let new2d=[[]];
//       item.map((it,ind)=>{
//           // const newObje={}
//           //   newObje[it.Category]=it.recommended_servings
//           //   const exist=editCategory;
//           // exist.push(newObje);
//           // setEditCategory(exist);

//           //2d
          
//           let arr=[it.Category,it.recommended_servings,it.Diet_id,it.total_servings];
//           let alreadyExits=[...editCategory2d];
//           alreadyExits.push(arr);
//           new2d.push(arr);
//           setEditCategoy2d(alreadyExits);
         
          

          
//       })
//       //console.log(new2d,'new2d');
//       new2d.shift();
//       setEditCategoy2d(new2d);
      
//     }

//     function setIntialValues(val){
//       var startdate=convertDateFormat(formData.start_date);
//       var enddate=convertDateFormat(formData.end_date);
//       setFormDataEditHit(prev=>({
//         ...prev,
//         user_id:val.user_id,
//         start_date:startdate,
//         end_date:enddate,
//         interval:val.interval,
//         type:val.type,
//         plan_id:val.plan_id


//       }))
//       console.log(formDataEdit,'formDataEdit');
//     }


//     function convertDateFormat(dateString) {
//       // Split the date string into month, day, and year components
//       var dateComponents = dateString.split('-');
    
//       // Rearrange the components in "dd-mm-yyyy" format
//       var convertedDate = dateComponents[1] + '-' + dateComponents[0] + '-' + dateComponents[2];
      
//       return convertedDate;
//     }

//     function editClick(val){
     
//      setFormdata(val)
//      console.log(val,'intiale value')
//       // var startdate=convertDateFormat(formData.start_date);
//       // var enddate=convertDateFormat(formData.end_date);
//       // console.log(formData.start_date,'---',startdate,formData.end_date,'--',enddate)
//       // setFormdata((prev)=>({
//       //   ...prev,
//       //   start_date:startdate,
//       //   end_date:enddate

//       // })
//       // )
//       setIntialValues(val);
     
//        setCategoryList(val?.Category)
//        setAcionToDo('Edit');
//        funSetcategory(val?.Category);
//        editCategory2d.shift();
//       // console.log(editCategory2d,'--editCategory2d',editCategory);
//       // console.log('formData intial before date change',val);
//       // console.log('formData from edit after date change',formData);
//       //console.log((val),'----from edit');
//       //console.log(val?.Category)
    


//      console.log(formData.end_date,'formData.end_date',formData.end_date.slice(6,11),formData.end_date.slice(1,2),formData.end_date.slice(3,5));
//      const initialDate = new Date(2023, formData?.end_date.slice(0,2), formData.end_date.slice(3,5))
//       setSelectedDateEnd(initialDate);
//       const initialDate1 = new Date(2023, 3, 23)
//       setSelectedDateStart(initialDate1);
//       setValueFromEdit(val);
//       setIntervalValue(val.interval)
//       categoryhit();
//       handleClickOpen();
//     }



//     const handleDateChange = (date) => {
//       setSelectedDate(date);
//       const formattedDate = date ? moment(date).format('YYYY-MM-DD') : '';
//       const label = date ? date.label : '';
//       console.log('Formatted Date:', date);
//       console.log('Label:', moment(date).format('YYYY-MM-DD'));
//     };

//     function onChangePlus(){
//       let existing = [...createBoxLoop];
//       existing.push(1);
//       setCreateBoxLoop(existing);
//       setCardsCount(cardsCount+1);
//     }
  
//     const handleClickOpen = () => {
//       setOpen(true);
//       categoryhit();
//     };
  
//     const handleClose = (e) => {
//       console.log(formData,'--on save----');
      
//       setOpen(false);
//     };
//     const handleCloseSave=(e)=>{
//       console.log(formData,'--on save----');
//       console.log(actionToDo,'actionToDo');
//       // if(actionToDo==='Edit')apiHitEdit();
//       // else apiHit();
//       dataToHit();
//       setOpen(false);
//     }
   
//     const handleChange = (event) => {
//       console.log(event.target.value,'event.target.value');
//       setVal(event.target.value);
//       console.log(val)
//        console.log(formData.category,'formData')
//     };
//      const handleChangeWeight = (event) => {
//      console.log(event.target.value,'event.target.value',val);
//       // formData.Category.val=event.target.value;
//       formData.category[val]=parseInt(event.target.value);
//       console.log(formData.category);
//     };

//     function handleChangeWeightEdit(e,ind,str){
      
//       if(str==='Edit'){
     
//       var valWeight=e?.target?.value;
//       setEditCategoy2d(prev=>{
//         let new1=[...prev];
//         new1[ind][1]=valWeight
//         return new1;
//       })
//     }
//     else{
//       var valWeight=e?.target?.value;
//       setEditCategoy2d(prev=>{
//         let new1=[...prev];
//         new1[ind][0]=valWeight
//         return new1;
//       })
//     }
//     console.log(editCategory2d,'new2darray');
      


//     }
  


   


//     const apiHit=async=>{

//     let data = JSON.stringify([
//         {
//           "user_id": 1,
//           "start_date":formData?.start_date,
//           "end_date": formData?.end_date,
//           "type": "food",
//           "interval":formData?.interval,
//           "category":formData?.category ,
//           "total_servings": {
//             "aerobic": 150,
//             "water": 3224,
//             "walk": 450
//           }
//         }
//       ]);
      


      
//       let config = {
//         method: 'POST',
//         maxBodyLength: Infinity,
//         url: 'http://44.212.136.151:8081/api/assignDietPlanForPatient',
//         headers: { 
//           'Content-Type': 'application/json'
//         },
//         data : data
//       };
      
//       axios.request(config)
//       .then((response) => {
//         console.log(JSON.stringify(response.data));
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     }

    
//   const categoryhit = async => {
//       let config = {
//           method: 'GET',
//           maxBodyLength: Infinity,
//           url: 'http://44.212.136.151:8081/api/getAllCategories?type=food',
//           headers: { 'Content-Type': 'application/json' },
//       };
//       axios(config)
//           .then((response) => {
//               setCategoryData(response?.data?.data)
//               console.log(response?.data?.data, "<------------------------111setCategoryDatasetCategoryData");
//           })
//           .catch((error) => {
//               console.log(error);
//           });

//   }

// const dataToHit=()=>{
//     let cat=[];
//     editCategory2d?.map(item=>{
//         let newObj={};
        
//         newObj.Category=item[0];
//         newObj.recommended_servings=parseInt(item[1]);
//         newObj.Diet_id=item[2];
//         newObj.total_servings=item[3];
//         cat.push(newObj);
//     })
//     setCategoryToUpdate(cat);
//     formDataEdit.Category=cat;
//     // console.log(cat,'--cat');
//     // console.log(convertDateFormat(formDataEdit?.start_date));
//     // console.log(convertDateFormat(formDataEdit?.end_date));
//     console.log('form data edit--save',formDataEdit);
    
// }
//   const apiHitEdit=async=>{
//     dataToHit();


//     let data = JSON.stringify({
//       "user_id": formDataEdit.user_id,
//       "start_date": formDataEdit.start_date,
//       "end_date": formDataEdit.end_date,
//       "type": formDataEdit.type,
//       "interval": formDataEdit.interval,
//       "plan_id": formDataEdit.plan_id,
//       "Category":formDataEdit.Category
//     });
    
//     let config = {
//       method: 'PUT',
//       maxBodyLength: Infinity,
//       url: 'http://44.212.136.151:8081/api/editDietPlanAssigned',
//       headers: { 
//         'Content-Type': 'application/json'
//       },
//       data : data
//     };
    
//     axios.request(config)
//     .then((response) => {
//       console.log(JSON.stringify(response.data));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//     // props.apiHit();
//     // console.log(formDataEdit,'formDataEdit');
//   }
    
  
  
//     return (
//       <div>
          
      
//         <Button variant="contained" style={{
//           float: "right", marginLeft: "1rem", borderRadius: "50%", padding: "0.2rem", marginTop: "-0.5rem",
//           position: 'fixed', zIndex: '1', bottom: 40, right: 40
//         }}
//        onClick={handleClickOpen} 
//         sx={{
//           ':hover': {
//             bgcolor: "#F0E7F5", // theme.palette.primary.main
//             color: '#9B59B6',
//             border: '#ffd796'
//           },
//           ':active': {
//             bgcolor: "#F0E7F5",
//             color: "#9B59B6"
//           },
//           bgcolor: '#F0E7F5',
//           color: "#9B59B6",
//           border: 'none'
//         }} >
  
  
//           <span style={{ fontSize: "2rem" }}>+</span>
//         </Button>
//         <Dialog
//           fullScreen
//           open={open}
//           onClose={handleClose}
//           TransitionComponent={Transition}
//         >
//           <AppBar color="nutrition" sx={{ position: 'relative'}}>
//             <Toolbar>
//               <IconButton
//                 edge="start"
//                 style={{color:"white"}}
//                 onClick={handleClose}
//                 aria-label="close"
//               >
//                 <CloseIcon />
//               </IconButton>
//               <Typography sx={{ ml: 2, flex: 1, fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px' }} variant="h6" component="div">
//                 Create Diet Plan
//               </Typography>
//               <Button autoFocus color="inherit" onClick={handleCloseSave}>
//                 save
//               </Button>
//             </Toolbar>
//           </AppBar>
//           {/* <Card style={{padding:"20px 5px", margin:"0px"}}><CardContent> */}
//           <Stack mb={3} mt={3} marginLeft={3}>
//             <Typography  style={{display: 'inline-block',marginRight:"10", fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px'}} variant='h5' gutterLeft >Select Interval </Typography>
//             </Stack>
  
  
//           {/* <Stack marginLeft={3}> 
//           <TextField
//           onClick={changeHandler}
//             id="outlined-select-currency"
//             select
//             label="Select Your Interval"
//             defaultValue="month"
//           >
//               {currencies.map((option) => (
//               <MenuItem key={option.value} value={option.label} name= {option.value} label={option.label}>
//                 {option.label}
//               </MenuItem>
//             ))}</TextField></Stack> */}

//             <Stack marginLeft={3}>
//             <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">Select Interval </InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={JSON?.stringify(valuesD?.interval)}
//                   label={interval}
//                   onChange={handleInterval}
//                 >
//                   <MenuItem value="day">Day</MenuItem>
//                   <MenuItem value="month">Month</MenuItem>
//                   <MenuItem value="week">Week</MenuItem>
//                 </Select>
//               </FormControl>
//             </Stack>


  
            
  
  
       
//      <Grid container  id="date-picker-stack" flexDirection="row">
//         <Grid item xs={6} xl={6} fullWidth >
         
//         <CardContent>  
//           <LocalizationProvider   dateAdapter={AdapterDateFns}>
//         <DemoContainer components={['DesktopDatePicker']} fullWidth>
//           <DatePicker  label="Start Date" value={selectedDateStart}  onChange={handleDateChange}  renderInput={(params) => <TextField {...params} />}  />
//         </DemoContainer>
//       </LocalizationProvider>
//       </CardContent>  
//          </Grid>
  
  
//         <Grid item  xs={6} xl={6}  >
//          <CardContent>
//       <LocalizationProvider  dateAdapter={AdapterDateFns}>
//         {/* <DemoContainer  components={['DesktopDatePicker']}> */}
//           <DatePicker value={selectedDateEnd} slotProps={{ textField: { fullWidth: true } }} onChange={handleDateChange}  label="End Date"   />
//         {/* </DemoContainer> */}
//       </LocalizationProvider>

      


//       </CardContent>  
     
//        </Grid>
       
//        </Grid> 
  


//           {actionToDo==='Create'
//           ?
//           createBoxLoop?.map((item)=>{
//             return (
//           <Stack  marginLeft={3}   marginRight={2}>
//           <Grid mb={4}   Item><Card> <CardContent>
//               <Grid container flexDirection="row" justifyContent="space-between" >
                  
//                   <Grid item xs={4}  md={5} lg={5}> 
                                 
     
//             <FormControl fullWidth>
//           <InputLabel id="demo-simple-select-label">Select Your Category</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             val={val}
//             label="Select Your Category"
//             onChange={e=>{handleChange(e)}}
//           >
           
             
//            {categoryData.map((option) => (
//           <MenuItem key={option.category_name} value={option.category_name}>
//             {option.category_name}
//           </MenuItem>
//         ))}
//              <MenuItem value='aerobic'>aerobic</MenuItem>
          
             
//             <MenuItem value='water'>water</MenuItem>
//             <MenuItem value='walk'>walk</MenuItem> 
//           </Select>
//              </FormControl>
//             </Grid>
                                            
//           <Grid xs={5}  md={5} lg={5} marginRight={1} item>
                                                
                                            
//               <TextField label="Weight" onChange={handleChangeWeight} variant='outlined'  fullWidth/>
                                
//                                     </Grid>
  
//                   <Grid xs={2} md={1} lg={1}  item>  <IconButton
            
//               >
//                 {/* <DeleteIcon /> */}
//               </IconButton></Grid>
                                
//                   </Grid></CardContent> </Card>   </Grid>
//               </Stack>)
  
//           })

//           :
//           editCategory2d?.map((item,ind)=>{
//             return (
//               <Stack marginLeft={3}   marginRight={2}>
//               <Grid mb={4}   Item><Card> <CardContent>
//                   <Grid container flexDirection="row" justifyContent="space-between" >
                      
//                       <Grid item xs={4}  md={5} lg={5}> 
                                     
//          <FormControl fullWidth>
//           <InputLabel id="demo-simple-select-label">Select Your Category</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={item[0]}
//             label="Select Your Category"
//             onChange={e=>handleChangeWeightEdit(e,ind,'category')}
//           >
           
//            {categoryData.map((option) => (
//           <MenuItem key={option.category_name} value={option.category_name}>
//             {option.category_name}
//           </MenuItem>
//         ))}
           
//              <MenuItem value='chlor'>chlor</MenuItem>
//             <MenuItem value='protein'>protein</MenuItem>
//             <MenuItem value='fats'>fats</MenuItem> 
//           </Select>
//              </FormControl>
//                 </Grid>
                                                
//               <Grid xs={5}  md={5} lg={5} marginRight={1} item>
                                                    
                                                
//                   <TextField label="Weight" onChange={e=>handleChangeWeightEdit(e,ind,'Edit')} variant='outlined' value={item[1]} fullWidth/>
                                    
//                                         </Grid>
      
//                       <Grid xs={2} md={1} lg={1}  item>  <IconButton
                
//                   >
//                     {/* <DeleteIcon /> */}
//                   </IconButton></Grid>
                                    
//                       </Grid></CardContent> </Card>   </Grid>
//                   </Stack>)
//           })
//           }
  
  
       
       
      

        
              
  
//         <Button variant="contained"  onClick={onChangePlus} style={{
//           float: "right", marginLeft: "1rem", borderRadius: "50%", padding: "0.2rem", marginTop: "-0.5rem",
//           position: 'fixed', zIndex: '1', bottom: 40, right: 40
//         }}
    
//         sx={{
//           ':hover': {
//             bgcolor: "#F0E7F5", // theme.palette.primary.main
//             color: '#9B59B6',
//             border: '#ffd796'
//           },
//           ':active': {
//             bgcolor: "#F0E7F5",
//             color: "#9B59B6"
//           },
//           bgcolor: '#F0E7F5',
//           color: "#9B59B6",
//           border: 'none'
//         }} >
  
  
//           <span style={{ fontSize: "2rem" }}>+</span>
//         </Button>
            
//         </Dialog>
//       </div>
//     );
//   });


//   export default CreateDietPlan;