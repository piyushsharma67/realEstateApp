
import React from 'react'
import { StyleSheet, View, Text, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native'
import { typography } from '../../../theme/typography'
import { colors } from '../../../theme/colors'
import TextInput from '../../../componentsV1/TextInput/TextInput'
import Button from '../../../componentsV1/Button/Button'


interface IOtpInputFragmentProps {
    mobileNumber: string
    onEditMobileNumber: () => void
    otpLength: number
    changeState: (type: 'mobile' | 'otp', index?: number) => (val: string) => void
    //@ts-ignore
    setRef: (index: number) => (ref: TextInput | null) => void
    //@ts-ignore
    inpuOtpRefArr: TextInput[] | null[]
    focusPrevious: (index: number) => (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => void
    onSubmittOtp: () => void
}

function OtpInputFragment(props: IOtpInputFragmentProps) {

    const inputs: string[] = new Array(props.otpLength).fill("")

    return (
        <View style={styles.main}>
            <Text style={styles.title}>OTP Verification</Text>
            <View style={styles.editContainer}>
                <Text style={styles.subTitle}>Enter OTP send to {props.mobileNumber}</Text>
                <Button
                    title='Edit'
                    variant='outlined'
                    titleStyle={styles.editButtonTitleStyle}
                    style={styles.editButton}
                    onPress={props.onEditMobileNumber}
                />
            </View>

            <View style={styles.inputContainer}>
                {inputs.map((value, index) => (
                    <View style={styles.otpBoxContainer} key={index}>
                        <TextInput
                            textAlign='center'
                            onChangeText={props.changeState('otp', index)}
                            maxLength={1}
                            keyboardType='number-pad'
                            onRef={props.setRef(index)}
                            //@ts-ignore
                            ref={props.inpuOtpRefArr[index]}
                            onKeyPress={props.focusPrevious(index)}
                        />
                    </View>
                ))}
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='Submit'
                    onPress={props.onSubmittOtp} variant={'filled'} />
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
        paddingTop: 24
    },
    editContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    editButton: {
        borderWidth: 0,
        height: 36,
        width: 50,
        paddingHorizontal: 0,
        paddingVertical: 0
    },
    textContaineer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 8
    },
    //@ts-ignore
    subTitle: {
        ...typography['Body/14M'],
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
    },
    otpBoxContainer: {
        width: 60,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius:8
    },
    editButtonTitleStyle: {
        ...typography['Button/14'],
        color: colors.semantic.infoMain,
    },
})

export default React.memo(OtpInputFragment)