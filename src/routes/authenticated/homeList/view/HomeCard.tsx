import React, { useCallback } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../../theme/colors';
import { HomeListType } from '../redux/type';
import { typography } from '../../../../theme/typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from '../../../../componentsV1/Card/Card';


interface IUnloadingListCardProps {
    data: HomeListType,
    onItemPress: (item: HomeListType) => void;
}

function HomeCard({ data, onItemPress }: IUnloadingListCardProps) {

    const onPress = () => {
        onItemPress(data);
    };

    const address = `${data.address}, ${data.district} - ${data.pincode}`

    const RoomsInfo = useCallback(({ iconName, count }: { iconName: string, count: number }) => {
        return (
            <View style={{ marginRight: 4, width: '12%', flexDirection: 'row' }}>
                <Icon
                    name={iconName}
                    size={18}
                />
                <Text style={{ marginLeft: 4 }}>{count}</Text>
            </View>
        )
    }, [data])

    return (
        <Card onPress={onPress}>
            <Image
                source={{ uri: data.image_url }}
                style={styles.imageContainer}
                resizeMode='cover'
            />
            <View style={styles.detailsConatiner}>
                <Text style={styles.pricetext}>₹ {data.cost}</Text>
                <Text style={[styles.heading, { marginBottom: 0 }]}>{data.name}</Text>
                <Text style={styles.heading}>{address}</Text>
                <View style={styles.roomsContainer}>
                    <RoomsInfo iconName='bed' count={data.rooms} />
                    <RoomsInfo iconName='bathtub' count={data.washrooms} />
                </View>
            </View>
        </Card>

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 12,
        backgroundColor: 'white',
        marginVertical: 10,
        marginHorizontal: 4,
        height: 130
    },
    imageContainer: {
        width: 80,
        height: '80%',
        borderRadius: 18
    },
    detailsConatiner: {
        width: '85%',
        height: '100%',
        paddingHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    heading: {
        ...typography['Body/14M'],
        fontWeight: '800',
        marginBottom: 4
    },
    subHeading: {
        ...typography['Body/14R'],
        fontWeight: '600',
        marginBottom: 2
    },
    roomsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 2
    },
    pricetext: {
        ...typography['H2/24B'],
        fontWeight: '900'
    }
});

export default React.memo(HomeCard)

