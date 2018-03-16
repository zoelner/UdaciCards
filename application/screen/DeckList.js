import React from 'react';
import { Text, View, Button } from 'react-native';

const DeckList = (props) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> DeckList </Text>
        <Button
            title="Go New Deck"
            onPress={() => props.navigation.navigate('New Deck')}
        />
    </View>

)

export default DeckList;