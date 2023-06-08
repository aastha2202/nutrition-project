import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { mainColors } from '../../colors/color-map'
import axios from 'axios'
const DetailItem = ({ item, closeBackdrop, route }) => {

    const [servings, setServings] = useState(2)

    console.log(item)

    const saveDailyIntake = () => {
        let date = new Date()
        let data = {
            "user_id": 1,
            "date": `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
            "diet_id": item.diet_id,
            "item_id": item.item_id,
            "type": item.type,
            "category": item?.category,
            "servings_consumed": servings
        }

        console.log(data, "posr requestrrrrtt")
        axios.post(`https://aipse.in/api/updateDailyIntake`, data)
            .then(function (response) {
                console.log(response?.data, "response from apiii")
                closeBackdrop()
            })
            .catch(function (error) {
                console.log(error);
            });



    }
    return (
        <View style={styles.container}>
            <View flexDirection="row" alignItems="center" marginBottom={40}>
                <View>
                    <Text>Image</Text>
                </View>
                <View marginLeft={20}>
                    <Text style={styles.heading}>{item.item_name} </Text>
                    <Text>{item.description}</Text>
                </View>
            </View>


            <Text>Select servings</Text>
            <View flexDirection="row" alignItems="center" top={20}>
                <View flex={1}>
                    <View flexDirection="row" alignItems="center" >
                        <TouchableOpacity onPress={() => { servings >= 1 && setServings(prev => prev - 1) }}>
                            <Text style={{ fontSize: 20 }}> - </Text>
                        </TouchableOpacity>

                        <View style={styles.card}>
                            <Text>{servings}</Text>
                        </View>

                        {/* <TextInput
                            keyboardType="numeric"
                            style={styles.input} */}
                        {/* value={servings} */}
                        {/* /> */}

                        <TouchableOpacity onPress={() => { setServings(prev => prev + 1) }}>
                            <Text style={{ fontSize: 20 }}> + </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View marginLeft={20}>
                    <TouchableOpacity onPress={() => { saveDailyIntake(servings) }}>
                        <View style={styles.button}>
                            <Text style={{ color: "white", fontWeight: 700 }}>Save</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 30,
    },
    heading: {
        fontSize: 22,
        marginBottom: 10

    },
    card: {
        borderColor: 'grey',
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 10,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5
    },
    input: {
        height: 35,
        width: 35,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        borderColor: "#C8CEDD",
        fontFamily: "Inter-Regular",
        fontSize: 14,
    },
    button: {
        backgroundColor: "#03A3E4",
        borderRadius: 10,
        padding: 10
    }
})
export default DetailItem