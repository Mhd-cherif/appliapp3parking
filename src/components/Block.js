import React from "react";
import {View, StyleSheet, Dimensions} from "react-native";

{/*iosClientId: `941027551094-1bouh1ntrc75nuhvkjpf6mp4opf67ich.apps.googleusercontent.com`,
androidClientId: `941027551094-njurtc9e9r7m5o66qdkc0o5hjno6ii9i.apps.googleusercontent.com`,*/}

const {width} = Dimensions.get('window');

const Block = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: (width*4)/3,
        backgroundColor: "#3d89e0",
        flexGrow: 3,
        borderBottomLeftRadius: width,
        borderBottomRightRadius: width,
        justifyContent: "center",
        alignItems: "center",

    }

});

export default Block;