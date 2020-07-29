// @vendors
import {createAppContainer, createStackNavigator} from 'react-navigation';

// @config
import routes from './config/Routes';

const AppNavigator = createStackNavigator(routes);

const app = createAppContainer(AppNavigator);

export default app;
