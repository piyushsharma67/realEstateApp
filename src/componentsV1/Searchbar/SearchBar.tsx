import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Searchbar = () => {
    return (
        <View style={styles.container}>
            <Icon
                name="search"
                color="grey"
                size={24}
                style={{ marginRight: 8 }}
            />
            <TextInput
                placeholder='Search Home'
                style={{ flex: 1, fontSize: 18 }}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingHorizontal: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 12,
        backgroundColor: 'white'
    }
})

export default React.memo(Searchbar)