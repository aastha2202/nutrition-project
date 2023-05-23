import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
  Text, StyleSheet, Platform, View, Image, Button, TouchableOpacity, FlatList , ScrollView
} from 'react-native';
import Frame from "../../assets/icons/Frame.svg";
import Dropdown from '../Home/Components/DropdownComponent';
import { mainColors } from '../../colors/color-map';
const Diet = ({ navigation }) => {


  const [data, setData] = useState({})
  const [exerciseData, setExerciseData] = useState([])
  const getCurrentDate = () => {

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return date + '-' + month + '-' + year;//format: d-m-y;
  }


  useEffect(() => {
    axios.get(`https://aipse.in/api/getAllDietPlan?userid=1&type=food&status=ongoing`)
      .then(function (response) {
        console.log(response.data.data, "dieettttttttttt")
        response.data.data.servingsLeft = parseInt
          (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
        setExerciseData(response?.data?.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    axios.get(`https://aipse.in/api/getAllCategories?type=food`)
      .then(function (response) {
        setData(response?.data?.data)
        console.log(response?.data?.data)
        for (let i = 0; i < response?.data?.data?.length; i++) {
          axios.get(`https://aipse.in/api/getOneDietPlan?userid=1&dietid=${exerciseData?.DietID}`)
            .then(function (response) {
              // console.log(response?.data, "response..............responseeeeee")
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])



  return (
    <View style={styles.container}>

      {
        Platform.OS === 'ios' &&
        <View style={{ marginTop: 50, }}>
        </View>
      }

      <Frame />

      <View flexDirection="row">
        <Text style={styles.titleText} >Diet Plan</Text>
      </View>

      <ScrollView >
        {
          (exerciseData?.Type) ? <View>
            <View style={[styles.card, styles.mainCard]}>
              <View style={styles.rowDirection}>

                <View style={[styles.card, styles.mainInCard]}>
                  <Text style={styles.heading}>{getCurrentDate()}</Text>
                </View>
                <View style={[styles.card, styles.mainInCard]}>
                  <Text>Today's Intake{"\n"}<Text style={styles.heading}>
                    {exerciseData?.TotalServings} </Text>servings</Text>
                </View>
              </View>
            </View>

            <View style={[styles.card, styles.blackCard, styles.rowDirection]}>
              <View>
                <Text style={styles.gold}>
                  {exerciseData.servingsLeft}</Text>
              </View>
              <View style={{ marginLeft: -50 }}>
                <Text style={styles.white}> servings left</Text>
              </View>
              <Image style={styles.foodImage} source={require("../../assets/images/foodlogo.png")}></Image>
            </View>

            <FlatList
              data={data}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {
                  navigation.navigate('ItemsOfCategory',
                    { cat: item.category_id, diet_id: 46, category: item.category_name, type: "food" }
                  )
                }}>
                  <View style={[styles.card, styles.categoryCard, styles.shadowProp,{marginStart:5}]}>
                    <View style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 10
                    }}>
                      <Text style={[styles.heading, { flex: 1 }]}>{item.category_name}</Text>
                      <View style={[{ backgroundColor: "white", padding: 5, borderRadius: 5, paddingLeft: 10, paddingRight: 10 }, styles.shadowProp]}>
                        <TouchableOpacity>
                          <View>
                            <Text>+</Text>
                          </View>
                        </TouchableOpacity>

                      </View>
                    </View>

                    {/* <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}>
                <Text style={{ lineHeight: 20, fontSize: 11, flex: 1 }}>
                  45 calories / servings {"\n"}
                  13 servings / Day
                </Text>
                <Text style={{ lineHeight: 24 }}>
                  <Text style={{ fontSize: 20 }}>7</Text> servings {"\n"}
                  remained
                </Text>
              </View> */}

                  </View>
                </TouchableOpacity>
              )} />

          </View>
            :
            <View>
              <Text>You don't have any ongoing diet plans . Please consult Dietician.</Text>
            </View>
        }
      </ScrollView>




    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  heading: {
    fontWeight: 600,
    fontSize: 22,
  },
  gold: {
    color: mainColors.gold,
    fontWeight: 700,
    fontSize: 34,
  },
  white: {
    color: 'white',
    fontWeight: 600,
    fontSize: 20,
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
    backgroundColor: mainColors.homeMainCard,
    marginTop: 20
  }
  ,
  categoryCard: {
    backgroundColor: mainColors.categoryCards,
    marginTop: 20
  }
  ,
  blackCard: {
    marginTop: 20,

    backgroundColor: mainColors.blackCard,
  }
  ,
  mainInCard: {
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
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Diet;