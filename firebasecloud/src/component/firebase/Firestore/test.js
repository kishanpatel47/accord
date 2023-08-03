import React, { useState, useContext, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    ScrollView,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    FlatList,
} from "react-native";

import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import _ from "lodash";
import "firebase/firestore";
import firebase from "firebase";
import config from "../config/firebase";

const SearchScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [query, setQuery] = useState("");
    const [userNumLoad, setUserNumLoad] = useState(20);
    const [error, setError] = useState("");

    useEffect(() => {
        const func = async () => {
            await makeRemoteRequest();
        };
        func();
    }, []);

    const contains = (user, query) => {
        if (user.username.includes(query)) {
            return true;
        }
        return false;
    };

    const getUsers = async (limit = 20, query2 = "") => {
        var list = [];
        await firebase
            .firestore()
            .collection("users")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.data().username.includes(query2)) {
                        list.push({
                            profilePhotoUrl: doc.data().profilePhotoUrl,
                            username: doc.data().username,
                            friends: doc.data().friends.length,
                            uid: doc.data().uid,
                        });
                    }
                });
            });

        setTimeout(() => {
            setData(list);
        }, 4000);


        return new Promise(async (res, rej) => {
            if (query.length === 0) {
                setTimeout(() => {
                    res(_.take(data, limit));
                }, 8000);

            } else {
                const formattedQuery = query.toLowerCase();
                const results = _.filter(data, (user) => {
                    return contains(user, formattedQuery);
                });
                setTimeout(() => {
                    res(_.take(results, limit));
                }, 8000);

            }
        });
    };

    const makeRemoteRequest = _.debounce(async () => {
        const users = [];
        setLoading(true);
        await getUsers(userNumLoad, query)
            .then((users) => {
                setLoading(false);
                setData(users);
                setRefreshing(false);
            })
            .catch((err) => {
                setRefreshing(false);
                setError(err);
                setLoading(false);
                //alert("An error has occured. Please try again later.");
                console.log(err);
            });
    }, 250);

    const handleSearch = async (text) => {
        setSearchText(text);
        const formatQuery = text.toLowerCase();
        await setQuery(text.toLowerCase());
        const data2 = _.filter(data, (user) => {
            return contains(user, formatQuery);
        });
        setData(data2);
        await makeRemoteRequest();
    };

    const handleRefresh = async () => {
        setRefreshing(true);
        await makeRemoteRequest();
    };

    const handleLoadMore = async () => {
        setUserNumLoad(userNumLoad + 20);
        await makeRemoteRequest();
    };

    const renderFooter = () => {
        if (!loading) return null;

        return (
            <View style={{ paddingVertical: 20 }}>
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.goBackButton}
                    onPress={() => navigation.goBack()}
                >
                    <LinearGradient
                        colors={["#FF5151", "#ac46de"]}
                        style={styles.backButtonGradient}
                    >
                        <Ionicons name="arrow-back" size={30} color="white" />
                    </LinearGradient>
                </TouchableOpacity>
                <View style={styles.spacer} />
                <Text style={styles.headerText}>Search</Text>
                <View style={styles.spacer} />
                <View style={{ width: 46, marginLeft: 15 }}></View>
            </View>
            <View style={styles.inputView}>
                <FontAwesome5 name="search" size={25} color="#FF5151" />
                <TextInput
                    style={styles.input}
                    label="Search"
                    value={searchText}
                    onChangeText={(newSearchText) => handleSearch(newSearchText)}
                    placeholder="Search for people"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>

            <FlatList
                style={styles.list}
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View style={styles.listItem}>
                            <Image
                                style={styles.profilePhoto}
                                source={
                                    item.profilePhotoUrl === "default"
                                        ? require("../../assets/defaultProfilePhoto.jpg")
                                        : { uri: item.profilePhotoUrl }
                                }
                            />
                            <View style={styles.textBody}>
                                <Text style={styles.username}>{item.username}</Text>
                                <Text style={styles.subText}>{item.friends} Friends</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                ListFooterComponent={renderFooter}
                keyExtractor={(item) => item.username}
                refreshing={refreshing}
                onEndReachedThreshold={100}
                onEndReached={handleLoadMore}
                onRefresh={handleRefresh}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchbar: {
        backgroundColor: 'white'
    },
    header: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 60,
        paddingLeft: 10,
        paddingRight: 10
    },
    goBackButton: {
        width: 46,
        height: 46,
        borderRadius: 23,
        marginBottom: 10,
        marginLeft: 15
    },
    backButtonGradient: {
        borderRadius: 23,
        height: 46,
        width: 46,
        justifyContent: 'center',
        alignItems: 'center'
    },
    settingsButton: {
        width: 46,
        height: 46,
        borderRadius: 23,
        marginRight: 15,
        marginBottom: 10
    },
    settingsButtonGradient: {
        borderRadius: 23,
        height: 46,
        width: 46,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 45,
        width: 250,
        paddingLeft: 10,
        fontFamily: "Avenir",
        fontSize: 18
    },
    inputView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        paddingLeft: 10,
        paddingRight: 20,
        shadowColor: 'gray',
        shadowOffset: {width: 5, height: 8},
        shadowOpacity: 0.1,
        backgroundColor: "#ffffff",
        marginRight: 28,
        marginLeft: 28,
        marginTop: 10,
        marginBottom: 25
    },
    headerText: {
        fontSize: 35,
        fontWeight: "800",
        fontFamily: "Avenir",
        color: "#FF5151",
    },
    spacer: {
        width: 50
    },
    listItem: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "white",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        borderRadius: 15,
        alignItems: 'center',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {width: 3, height: 3}
    },
    line: {
        width: 100,
        color: 'black',
        height: 1
    },
    profilePhoto: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    username: {
        fontSize: 18,
        fontFamily: "Avenir",
        paddingBottom: 3
    },
    subText: {
        fontSize: 15,
        fontFamily: "Avenir"
    },
    textBody: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20
    }
});

export default SearchScreen;