import { FlatList, View } from "react-native";
import SearchBar from "../../../../componentsV1/Searchbar/SearchBar";
import { HomeListType } from "../redux/type";
import HomeCard from "./HomeCard";
import Loader from "../../../../componentsV1/Loader/Loader";

interface IHomeListIndexProps {
    loading: boolean,
    homes: HomeListType[]
    onPressHome: (data: HomeListType) => void
}
export default function HomeListIndex(props: IHomeListIndexProps) {
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <Loader loading={props.loading} />
            <SearchBar />
            <FlatList
                data={props.homes}
                keyExtractor={(_, index) => `${index}`}
                renderItem={({ item }) => {
                    return (
                        <HomeCard data={item} onItemPress={props.onPressHome} />
                    )
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}