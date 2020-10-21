import { AsyncStorage } from "react-native"
import * as Permissions from "expo-permissions"
import * as Notifications from "expo-notifications"

const NOTIFICATION_KEY = "flashcards:notifications"


export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS).then(
                    ({ status }) => {
                        console.log(status);
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync();
    
                            let tomorrow = new Date();
    
                            Notifications.scheduleLocalNotificationAsync(
                                {
                                    title: "Work don't stop. You have to study",
                                    body: "👋 don't forget to study today!",
                                    ios: {
                                        sound: true,
                                    },
                                    android: {
                                        sound: true,
                                        sticky: false,
                                    },
                                },
                                {
                                    time: tomorrow.getTime() + 6000,  
                                    repeat: 'minute',
                                }
                            );
    
                            AsyncStorage.setItem(
                                NOTIFICATION_KEY,
                                JSON.stringify(true)
                            )
                        }
                    }
                )
            }
        })
    }