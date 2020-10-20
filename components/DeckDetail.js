import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { black, white, red, champagne } from "../utils/colors"
import { getData } from '../utils/api'
import { connect } from 'react-redux'

class DeckDetail extends Component {
    setTitle = (entryId) => {
        if (!entryId) return

        this.props.navigation.setOptions({
            title: 'DeckDetail'
        })
    }

    render() {
        const { entryId } = this.props.route.params
        this.setTitle(entryId)
        const deck = this.props.route.params.entryId
        const { decks } = this.props

        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>{decks ? decks[deck].title : null}</Text>
                    <Text>{decks[deck].questions.length}</Text>
                </View>
                <TouchableOpacity style={[styles.button, { backgroundColor: champagne }]}
                    onPress={() => this.props.navigation.navigate('AddCard', { entryId: 'AddCard' })} >
                    <Text style={{ color: black }}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: black }]}
                    onPress={() => this.props.navigation.navigate('Quiz', { name: 'Quiz' })} >
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