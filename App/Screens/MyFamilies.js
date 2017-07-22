'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native';

import Google from '../Utils/Google';


const Row = ({row}) => {

	return <Text>{row.user}</Text>;
}

class MyFamilies extends Component {

	static navigationOptions = {
		title: 'My Families',
		headerLeft: null
	}

	constructor(props) {
		super(props);

		this.state = {
			peoples: []
		};

		this.handlerPressRow = this.handlerPressRow.bind(this);
	}

	async componentWillMount() {

    try {

      const {navigation} = this.props;
      const drive = new Google.GoogleDrive();
      drive.token = navigation.state.params.user.accessToken;
      const files = await drive.getFiles();


    } catch (err) {
      console.log('err', err);
    }
	}

	handlerPressRow() {

	}

	render() {

		const {peoples} = this.state;

		return (
			<View>
			<FlatList
			  data={peoples}
			  renderItem={({item}) => {
			  	return (
					<TouchableOpacity style={styles.row} onPress={this.handlerPressRow}>
						<Row row={item}/>
					</TouchableOpacity>
			  	);
			  }} />

			</View>
		);
	}
}

const styles = StyleSheet.create({
	row: {
		borderWidth: 1,
		borderColor: '#F5F5F5',
		padding: 10
	}
});


export default MyFamilies;
