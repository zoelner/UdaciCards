import React, { Component } from "react";
import { Text, View } from "react-native";
import { FlatList, AsyncStorage, TouchableOpacity } from "react-native";
import { QUIZ_STORAGE_KEY, getDecks } from "../utils/api";
import Deck from "./Deck";
import { toArray } from "../utils/helpers";

class DeckList extends Component {
  state = {
    data: null,
    isReady: false
  };

  _renderItem = ({ item }) => {
    return <Deck {...item} navigate={this.props.navigation.navigate} />;
  };

  _keyExtractor = (item, index) => item.id;

  async componentDidMount() {
    const data = await getDecks();
    await this.setState({ data: toArray(data) });
    if (this.state.data)
      setTimeout(() => this.setState({ isReady: true }), 500);
  }

  render() {
    if (this.state.isReady) {
      return (
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      );
    } else {
      return <Text>Loading...</Text>;
    }
  }
}

export default DeckList;
