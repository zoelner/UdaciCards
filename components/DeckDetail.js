import React, { Component } from "react";
import { Text, View } from "react-native";
import { getDeck, getDecks } from "./../api";
import { toArray } from "./../helpers";

class DeckDetail extends Component {
  state = {
    data: null,
    isLoading: true
  };

  async componentDidMount() {
    const data = await getDeck(this.props.navigation.state.params.id);
    this.setState({ data, isLoading: false });
  }

  render() {
    const { data, isLoading } = this.state;
    if (isLoading) return <Text>Loading...</Text>;
    return (
      <View>
        <Text>{data.title}</Text>
        {data.questions.map((question, index) => (
          <Text key={index}>{question.question}</Text>
        ))}
      </View>
    );
  }
}

export default DeckDetail;
