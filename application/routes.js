import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { DeckList, AddDeck } from './screen/';


const Tabs = TabNavigator({
    Decks: {
        screen: DeckList
    },
    'Add Deck': {
        screen: AddDeck,
    },
}, {
        navigationOptions: {
            header: null
        },
        tabBarOptions: {
            style: {
                height: 56,
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
            }
        },
    })

export const MainNavigator = StackNavigator({
    Main: { screen: Tabs },
})