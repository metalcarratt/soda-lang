import yaml from 'js-yaml';
import { useEffect, useState } from 'react';

type BaseWordType = {
  word: string;
  meaning: string;
  image: string;
};

type MappedWordsType = Record<string, BaseWordType>;

const wordsRoot = `${import.meta.env.BASE_URL}/words`;

export const useWords = () => {
  const [mappedWords, setMappedWords] = useState<MappedWordsType>({});
  const [mappedParticiples, setMappedParticiples] = useState<MappedWordsType>(
    {}
  );

  useEffect(() => {
    (async () => {
      const res = await fetch(`${wordsRoot}/words.yml`);
      const text = await res.text();
      const words = yaml.load(text) as BaseWordType[];

      const tempMappedWords: MappedWordsType = {};
      for (const word of words) {
        tempMappedWords[word.word] = word;
      }
      setMappedWords(tempMappedWords);

      const res2 = await fetch(`${wordsRoot}/participles.yml`);
      const text2 = await res2.text();
      const participles = yaml.load(text2) as BaseWordType[];

      const tempMappedParticiples: MappedWordsType = {};
      for (const participle of participles) {
        tempMappedParticiples[participle.word] = participle;
      }
      setMappedParticiples(tempMappedParticiples);
    })();
  }, []);

  const findWord = (searchWord: string) => {
    return mappedWords[searchWord];
  };

  const findParticiple = (searchParticiple: string) => {
    return mappedParticiples[searchParticiple];
  };

  return { findWord, findParticiple };
};

export type UseWordsType = ReturnType<typeof useWords>;
