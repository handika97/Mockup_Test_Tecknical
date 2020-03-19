import React, {useState, useEffect, Fragment} from 'react';
import {Image, View, Text, Dimensions} from 'react-native';
import {Right, Left} from 'native-base';
import FooterBar from '../component/footer';
let {height, width} = Dimensions.get('window');
export default class page2 extends React.Component {
  render() {
    return (
      <View>
        <Text>hahahah</Text>
        <View
          style={{
            width: '100%',
            flex: 1,
            zIndex: 30,
            position: 'absolute',
            backgroundColor: 'white',
            marginTop: height - 80,
          }}>
          <FooterBar menu={this.props} profile={true} />
        </View>
      </View>
    );
  }
}
