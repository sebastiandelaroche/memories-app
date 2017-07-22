'use strict';

import React, { Component } from 'react';
import {
  View
} from 'react-native';

import Storage from '../Utils/Storage';
import AuthPeople from './AuthPeople';
import MyFiles from './MyFiles';


class Index extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    if (typeof params !== 'undefined' && params.user) {
      return {
        title: `Person: ${params.user.name}`
      };
    }
    return {
      header: null
    };
  };

  constructor(props) {
    super(props);
    this.storage = new Storage();
    this.state = {
      view: null
    };
  }

  async componentWillMount() {
    const { navigation } = this.props;
    const user = await this.storage.query('@user');
    let view = <AuthPeople/>;
    if (user) {
      const { navigation } = this.props;
      navigation.setParams({ user });
      view = <MyFiles/>;
    }
    this.setState({ view });
  }

	render() {
    const { view } = this.state;
		return (
			<View>{view}</View>
		);
	}
}


export default Index;
