import './transcript.scss';
import { wordList } from "../lesson/word-list";
import { useDataContext } from '../data/use-data-context';

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

  const tokens = (line.match(/[\p{N}]*[\p{L}]+|[^\p{L}\p{N}\s|]+|[\s]/gu) || [])
    .filter(t => t !== "|")
    


  console.log('tokens', tokens);


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
  const w = wordList[word];
  return <span className="transcriptWord">
    {word}
    <span className="tooltip">
      {w?.en ?? 'Unknown'}
      {w?.breakdown && <ul>
        {w.breakdown.map(item => <li>{item[0]} - {item[1]}</li>)}
        </ul>}
      {w?.note && <p><b>Note:</b> {w?.note}</p>}
    </span>
  </span>
}