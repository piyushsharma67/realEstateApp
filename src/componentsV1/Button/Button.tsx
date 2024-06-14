import React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native'
import type { TextStyle, ViewStyle } from 'react-native'
import { colors } from '../../theme/colors'



export type ButtonVariantType = 'outlined' | 'filled' | 'dashed'

export interface IButtonProps {
    leadingIcon?: string,
    leadingIconSize?: number,
    trailingIcon?: string,
    trailingIconSize?: number,
    iconColor?: string,
    title?: string,
    variant: ButtonVariantType,
    style?: ViewStyle,
    titleStyle?: TextStyle,
    disabled?: boolean,
    onPress?: () => void,
    loading?: boolean
}

function getButtonDefaultStyle(variant: ButtonVariantType) {
    switch (variant) {
        case "filled":
            return StyleSheet.create({
                container: {
                    borderRadius: 8,
                    backgroundColor: colors.primary.primaryMain,
                    ...style.container
                },
                titleStyle: {
                    ...style.titleDefaultStyle,
                    color: colors.neutral.grey10
                },
                iconColor: {
                    color: colors.neutral.grey10
                }
            })

        case "outlined":
            return StyleSheet.create({
                container: {
                    borderRadius: 8,
                    backgroundColor: colors.neutral.grey10,
                    borderWidth: 1,
                    borderColor: colors.primary.primaryMain,
                    ...style.container
                },
                titleStyle: {
                    ...style.titleDefaultStyle,
                    color: colors.primary.primaryMain
                },
                iconColor: {
                    color: colors.primary.primaryMain
                }
            })
        case "dashed":
            return StyleSheet.create({
                container: {
                    borderRadius: 8,
                    //@ts-ignore
                    backGroundColor: colors.primary.primaryMain,
                    borderWidth: 1,
                    borderColor: colors.primary.primaryMain,
                    borderStyle: 'dashed',
                    ...style.container
                },
                titleStyle: {
                    ...style.titleDefaultStyle,
                    color: colors.primary.primaryMain
                },
                iconColor: {
                    color: colors.primary.primaryMain
                }
            })
        default:
            return StyleSheet.create({
                container: {
                    borderRadius: 8,
                    backgroundColor: colors.primary.primaryMain,
                    ...style.container
                },
                titleStyle: {
                    ...style.titleDefaultStyle,
                    color: colors.neutral.grey10
                },
                iconColor: {
                    color: colors.neutral.grey10
                }
            })
    }
}

function getButtonDisabledStyle(variant: ButtonVariantType) {

    const disabledColor = colors.neutral.grey40

    switch (variant) {
        case "filled":
            return StyleSheet.create({
                container: {
                    borderRadius: 8,
                    backgroundColor: disabledColor,
                    ...style.container
                },
                titleStyle: {
                    ...style.titleDefaultStyle,
                    color: colors.neutral.grey10
                },
                iconColor: {
                    color: colors.neutral.grey10
                }
            })

        case "outlined":
            return StyleSheet.create({
                container: {
                    borderRadius: 8,
                    backgroundColor: colors.neutral.grey10,
                    borderWidth: 1,
                    borderColor: disabledColor,
                    ...style.container
                },
                titleStyle: {
                    ...style.titleDefaultStyle,
                    color: disabledColor
                },
                iconColor: {
                    color: disabledColor
                }
            })
        case "dashed":
            return StyleSheet.create({
                container: {
                    borderRadius: 8,
                    //@ts-ignore
                    backGroundColor: colors.primary.primaryMain,
                    borderWidth: 1,
                    borderColor: disabledColor,
                    borderStyle: 'dashed',
                    ...style.container
                },
                titleStyle: {
                    ...style.titleDefaultStyle,
                    color: disabledColor
                },
                iconColor: {
                    color: disabledColor
                }
            })
        default:
            return StyleSheet.create({
                container: {
                    borderRadius: 8,
                    backgroundColor: disabledColor,
                    ...style.container
                },
                titleStyle: {
                    ...style.titleDefaultStyle,
                    color: colors.neutral.grey10
                },
                iconColor: {
                    color: colors.neutral.grey10
                }
            })
    }
}

function Button(props: IButtonProps) {

    let defaultStyle = props.disabled ? getButtonDisabledStyle(props.variant) : getButtonDefaultStyle(props.variant)
    const iconColor = props.iconColor ? props.iconColor : defaultStyle.iconColor.color

    function Loader() {
        return (
            <ActivityIndicator size={22} color={iconColor} />
        )
    }

    return (
        <TouchableOpacity style={[defaultStyle.container, props.style]} onPress={props.onPress} disabled={props.disabled || props.loading}>
            {props.loading ?
                <Loader />
                :
                <>
                    {props.title && <Text style={[style.titleDefaultStyle, defaultStyle.titleStyle, props.titleStyle]}>{props.title}</Text>}

                </>
            }
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        maxHeight: 48,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    leadingIconStyle: {
        marginRight: 10
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleDefaultStyle: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 20,
        marginHorizontal: 10
    },
    trailingIconStyle: {
        marginLeft: 10
    },
})
export default React.memo(Button)