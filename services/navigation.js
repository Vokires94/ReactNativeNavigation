import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Dimensions } from 'react-native';
import { Icon } from '@react-native-material/core';
import Login from '../components/Login';
import Register from '../components/Register';
import Homepage from '../components/HomePage';
import Table from '../components/Table';
import BezierLineChart from '../components/charts/BezierLineChart';
import PieChartGraph from '../components/charts/PieChartGraph';
import ContributionChart from '../components/charts/ContributionChart';
import ProgressGraph from '../components/charts/ProgressGraph';
import BarGraph from '../components/charts/BarGraph';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator barStyle={{backgroundColor: '#61dafb', overflow: 'scroll'}}>
            <Tab.Screen name="PieChart" component={PieChartGraph} />
            <Tab.Screen name="BezierLineChart" component={BezierLineChart} />
            <Tab.Screen name="ContributionChart" component={ContributionChart} />
            <Tab.Screen name="ProgressChart" component={ProgressGraph} />
            <Tab.Screen name="BarChart" component={BarGraph} />
        </Tab.Navigator>
    );
}

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Homepage" component={Homepage} options={{
                drawerIcon: ({ color }) => (
                    <Icon name='home' size={24} color={color} />
                )
            }} />
            <Drawer.Screen name="Table" component={Table} options={{
                drawerIcon: ({ color }) => (
                    <Icon name='table' size={24} color={color} />
                )
            }} />
            <Drawer.Screen name="All Charts"  component={MyTabs} options={{
                drawerIcon: ({ color }) => (
                    <Icon name='chart-box' size={24} color={color} />
                )
            }} />
            <Drawer.Screen name="Piechart" component={PieChartGraph} options={{
                drawerIcon: ({ color }) => (
                    <Icon name='chart-pie' size={24} color={color} />
                ),
                drawerItemStyle: {marginLeft: 40, width: Dimensions.get('window').width - 160}
            }} />
            <Drawer.Screen name="BezierLineChart" component={BezierLineChart} options={{
                drawerIcon: ({ color }) => (
                    <Icon name='chart-line' size={24} color={color} />
                ),
                drawerItemStyle: {marginLeft: 40, width: Dimensions.get('window').width - 160}
            }} />
            <Drawer.Screen name="ContributionChart" component={ContributionChart} options={{
                drawerIcon: ({ color }) => (
                    <Icon name='chart-histogram' size={24} color={color} />
                ),
                drawerItemStyle: {marginLeft: 40, width: Dimensions.get('window').width - 160}
            }} />
            <Drawer.Screen name="ProgressChart" component={ProgressGraph} options={{
                drawerIcon: ({ color }) => (
                    <Icon name='chart-donut' size={24} color={color} />
                ),
                drawerItemStyle: {marginLeft: 40, width: Dimensions.get('window').width - 160}
            }} />
            <Drawer.Screen name="BarChart" component={BarGraph} options={{
                drawerIcon: ({ color }) => (
                    <Icon name='chart-bar' size={24} color={color} />
                ),
                drawerItemStyle: {marginLeft: 40, width: Dimensions.get('window').width - 160}
            }} />
        </Drawer.Navigator>
    );
}

export default function MainStack() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Login' screenOptions={{
                    headerStyle: {
                        backgroundColor: '#61dafb',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackVisible: false,
                }}>
                    <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
                    <Stack.Screen name="Register" component={Register} options={{
                        title: 'Register',
                    }}
                    />
                    <Stack.Screen name="MyDrawer" component={MyDrawer} options={{
                        title: 'Site',
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
            <Toast />
        </>

    );
}