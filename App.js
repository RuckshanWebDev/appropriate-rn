import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen} from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import BlogScreen from './src/screens/BlogScreen';
import ActivityScreen from './src/screens/ActivityScreen';
import {Image, View, StyleSheet} from 'react-native';
import RegisterScreen from './src/screens/RegisterScreen';
import {BlurView} from '@react-native-community/blur';
import MusicPlayer from './src/screens/MusicPlayer';

const Tab = createBottomTabNavigator();
const Screen = createStackNavigator();

const MenuBlur = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 55,
          overflow: 'hidden',
        }}>
        <BlurView
          intensity={10}
          style={{flex: 1, backgroundColor: 'rgba(61, 53, 105, 0.5)'}}
        />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarBackground: () => <MenuBlur />,
          tabBarStyle: {
            borderColor: 'transparent',
            backgroundColor: 'transparent',
            opacity: 1,
            position: 'absolute',
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
          name="Music"
          component={MusicPlayer}
          options={{tabBarButton: props => null, headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const style = StyleSheet.create({
  icon: {width: 25, height: 25},
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 30,
    right: 0,
  },
});
