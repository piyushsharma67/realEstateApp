import React from 'react'
import { Button, PermissionsAndroid, Platform, View } from 'react-native'
import triggerLocalNotification from './src/sendPushNotification'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from './src/navigation'
import { Provider } from 'react-redux'
import { persistor, store } from './src/redux/store'
import showToast from './src/utils/showToast'
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  React.useEffect(() => {
    const requestNotificationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          {
            title: 'Notification Permission',
            message: 'Real Estate would like to send you notifications.',
            buttonPositive: 'Allow',
            buttonNegative: 'Deny',
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          showToast("Permission not granted")
        }
      } catch (error) {
        showToast('Error requesting notification permission:');
      }
    };
    if (Platform.OS === 'android') {
      requestNotificationPermission();
    }
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )

}

export default App