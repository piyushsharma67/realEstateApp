import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../redux/store";
import { fetchHomeList } from '../redux/thunk'
import showToast from "../../../../utils/showToast";
import { useNavigation } from "@react-navigation/native";
import { RootRouteStackParams, RootRoutes } from "../../../../types/NavigationType";
import { HomeListType } from "../redux/type";

function useHomeList() {
    const navigation = useNavigation()
    const dispatch = useAppDispatch()
    const [homes, setHomes] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchHome()
    }, [])

    async function fetchHome() {
        try {
            setLoading(true)
            const response = await dispatch(fetchHomeList())
            setLoading(false)
            if (response.meta.requestStatus = 'fulfilled') {
                //@ts-ignore
                setHomes(response.payload.homes)
            } else {
                //@ts-ignore
                throw new Error(response.payload)
            }
        } catch (error: any) {
            setLoading(false)
            showToast(error.message)
        }
    }

    function onPressHome(data: HomeListType) {
        //@ts-ignore
        navigation.navigate(RootRoutes.HomeDetailsScreen, {
            homeid: data.id
        })
    }
    return {
        homes,
        loading,
        onPressHome
    }
}

export default useHomeList