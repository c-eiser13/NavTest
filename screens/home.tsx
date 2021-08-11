import React, { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';
import { About } from './about';

const Drawer = createDrawerNavigator();

export const Home: React.FC = () => {
    return (
        <>
            <View>
                <Text>This is the home screen</Text>
            </View>
            <Drawer.Navigator>
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
        </>
        
    )
}