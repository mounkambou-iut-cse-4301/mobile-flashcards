import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'
import { addCard } from '../actions'
import { connect } from 'react-redux'
import { addCardToDeck } from '../utils/api'

class AddCard extends Component {

    setTitle = (entryId) => {
        if (!entryId) return

        this.props.navigation.setOptions({
            title: 'AddCard'
        })
    }

    state = {
        question: '',
        answer: '',
    }

    handleChangeQuestion = question => {
        this.setState({ question })
    }

    handleChangeAnswer = answer => {
        this.setState({ answer })
    }

    handleSubmit = (deck) => {
        const { question, answer } = this.state
        this.props.dispatch(addCard({ question, answer, deck }))
        addCardToDeck(deck, { question, answer })
        this.props.navigation.navigate('DeckDetail', { entryId: deck })
        this.setState(() => ({ question: '', answer: '' }))
        
    }

    render() {
        const { entryId } = this.props.route.params
        this.setTitle(entryId)
        const deck = this.props.route.params.entryId
        return (
            <View style={styles.container}>
                <View style={{ height: 60 }} />

                <View style={styles.block}>
                    <TextInput
                        placeholder='Question'
                        style={styles.input}
                        value={this.state.question}
                        onChangeText={this.handleChangeQuestion}
                    />
                </View>
                <View style={styles.block}>
                    <TextInput
                        placeholder='Answer'
                        style={styles.input}
                        value={this.state.answer}
                        onChangeText={this.handleChangeAnswer}
                    />
                </View>
                <View style={styles.block}>
                    <Button
                        style={styles.button}
                        onPress={() => this.handleSubmit(deck)}
                        disabled={this.state.question === '' || this.state.answer === ''}
                        title="Submit"
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
    input: {
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        fontSize: 20,
        height: 40,
        marginBottom: 20
    },
    button: {
        backgroundColor: '#dd0',
        borderColor: '#000',
        margin: 20
    }

})

export default connect()(AddCard)