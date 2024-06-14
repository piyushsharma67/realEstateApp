import React, { useCallback } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { HomeDetailsType } from '../redux/type'
import Loader from '../../../../componentsV1/Loader/Loader'
import { typography } from '../../../../theme/typography'
import Card from '../../../../componentsV1/Card/Card'
import { colors } from '../../../../theme/colors'
import Button from '../../../../componentsV1/Button/Button'

interface IIndexHomeDetailsProps {
    details: HomeDetailsType | null,
    loading: boolean
    buttonDisabled: boolean
    onPressback: () => void
    onPressUnlock: () => void
    onClickPhone: (phone: string) => () => void
}
function IndexHomeDetails(props: IIndexHomeDetailsProps) {
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
    }, [props.details])

    const address = `${props.details?.address}`

    const Description = useCallback(({ data }: { data: HomeDetailsType | null }) => {
        return (
            <Card style={{ height: 180, marginHorizontal: 0 }}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <View style={{ marginBottom: 8 }}>
                            <Text style={{ color: colors.primary.primaryMain, fontWeight: '600' }}>{data?.ownerName}</Text>
                            <Text style={{ color: colors.primary.primaryMain, fontWeight: '600' }}>Owner</Text>
                        </View>
                        <TouchableOpacity style={styles.phoneButton} onPress={props.onClickPhone(data?.ownerPhone!!)}>
                            <Icon
                                name='phone'
                                size={20}
                                color={'white'}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ height: 100, overflow: 'scroll', color: colors.neutral.grey60 }}>{data?.description}</Text>
                </View>
            </Card>
        )
    }, [props.details])

    return (
        <View style={styles.container}>
            <Loader loading={props.loading} />
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: props.details?.imageUrl }}
                    resizeMode='cover'
                    style={{ flex: 1, width: '100%' }}
                />
                <TouchableOpacity style={styles.backbutton} onPress={props.onPressback}>
                    <Icon
                        name='arrow-back'
                        size={20}
                        color={'white'}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.overlay} />
                <Text style={styles.pricetext}>₹ {props.details?.cost}</Text>
                <Text style={[styles.heading, { marginBottom: 0 }]}>{props.details?.name}</Text>
                <Text style={styles.heading}>{address}</Text>
                <View style={styles.roomsContainer}>
                    {/* @ts-ignore */}
                    <RoomsInfo iconName='bed' count={props.details?.rooms} />
                    {/* @ts-ignore */}
                    <RoomsInfo iconName='bathtub' count={props.details?.washrooms} />
                </View>
                <Description data={props.details} />
                <Button
                    variant={'filled'}
                    title='Unlock home'
                    style={styles.unlockHomeButton}
                    disabled={props.buttonDisabled}
                    onPress={props.onPressUnlock}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    imageContainer: {
        flex: 1,
        width: '100%'
    },
    detailsContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 12
    },
    overlay: {
        position: 'absolute',
        top: -30,
        left: 0,
        right: 0,
        height: 30,
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        zIndex: 1, // Ensure the white box is the white container is above the image
    },
    backbutton: {
        position: 'absolute',
        top: 20,
        left: 20,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        backgroundColor: 'grey',
        borderRadius: 10,
        display: 'flex'
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
    },
    phoneButton: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary.primaryBase,
        borderRadius: 10,
    },
    unlockHomeButton: {
        marginTop: 4
    }
})

export default React.memo(IndexHomeDetails)