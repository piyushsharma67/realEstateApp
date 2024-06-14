
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { typography } from '../../../theme/typography'
import { colors } from '../../../theme/colors'
import TextInput from '../../../componentsV1/TextInput/TextInput'
import Button from '../../../componentsV1/Button/Button'


interface IOtpMobileInputFragmentProps {
    mobileNumber: string
    onPressNext: () => void
    onChangeText: (val: string) => void
}

function MobileInputFragment(props: IOtpMobileInputFragmentProps) {

    return (
        <View style={styles.main}>

            <Text style={styles.subTitle}>Welcome to</Text>
            <Text style={styles.title}>Saya Builder</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    value={props.mobileNumber}
                    type="mobile"
                    label="Enter Mobile Number"
                    placeholder='9999999999'
                    keyboardType='number-pad'
                    maxLength={10}
                    onChangeText={props.onChangeText}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='Next'
                    onPress={props.onPressNext}
                    variant={'filled'}
                />
            </View>
            <View style={styles.termsContainer}>
                <Text style={styles.termsLabelText}>By continuing you agree to our</Text>
                <Text style={styles.conditionsText}>Terms and Condition</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        height: '100%',
    },
    textContaineer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 8
    },
    //@ts-ignore
    subTitle: {
        ...typography['H6/16R'],
        color: colors.neutral.grey60
    },
    //@ts-ignore
    title: {
        ...typography['H1/28B'],
        color: colors.neutral.grey90
    },
    //@ts-ignore
    label: {
        ...typography['Body/14R'],
        color: colors.neutral.grey90
    },
    inputContainer: {
        marginVertical: 8,
    },
    buttonContainer: {
        marginTop: 16,
        marginBottom: 8,
        height: 48
    },
    termsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    //@ts-ignore
    termsLabelText: {
        ...typography['Body/12M'],
        color: colors.neutral.grey60

    },
    conditionsText: {
        ...typography['Body/12M'],
        color: colors.semantic.infoMain,
        marginLeft: 4
    }
})

export default React.memo(MobileInputFragment)