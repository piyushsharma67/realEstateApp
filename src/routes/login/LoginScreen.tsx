import React from 'react'
import LoginIndex from './view'
import useLogin from './hook/useLoginHook'

export default function LoginScreen() {
    const {
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
    } = useLogin()
    return (
        <LoginIndex
            state={state}
            loading={loading}
            inpuOtpRefArr={inpuOtpRefArr}
            currentStep={currentStep}
            onEditMobileNumber={onEditMobileNumber}
            onPressNext={onPressNext}
            changeState={changeState}
            setRef={setRef}
            focusPrevious={focusPrevious}
            onSubmittOtp={onSubmittOtp}
        />
    )
}