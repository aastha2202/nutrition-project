import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Text, StyleSheet, Platform, View, Image, Button, TouchableOpacity, FlatList, RefreshControl, Dimensions } from 'react-native';
import axios from 'axios';
import { mainColors } from '../../colors/color-map';
import LightCard from '../Components/LightCard';
import Icon from 'react-native-vector-icons/Ionicons';
import { BottomSheetScrollView, BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import DetailItem from '../Components/DetailItem';

const ItemsOfCategory = ({ route, navigation }) => {

    const [items, setItems] = useState([])
    const [itemIntakeStatus, setItemIntakeStatus] = useState([])
    // { item_name: "Fish", item_id: 1, description: "Its the description of Fish" },
    // { item_name: "Chicken", item_id: 2, description: "Its the lunch" }
    const [refreshing, setRefreshing] = useState(false)
    const [page, setPage] = useState(1)
    const [selectedData, setSelectedData] = useState(null)
    const [categoryName, setCategoryName] = useState(null)
    const snapPoints = ['39%'];
    const bottomSheetModalRef = useRef(null);
    const windowHeight = Dimensions.get('window').height;

    console.log(route?.params, "royre paramsss")

    useEffect(() => {
        setCategoryName(route?.params.category)
        axios.get(`http://44.212.136.151:8081/api/getItemsOfCategory?category_id=${route?.params.cat}&type=food`)
            .then(function (response) {
                console.log(response?.data, "itemaassssssssssss", `http://44.212.136.151:8081/api/getItemsOfCategory?category_id=${route?.params.cat}&type=food`)
                setItems(response?.data?.data)
                axios.get(`http://44.212.136.151:8081/api/itemIntakeStatus?userid=1&type=food&category=proteins`)
                    .then(function (response) {
                        console.log(`http://44.212.136.151:8081/api/itemIntakeStatus?userid=1&type=food&category=${route?.params.category}`, response?.data, "..............")
                        setItemIntakeStatus(response?.data?.data)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    const getStatus = (id) => {
        // console.log(itemIntakeStatus)
        let servings = itemIntakeStatus.filter(i => i?.item_id == id)
        // console.log(id,servings)
        return servings[0]? servings[0] : 0
        // console.log(itemIntakeStatus, "......")
    }



    const [data, setData] = useState({ date: "31  March \n 2023", servingsRecommended: 120, servingsLeft: 60, exercisesRecommended: 20, exercisesLeft: 10 })

    const handleSnapPress = useCallback((item) => {
        setSelectedData({ ...item, ...route.params });
        bottomSheetModalRef.current?.present();
    }, []);

    const closeBackdrop = () => {
        bottomSheetModalRef.current?.close();
    }

    const renderBackdrop = useCallback(
        props => (
            <BottomSheetBackdrop
                {...props}
                opacity={2.5}
                disappearsOnIndex={-1}
                pressBehavior={() => {
                    Alert.alert("qwewqe")
                }}
                appearsOnIndex={2}
            />
        ),
        []
    );

    return (
        <View style={styles.container}>
            {
                Platform.OS === 'ios' &&
                <View style={{ marginTop: 50, }}>
                </View>
            }
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Text style={styles.titleText} ><Icon size={30} name='chevron-back' /></Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 10 }}>
                <View style={{ flex: 1, marginTop: 10 }}>
                    <Text style={styles.heading}>{categoryName}</Text>
                    <Text style={styles.text}>45 calories / serving</Text>
                    <Text>13 servings / day</Text>

                </View>
                <View style={[styles.card, styles.goldCard]}>
                    <Text style={styles.num}>7</Text>
                    <Text >servings</Text>
                    <Text>left</Text>
                </View>

            </View>

            <FlatList
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={() => { setRefreshing(!refreshing) }}
                    />
                }
                data={items}
                onEndReached={() => {
                    setPage(page + 1);
                }}
                ListEmptyComponent={() => {
                    return (
                        <Text>No data found</Text>
                    )
                }}
                keyExtractor={(item) => item.item_id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { handleSnapPress(item) }}>
                        <LightCard item={item} servings={getStatus(item.item_id)} />
                    </TouchableOpacity>
                )}
            />

            <BottomSheetModalProvider>
                <BottomSheetModal
                    backdropComponent={renderBackdrop}
                    animateOnMount={false}
                    ref={bottomSheetModalRef}
                    index={0}
                    snapPoints={snapPoints}
                    enablePanDownToClose={true}
                >
                    <BottomSheetScrollView
                        scrollEnabled={windowHeight > 800 ? false : true}
                    >
                        {selectedData ? (
                            <DetailItem item={selectedData} closeBackdrop={closeBackdrop} />
                        ) : <Text>no data found</Text>}
                    </BottomSheetScrollView>
                </BottomSheetModal>

            </BottomSheetModalProvider>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        // marginTop: Platform.OS === 'ios' && 50,
        flex: 1,
    },
    heading: {
        fontSize: 22,
        marginBottom: 10

    },
    text: {
        marginBottom: 10
    },
    num: {

        fontSize: 30,
        fontWeight: 600
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    goldCard: {
        backgroundColor: mainColors.gold,
        fontWeight: 700,
        fontSize: 34,
        alignItems: "center"
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {
        borderRadius: 12,
        padding: 20
    },
});

export default ItemsOfCategory;