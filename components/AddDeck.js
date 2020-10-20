import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { addDeck } from '../actions'
import {connect} from 'react-redux'


class AddDeck extends Component {
    state = {
        text: ''
    }

    handleChange = text => {
        this.setState({ text })
    }

    handleSubmit = () => {
        const { text } = this.state
        const title=text

        

        saveDeckTitle(title)
        this.props.dispatch(addDeck(title))
        this.props.navigation.navigate('DeckDetail', { entryId: title })
        this.setState(() => ({ text: '' }))
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: 60 }} />
                <View style={styles.block}>
                    <Text style={styles.title}>What is the title of your new deck ?</Text>
                </View>
                <View style={styles.block}>
                    <TextInput
                        placeholder='Deck title'
                        style={styles.input}
                        value={this.state.text}
                        onChangeText={this.handleChange}
                    />
                </View>
                <View style={styles.block}>
                    <Button
                        style={styles.button}
                        onPress={this.handleSubmit}
                        disabled={this.state.text === ''}
                        title="Create Deck"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    block: {
        marginBottom: 20,
        margin: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 32
    },
    input: {
        borderWidth: 1,
        borderColor: '#808080',
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        fontSize: 20,
        height: 40,
        marginBottom: 20
    },
    button: {
        backgroundColor: '#ddd',
        borderColor: '#000',
        margin: 20
    }

})

export default connect()(AddDeck)