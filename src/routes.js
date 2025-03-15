import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './pages/home'
import { Passwords } from './pages/passwords'
import { About } from './pages/about/About';

import { Ionicons } from '@expo/vector-icons'
import FontAwesome from '@expo/vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name="home"
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: ({focused, size, color}) =>{
                    if(focused){
                        return <Ionicons size={size} color={color} name='home'/>
                    }
                    return <Ionicons size={size} color={color} name='home-outline'/>
                }
            }}
            />
            <Tab.Screen 
            name="passwords"
            component={Passwords}
            options={{
                headerShown: false,
                tabBarIcon: ({focused, size, color}) =>{
                    if(focused){
                        return <Ionicons size={size} color={color} name='lock-closed'/>
                    }
                    return <Ionicons size={size} color={color} name='lock-closed'/>
                }
            }}
            />
            <Tab.Screen 
            name="about"
            component={About}
            options={{
                headerShown: false,
                tabBarIcon: ({focused, size, color}) =>{
                    if(focused){
                        return <FontAwesome size={size} color={color} name='user'/>
                    }
                    return <FontAwesome size={size} color={color} name='user'/>
                }
            }}
            />
        </Tab.Navigator>
    )
}