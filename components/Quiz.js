import React, { Component } from 'react'
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native'
import { black, white,red,champagne,green } from "../utils/colors"

class Quiz extends Component {

    setTitle = (name) => {
        if (!name) return

        this.props.navigation.setOptions({
            title: 'Quiz'
        })
    }

    render() {
        const {name} = this.props.route.params
        this.setTitle(name)
        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <Text style={{fontWeight:"bold", fontSize:20,margin:10}}>Question</Text>
                    <Text style={{fontSize:20}}>What is react ?</Text>
                </View>
                <TouchableOpacity style={[styles.button, { backgroundColor:champagne }]}>
                    <Text style={{ color: black }}>Answer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: green }]}>
                    <Text style={{ color: white }}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: red }]}>
                    <Text style={{ color: white }}>Incorrect</Text>
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
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 70,
        marginRight: 70,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    center:{
        alignItems: "center",
        margin:20,
    }

})

export default Quiz