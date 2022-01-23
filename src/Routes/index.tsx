import React, { memo } from 'react';
import Conversas from '../Pages/Conversas';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Status from '../Pages/Status';
import Chamadas from '../Pages/Chamadas';
import Icons from '../components/Icons';
import Camera from '../Pages/Camera';
import { getColor } from '../utils/colors';

const Tab = createMaterialTopTabNavigator();

const Routes = () => {
    const children = () => {
        return (
            <>
                <Tab.Screen
                    options={{
                        tabBarIcon: () => (
                            <Icons name="camera" size={28} color="white" />
                        ),
                        tabBarShowLabel: false,
                    }}
                    name="Camera"
                    component={Camera}
                />
                <Tab.Screen name="Conversas" component={Conversas} />
                <Tab.Screen name="Status" component={Status} />
                <Tab.Screen name="Chamadas" component={Chamadas} />
            </>
        );
    };
    return (
        <Tab.Navigator
            children={children()}
            initialRouteName="Conversas"
            screenOptions={{
                tabBarActiveTintColor: getColor('secondaryGreen'),
                tabBarInactiveTintColor: getColor('white'),
                tabBarLabelStyle: {
                    color: getColor('pureWhite'),
                    fontSize: 14,
                    fontWeight: '700',
                },
                tabBarStyle: {
                    backgroundColor: getColor('primaryGreen'),
                    height: 45,
                },
            }}
            style={{ paddingTop: 30 }}></Tab.Navigator>
    );
};
export default memo(Routes);
