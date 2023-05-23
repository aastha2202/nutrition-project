import React, { useState } from 'react';
import { Text, StyleSheet, Platform, View, Image, Button, TouchableOpacity } from 'react-native';
import Dropdown from '../Home/Components/DropdownComponent';
import { mainColors } from '../../colors/color-map';
import Frame from "../../assets/icons/Frame.svg";
const Exercise = () => {

  const [data, setData] = useState({ date: "31  March \n 2023", servingsRecommended: 120, servingsLeft: 60, exercisesRecommended: 20, exercisesLeft: 10 })

  return (

    <View style={styles.container}>

      {
        Platform.OS === 'ios' &&
        <View style={{ marginTop: 50, }}>
        </View>
      }

      <Frame />

      <View style={{ width: "45%", marginLeft: '60%', marginTop: '-22%' }}>
        <Dropdown />
      </View>

      <Text style={styles.titleText} >Exercise</Text>
      <View style={[styles.card, styles.mainCard]}>

        <View style={styles.rowDirection}>
          <View style={[styles.card, styles.mainInCard]}>
            <Text style={styles.heading}>{data.date}</Text>
          </View>
          <View style={[styles.card, styles.mainInCard]}>
            <Text>Today's goal{"\n"}<Text style={styles.heading}>
              {data.servingsRecommended} </Text>exercises</Text>
          </View>
        </View>
      </View>

      <View style={[styles.card, styles.blackCard, styles.rowDirection,]}>
        <View>
          <Text style={styles.gold}>
            {data.servingsLeft} </Text>
        </View>
        <View style={{ marginLeft: -50 }}>
          <Text style={styles.white}> exercises left</Text>
        </View>

        <Image style={styles.exerciseLogo} source={require("../../assets/images/exerciselogo.png")}></Image>
      </View>

      <View style={[styles.card, styles.categoryCard, styles.shadowProp]}>
        <View style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10
        }}>
          <Text style={[styles.heading, { flex: 1 }]}>Aerobic {"\n"}Activity</Text>
          <View style={[{ backgroundColor: "white", padding: 5, borderRadius: 5, paddingLeft: 10, paddingRight: 10 }, styles.shadowProp]}>
            <TouchableOpacity>
              <View>
                <Text>+</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </View>

      <View style={[styles.card, styles.categoryCard, styles.shadowProp]}>
        <View style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10
        }}>
          <Text style={[styles.heading, { flex: 1 }]}>Strength {"\n"}Training</Text>
          <View style={[{ backgroundColor: "white", padding: 5, borderRadius: 5, paddingLeft: 10, paddingRight: 10 }, styles.shadowProp]}>
            <TouchableOpacity>
              <View>
                <Text>+</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </View>

    </View>

  );

};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  heading: {
    fontWeight: 600,
    fontSize: 22,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
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

export default Exercise;