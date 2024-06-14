import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { BackHandler, NativeSyntheticEvent, TextInput, TextInputKeyPressEventData } from "react-native";
import { useAppDispatch } from "../../../redux/store";
import showToast from "../../../utils/showToast";
import { getAuthDetails, getOTP } from "../redux/thunk";
import { AuthActions } from "../redux/slice";

export default function useLogin() {

    const dispatch = useAppDispatch()
    const [currentStep, setCurrentStep] = useState(1)
    const [loading, setLoading] = useState(false)

    const [state, setState] = useState<{ mobile: string, otp: string[] }>({
        mobile: "",
        otp: [],
    })

    const inpuOtpRefArr: TextInput[] | null[] = []

    function setRef(index: number) {
        return (ref: TextInput | null) => {
            inpuOtpRefArr[index] = ref
        }
    }

    function changeState(type: 'mobile' | 'otp', index?: number) {
        return (value: string) => {
            setState((props) => {
                if (type == 'otp') {
                    if (index! < inpuOtpRefArr.length - 1 && value) {
                        inpuOtpRefArr[index! + 1]!.focus()
                    }
                    if (index === inpuOtpRefArr.length - 1) {
                        inpuOtpRefArr[index]!.blur()
                    }
                    const { otp } = state
                    otp[index!] = value

                    return { ...props, [type]: otp }
                }
                return { ...props, [type]: value }
            })
        }
    }


    async function onPressNext() {

        try {
            setLoading(true)

            if (state.mobile.length < 10 || !state.mobile) {
                throw new Error("Enter the mobile")
            }
            const submittMobileResponse = await dispatch(getOTP(state.mobile))
            setLoading(false)
            if (submittMobileResponse.meta.requestStatus == 'fulfilled') {
                setCurrentStep(prev => prev + 1)
            } else {
                throw new Error(submittMobileResponse.payload as string)
            }
        } catch (error: any) {
            setLoading(false)
            showToast(error.message)
        }
    }

    function onEditMobileNumber() {
        setCurrentStep(prev => prev - 1)
    }

    async function onSubmittOtp() {
        try {
            setLoading(true)
            const anyEmptyOtp = state.otp.find((item) => item == "")

            if (state.otp.length < 4 || anyEmptyOtp) {
                throw new Error("Enter a valid 4 digit OTP")
            }

            const otp = state.otp.join("")

            const subittOtpResponse = await dispatch(getAuthDetails({ mobileNumber: state.mobile, otp }))

            setLoading(false)

            if (subittOtpResponse.meta.requestStatus == 'rejected') {
                //@ts-ignore
                throw new Error(subittOtpResponse.payload)
            }
            dispatch(AuthActions.insertUser(subittOtpResponse.payload))
        } catch (error: any) {
            setLoading(false)
            showToast(error.message)
        }
    }

    function focusPrevious(index: number) {
        return (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
            if (event.nativeEvent.key == 'Backspace' && index !== 0)
                inpuOtpRefArr[index - 1]!.focus()
        }

    }

    useEffect(() => {
        function backButtonListener() {
            if (currentStep == 1) {
                BackHandler.exitApp()
            } else {
                setCurrentStep(prev => prev - 1)
            }
            return true
        }

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backButtonListener,
        );

        return () => backHandler.remove()
    }, [])

    return {
        state,
        loading,
        currentStep,
        inpuOtpRefArr,
        onPressNext,
        onEditMobileNumber,
        changeState,
        setRef,
        focusPrevious,
        onSubmittOtp
    }
}