import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootRouteStackParams, RootRoutes } from '../types/NavigationType';
import LoginScreen from '../routes/login/LoginScreen';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import HomeList from '../routes/authenticated/homeList/HomeList';
import { PermissionsAndroid, Platform } from 'react-native';
import showToast from '../utils/showToast';
import HomeDetailsScreen from '../routes/authenticated/homeDetails/HomeDetailsScreen';
import triggerLocalNotification from '../sendPushNotification';

const Stack = createNativeStackNavigator<RootRouteStackParams>();

export default function RootNavigation() {
    const { user } = useSelector((state: RootState) => state.AuthReducer)

    useEffect(() => {
        if (user?.token) {
            triggerLocalNotification({ title: "Welcome", message: `Hi ${user.name} welcome to the App!!` })
        }
    }, [user])
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            {!user && <Stack.Screen name={RootRoutes.LoginScreen} component={LoginScreen} />}
            <Stack.Screen name={RootRoutes.HomeListScreen} component={HomeList} />
            <Stack.Screen name={RootRoutes.HomeDetailsScreen} component={HomeDetailsScreen} />
        </Stack.Navigator>
    )
}