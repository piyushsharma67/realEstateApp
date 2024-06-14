import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "../../../../redux/store";
import { fetchHomeDetails, unlockHome } from '../redux/thunk'
import showToast from "../../../../utils/showToast";
import { useNavigation } from "@react-navigation/native";
import { RootRouteStackParams, RootRoutes } from "../../../../types/NavigationType";
import triggerLocalNotification from "../../../../sendPushNotification";
import { HomeDetailsType } from "../redux/type";
import makeCall from "../../../../utils/makeCall";

function useHomeDetails() {
    const navigation = useNavigation()
    const dispatch = useAppDispatch()
    const [details, setHomeDetails] = useState<HomeDetailsType | null>(null)
    const [loading, setLoading] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(false)

    useEffect(() => {
        fetchHome()
    }, [])

    async function fetchHome() {
        try {
            setLoading(true)
            const response = await dispatch(fetchHomeDetails())
            setLoading(false)
            if (response.meta.requestStatus = 'fulfilled') {
                //@ts-ignore
                setHomeDetails(response.payload)
            } else {
                //@ts-ignore
                throw new Error(response.payload)
            }
        } catch (error: any) {
            setLoading(false)
            showToast(error.message)
        }
    }

    const onPressback = useCallback(() => {
        //@ts-ignore
        navigation.goBack()
    }, [])

    async function onPressUnlock() {
        try {
            setLoading(true)
            const response = await dispatch(unlockHome())
            setLoading(false)
            if (response.meta.requestStatus = 'fulfilled') {
                //@ts-ignore
                setButtonDisabled(true)
                triggerLocalNotification({ title: "Yipee Home Unlocked", message: `Hi ${details?.name} at address ${details?.address} has been unlocked for you.` })
            } else {
                //@ts-ignore
                throw new Error(response.payload)
            }
        } catch (error: any) {
            setLoading(false)
            showToast(error.message)
        }
    }

    const onClickPhone = useCallback((phone: string) => {
        return () => {
            makeCall(phone)
        }
    }, [])


    return {
        details,
        loading,
        buttonDisabled,
        onPressUnlock,
        onPressback,
        onClickPhone
    }
}

export default useHomeDetails