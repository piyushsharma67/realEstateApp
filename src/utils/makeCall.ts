import { Linking, Alert, Platform } from 'react-native';

const makeCall = (phone: string) => {
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
        phoneNumber = `telprompt:${phone}`;
    } else {
        phoneNumber = `tel:${phone}`;
    }
    Linking.openURL(phoneNumber)
        .then(supported => {
            if (!supported) {
                Alert.alert('Phone number is not available');
            } else {
                return Linking.openURL(phoneNumber);
            }
        })
        .catch(err => console.log(err));
};

export default makeCall;
