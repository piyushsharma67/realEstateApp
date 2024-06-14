import React, { createRef, useCallback, useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native'
import { colors } from '../../theme/colors'
import { typography } from '../../theme/typography'


interface IInputBoxProps extends TextInputProps {
    type?: 'date' | 'mobile' | 'email' | 'price'
    label?: string,
    validateInput?: (value: string) => void
    inputStyle?: ViewStyle
    onRef?: (ref: TextInput | null) => void
    ref?: TextInput | null
}

function InputBox(props: IInputBoxProps) {

    const [inputStyle, setInputStyle] = useState<ViewStyle>({})

    const actionStyle = StyleSheet.create({
        focused: {
            borderColor: colors.primary.primaryMain
        },
        unfocused: {
            borderColor: colors.neutral.grey50
        }
    })

    function onFocus() {
        setInputStyle(actionStyle.focused)
    }

    function onBlur() {
        setInputStyle(actionStyle.unfocused)
    }

    return (
        <View style={styles.main}>
            {props.label &&
                <View style={styles.labelContainer}>
                    <Text style={styles.labelText}>{props?.label}</Text>
                </View>
            }
            <View style={[styles.inputContainer, inputStyle]}>
                <TextInput
                    {...props}
                    onKeyPress={props.onKeyPress}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    style={[styles.labelText, styles.input]}
                    keyboardType={props.keyboardType}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    ref={props.onRef}
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    labelContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 4
    },
    labelText: {
        ...typography['Body/14M'],
        color: colors.neutral.grey90
    },
    inputContainer: {
        width: '100%',
        maxHeight: 48,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 4,
        borderColor: colors.neutral.grey50
    },
    leadingTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        borderRightWidth: 1,
        paddingVertical: 12,
        borderColor: colors.neutral.grey50,
        backgroundColor: colors.neutral.grey30
    },
    input: {
        flex: 1,
        paddingHorizontal: 12,

    }
})

export default React.memo(InputBox)