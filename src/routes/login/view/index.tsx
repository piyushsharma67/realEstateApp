import React from 'react'
import { Dimensions, Image, KeyboardAvoidingView, NativeSyntheticEvent, Platform, ScrollView, StyleSheet, TextInput, TextInputKeyPressEventData, View } from 'react-native'
import MobileNumberFragment from './MobileInputFragment'
import OtpFragment from './OtpInputFragment'
import { colors } from '../../../theme/colors'
import Loader from '../../../componentsV1/Loader/Loader'

interface ILoginIndexProps {
    state: { mobile: string, otp: string[] }
    loading: boolean
    inpuOtpRefArr: TextInput[] | null[]
    currentStep: number
    onEditMobileNumber: () => void
    onPressNext: () => void
    changeState: (type: 'mobile' | 'otp', index?: number) => (val: string) => void
    setRef: (index: number) => (ref: TextInput | null) => void
    focusPrevious: (index: number) => (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => void
    onSubmittOtp: () => void
}

function LoginIndex(props: ILoginIndexProps) {

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.main}>
            <Loader loading={props.loading} />
            <ScrollView style={styles.main} showsVerticalScrollIndicator>
                <Image
                    source={{
                        uri: 'https://www.bankrate.com/2022/08/05092238/Homes_Common-home-styles-and-types-of-houses.jpg'
                    }}
                    style={styles.imageContainer}
                    resizeMode='cover'
                />
                <View style={styles.fragmentContainer}>
                    {props.currentStep == 1 &&
                        <MobileNumberFragment
                            mobileNumber={props.state.mobile}
                            onPressNext={props.onPressNext}
                            onChangeText={props.changeState('mobile')}
                        />
                    }
                    {props.currentStep == 2 &&
                        <OtpFragment
                            mobileNumber={props.state.mobile}
                            otpLength={4}
                            onEditMobileNumber={props.onEditMobileNumber}
                            changeState={props.changeState}
                            setRef={props.setRef}
                            inpuOtpRefArr={props.inpuOtpRefArr}
                            focusPrevious={props.focusPrevious}
                            onSubmittOtp={props.onSubmittOtp}
                        />
                    }
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.neutral.grey10,
    },
    imageContainer: {
        width: '100%',
        height: 400
    },
    fragmentContainer: {
        flex: 1,
        padding: 24,
        backgroundColor: colors.neutral.grey10,
    }
})

export default LoginIndex