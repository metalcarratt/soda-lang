import { describe, test, expect } from 'vitest';
import { exchangeWords, type WordPart } from './use-vocab';
1;
const words = ['a', 'b', 'c', 'd'];
const A_PARTS1 = [
  { word: 'a', corner: 0 },
  { word: 'a', corner: 1 },
  { word: 'a', corner: 2 },
  { word: 'a', corner: 3 },
];

const B_PARTS2 = [
  { word: 'b', corner: 0 },
  { word: 'b', corner: 1 },
  { word: 'b', corner: 2 },
  { word: 'b', corner: 3 },
];

describe('exchangeWords', () => {
  test('drag image part from choices to correct location', () => {
    const imagePart = A_PARTS1[0];

    const { _choices, _words, _wordParts } = exchangeWords({
      wordIndex: 0,
      newImagePart: imagePart,
      corner: 0,
      _choices: [imagePart],
      _words: words,
      _wordParts: [[], [], [], []],
      dragFrom: 'choices',
    });

    expect(_choices).toStrictEqual([]);
    expect(_words).toStrictEqual(words);
    expect(_wordParts).toStrictEqual([[imagePart], [], [], []]);
  });

  test('drag image part from choices to correct location and complete a word', () => {
    const word1 = [];
    word1[1] = A_PARTS1[1];
    word1[2] = A_PARTS1[2];
    word1[3] = A_PARTS1[3];
    const imagePart = A_PARTS1[0];

    const { _choices, _words, _wordParts } = exchangeWords({
      wordIndex: 0,
      newImagePart: imagePart,
      corner: 0,
      _choices: [imagePart],
      _words: words,
      _wordParts: [word1, [], [], []],
      dragFrom: 'choices',
    });

    expect(_choices).toStrictEqual([]);
    expect(_words).toStrictEqual(['b', 'c', 'd']);
    expect(_wordParts).toStrictEqual([[], [], [], []]);
  });

  test('drag image part from one word to another word', () => {
    const word1: WordPart = [];
    const word2 = [];
    word2[0] = A_PARTS1[0];
    const imagePart = A_PARTS1[0];

    const { _choices, _words, _wordParts } = exchangeWords({
      wordIndex: 0,
      newImagePart: imagePart,
      corner: 0,
      _choices: [],
      _words: words,
      _wordParts: [word1, word2, [], []],
      dragFrom: { part: A_PARTS1[0], wordIndex: 1 },
    });

    expect(_choices).toStrictEqual([]);
    expect(_words).toStrictEqual(words);
    expect(_wordParts).toStrictEqual([[A_PARTS1[0]], [undefined], [], []]);
  });

  test('drag image part from one word to another word and swap', () => {
    const word1 = [];
    word1[0] = B_PARTS2[0];
    const word2 = [];
    word2[0] = A_PARTS1[0];
    const imagePart = A_PARTS1[0];

    const { _choices, _words, _wordParts } = exchangeWords({
      wordIndex: 0,
      newImagePart: imagePart,
      corner: 0,
      _choices: [],
      _words: words,
      _wordParts: [word1, word2, [], []],
      dragFrom: { part: A_PARTS1[0], wordIndex: 1 },
    });

    expect(_choices).toStrictEqual([]);
    expect(_words).toStrictEqual(words);
    expect(_wordParts).toStrictEqual([[A_PARTS1[0]], [B_PARTS2[0]], [], []]);
  });

  test('drag image part from one word part to another word part and swap', () => {
    const word1 = [];
    word1[0] = A_PARTS1[1];
    word1[1] = A_PARTS1[0];
    const imagePart = A_PARTS1[0];

    const { _choices, _words, _wordParts } = exchangeWords({
      wordIndex: 0,
      newImagePart: imagePart,
      corner: 0,
      _choices: [],
      _words: words,
      _wordParts: [word1, [], [], []],
      dragFrom: { part: { word: 'a', corner: 1 }, wordIndex: 0 },
    });

    expect(_choices).toStrictEqual([]);
    expect(_words).toStrictEqual(words);
    expect(_wordParts).toStrictEqual([[A_PARTS1[0], A_PARTS1[1]], [], [], []]);
  });

  test('drag image part from choices and swap', () => {
    const moveImagePart = A_PARTS1[0];
    const swapImagePart = A_PARTS1[1];

    const { _choices, _words, _wordParts } = exchangeWords({
      wordIndex: 0,
      newImagePart: moveImagePart,
      corner: 0,
      _choices: [moveImagePart],
      _words: words,
      _wordParts: [[swapImagePart], [], [], []],
      dragFrom: 'choices',
    });

    expect(_choices).toStrictEqual([swapImagePart]);
    expect(_words).toStrictEqual(words);
    expect(_wordParts).toStrictEqual([[moveImagePart], [], [], []]);
  });

  test('complete a word and get a new word', () => {
    const moveImagePart = A_PARTS1[3];
    const word1 = [A_PARTS1[0], A_PARTS1[1], A_PARTS1[2]];

    const { _choices, _words, _wordParts } = exchangeWords({
      wordIndex: 0,
      newImagePart: moveImagePart,
      corner: 3,
      _choices: [moveImagePart, ...B_PARTS2],
      _words: ['a', 'b', 'c', 'd', 'e'],
      _wordParts: [word1, [], [], []],
      dragFrom: 'choices',
    });

    console.log('choices', _choices);
    expect(_choices).toContainEqual({ word: 'e', corner: 0 });
    expect(_choices).toContainEqual({ word: 'e', corner: 1 });
    expect(_choices).toContainEqual({ word: 'e', corner: 2 });
    expect(_choices).toContainEqual({ word: 'e', corner: 3 });
    expect(_choices).toContainEqual(B_PARTS2[0]);
    expect(_choices).toContainEqual(B_PARTS2[1]);
    expect(_choices).toContainEqual(B_PARTS2[2]);
    expect(_choices).toContainEqual(B_PARTS2[3]);
    expect(_choices).not.toContainEqual(moveImagePart);
    expect(_words).toStrictEqual(['b', 'c', 'd', 'e']);
    expect(_wordParts).toStrictEqual([[], [], [], []]);
  });
});
