import { ADD_DECK, ADD_DECK_CARD, RECEIVE_DECKS } from '../actions/index'

function deck(state = {}, action) {
    switch (action.type) {
        case ADD_DECK:
            const newDeck = {
                [action.deck]: {
                    title: action.deck,
                    questions: []
                }
            }
            return {
                ...state,
                ...newDeck
            }
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK_CARD:
            const { question, answer, deck } = action.card
            return {
                ...state,
                [deck]: {
                    ...state[deck],
                    questions: [
                        ...state[deck].questions,
                        {
                            questions,
                            answer
                        }
                    ]
                }
            }
        default:
            return state
    }
}

export default deck