import { View, Text ,StyleSheet,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { mainColors } from '../../colors/color-map';
function LightCard({ item, servings }) {
    
   
  return (
      <View style={[styles.card, styles.categoryCard, styles.shadowProp]}>
          <View style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10
          }}>
              
              <View style={[styles.heading, { flex: 1 }]}>
                  <Image style={styles.exerciseLogo} source={{uri:item?.item_image}}></Image>

              </View>
              <View style={{ flex: 4 }}>
                  
              <Text style={[styles.heading]}>{item?.item_name}
              </Text>
                  <Text style={{ lineHeight: 20, fontSize: 11, flex: 3 }}>
                      {item.description}
                  </Text>
              </View>
              <View style={[{ backgroundColor: "white", padding: 5, borderRadius: 5, paddingLeft: 10, paddingRight: 10 }, styles.shadowProp]}>
                  <TouchableOpacity>
                      <View>
                          <Text>{ servings}</Text>
                      </View>
                  </TouchableOpacity>

              </View>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
  
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    heading: {
        fontWeight: 600,
        fontSize: 22,
    },
    card: {
        borderRadius: 12,
        padding: 20,
        marginLeft:5
    },
    
    categoryCard: {
        backgroundColor: mainColors.categoryCards,
        marginTop: 20
    }

});



export default LightCard;