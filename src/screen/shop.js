import {ScrollView, TextInput} from 'react-native-gesture-handler';
import React, {useState, useEffect, Fragment} from 'react';
import {Image, View, Text, Dimensions} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Right, Left} from 'native-base';
import FooterBar from '../component/footer';
let {height, width} = Dimensions.get('window');
export default class page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderCarouse = ({item, index}) => (
    <View
      style={{
        backgroundColor: 'white',
        height: 300,
        borderTopRightRadius: 20,
        elevation: 20,
      }}>
      <View
        style={{
          alignSelf: 'flex-start',
          height: 150,
          width: 200,

          borderTopRightRadius: 20,
        }}>
        <Image
          style={{
            height: '100%',
            width: ' 100%',
            borderTopRightRadius: 20,
          }}
          source={item.image}
        />
      </View>
      <View style={{marginTop: 10, marginLeft: 10}}>
        <Text style={{fontSize: 20, color: 'black'}}>{item.name}</Text>
        <View
          style={{
            width: 200,
            borderWidth: 2,
            borderBottomColor: 'orange',
          }}
        />
        <Text>{item.text}</Text>
      </View>
    </View>
  );

  render() {
    console.log(this.props.route);
    return (
      <View>
        <View
          style={{
            height: 70,
            width: '100%',
            backgroundColor: 'black',
            display: 'flex',
            flexDirection: 'row',

            alignItems: 'center',
          }}>
          <View style={{marginLeft: '5%'}}>
            <Image source={require('../Assets/Assets/scan.png')} />
          </View>

          <View
            style={{
              width: width / 1.636,
              marginLeft: '10%',
              height: 40,
              backgroundColor: 'white',
              borderRadius: 50,
              alignContent: 'center',
              flexDirection: 'row',
            }}>
            <Image
              source={require('../Assets/Assets/Search.png')}
              style={{
                height: 25,
                width: 25,
                marginTop: 7,
                marginLeft: 4,
              }}
            />
            <TextInput
              style={{
                width: width / 2.118,
                fontSize: 23,
                height: height / 11.84,
                alignSelf: 'center',
              }}
            />
          </View>
          <View style={{marginLeft: '5%'}}>
            <Image source={require('../Assets/Assets/menu.png')} />
          </View>
        </View>
        <ScrollView>
          <View style={{flex: 1, display: 'flex', marginBottom: 40}}>
            <View style={{height: 200, width: '100%', flexDirection: 'column'}}>
              <Image
                source={require('../Assets/Assets/ImageBig.png')}
                style={{height: '100%', width: '100%'}}
              />
              <View
                style={{
                  height: 80,
                  width: 80,
                  alignSelf: 'center',
                  marginTop: -150,
                }}>
                <Image
                  source={require('../Assets/Assets/Play.png')}
                  style={{height: '100%', width: '100%'}}
                />
              </View>
            </View>
            <View
              style={{
                height: 40,
                width: '100%',
                backgroundColor: 'black',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 20, marginLeft: 10}}>
                Beef Patty Hamburger
              </Text>
            </View>
            <View
              style={{
                height: 70,
                width: '100%',
                flexDirection: 'row',
                marginTop: 10,

                alignItems: 'center',
              }}>
              <View style={{height: 70, width: 70, marginLeft: 10}}>
                <Image
                  source={require('../Assets/Assets/Ellipse(2)copy.png')}
                  style={{height: '100%', width: '100%'}}
                />
              </View>
              <View style={{marginLeft: 5}}>
                <Text style={{fontSize: 15}}>Jane Doe</Text>
                <View style={{flexDirection: 'row'}}>
                  <Image source={require('../Assets/Assets/starrating.png')} />
                  <Image source={require('../Assets/Assets/starrating.png')} />
                  <Image source={require('../Assets/Assets/starrating.png')} />
                  <Image source={require('../Assets/Assets/starrating.png')} />
                  <Image source={require('../Assets/Assets/starrating.png')} />
                  <Text style={{color: 'grey'}}>(10)</Text>
                </View>
              </View>
              <Right>
                <View style={{flexDirection: 'row', marginRight: 20}}>
                  <Image
                    source={require('../Assets/Assets/Instagram.png')}
                    style={{borderRadius: 13, marginLeft: 2}}
                  />
                  <Image
                    source={require('../Assets/Assets/facebook.png')}
                    style={{borderRadius: 13, marginLeft: 2, marginTop: -2}}
                  />
                  <Image
                    source={require('../Assets/Assets/whatsapp.png')}
                    style={{borderRadius: 13, marginLeft: 2}}
                  />
                </View>
              </Right>
            </View>
            <View style={{marginLeft: 10, marginRight: 20}}>
              <Text style={{fontWeight: 'bold'}}>
                Beef Patty
                <Text style={{fontWeight: '100', textAlign: 'justify'}}>
                  -is simply dummy text of the printing and type setting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s
                </Text>
              </Text>
            </View>
            <View
              style={{
                marginLeft: 10,
                marginRight: 20,
                marginTop: 10,
              }}>
              <Text style={{fontSize: 15, color: 'orange'}}>Shopping List</Text>
              <View style={{flexDirection: 'column', height: 350}}>
                <View
                  style={{
                    height: 50,
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: 'grey',
                    flexDirection: 'row',
                  }}>
                  <Left>
                    <Text>Onion</Text>
                  </Left>
                  <Right>
                    <Text>200 grams</Text>
                  </Right>
                </View>
                <View
                  style={{
                    height: 50,
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: 'grey',
                    flexDirection: 'row',
                  }}>
                  <Left>
                    <Text>Beef Steak</Text>
                  </Left>
                  <Right>
                    <Text>750 grams</Text>
                  </Right>
                </View>
                <View
                  style={{
                    height: 50,
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: 'grey',
                    flexDirection: 'row',
                  }}>
                  <Left>
                    <Text>Bean Verrnicelli</Text>
                  </Left>
                  <Right>
                    <Text>30 grams</Text>
                  </Right>
                </View>
                <View
                  style={{
                    height: 50,
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: 'grey',
                    flexDirection: 'row',
                  }}>
                  <Left>
                    <Text>Soy Sauce</Text>
                  </Left>
                  <Right>
                    <Text>10 grams</Text>
                  </Right>
                </View>
                <View
                  style={{
                    height: 50,
                    marginBottom: 100,
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: 'grey',
                    flexDirection: 'row',
                  }}>
                  <Left>
                    <Text>Oyster Sauce</Text>
                  </Left>
                  <Right>
                    <Text>15 grams</Text>
                  </Right>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            width: '100%',
            flex: 1,
            zIndex: 30,
            position: 'absolute',

            marginTop: height - 80,
          }}>
          <FooterBar menu={this.props} shop={true} />
        </View>
      </View>
    );
  }
}
