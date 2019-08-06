import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from "@screens/Home"

const AppNavigator = createStackNavigator({
  Home: {screen: Home}
});

const App = createAppContainer(AppNavigator);

export default App;