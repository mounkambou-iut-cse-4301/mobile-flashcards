import AsyncStorage from '@react-native-community/async-storage'
const DECKS_STORAGE_KEY = 'flashcards:decks'
import { decks } from './_DATA'

export const getData = () => {
    return decks
}

export function getDecks(decks) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(results => {
            if (results === null) {
                AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
                return decks
            } else {
                return JSON.parse(results)
            }
        })
}




export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }))
}



export function addCardToDeck(title, card) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(results => JSON.parse(results))
        .then(results => {
            results[title].questions.push(card)
            AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(results))
            return results
        })
}

