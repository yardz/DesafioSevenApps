import Reactotron from 'reactotron-react-native';

Reactotron
	// Your real ip address 👇
	.configure({ host: '192.168.15.3' })
	.useReactNative()
	.connect();
