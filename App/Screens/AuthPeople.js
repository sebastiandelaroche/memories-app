'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Button
} from 'react-native';

import {Google, GoogleDrive} from '../Utils/Google';
import Storage from '../Utils/Storage';


class AuthPeople extends React.Component {

  static navigationOptions = {
  	header: null
  };

  constructor(props) {
    super(props);
    this.storage = new Storage();
  }

  async _auth() {

    try {

      const user = await Google.signIn();
      this.storage.insert("@user", user);

      const drive = new GoogleDrive();
      const files = await drive.getFiles();
      console.log('files', files);

    } catch (err) {
      console.log('err', err);
    }

  }

  render() {

    return (
      <View>
        <Image
      		source={require('../Resources/Images/logo.jpg')}
      	/>
        <Button
          onPress={this._auth.bind(this)}
          title="auth"
        />
      </View>
    );

  }

}


export default AuthPeople;
