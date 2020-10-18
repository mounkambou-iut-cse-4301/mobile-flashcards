import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'

class AddCard extends Component {
    state = {
        question: '',
        answer:'',
    }

    handleChangeQuestion = question => {
        this.setState({ question })
    }

    handleChangeAnswer = answer => {
        this.setState({ answer })
    }

    handleSubmit = () => {
        //this.setState(() => ({ question: '', answer:''}))
    }

    render() {
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
                    onPress={this.handleSubmit}
                    disabled={this.state.question === ''|| this.state.answer === ''}
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
        margin:20
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
        margin:20
    }

})

export default AddCard