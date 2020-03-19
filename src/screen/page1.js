// import React, {useState, useEffect, Fragment} from 'react';
// import {Image, View, Text} from 'react-native';
// import home from './Home';
// import shop from './shop';

// class page2 extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>hahahah</Text>
//       </View>
//     );
//   }
// }
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// const Tabu = createBottomTabNavigator();

// function App() {
//   return (
//     <Tabu.Navigator
//       tabBarOptions={{
//         activeTintColor: 'white',
//         activeBackgroundColor: 'orange',
//         inactiveTintColor: 'white',
//         inactiveBackgroundColor: 'orange',
//       }}>
//       <Tabu.Screen
//         name="Home"
//         component={home}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: props => (
//             <Image source={require('../Assets/Assets/home_active.png')} />
//           ),
//         }}
//       />
//       <Tabu.Screen
//         name="Shop"
//         component={shop}
//         options={{
//           tabBarLabel: 'Shop',
//           tabBarIcon: ({color, size}) => (
//             <Image source={require('../Assets/Assets/shop_inactive.png')} />
//           ),
//         }}
//       />
//       <Tabu.Screen
//         name="Favorites"
//         component={page2}
//         options={{
//           tabBarLabel: 'Favorite',
//           tabBarIcon: ({color, size}) => (
//             <Image source={require('../Assets/Assets/likes_inactive.png')} />
//           ),
//         }}
//       />
//       <Tabu.Screen
//         name="Profile"
//         component={page2}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({color, size}) => (
//             <Image source={require('../Assets/Assets/account_inactive.png')} />
//           ),
//         }}
//       />
//     </Tabu.Navigator>
//   );
// }
// export default App;
