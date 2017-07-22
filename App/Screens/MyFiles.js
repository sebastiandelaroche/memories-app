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
	return <Text>{row.name}</Text>;
}

class MyFiles extends Component {

	static navigationOptions = {
		title: 'My Files',
		headerLeft: null
	}

	constructor(props) {
		super(props);

		this.state = {
			files: []
		};

		this.handlerPressRow = this.handlerPressRow.bind(this);
	}

	async componentWillMount() {

    try {

      const {navigation} = this.props;
      const drive = new Google.GoogleDrive();
      drive.token = navigation.state.params.user.accessToken;
      const files = await drive.getFiles();
      console.log(files);
      this.setState({files});

    } catch (err) {
      console.log('err', err);
    }
	}

	handlerPressRow() {

	}

	render() {

		const {files} = this.state;

		return (
			<View>
			<FlatList
			  data={files}
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


export default MyFiles;
