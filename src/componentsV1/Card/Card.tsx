import React, { ReactNode } from 'react'
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from '../../theme/colors';

interface ICardProps<T> {
    onPress?: () => void
    children?: ReactNode
    style?: any
}
function Card<T>(props: ICardProps<T>) {
    const backgroundColor = colors.neutral.grey10;
    const borderColor = colors.neutral.grey30;
    const cardStyle = {
        ...style.container,
        backgroundColor,
        borderColor,
        ...props.style
    };

    return <TouchableOpacity style={cardStyle} disabled={!props.onPress} onPress={props.onPress}>
        {props.children}
    </TouchableOpacity>
}

const style = StyleSheet.create({
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
    }
})

export default React.memo(Card)