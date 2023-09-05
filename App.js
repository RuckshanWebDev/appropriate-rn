import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import {HomeScreen} from './HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import BlogScreen from './src/screens/BlogScreen';
import ActivityScreen from './src/screens/ActivityScreen';
import {Image, View, StyleSheet} from 'react-native';
import RegisterScreen from './src/screens/RegisterScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#030816',
          },
        }}>
        <Tab.Screen
          style={style.main}
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <View>
                <Image
                  style={style.icon}
                  resizeMode="cover"
                  source={require('./src/assert/house-chimney.png')}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Activity"
          component={ActivityScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <View>
                <Image
                  style={style.icon}
                  resizeMode="cover"
                  source={require('./src/assert/rss.png')}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="BLog"
          component={BlogScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <View>
                <Image
                  style={style.icon}
                  resizeMode="cover"
                  source={require('./src/assert/blog-pencil.png')}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <View>
                <Image
                  style={style.icon}
                  resizeMode="cover"
                  source={require('./src/assert/circle-user.png')}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <View>
                <Image
                  style={style.icon}
                  resizeMode="cover"
                  source={require('./src/assert/circle-user.png')}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const style = StyleSheet.create({
  icon: {width: 20, height: 20},
});
