import React, { Component } from 'react';
import { Content, Input, Item, Text, Button, Container } from 'native-base';
import axios from 'axios';
import { View, ScrollView } from 'react-native';
import VotingBlock from './VotingBlock';

export default class RegularTextboxExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      data: []
    };
  }

  changeKeyWord = val => {
    this.setState({ keyword: val });
  };

  submitKeyword = () => {
    axios
      .post('http://127.0.0.1:5000/getTranslation', {
        text: this.state.keyword
      })
      // .then(response => console.log(response.data));
      .then(response => this.setState({ data: response.data }));
  };

  clearKeyword = () => {
    this.setState({ keyword: '' });
  };

  render() {
    return (
      <>
        <Container
          style={{
            display: 'flex',
            marginTop: 30
          }}
        >
          <Content>
            <Item regular>
              <Text> {this.props.word} </Text>
              <Input
                placeholder="Enter your keyword"
                onChangeText={this.changeKeyWord}
                value={this.state.keyword}
              />
            </Item>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20
              }}
            >
              <Button
                bordered
                success
                style={{
                  marginRight: 50
                }}
                onPress={this.submitKeyword}
              >
                <Text> Submit </Text>
              </Button>
              <Button bordered danger onPress={this.clearKeyword}>
                <Text> Clear </Text>
              </Button>
            </View>
          </Content>
        </Container>
        <ScrollView>
          <VotingBlock />
        </ScrollView>
      </>
    );
  }
}