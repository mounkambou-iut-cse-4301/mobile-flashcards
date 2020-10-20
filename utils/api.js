import AsyncStorage from '@react-native-community/async-storage'
const DECKS_STORAGE_KEY = 'flashcards:decks'
import { decks } from './_DATA'

export const getData = () => {
    return decks
}

export function getDecks(decks){
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results=>{
        if(results===null){
            AsyncStorage.setItem(DECKS_STORAGE_KEY,JSON.stringify(decks))
            return decks
        }else{
            return JSON.parse(results)
        }
    })
}

// export async function getDecks(decks) {
//     try {
//         const storeResults = await AsyncStorage.getItem(DECKS_STORAGE_KEY)

//         if (storeResults === null) {
//             AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
//         }

//         return storeResults === null ? decks : JSON.parse(storeResults)
//     } catch (err) {
//         console.log(err)
//     }
// }


export function saveDeckTitle(title){
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY,JSON.stringify({
        [title]:{
            title:title,
            questions:[]
        }
    }))
}

// export async function saveDeckTitle(title) {
//     try {
//         await AsyncStorage.mergeItem(
//             DECKS_STORAGE_KEY,
//             JSON.stringify({
//                 [title]: {
//                     title,
//                     questions: []
//                 }
//             })
//         )
//     } catch (err) {
//         console.log(err)
//     }
// }


export function addCardToDeck(title, card) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(results => JSON.parse(results))
        .then(results => {
            results[title].questions.push(card)
            AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(results))
            return results
        })
}