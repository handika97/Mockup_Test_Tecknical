import React from 'react';
import {Footer, Text, FooterTab, Button, Badge, Icon} from 'native-base';
import {Image} from 'react-native';
const FooterBar = props => {
  console.log(props);
  return (
    <Footer
      style={{
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      }}>
      <FooterTab
        style={{
          backgroundColor: 'orange',
          height: 70,
          width: '100%',
          marginBottom: 200,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        {props.home ? (
          <Button vertical>
            <Image source={require('../Assets/Assets/home_active.png')} />
            <Text style={{color: 'white'}}>Home</Text>
          </Button>
        ) : (
          <Button
            vertical
            onPress={() => props.menu.navigation.navigate('Home')}>
            <Image source={require('../Assets/Assets/shop_inactive.png')} />
            <Text style={{color: 'white'}}>Home</Text>
          </Button>
        )}
        {props.shop ? (
          <Button vertical>
            <Image source={require('../Assets/Assets/shop_active.png')} />
            <Text style={{color: 'white'}}>Shop</Text>
          </Button>
        ) : (
          <Button
            vertical
            onPress={() => props.menu.navigation.navigate('Shop')}>
            <Image source={require('../Assets/Assets/shop_inactive.png')} />
            <Text style={{color: 'white'}}>Shop</Text>
          </Button>
        )}
        {props.favorite ? (
          <Button vertical>
            <Image
              source={require('../Assets/Assets/likes_inactive.png')}
              style={{backgroundColor: 'white'}}
            />
            <Text style={{color: 'white'}}>Favorite</Text>
          </Button>
        ) : (
          <Button
            vertical
            onPress={() => props.menu.navigation.replace('Favorite')}>
            <Image source={require('../Assets/Assets/likes_inactive.png')} />
            <Text style={{color: 'white'}}>Favorite</Text>
          </Button>
        )}
        {props.profile ? (
          <Button vertical>
            <Image
              source={require('../Assets/Assets/account_inactive.png')}
              style={{backgroundColor: 'white'}}
            />
            <Text style={{color: 'white'}}>Profile</Text>
          </Button>
        ) : (
          <Button
            vertical
            onPress={() => props.menu.navigation.replace('Profile')}>
            <Image source={require('../Assets/Assets/account_inactive.png')} />
            <Text style={{color: 'white'}}>Profile</Text>
          </Button>
        )}
      </FooterTab>
    </Footer>
  );
};

export default FooterBar;
