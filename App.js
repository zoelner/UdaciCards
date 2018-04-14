import React from "react";
import { View, StatusBar } from "react-native";
import { MainNavigator } from "./utils/routes";
import { Constants, AppLoading } from "expo";
import { initialData } from "./utils/api";
import { setLocalNotification } from "./utils/helpers";

export default class App extends React.Component {
  state = {
    isReady: false
  };

  componentDidMount() {
    setLocalNotification();
  }
  async _cacheResourcesAsync() {
    await Promise.all(initialData());
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: Constants.statusBarHeight }}>
          <StatusBar translucent />
        </View>
        <MainNavigator />
      </View>
    );
  }
}
