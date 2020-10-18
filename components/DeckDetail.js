import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { black, white,red,champagne } from "../utils/colors"


class DeckDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <Text style={{fontWeight:"bold", fontSize:20}}>Deck1</Text>
                    <Text>0 cards</Text>
                </View>
                <TouchableOpacity style={[styles.button, { backgroundColor:champagne }]}>
                    <Text style={{ color: black }}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: black }]}>
                    <Text style={{ color: white }}>Start Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { color: red }]}>
                    <Text style={{ color: red }}>Delete Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    button: {
        alignItems: "center",
        padding: 1,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 70,
        marginRight: 70,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000'
    },
    center:{
        alignItems: "center",
        margin:20,

    }

})

export default DeckDetail