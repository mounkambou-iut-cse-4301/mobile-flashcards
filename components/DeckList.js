import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { getData } from '../utils/api'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import { connect } from 'react-redux'


class DeckList extends Component {
    componentDidMount() {
        getDecks()
            .then(decks => this.props.getAllDecks(decks))
    }

    render() {
        const { decks } = this.props
        
        return (
            <View style={styles.container}>
                {decks ? Object.keys(decks).map((deck) => {
                    const { title, questions } = decks[deck]
                    return (
                        <TouchableOpacity style={styles.button}
                            onPress={() => this.props.navigation.navigate('DeckDetail', { entryId: deck })}
                            key={deck}
                        >
                            <Text>{title}</Text>
                            <Text>{questions.length}</Text>

                        </TouchableOpacity>
                    )
                }) : <Text>nothing</Text>}
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
        margin: 20,
    },

})


function mapStateToProps(decks) {
    return { decks }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllDecks: (decks) => dispatch(receiveDecks(decks))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(DeckList)