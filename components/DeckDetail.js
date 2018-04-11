import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
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
    isReady: false
  };

  async componentDidMount() {
    const data = await getDeck(this.props.navigation.state.params.id);
    this.setState({ data, isReady: true });
  }

  render() {
    const { data, isReady } = this.state;
    return isReady ? (
      <View style={styles.container}>
        <Text>{data.title}</Text>
        <Text>
          {this.props.navigation.state.params.questions}
          {this.props.navigation.state.params.questions === 1
            ? " question"
            : " questions"}
        </Text>
        <Button
          onPress={() =>
            this.props.navigation.navigate("AddQuestion", {
              title: this.props.navigation.state.params.id
            })
          }
          title="ADD Question"
        />
        <Button
          onPress={() =>
            this.props.navigation.navigate("Quiz", {
              id: this.props.navigation.state.params.id
            })
          }
          title="Start Quiz"
        />
      </View>
    ) : (
      <Text>Loading...</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

export default DeckDetail;
