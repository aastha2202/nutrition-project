// import { div, span, StyleSheet, div, TextInput } from 'react-native'
import React, { useState } from 'react'
//import { mainColors } from '../../colors/color-map'
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
        <div style={styles.container}>
            <div flexDirection="row" alignItems="center" marginBottom={40}>
                <div>
                    <span>Image</span>
                </div>
                <div marginLeft={20}>
                    <span style={styles.heading}>{item.item_name} </span>
                    <span>{item.description}</span>
                </div>
            </div>


            <span>Select servings</span>
            <div flexDirection="row" alignItems="center" top={20}>
                <div flex={1}>
                    <div flexDirection="row" alignItems="center" >
                        <div onPress={() => { servings >= 1 && setServings(prev => prev - 1) }}>
                            <span style={{ fontSize: 20 }}> - </span>
                        </div>

                        <div style={styles.card}>
                            <span>{servings}</span>
                        </div>

                        {/* <spanInput
                            keyboardType="numeric"
                            style={styles.input} */}
                        {/* value={servings} */}
                        {/* /> */}

                        <div onPress={() => { setServings(prev => prev + 1) }}>
                            <span style={{ fontSize: 20 }}> + </span>
                        </div>
                    </div>
                </div>
                <div marginLeft={20}>
                    <div onPress={() => { saveDailyIntake(servings) }}>
                        <div style={styles.button}>
                            <span style={{ color: "white", fontWeight: 700 }}>Save</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
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