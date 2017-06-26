'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Image
} from 'react-native';


import Http from '../Utils/Http';


class AuthPeople extends React.Component {
  
  static navigationOptions = {
  	header: null
  };

  constructor(props) {
    super(props);
  
    this.state = {
    	user: '',
    	names: '',
    	lastName: '',
    	birthday: null
    };

    this.onAuth = this.onAuth.bind(this);
  }

  onAuth() {

	const {navigation} = this.props;
  	navigation.navigate('MyFamilies');

  	// const {user, names, lastName, birthday} = this.state;

  	// Http.request('people', 'POST', { user, names, lastName, birthday })
  	// .then(people => {

  	// 	const {navigation} = this.props;
  	// 	navigation.navigate('MyFamilies');

  	// })
  	// .catch(err => {
  	// 	alert(err.message)
  	// })

  }

  render() {

    return (
		<View>
			<Image
				source={require('../Resources/Images/logo.jpg')}
			/>
			<TextInput 
				onChangeText={(user) => this.setState({ user })}
				placeholder={ 'User Name' }
				value={this.state.user}
			/>
			<TextInput 
				onChangeText={(names) => this.setState({ names }) }
				placeholder={ 'Names' }
				value={this.state.names}
			/>
			<TextInput 
				onChangeText={(lastName) => this.setState({ lastName }) }
				placeholder={ 'Last Name' }
				value={this.state.lastName}
			/>
			<TextInput 
				onChangeText={(birthday) => this.setState({ birthday }) }
				placeholder={ 'Birthday' }
				value={this.state.birthday}
			/>
			<Button
				onPress={this.onAuth}
				title="Authenticate"
			/>
		</View>
    );

  }

}


export default AuthPeople;