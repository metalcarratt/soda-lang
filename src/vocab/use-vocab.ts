import { useEffect, useState } from 'react';
import type { ImagePart } from './vocab-page';

export type WordPart = ImagePart[];
type DragFromDetail = { part: ImagePart; wordIndex: number } | 'choices';

export const useVocab = (vocab: string[]) => {
  const [words, setWords] = useState<string[]>([]);
  const [choices, setChoices] = useState<ImagePart[]>([]);

  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [availableChoices, setAvailableChoices] = useState<ImagePart[]>([]);

  const updateAvailableWords = (_words: string[]) => {
    setAvailableWords(_words.slice(0, 4));
  };

  const updateAvailableChoices = (_choices: ImagePart[]) => {
    // console.log('available choices updated');
    setAvailableChoices(_choices?.slice(0, 5));
  };

  const [wordParts, setWordParts] = useState<WordPart[]>([[], [], [], []]);
  const [dragFrom, setDragFrom] = useState<DragFromDetail>('choices');
  const [dragItem, setDragItem] = useState<ImagePart | undefined>();

  const init = () => {
    const _words = shuffle(vocab);

    const _choices = _words
      .slice(0, 4)
      .flatMap((word) => [0, 1, 2, 3].map((corner) => ({ word, corner })));
    setWords(_words);
    updateAvailableWords(_words);
    setChoices(shuffle(_choices));
    updateAvailableChoices(_choices);
    // console.log('set choices in useEffect', _choices.length);
  };

  useEffect(() => {
    init();
  }, []);

  const doWordDrop = (
    wordIndex: number,
    newImagePart: ImagePart,
    corner: number
  ) => {
    const { _choices, _words, _wordParts } = exchangeWords({
      wordIndex,
      newImagePart,
      corner,
      _choices: [...choices],
      _words: [...words],
      _wordParts: [...wordParts],
      dragFrom,
    });

    // update word parts
    setWords(_words);
    updateAvailableWords(_words);
    setWordParts(_wordParts);
    setChoices(_choices);
    updateAvailableChoices(_choices);
    setDragItem(undefined);
  };

  const setDragFromChoices = (newDragItem: ImagePart) => {
    setDragFrom('choices');
    setDragItem(newDragItem);
  };

  const setDragFromImagePart = (
    fromImagePart: ImagePart,
    wordIndex: number,
    newDragItem: ImagePart
  ) => {
    setDragFrom({ part: fromImagePart, wordIndex });
    setDragItem(newDragItem);
  };

  const startAgain = () => {
    init();
  };

  return {
    doWordDrop,
    setDragFromChoices,
    setDragFromImagePart,
    availableWords,
    wordParts,
    availableChoices,
    startAgain,
    dragItem,
  };
};

function shuffle<T>(array: T[]): T[] {
  const result = [...array]; // clone to avoid mutating original
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]]; // swap
  }
  return result;
}

export const findCompletedWordIndex = (
  wordParts: WordPart[],
  words: string[]
) => {
  return wordParts
    .slice(0, 4)
    .findIndex((word, wIndex) =>
      [0, 1, 2, 3].every(
        (cIndex) =>
          word[cIndex] &&
          word[cIndex].word === words[wIndex] &&
          word[cIndex].corner === cIndex
      )
    );
};

export const exchangeWords = ({
  wordIndex,
  newImagePart,
  corner,
  _choices,
  _words,
  _wordParts,
  dragFrom,
}: {
  wordIndex: number;
  newImagePart: ImagePart;
  corner: number;
  _choices: ImagePart[];
  _words: string[];
  _wordParts: WordPart[];
  dragFrom: DragFromDetail;
}) => {
  const oldImageParts = _wordParts[wordIndex];
  const oldPart = oldImageParts[corner];
  const newImageParts = [...oldImageParts];
  newImageParts[corner] = newImagePart;
  _wordParts[wordIndex] = newImageParts;

  // update the old location
  if (dragFrom === 'choices') {
    _choices = _choices.filter(
      (item) =>
        !(
          item.word === newImagePart.word && item.corner === newImagePart.corner
        )
    );
    if (oldPart) _choices.push(oldPart);
  } else {
    _wordParts[dragFrom.wordIndex][dragFrom.part.corner] = oldPart;
  }

  // check for completed words
  const completedWordIndex = findCompletedWordIndex(_wordParts, _words);
  if (completedWordIndex !== -1) {
    console.log(
      'completed a word',
      completedWordIndex,
      _words[completedWordIndex]
    );
    _words.splice(completedWordIndex, 1);
    _wordParts.splice(completedWordIndex, 1);
    _wordParts.push([]);

    if (_words[3]) {
      const newChoices = [0, 1, 2, 3].map((corner) => ({
        word: _words[3],
        corner,
      }));
      _choices.push(...newChoices);
      _choices = shuffle(_choices);
      // console.log('new choices', _choices);
    }
  }

  return { _choices, _words, _wordParts };
};
