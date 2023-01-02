import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

const Title = ({content ,size}) => {
    const {container, title, small , medium} = styles;

    const getTitleStyle = () => {
        switch(size) {
            case 'big':
                return title;
            case "small":
                return small;
            case "medium":
                return medium;
        }
    }
    return(
        <View style={container}>
            <Text style={getTitleStyle()}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems:"center",

    },
    title:{
        fontSize:30,
        color: "#fff",
        fontWeight: "bold",
        fontFamily: "Montserrat",
    },
    small: {
        color: 'rgba(0,0,0,0.6)',
        fontSize: 12,
        fontWeight: '700',
        lineWeight: 28,

    },

    medium:{
        fontSize: 24,
        fontWeight: "bold",
        lineWeight:28,
    }
   
})

export default Title;