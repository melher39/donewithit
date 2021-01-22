import React from "react";
import {
    FlatList,
    StyleSheet
} from "react-native";

import ListItem from "../components/ListItem.js";
import AppScreen from "../components/AppScreen.js";
import ListItemSeparator from "../components/ListItemSeparator.js";
import moshImg from "../assets/mosh.jpg";

const messages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: moshImg
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: moshImg
    }
];

const MessagesScreen = () => {
    return (
        <AppScreen >
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message Selected:", item)}
                    />
                }
                ItemSeparatorComponent={ListItemSeparator}
            />
        </AppScreen>
    );
};

// const styles = StyleSheet.create({

// });

export default MessagesScreen;