import { AsyncStorage } from 'react-native'
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'

const NOTIFICATION_KEY = "flashcards:notifications"

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(
          async ({ status }) => {
            if (status === "granted") {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleNotificationAsync({
                content: {
                  title: "Work don't stop!",
                  body: "👋 Hey don't forget to study today!",
                  data: { data: "goes here" },
                },
                trigger: { seconds: (tomorrow.getTime() - Date.now()) / 1000 },
              })

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            } else {
            }
          }
        )
      }
    })
}