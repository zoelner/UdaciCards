import { AsyncStorage } from "react-native";
import { toArray } from "./helpers";

export const QUIZ_STORAGE_KEY = "UdaciCards:quiz";

export const seedData = {
  React: {
    title: "React",
    id: "kq32hn21v",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      }
    ]
  },
  JavaScript: {
    title: "JavaScript",
    id: "kq32hsanv",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
};

function generateId() {
  return Math.random()
    .toString(36)
    .substr(2, 9);
}

export async function initialData() {
  try {
    const data = await AsyncStorage.getItem(QUIZ_STORAGE_KEY);
    if (!data) {
      await AsyncStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(seedData));
    }
  } catch (e) {
    throw new Error(e);
  }
}

export async function getDecks() {
  try {
    const data = await AsyncStorage.getItem(QUIZ_STORAGE_KEY);
    return JSON.parse(data);
  } catch (e) {
    throw new Error(e);
  }
}

export async function getDeck(id) {
  const data = await getDecks();
  return await data[id];
}

export async function saveNewDeck(title) {
  const data = await getDecks();
  AsyncStorage.mergeItem(
    QUIZ_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        id: generateId(),
        title,
        questions: []
      }
    })
  );
}

export async function addCardToDeck(title, card) {
  const data = await getDecks();
  AsyncStorage.setItem(
    QUIZ_STORAGE_KEY,
    JSON.stringify({
      ...data,
      [title]: {
        ...data[title],
        questions: data[title].questions.concat(card)
      }
    })
  );
}
