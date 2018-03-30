import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { getDeck, getDecks } from "../utils/api";
import { toArray } from "../utils/helpers";

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { id } = navigation.state.params;
    return {
      title: `${id} details`
    };
  };
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
        <Text>
          {this.props.navigation.state.params.questions}
          {this.props.navigation.state.params.questions === 1
            ? " question"
            : " questions"}
        </Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("AddQuestion", {
              title: this.props.navigation.state.params.id
            })
          }
        >
          <Text>ADD Question</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("Quiz", {
              id: this.props.navigation.state.params.id
            })
          }
        >
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DeckDetail;
