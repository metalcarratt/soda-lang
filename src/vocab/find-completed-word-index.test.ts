import { describe, test, expect } from 'vitest';
import { findCompletedWordIndex, type WordPart } from './use-vocab';

const words = ['a', 'b', 'c', 'd'];

describe('findCompletedWordIndex', () => {
  test('word parts empty - not found', () => {
    const wordParts: WordPart[] = [[], [], [], []];
    const index = findCompletedWordIndex(wordParts, words);

    expect(index).toBe(-1);
  });

  test('completed word but wrong word - not found', () => {
    const wordParts: WordPart[] = [
      [
        { word: 'b', corner: 0 },
        { word: 'b', corner: 1 },
        { word: 'b', corner: 2 },
        { word: 'b', corner: 3 },
      ],
      [],
      [],
      [],
    ];
    const index = findCompletedWordIndex(wordParts, words);

    expect(index).toBe(-1);
  });

  test('completed word but wrong corners - not found', () => {
    const wordParts: WordPart[] = [
      [
        { word: 'a', corner: 1 },
        { word: 'a', corner: 2 },
        { word: 'a', corner: 3 },
        { word: 'a', corner: 0 },
      ],
      [],
      [],
      [],
    ];
    const index = findCompletedWordIndex(wordParts, words);

    expect(index).toBe(-1);
  });

  test('partial word - not found', () => {
    const wordParts: WordPart[] = [
      [
        { word: 'a', corner: 0 },
        { word: 'a', corner: 1 },
      ],
      [],
      [],
      [],
    ];
    const index = findCompletedWordIndex(wordParts, words);

    expect(index).toBe(-1);
  });

  test('correct word - found', () => {
    const wordParts: WordPart[] = [
      [
        { word: 'a', corner: 0 },
        { word: 'a', corner: 1 },
        { word: 'a', corner: 2 },
        { word: 'a', corner: 3 },
      ],
      [],
      [],
      [],
    ];
    const index = findCompletedWordIndex(wordParts, words);

    expect(index).toBe(0);
  });

  test('correct word at 3rd index - found', () => {
    const wordParts: WordPart[] = [
      [],
      [],
      [],
      [
        { word: 'd', corner: 0 },
        { word: 'd', corner: 1 },
        { word: 'd', corner: 2 },
        { word: 'd', corner: 3 },
      ],
    ];
    const index = findCompletedWordIndex(wordParts, words);

    expect(index).toBe(3);
  });

  test('correct word when more than four words - found', () => {
    const wordParts: WordPart[] = [
      [
        { word: 'a', corner: 0 },
        { word: 'a', corner: 1 },
        { word: 'a', corner: 2 },
        { word: 'a', corner: 3 },
      ],
      [],
      [],
      [],
      [],
      [],
    ];
    const index = findCompletedWordIndex(wordParts, [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
    ]);

    expect(index).toBe(0);
  });

  test('correct word when less than four words - found', () => {
    const wordParts: WordPart[] = [
      [
        { word: 'a', corner: 0 },
        { word: 'a', corner: 1 },
        { word: 'a', corner: 2 },
        { word: 'a', corner: 3 },
      ],
      [],
    ];
    const index = findCompletedWordIndex(wordParts, ['a', 'b']);

    expect(index).toBe(0);
  });

  test('correct word not in the first four words - not found', () => {
    const wordParts: WordPart[] = [
      [],
      [],
      [],
      [],
      [
        { word: 'e', corner: 0 },
        { word: 'e', corner: 1 },
        { word: 'e', corner: 2 },
        { word: 'e', corner: 3 },
      ],
      [],
    ];
    const index = findCompletedWordIndex(wordParts, [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
    ]);

    expect(index).toBe(-1);
  });
});
