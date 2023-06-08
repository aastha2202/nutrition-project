import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { mainColors } from '../../colors/color-map';
// import Dropdown from '../Components/Dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import Frame from "../../assets/icons/Frame.svg";
import Dropdown from './Components/DropdownComponent';
import { ScrollView } from 'react-native-gesture-handler';
const Home = ({ route, navigation }) => {

  var username = 'Seema'


  const [oneDietPlanData, setoneDietplanData] = useState([])
  const [oneExerciseData, setOneExerciseData] = useState([])
  const [data, setData] = useState({ date: "31  March \n 2023", servingsConsumed: 120, servingsLeft: 60, exercisesRecommended: 20, exercisesLeft: 10 })
  const [selected, setSelected] = useState({ label: "Today", value: "today" })
  const [viewOneDietPlan, setViewOneDietPlan] = useState({ ongoing: true, previous: -1 })
  const interval = { '0': 'today', '1': 'week', '2': 'month', '3': '3months' }
  const [ongoingDietPlan, setOngoingDietPlan] = useState({})
  const [ongoingExercisePlan, setOngoingExercisePlan] = useState({})
  const [prevDietPlan, setPrevDietPlan] = useState([])

  useEffect(() => {
    listDietPlan()
  }, [])


  const onIntervalChange = (value) => {
    if (value == '-1') {
      getAllDietPlan()
    }
    else {
      getAllDietPlan(ongoingDietPlan, ongoingExercisePlan, value)
    }
  }

  const listDietPlan = () => {
    axios.get(`https://aipse.in/api/getlistsdietplans?userid=1`)
      .then(function (response) {
        // console.log(response?.data, "response in list diet plan")
        let prev = response?.data?.data?.filter(e => e.status == 'previous')
        let ongoing = response?.data?.data?.filter(e => e.status == 'ongoing')
        setPrevDietPlan(prev ? prev : [])
        if (ongoing?.length > 0) {
          getAllDietPlan()
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const getAllDietPlan = (diet, exercise, value) => {
    // console.log(diet, exercise, "diet and exercise")
    let dieturl = `https://aipse.in/api/getAllDietPlan?userid=1&type=food&status=ongoing`,
      exerciseurl = `https://aipse.in/api/getAllDietPlan?userid=1&type=exercise&status=ongoing`
    if (diet) {
      dieturl = `https://aipse.in/api/getAllDietPlan?userid=1&startdate=${diet?.StartDate}&enddate=${diet?.EndDate}&type=food&status=${interval[value]}`
      if (exercise?.StartDate) {
        exerciseurl = `https://aipse.in/api/getAllDietPlan?userid=1&startdate=${exercise?.StartDate}&enddate=${exercise?.EndDate}&type=exercise&status=${interval[value]}`
      }
    }
    console.log(dieturl, exerciseurl)
    axios.get(dieturl)
      .then(function (response) {
        // 
        console.log(response.data, "foodddd")
        // setOngoingDietPlan({ servingsLeft: 0, TotalServings: 0 })
        // setOngoingExercisePlan({ servingsLeft: 0, TotalServings: 0 })
        response.data.data.servingsLeft = parseInt
          (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
        setOngoingDietPlan(response?.data?.data)
        axios.get(exerciseurl)
          .then(function (response) {
            console.log(response.data, "exercise")
            if (response?.data?.data) {
              response.data.data.servingsLeft = parseInt
                (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
              setOngoingExercisePlan(response?.data?.data)
            }
            else {
              setOngoingExercisePlan({ servingsLeft: 0, TotalServings: 0 })
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const getOneDiet = (item, index) => {
    console.log(item.status, "itemmmm statusss .....  ")
    axios.get(`https://aipse.in/api/getAllDietPlan?userid=1&startdate=${item.startdate}&enddate=${item.enddate}&type=food&status=${item.status}`)
      .then(function (response) {
        response.data.data.servingsLeft = parseInt
          (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
        setViewOneDietPlan({ ...viewOneDietPlan, previous: index })
        setoneDietplanData(response?.data?.data)
        axios.get(`https://aipse.in/api/getAllDietPlan?userid=1&startdate=${item.startdate}&enddate=${item.enddate}&type=exercise&status=${item.status}`)
          .then(function (response) {
            response.data.data.servingsLeft = parseInt
              (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
            setOneExerciseData(response?.data?.data)
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <ScrollView style={styles.container}>
      {
        Platform.OS === 'ios' &&
        <View style={{ marginTop: 50, }}>
        </View>
      }
      <Frame />
      <Text style={styles.heading}>Hello , {username}</Text>

      {/* <View style={{ alignItems: "flex-end", marginTop: 10 }}>
        <View style={[styles.shadowProp]}>


          <TouchableOpacity onPress={() => { setViewDropdown(!viewDropdown) }}>
            <View flexDirection="row" padding={10} paddingBottom={5}>
              <Text flex={1} style={{ fontSize: 20 }}>{selected.label}</Text>
              <Icon style={styles.icon} type="font-awesome" name="chevron-down" />
            </View>
          </TouchableOpacity>
          {
            viewDropdown && <View style={{
              marginTop: 10, zIndex: 3,
              elevation: 3,
            }}>
              <FlatList
                data={dropDownData}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => { setSelected(item); setViewDropdown(false) }}>
                    <View style={styles.item}>
                      <Text style={styles.dropDownText}>{item.label}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          }

        </View>
      </View> */}

      <View style={[styles.card, styles.mainCard]}>

        {/* <Text style={styles.heading}>Hello , {username}</Text> */}

        <View flexDirection="row" >
          <Text style={styles.heading}>Ongoing Diet Plan</Text>
          {
            (ongoingDietPlan?.Type || ongoingExercisePlan?.Type) && <View style={{ width: "35%", marginLeft: '12%' }}>
              <Dropdown onIntervalChange={onIntervalChange} />
            </View>
          }
        </View>
        <View style={[styles.card, styles.mainInCard]}>
          {
            (ongoingDietPlan?.Type || ongoingExercisePlan?.Type) ? <View style={styles.rowDirection}>
              <Text style={styles.heading}>{ongoingDietPlan?.StartDate}</Text>
              <Text>to</Text>
              <Text style={styles.heading}>{ongoingDietPlan?.EndDate}</Text>
            </View> :
              <View>
                <Text>You don't have any ongoing diet plans . Please consult Dietician.</Text>
              </View>
          }
        </View>

        {/* <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
          <View style={[styles.card, styles.mainInCard]}>
            <Text style={styles.heading}>{data.date}</Text>
          </View>
          <View style={[styles.card, styles.mainInCard]}>
            <Text style={styles.heading}>{data.date}</Text>
          </View>
        </View> */}

        {
          (ongoingDietPlan?.Type || ongoingExercisePlan?.Type) &&
          <View>

            <TouchableOpacity onPress={() => { navigation.navigate('Diet'); console.log("pressed") }}>
              <View style={[styles.card, styles.blackCard, styles.rowDirection]}>
                <View>
                  <Text style={styles.white}><Text style={styles.gold}>
                    {ongoingDietPlan?.TotalServings}</Text> {"\n"} servings {"\n"} recommended</Text>
                </View>
                <Image style={styles.foodImage} source={require("../../assets/images/foodlogo.png")}></Image>
                <View >
                  <Text style={styles.white}><Text style={styles.gold}>
                    {ongoingDietPlan?.servingsLeft}</Text> {"\n"} servings {"\n"} left</Text>
                </View>
              </View>
            </TouchableOpacity>

            <View style={[styles.card, styles.blackCard, styles.rowDirection]}>
              <View >
                <Text style={styles.white}><Text style={styles.gold}>
                  {ongoingExercisePlan.TotalServings}</Text> {"\n"} exercises {"\n"} recommended</Text>
              </View>
              <Image style={styles.exerciseLogo} source={require("../../assets/images/exerciselogo.png")}></Image>
              <View >
                <Text style={styles.white}><Text style={styles.gold}>
                  {ongoingExercisePlan.servingsLeft}</Text> {"\n"} exercises {"\n"} left</Text>
              </View>
            </View>

          </View>
        }
      </View>
      <SafeAreaView style={{ marginTop: 20, flex: 1 }}>
        {
          prevDietPlan?.length > 0 && <View>
            <Text style={styles.heading}>Previous Diet Plans</Text>
            <FlatList
              data={prevDietPlan}
              renderItem={({ item, index }) => {
                return (
                  <View style={[styles.card, styles.prevCard, styles.shadow]}>
                    <TouchableOpacity onPress={() => { index == viewOneDietPlan.previous ? setViewOneDietPlan(-1) : getOneDiet(item, index) }}>
                      <View style={[styles.rowDirection]}>
                        <Text style={styles.prevText}>{item.startdate}</Text>
                        <Text>to</Text>
                        <Text style={styles.prevText}>{item.enddate}</Text>
                        <Icon onPress={() => { index == viewOneDietPlan.previous ? setViewOneDietPlan(-1) : getOneDiet(item, index) }} style={styles.icon} type="font-awesome" name={index == viewOneDietPlan.previous ? 'chevron-up' : "chevron-down"} />
                      </View>
                    </TouchableOpacity>

                    {
                      viewOneDietPlan.previous == index && <View>
                        <View style={[styles.card, styles.blackCard, styles.rowDirection]}>
                          <View>
                            <Text style={styles.white}><Text style={styles.gold}>
                              {oneDietPlanData.TotalServings}</Text> {"\n"} servings {"\n"} recommended</Text>
                          </View>
                          <Image style={styles.foodImage} source={require("../../assets/images/foodlogo.png")}></Image>
                          <View >
                            <Text style={styles.white}><Text style={styles.gold}>
                              {oneDietPlanData.servingsLeft}</Text> {"\n"} servings {"\n"} left</Text>
                          </View>
                        </View>




                        <View style={[styles.card, styles.blackCard, styles.rowDirection]}>
                          <View >
                            <Text style={styles.white}><Text style={styles.gold}>
                              {oneExerciseData.TotalServings}</Text> {"\n"} exercises {"\n"} recommended</Text>
                          </View>
                          <Image style={styles.exerciseLogo} source={require("../../assets/images/exerciselogo.png")}></Image>
                          <View >
                            <Text style={styles.white}><Text style={styles.gold}>
                              {oneExerciseData.servingsLeft}</Text> {"\n"} exercises {"\n"} left</Text>
                          </View>
                        </View>


                      </View>
                    }

                  </View>
                )
              }}

            />

          </View>
        }

      </SafeAreaView>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    // marginTop: Platform.OS === 'ios' && 50,
    flex: 1,
  },
  heading: {
    fontWeight: 600,
    fontSize: 22,
  },
  dropDownText: {
    padding: 10,
  },
  prevText: {
    fontWeight: 600,
    fontSize: 17,
  },
  item: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.2,
  },
  gold: {
    color: mainColors.gold,
    fontWeight: 700,
    fontSize: 25,

  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    margin: 5
  },
  shadowProp: {

    width: 200,
    padding: 5,
    borderRadius: 12,
    backgroundColor: "#f5f5f5",
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 20
  },
  white: {
    color: 'white',
    fontWeight: 600,
    lineHeight: 24,
  },
  card: {
    borderRadius: 12,
    padding: 20
  },
  foodImage: {
    height: 60,
    width: 60,
    marginLeft: -20
  },
  exerciseLogo: {
    height: 30,
    width: 60,
    marginLeft: -10
  },
  mainCard: {
    marginTop: 15,
    backgroundColor: mainColors.homeMainCard,
  }
  ,
  prevCard: {
    marginTop: 15,
    backgroundColor: '#f5f5f5',
  }
  ,
  blackCard: {
    marginTop: 20,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: mainColors.blackCard,
  }
  ,
  mainInCard: {
    marginTop: 10,
    backgroundColor: mainColors.homeInCard,
  },
  rowDirection: {
    display: "flex",
    flexDirection: "row", justifyContent: "space-around",
    alignItems: "center",
  },
  baseText: {
    fontFamily: 'Inter-Regular',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default Home;