import { NativeModules } from 'react-native';
const { PushNotificationModule } = NativeModules;

const triggerLocalNotification = ({ title, message }: { title: string, message: string }) => {
    PushNotificationModule.triggerLocalNotification(title, message);
};

export default triggerLocalNotification