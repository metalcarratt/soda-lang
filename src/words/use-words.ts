import yaml from 'js-yaml';
import { useEffect, useState } from 'react';
import { EN_DU, EN_KR, EN_MA } from '../language/languages';

type BaseWordType = {
  word: string;
  meaning: string;
  alts?: string[];
  image?: string;
};

type MappedWordsType = Record<string, BaseWordType>;

const wordsRoot = `${import.meta.env.BASE_URL}/words`;

export const useWords = (lang?: string) => {
  const [mappedWords, setMappedWords] = useState<MappedWordsType>({});
  const [mappedParticiples, setMappedParticiples] = useState<MappedWordsType>(
    {}
  );

  useEffect(() => {
    const getVocabList = () => {
      console.log('get vocab list', lang);
      if (lang === EN_KR) {
        return `${wordsRoot}/words.yml`;
      }

      if (lang === EN_DU) {
        return `${wordsRoot}/du-words.yml`;
      }

      if (lang === EN_MA) {
        return `${wordsRoot}/ma-words.yml`;
      }

      return '';
    };

    (async () => {
      const res = await fetch(getVocabList());
      const text = await res.text();
      const words = yaml.load(text) as BaseWordType[];
      console.log('words', words);

      const tempMappedWords: MappedWordsType = {};
      for (const word of words) {
        tempMappedWords[word.word] = word;
        if (word.alts)
          for (const alt of word.alts) {
            tempMappedWords[alt] = word;
          }
      }
      setMappedWords(tempMappedWords);

      const res2 = await fetch(`${wordsRoot}/participles.yml`);
      const text2 = await res2.text();
      const participles = yaml.load(text2) as BaseWordType[];

      const tempMappedParticiples: MappedWordsType = {};
      for (const participle of participles) {
        tempMappedParticiples[participle.word] = participle;
        if (participle.alts)
          for (const alt of participle.alts) {
            tempMappedParticiples[alt] = participle;
          }
      }
      setMappedParticiples(tempMappedParticiples);
    })();
  }, [lang]);

  const findWord = (searchWord: string) => {
    // console.log('finding word', searchWord);
    return mappedWords[searchWord];
  };

  const findParticiple = (searchParticiple: string) => {
    // console.log('finding participle', searchParticiple);
    return mappedParticiples[searchParticiple];
  };

  return { findWord, findParticiple };
};

export type UseWordsType = ReturnType<typeof useWords>;
