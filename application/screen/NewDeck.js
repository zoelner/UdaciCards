import React from 'react';
import { Text, View, Button } from 'react-native';

const NewDeck = (props) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> NewDeck </Text>
        <Button
            title="Go Decks"
            onPress={() => props.navigation.navigate('Decks')}
        />
    </View>
)

export default NewDeck;