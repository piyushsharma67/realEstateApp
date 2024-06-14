import React from 'react'
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { HomeDetailsType } from './redux/type'
import IndexHomeDetails from './view'
import useHomeDetails from './hooks/useHomeDetails'


function HomeDetailsScreen() {
    const {
        details,
        loading,
        buttonDisabled,
        onPressUnlock,
        onPressback,
        onClickPhone
    } = useHomeDetails()
    return <IndexHomeDetails
        details={details}
        loading={loading}
        buttonDisabled={buttonDisabled}
        onPressback={onPressback}
        onPressUnlock={onPressUnlock}
        onClickPhone={onClickPhone}
    />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageContainer: {
        flex: 1,
        width: '100%'
    },
    detailsContainer: {
        flex: 1,
        width: '100%'
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
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
    }
})

export default HomeDetailsScreen