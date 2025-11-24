import './vocab-page.scss';
import { ChoiceImage } from "./choice-image";
import { Word } from "./word";
import { useVocab } from "./use-vocab";
import { useDataContext } from '../data/use-data-context';

export type ImagePart = {
  word: string;
  corner: number; // 0 = top-left, 1 = top-right, 2 = bottom-left, 3 = bottom-right
}

export const VocabPage = () => {
  const { vocab } = useDataContext();
  if (!vocab) return <></>;

  const { doWordDrop, setDragFromChoices, setDragFromImagePart, availableWords, wordParts, availableChoices, startAgain, dragItem } = useVocab(vocab);

  return (
    <div className="vocabPage">
      <h1>Study Vocabulary</h1>
      <p>Drag the puzzle pieces onto the correct word to form the picture.</p>
      <div className="words">
        {availableWords.map((word, wordIndex) =>
          <Word
            key={`${wordIndex}${word}`}
            word={word}
            imageParts={wordParts[wordIndex]}
            dragFrom={(fromImagePart: ImagePart, newDragItem: ImagePart) => setDragFromImagePart(fromImagePart, wordIndex, newDragItem)}
            doWordDrop={(newImagePart: ImagePart, corner: number) => 
              doWordDrop(wordIndex, newImagePart, corner)}
            dragItem={dragItem}
          />
        )}
        {availableWords.length === 0 && <button onClick={startAgain}>Start again</button>}
      </div>
      <Choices availableChoices={availableChoices} setDragFromChoices={setDragFromChoices} dragItem={dragItem} />
    </div>
  )
}

const Choices = ({availableChoices, setDragFromChoices, dragItem}: {availableChoices: ImagePart[], setDragFromChoices: (dragItem: ImagePart) => void, dragItem?: ImagePart}) => {
  // console.log('reload Choices component');
  return (
    <div className="choices">
        {availableChoices.map((choice, choiceIndex) => 
          <ChoiceImage
            key={`${choiceIndex}${choice.word}${choice.corner}`}
            imagePart={choice}
            dragFrom={setDragFromChoices}
            dragItem={dragItem}
          />)}
      </div>
  );
}

export const imageClassForCorner = (corner: number) => {
  return corner === 0 ? 'topLeft' : corner === 1 ? 'topRight' : corner === 2 ? 'bottomLeft' : 'bottomRight';
}