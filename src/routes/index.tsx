import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Home } from '../screens/Home';
import { Passwords } from '../screens/Passwords';

const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
        initialRouteName='Home'
        shifting={true}
    >
        <Tab.Screen 
            name="Home"
            component={Home}
            options={{
                tabBarIcon: 'home'
            }}
        />
        <Tab.Screen
            name="Passwords"
            component={Passwords}
            options={{
                tabBarIcon: 'key'
            }}
        />
    </Tab.Navigator>
  );
}