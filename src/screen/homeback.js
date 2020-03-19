// import {ScrollView, TextInput} from 'react-native-gesture-handler';
// import React, {useState, useEffect, Fragment} from 'react';
// import Carousel from 'react-native-snap-carousel';
// import {
//   Image,
//   ImageBackground,
//   StyleSheet,
//   View,
//   Text,
//   ActivityIndicator,
//   Platform,
//   Alert,
//   Dimensions,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   TouchableHighlight,
// } from 'react-native';
// // import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Tabs, Tab, Right, Left} from 'native-base';
// import FooterBar from '../component/footer';
// let {height, width} = Dimensions.get('window');
// export default class page1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       item: [
//         {
//           name: 'Fast Foot',
//           id: '1',
//           lengt: require('../Assets/Assets/Group29.png'),
//           image: require('../Assets/Assets/Group30.png'),
//         },
//         {
//           name: 'Cakes',
//           id: '2',
//           image: require('../Assets/Assets/Group31.png'),
//         },
//         {
//           id: '3',
//           name: 'Chicken',
//           image: require('../Assets/Assets/Group32.png'),
//         },
//         {
//           id: '4',
//           name: 'Beverages',
//           image: require('../Assets/Assets/Group33.png'),
//         },
//         {
//           id: '5',
//           name: 'Fast Chickens',
//           image: require('../Assets/Assets/Group32.png'),
//         },
//       ],
//       food: [
//         {
//           name: 'Chicken Mushroom Soup',
//           new: require('../Assets/Assets/New.png'),
//           text: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
//           desc: `Lorem Ipsum has been the industry's standard dummy text ever`,
//           id: '1',
//           image: require('../Assets/Assets/Rectangle3.png'),
//         },
//         {
//           name: 'Spicy Beef Pasta',
//           id: '2',
//           new: require('../Assets/Assets/New.png'),
//           text: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
//           desc: `Lorem Ipsum has been the industry's standard dummy text ever`,
//           image: require('../Assets/Assets/Rectangle4.png'),
//         },
//         {
//           id: '3',
//           name: 'Strawberry Softcake',
//           text: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
//           desc: `Lorem Ipsum has been the industry's standard dummy text ever`,
//           image: require('../Assets/Assets/ImageBig.png'),
//         },
//         {
//           id: '4',
//           name: 'Prawn Noodle with basil',
//           text: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
//           desc: `Lorem Ipsum has been the industry's standard dummy text ever`,
//           image: require('../Assets/Assets/Rectangle3.png'),
//         },
//       ],
//       user: [
//         {
//           id: '1',
//           image: require('../Assets/Assets/Ellipse.png'),
//         },
//         {
//           id: '2',
//           image: require('../Assets/Assets/Ellipse(2).png'),
//         },
//         {
//           id: '3',
//           image: require('../Assets/Assets/Ellipse(2)copy.png'),
//         },
//       ],
//     };
//   }

//   renderCarouse = ({item, index}) => (
//     <View
//       style={{
//         backgroundColor: 'white',
//         height: 300,
//         borderTopRightRadius: 20,
//         elevation: 20,
//       }}>
//       <View
//         style={{
//           alignSelf: 'flex-start',
//           height: 150,
//           width: 200,

//           borderTopRightRadius: 20,
//         }}>
//         <Image
//           style={{
//             height: '100%',
//             width: ' 100%',
//             borderTopRightRadius: 20,
//           }}
//           source={item.image}
//         />
//       </View>
//       <View style={{marginTop: 10, marginLeft: 10}}>
//         <Text style={{fontSize: 20, color: 'black'}}>{item.name}</Text>
//         <View
//           style={{
//             width: 200,
//             borderWidth: 1,
//             borderColor: 'orange',
//           }}
//         />
//         <Text>{item.text}</Text>
//       </View>
//     </View>
//   );

//   render() {
//     console.log(height, width);
//     return (
//       <View>
//         <View
//           style={{
//             height: height / 8.457,
//             width: '100%',
//             backgroundColor: 'black',
//             display: 'flex',
//             flexDirection: 'row',

//             alignItems: 'center',
//           }}>
//           <View style={{marginLeft: '5%'}}>
//             <Image source={require('../Assets/Assets/scan.png')} />
//           </View>

//           <View
//             style={{
//               width: width / 1.636,
//               marginLeft: '7%',
//               height: height / 14.8,
//               backgroundColor: 'white',
//               borderRadius: 50,
//               alignContent: 'center',
//               flexDirection: 'row',
//             }}>
//             <Image
//               source={require('../Assets/Assets/Search.png')}
//               style={{
//                 height: height / 23.68,
//                 width: width / 14.4,
//                 marginTop: height / 84.57,
//                 marginLeft: 4,
//               }}
//             />
//             <TextInput
//               style={{
//                 width: width / 2.118,
//                 fontSize: 23,
//                 height: height / 11.84,
//                 alignSelf: 'center',
//               }}
//             />
//           </View>
//           <View style={{marginLeft: '5%'}}>
//             <Image source={require('../Assets/Assets/menu.png')} />
//           </View>
//         </View>
//         <ScrollView>
//           <ScrollView horizontal>
//             {this.state.item.map(item => {
//               return (
//                 <View
//                   style={{
//                     alignSelf: 'center',
//                     height: height / 5.92,
//                     width: width / 3.6,
//                   }}>
//                   <View style={{flexDirection: 'row'}}>
//                     <View
//                       style={{
//                         height: 70,
//                         width: 70,
//                       }}>
//                       <Image
//                         style={{
//                           height: 100,
//                           width: 100,
//                           bottom: 0,
//                         }}
//                         source={item.image}
//                       />
//                     </View>
//                     <Image
//                       style={{
//                         height: 80,
//                         width: 80,
//                         marginLeft: -43,
//                         marginTop: -10,
//                       }}
//                       source={item.lengt}
//                     />
//                   </View>
//                   <Text
//                     style={{
//                       alignSelf: 'center',
//                     }}>
//                     {item.name}
//                   </Text>
//                 </View>
//               );
//             })}
//           </ScrollView>
//           <View>
//             <View style={{flexDirection: 'row'}}>
//               <Text
//                 style={{
//                   fontSize: 20,
//                   color: 'orange',
//                   marginLeft: 20,
//                   marginBottom: 20,
//                 }}>
//                 My Recipe
//               </Text>
//               <Right>
//                 <View style={{flexDirection: 'row', marginRight: 10}}>
//                   <View style={{height: 30, width: 30}}>
//                     <Image
//                       source={this.state.user[0].image}
//                       style={{height: '100%', width: '100%'}}
//                     />
//                   </View>

//                   <View style={{height: 30, width: 30}}>
//                     <Image
//                       source={this.state.user[1].image}
//                       style={{height: '100%', width: '100%', marginLeft: -12}}
//                     />
//                   </View>

//                   <View style={{height: 30, width: 30}}>
//                     <Image
//                       source={this.state.user[2].image}
//                       style={{height: '100%', width: '100%', marginLeft: -24}}
//                     />
//                   </View>
//                   <View
//                     style={{
//                       height: 12,
//                       width: 20,

//                       marginTop: 15,
//                       marginLeft: -15,
//                     }}>
//                     <Image
//                       source={require('../Assets/Assets/hearts.png')}
//                       style={{height: '100%', width: '100%', marginLeft: -20}}
//                     />
//                   </View>

//                   <Text
//                     style={{
//                       fontSize: 15,
//                       color: 'grey',
//                       marginLeft: -20,

//                       alignSelf: 'center',
//                     }}>
//                     +32
//                   </Text>
//                 </View>
//               </Right>
//             </View>
//             <Carousel
//               ref={c => {
//                 this._carousel = c;
//               }}
//               layout={'default'}
//               layoutCardOffset={`0`}
//               data={this.state.food}
//               renderItem={this.renderCarouse}
//               sliderWidth={Dimensions.get('window').width * 0.9}
//               removeClippedSubviews={false}
//               itemWidth={200}

//               //  onSnapToItem={index => this.carause_map(index)}
//             />
//             <Text
//               style={{
//                 fontSize: 20,
//                 color: 'orange',
//                 marginLeft: 20,
//                 marginBottom: 20,
//               }}>
//               Popular
//             </Text>
//           </View>
//           <ScrollView horizontal>
//             {this.state.food.map(item => {
//               return (
//                 <View
//                   style={{
//                     alignSelf: 'center',
//                     height: 250,
//                     width: 150,

//                     marginLeft: 20,
//                     marginBottom: 50,
//                     backgroundColor: 'white',
//                     elevation: 10,
//                     borderRadius: 20,
//                   }}>
//                   <View>
//                     <View
//                       style={{
//                         height: 150,
//                         width: 150,
//                       }}>
//                       <Image
//                         style={{
//                           height: '100%',
//                           width: ' 100%',
//                           bottom: 0,
//                           position: 'relative',
//                           borderTopLeftRadius: 20,
//                           borderTopRightRadius: 20,
//                         }}
//                         source={item.image}
//                       />
//                       <View
//                         style={{
//                           height: 70,
//                           width: 70,
//                           alignSelf: 'flex-end',
//                           position: 'absolute',
//                         }}>
//                         <Image
//                           style={{
//                             height: '100%',
//                             width: '100%',
//                           }}
//                           source={item.new}
//                         />
//                       </View>
//                     </View>
//                     <Image
//                       source={require('../Assets/Assets/Like.png')}
//                       style={{height: 50, width: 50, marginTop: -20}}></Image>
//                   </View>

//                   <Text
//                     style={{
//                       marginLeft: 5,
//                       fontSize: 15,
//                       fontWeight: 'bold',
//                     }}>
//                     Umami
//                   </Text>
//                   <View style={{flexDirection: 'row', marginTop: 10}}>
//                     <View style={{height: 30, width: 30}}>
//                       <Image
//                         source={this.state.user[0].image}
//                         style={{height: '100%', width: '100%'}}
//                       />
//                     </View>

//                     <View style={{height: 30, width: 30}}>
//                       <Image
//                         source={this.state.user[1].image}
//                         style={{height: '100%', width: '100%', marginLeft: -12}}
//                       />
//                     </View>

//                     <View style={{height: 30, width: 30}}>
//                       <Image
//                         source={this.state.user[2].image}
//                         style={{height: '100%', width: '100%', marginLeft: -24}}
//                       />
//                     </View>
//                     <View
//                       style={{
//                         height: 12,
//                         width: 20,

//                         marginTop: 15,
//                         marginLeft: -15,
//                       }}>
//                       <Image
//                         source={require('../Assets/Assets/hearts.png')}
//                         style={{height: '100%', width: '100%', marginLeft: -20}}
//                       />
//                     </View>

//                     <Text
//                       style={{
//                         fontSize: 15,
//                         color: 'grey',
//                         marginLeft: -20,

//                         alignSelf: 'center',
//                       }}>
//                       +32
//                     </Text>
//                   </View>
//                 </View>
//               );
//             })}
//           </ScrollView>

//           <Tabs
//             tabBarUnderlineStyle={{backgroundColor: 'orange'}}
//             tabContainerStyle={{
//               elevation: 0,

//               borderStartWidth: 2,
//             }}>
//             <Tab
//               heading="Info"
//               tabStyle={{backgroundColor: 'white'}}
//               textStyle={{color: '#333'}}
//               activeTabStyle={{backgroundColor: 'white'}}
//               activeTextStyle={{color: '#333', fontWeight: 'normal'}}>
//               <View
//                 style={{
//                   height: 467,
//                   marginBottom: 10,
//                   backgroundColor: 'white',
//                 }}>
//                 <ScrollView>
//                   {this.state.food.map(food => {
//                     return (
//                       <View
//                         style={{
//                           height: 70,
//                           width: '100%',

//                           marginTop: 30,
//                           marginLeft: 10,
//                           flexDirection: 'row',
//                         }}>
//                         <View
//                           style={{
//                             height: 70,
//                             width: 70,
//                             elevation: 15,
//                             backgroundColor: 'white',
//                             borderRadius: 10,
//                           }}>
//                           <Image
//                             source={food.image}
//                             style={{
//                               height: '100%',
//                               width: '100%',
//                               borderRadius: 10,
//                             }}
//                           />
//                         </View>
//                         <View
//                           style={{
//                             height: 70,
//                             width: 265,
//                             marginLeft: 10,
//                             backgroundColor: 'white',
//                             elevation: 15,
//                             borderRadius: 10,
//                           }}>
//                           <Text style={{padding: 5, fontWeight: 'bold'}}>
//                             {food.name}
//                           </Text>
//                           <Text style={{padding: 3}}>{food.desc}</Text>
//                         </View>
//                       </View>
//                     );
//                   })}
//                 </ScrollView>
//               </View>
//             </Tab>
//             <Tab
//               heading="Lorem"
//               tabStyle={{backgroundColor: 'white'}}
//               textStyle={{color: '#333'}}
//               activeTabStyle={{backgroundColor: 'white'}}
//               activeTextStyle={{color: '#333', fontWeight: 'normal'}}>
//               <View style={{padding: 30}}>
//                 <Text>
//                   is simply dummy text of the printing and typesetting industry.
//                   Lorem Ipsum has been the industry's standard dummy text ever
//                   since the 1500s
//                 </Text>
//               </View>
//             </Tab>
//             <Tab
//               heading="Menu"
//               tabStyle={{backgroundColor: 'white'}}
//               textStyle={{color: '#333'}}
//               activeTabStyle={{backgroundColor: 'white'}}
//               activeTextStyle={{color: '#333', fontWeight: 'normal'}}>
//               <View
//                 style={{
//                   height: 467,
//                   marginBottom: 10,
//                   backgroundColor: 'white',
//                 }}>
//                 <ScrollView>
//                   {this.state.food.map(food => {
//                     return (
//                       <View
//                         style={{
//                           height: 70,
//                           width: '100%',

//                           marginTop: 30,
//                           marginLeft: 10,
//                           flexDirection: 'row',
//                         }}>
//                         <View
//                           style={{
//                             height: 70,
//                             width: 70,
//                             elevation: 15,
//                             backgroundColor: 'white',
//                             borderRadius: 10,
//                           }}>
//                           <Image
//                             source={food.image}
//                             style={{
//                               height: '100%',
//                               width: '100%',
//                               borderRadius: 10,
//                             }}
//                           />
//                         </View>
//                         <View
//                           style={{
//                             height: 70,
//                             width: 265,
//                             marginLeft: 10,
//                             backgroundColor: 'white',
//                             elevation: 15,
//                             borderRadius: 10,
//                           }}>
//                           <Text style={{padding: 5, fontWeight: 'bold'}}>
//                             {food.name}
//                           </Text>
//                           <Text style={{padding: 3}}>{food.desc}</Text>
//                         </View>
//                       </View>
//                     );
//                   })}
//                 </ScrollView>
//               </View>
//             </Tab>
//             <Tab
//               heading="Review"
//               tabStyle={{backgroundColor: 'white'}}
//               textStyle={{color: '#333'}}
//               activeTabStyle={{backgroundColor: 'white'}}
//               activeTextStyle={{color: '#333', fontWeight: 'normal'}}>
//               <View style={{padding: 30}}>
//                 <Text>
//                   is simply dummy text of the printing and typesetting industry.
//                   Lorem Ipsum has been the industry's standard dummy text ever
//                   since the 1500s
//                 </Text>
//               </View>
//             </Tab>
//           </Tabs>
//         </ScrollView>
//         <View style={{height: 100, width: '100%'}}>
//           <Text>hahaha</Text>
//         </View>
//       </View>
//     );
//   }
// }
