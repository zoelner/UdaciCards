import React from 'react';
import { Text, View, Button } from 'react-native';

// TODO

//  Exibe o título de cada baralho
//  Exibe o número de cartões em cada baralho

const DeckList = (props) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> DeckList </Text>
        <Button
            title="Go AddDeck"
            onPress={() => props.navigation.navigate('Add Deck')}
        />
    </View>

)

export default DeckList;