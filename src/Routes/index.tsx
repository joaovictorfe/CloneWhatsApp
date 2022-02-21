import React, { memo } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Conversas from '../Pages/Conversas';
import Status from '../Pages/Status';
import Icons from '../Components/Icons';
import Camera from '../Pages/Camera';
import { getColor } from '../Utils/colors';
import Chat from '../Pages/Chat';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function Routes() {
    const Home = () => (
        <Tab.Navigator
            initialRouteName="Conversas"
            showPageIndicator={false}
            screenOptions={{
                tabBarActiveTintColor: getColor('secondaryGreen'),
                tabBarInactiveTintColor: getColor('pureWhite'),
                tabBarLabelStyle: {
                    alignItems: 'center',
                    fontSize: 14,
                    fontWeight: '700',
                },
                tabBarStyle: {
                    height: 45,
                    backgroundColor: getColor('headerBg'),
                },

                tabBarIndicatorStyle: {
                    backgroundColor: getColor('primaryGreen'),
                },
            }}>
            <Tab.Screen
                name="Camera"
                component={Camera}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icons
                            name="camera"
                            size={32}
                            color={focused ? 'primaryGreen' : 'white'}
                            style={{
                                margin: -5,
                            }}
                        />
                    ),
                    tabBarShowLabel: false,
                }}
            />
            <Tab.Screen name="Conversas" component={Conversas} />
            <Tab.Screen name="Status" component={Status} />
        </Tab.Navigator>
    );

    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
    );
}

export default memo(Routes);
