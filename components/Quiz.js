import React, { Component } from 'react'
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native'
import { black, white, red, champagne, green } from "../utils/colors"
import { connect } from 'react-redux'
import { setLocalNotification, clearLocalNotification } from '../utils/helpers'

class Quiz extends Component {

    state = {
        questionCount: 0,
        seeQuestion: true,
        correctAnswer: 0,
    }

    seeAnswer = () => {
        this.setState(prevState => ({
            seeQuestion: !prevState.seeQuestion
        }))
    }

    submitAnswerCorrect = () => {


            this.setState(prevState=>({
               
                correctAnswer: prevState.correctAnswer + 1,
                questionCount: prevState.questionCount + 1,
                seeQuestion: true
            }))

    }

    submitAnswerIncorrect = () => {

            this.setState(prevState=>({
                questionCount: prevState.questionCount + 1,
                seeQuestion: true
            }))

    }

    restartQuiz = () => {
         
         clearLocalNotification().then(setLocalNotification)

        this.setState(() =>({
            questionCount: 0,
            seeQuestion: true,
            correctAnswer: 0,
        }))

    }

    render() {
        const { decks } = this.props

        const deck = this.props.route.params.entryId
        const questionCount = this.state.questionCount
        const { questions } = decks[deck]
        const num = this.state.questionCount + 1

        if (questions.length === 0) {
            return (
                <View style={styles.noQuiz}>
                    <Text  style={{textAlign:"center"}}>Sorry, you cannot take a quiz because there are no cards in the deck.</Text>
                </View>
            )
        }



        if (questionCount === questions.length) {
            let percent = ((this.state.correctAnswer / questions.length) * 100)
            percent = Number.parseFloat(percent).toPrecision(3)
            return (
                <View style={styles.container}>
                    <View style={styles.center}>
                
                        <Text style={styles.topLeft}>Done</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 20, margin: 10 }}>Quiz Completed!!!</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 20, margin: 10, color: green }}>{this.state.correctAnswer}/ {questions.length} Correct</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 20, margin: 10 }}>Percentage Correct</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 20, margin: 10, color: green }}>{percent} %</Text>
                    </View>
                    <TouchableOpacity style={[styles.button, { backgroundColor: green }]}
                        onPress={this.restartQuiz}>
                        <Text style={{ color: white }}>Restart Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: champagne }]}
                        onPress={() => this.props.navigation.navigate('DeckDetail', { entryId: deck })}>
                        <Text style={{ color: black }}>Back</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <Text style={styles.topLeft}>{num}/ {questions.length}</Text>
                    {this.state.seeQuestion
                        ? <Text style={{ fontWeight: "bold", fontSize: 20, margin: 10 }}>Question</Text>
                        : <Text style={{ fontWeight: "bold", fontSize: 20, margin: 10 }}>Answer</Text>
                    }
                    {this.state.seeQuestion
                        ? <Text style={{ fontSize: 20 }}>{decks ? questions[questionCount].question : null}</Text>
                        : <Text style={{ fontSize: 20 }}>{decks ? questions[questionCount].answer : null}</Text>
                    }
                </View>
                {this.state.seeQuestion
                    ? <TouchableOpacity style={[styles.button, { backgroundColor: champagne }]}
                        onPress={this.seeAnswer}>
                        <Text style={{ color: black }}>Show Answer</Text>
                    </TouchableOpacity>
                    : <TouchableOpacity style={[styles.button, { backgroundColor: champagne }]}
                        onPress={this.seeAnswer}>
                        <Text style={{ color: black }}>Show Question</Text>
                    </TouchableOpacity>
                }
                <TouchableOpacity style={[styles.button, { backgroundColor: green }]}
                    onPress={this.submitAnswerCorrect}>
                    <Text style={{ color: white }}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: red }]}
                    onPress={this.submitAnswerIncorrect}>
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
    center: {
        alignItems: "center",
        margin: 20,
    },
    topLeft: {
        marginBottom: 100,
        marginLeft: 10,
        fontWeight: "bold",
        alignSelf: "flex-start"
    },
    noQuiz:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40,
    }

})

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Quiz)