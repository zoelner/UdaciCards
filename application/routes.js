import React from "react";
import { TabNavigator, StackNavigator } from 'react-navigation';
import { DeckList, NewDeck } from './screen/';


const Tabs = TabNavigator({
    Decks: {
        screen: DeckList
    },
    'New Deck': {
        screen: NewDeck,
        tabBarLabel: 'Whataver'
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
    Home: {
        screen: Tabs,
    },
})