import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { black, white, champagne } from "../utils/colors"
import { connect } from 'react-redux'

class DeckDetail extends Component {


    render() {
        const deck = this.props.route.params.entryId
        const { decks } = this.props

        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>{decks ? decks[deck].title : null}</Text>
                    <Text>{decks[deck].questions.length}</Text>
                </View>
                <TouchableOpacity style={[styles.button, { backgroundColor: champagne }]}
                    onPress={() => this.props.navigation.navigate('AddCard', { entryId: deck })} >
                    <Text style={{ color: black }}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: black }]}
                    onPress={() => this.props.navigation.navigate('Quiz', { entryId: deck })} >
                    <Text style={{ color: white }}>Start Quiz</Text>
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
        borderColor: '#000'
    },
    center: {
        alignItems: "center",
        margin: 20,

    }

})

function mapStateToProps(decks) {
    return { decks }
}

export default connect(mapStateToProps)(DeckDetail)