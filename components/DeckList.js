import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


class DeckList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity  style={styles.button}
                   onPress={()=>this.props.navigation.navigate('DeckDetail',{ entryId: 'Home'})}
                >
                    <Text>Deck1</Text>
                    <Text>0 cards</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.button}>
                    <Text>Deck2</Text>
                    <Text>0 cards</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.button}>
                    <Text>Deck3</Text>
                    <Text>0 cards</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.button}>
                    <Text>Deck3</Text>
                    <Text>0 cards</Text>
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
        backgroundColor: "#ddd",
        padding: 10,
        margin:20,
    },
   
})

export default DeckList