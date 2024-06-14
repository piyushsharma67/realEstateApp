import { Text } from "react-native";
import HomeListIndex from "./view";
import useHomeList from "./hook/useHomeList";

export default function HomeList() {
    const {
        loading,
        homes,
        onPressHome
    } = useHomeList()
    return (
        <HomeListIndex
            loading={loading}
            homes={homes}
            onPressHome={onPressHome}
        />
    )
}