import React, { useState } from 'react';
// import { Text, StyleSheet, Platform, View, Image, Button, TouchableOpacity } from 'react-native';
import Dropdown from '../../user/Components/Dropdown';
// import { mainColors } from '../../colors/color-map';
// import Frame from "../../assets/icons/Frame.svg";
const Exercise = () => {

  const [data, setData] = useState({ date: "31  March \n 2023", servingsRecommended: 120, servingsLeft: 60, exercisesRecommended: 20, exercisesLeft: 10 })


  const mainColors={
    blackCard: '#2C2B2B',
    homeMainCard: '#D1A6E7',
    homeInCard: '#BB8ED1',
    categoryCards: '#F0E7F5',
    gold: '#E1B725',
  }

  const styles ={
    container: {
      margin: 20,
      marginTop:220
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
  };
  
  return (
    
    // <h1>Exercise Home page</h1>
  
    <div style={styles.container}>



      {/* <Frame /> */}
      <Dropdown />

      
      <div style={{ width: "45%", marginLeft: '60%', marginTop: '-22%' }}>
      
        {/* <Dropdown /> */}
      </div>

      <span style={{...styles.titleText}} >Exercise</span>
      <div style={{...styles.card, ...styles.mainCard}}>

        <div style={{...styles.rowDirection}}>
          <div style={{...styles.card, ...styles.mainInCard}}>
            <span style={{...styles.heading}}>{data.date}</span>
          </div>
          <div style={{...styles.card, ...styles.mainInCard}}>
            <span>Today's goal{"\n"}<span style={{...styles.heading}}>
              {data.servingsRecommended} </span>exercises</span>
          </div>
        </div>
      </div>

      <div style={{...styles.card, ...styles.blackCard, ...styles.rowDirection}}>
        <div>
          <span style={{...styles.gold}}>
            {data.servingsLeft} </span>
        </div>
        <div style={{ marginLeft: -50 }}>
          <span style={{...styles.white}}> exercises left</span>
        </div>

        {/* <img style={styles.exerciseLogo} source={require("../../assets/images/exerciselogo.png")} /> */}
      </div>

      <div style={{...styles.card, ...styles.categoryCard, ...styles.shadowProp}}>
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10
        }}>
          <span style={{...styles.heading, flex:1}}>Aerobic {"\n"}Activity</span>
          <div style={{ backgroundColor: "white", padding: 5, borderRadius: 5, paddingLeft: 10, paddingRight: 10 , ...styles.shadowProp}}>
            
              <div>
                <span>+</span>
              </div>
           

          </div>
        </div>
      </div>

      <div style={{...styles.card, ...styles.categoryCard, ...styles.shadowProp}}>
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10
        }}>
          <span style={{flex:1, ...styles.heading}}>Strength {"\n"}Training</span>
          <div style={{ backgroundColor: "white", padding: 5, borderRadius: 5, paddingLeft: 10, paddingRight: 10, ...styles.shadowProp}}>
            
              <div>
                <span>+</span>
              </div>
            

          </div>
        </div>
      </div>

    </div>

  );

};



export default Exercise;