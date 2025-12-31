import './transcript.scss';
import { wordList, type WordType } from "../lesson/word-list";
import { useDataContext } from '../data/use-data-context';
import { useData } from '../data/use-data';
import type { UseWordsType } from '../words/use-words';

export const Transcript = () => {
  const {lesson} = useDataContext();

  return (
    <div className="transcriptPage">
      <h1>Transcript</h1>
      <p>Hover over or touch words to reveal their English meaning. Try to understand the meaning of the sentence.</p>
      <div className="transcript">
      {lesson?.transcript?.map(line => <><span className="speaker">{line.speaker}</span><TranscriptLine line={line.lines} /></>)}
      </div>
    </div>
  );
}

const TranscriptLine = ({line}: {line: string}) => {
  // const tokens = line.match(/[\p{N}]*[\p{L}]+|[^\p{L}\p{N}\s]+|\s+/gu) || [];
  // const tokens = line.match(/[\p{N}]*[\p{L}]+|[^\p{L}\p{N}\s|]+|[\s|]+/gu) || [];
  // const tokens = (line.match(/[\p{N}]*[\p{L}]+|[^\p{L}\p{N}\s|]+|[\s|]+/gu) || [])
  //   .filter(t => !/^[\s|]+$/.test(t));

  // const tokens = (line.match(/[\p{N}]*[\p{L}]+|[^\p{L}\p{N}\s|]+|[\s]/gu) || [])
  //   .filter(t => t !== "|")

  const tokens = (line.match(/[\p{L}\p{N}]+(?:[.:][\p{L}\p{N}]+)*|[^\p{L}\p{N}\s]|\s+/gu
) || [])
    .filter(t => t !== "|")
    


  // console.log('tokens', tokens);


  return (
    <div>
      {tokens.map((token, index) =>
        /\p{L}/u.test(token) ? (
          <Word key={index} word={token} />
        ) : / /.test(token) ? (
          <span className="transcriptSpace" />
        ) : (
          <span key={index}>{token}</span>
        )
      )}
    </div>
  );
}

const Word = ({ word }: {word: string}) => {
  const { words } = useData();
  const w = findWord(word, words);
  const displayWord = word.length > 1 ? word.replaceAll('.', '').replaceAll(':', '') : word;
  return <span className="transcriptWord">
    {displayWord}
    <span className="tooltip">
      {w?.en ?? 'Unknown'}
      {w?.breakdown && <ul>
        {w.breakdown.map(item => <li>{item[0]} - {item[1]}</li>)}
        </ul>}
      {w?.note && <p><b>Note:</b> {w?.note}</p>}
    </span>
  </span>
}

const findWord = (searchWord: string, words: UseWordsType) => {
  if (searchWord.includes(':')) {
    const parts = searchWord.split(':');
    return findVocabWord(parts[0], words);
  }

  if (searchWord.includes('.')) {
    const parts = searchWord.split('.');
    return findParticipleWord(parts[0], parts.slice(1), words);
  }

  const w = wordList[searchWord];
  if (w) {
    if (w.word) {
      if (w.participles) {
        return findParticipleWord(w.word, w.participles, words);
      }
      return findVocabWord(w.word, words);
    }
     return w;
  }

  return findVocabWord(searchWord, words);
}

const findVocabWord = (searchWord: string, words: UseWordsType): WordType | undefined => {
  const v = words.findWord(searchWord);
  
  if (v) {
    return {
      en: v.meaning
    };
  }
  return undefined;
}

const findParticipleWord = (searchWord: string, searchParticiples: string[], words: UseWordsType): WordType | undefined => {
  let en = '';
  const breakdown: [string, string][] = [];
  
  const v = words.findWord(searchWord);
  
  if (v) {
    breakdown.push([v.word, v.meaning]);
    en = v.meaning;

    for (const participle of searchParticiples) {
      const p = words.findParticiple(participle);
      if (p) {
        breakdown.push([p.word, p.meaning]);
      }
    }
  }


  return {
      en,
      breakdown
    };
}