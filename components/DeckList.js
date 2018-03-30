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
    this.setState({ data: toArray(data) });
    if (this.state.data) this.setState({ isReady: true });
  }

  render() {
    return this.state.isReady ? (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    ) : (
      <Text>Loading...</Text>
    );
  }
}

export default DeckList;
