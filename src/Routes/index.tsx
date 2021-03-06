import React, { memo, useEffect, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Camera from '../Pages/Camera';
import Icons from '../Components/Icons';
import Conversas from '../Pages/Conversas';
import Status from '../Pages/Status';
import Chat from '../Pages/Chat';

import Onboarding from '../Pages/Onboarding';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

import { getColor } from '../Utils/colors';

import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Onboarding: undefined;
            SignIn: undefined;
            SignUp: undefined;
            Camera: undefined;
            Conversas: undefined;
            Status: undefined;
            Home: undefined;
            Chat: {
                source: string;
                userName: string;
            };
        }
    }
}

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

    const signedFlow = (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
    );

    const signInFlow = (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );

    const [logged, setLogged] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            auth,
            user => {
                console.log('usuario:', user);
                setLogged(true);
            },
            error => {
                console.log('erro:', error);
                setLogged(false);
            },
        );
        //ver como mudar estado
        return unsubscribe();
    }, []);

    return logged ? signedFlow : signInFlow;
}

export default memo(Routes);
