/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider,useSelector} from 'react-redux';
import store from './Src/Store';

const ReduxProvider = () => {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => App);
