import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./Screens/LoginScreen";
const Tab = createBottomTabNavigator();

function BottomTabs(){
    return(
        <Tab.Navigator screenOptions={{
            tabBarStyle:{
                backgroundColor:"rgba(0,0,0,0.5)",
                position: "absolute",
                bottom:0,
                left:0,
                right:0,
                shadowOpacity:4,
                shadowRadius:4,
                elevation:4,
                shadowOffset:{
                    width:0,
                    height:-4
                },
                borderTopWidth:0 
            }
        }}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
              headerShown: false,
              tabBarLabelStyle: { color: "white" },
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Entypo name="home" size={24} color="white" />
                ) : (
                  <AntDesign name="home" size={24} color="white" />
                ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: "Home",
              headerShown: false,
              tabBarLabelStyle: { color: "white" },
              tabBarIcon: ({ focused }) =>
                focused ? (
                    <Ionicons name="person" size={24} color="white" />
                ) : (
                    <Ionicons name="person-outline" size={24} color="white" />
                ),
            }}
          />
        </Tab.Navigator>


    )
}

const stack = createNativeStackNavigator();
function Navigation(){
    return(
        <NavigationContainer>
            <stack.Navigator>
            <stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
                <stack.Screen name="Main" component={BottomTabs} option={{headerShown:false}}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation