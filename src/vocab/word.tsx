import { vocabList } from "../lesson/vocab-list";
import { imageClassForCorner, type ImagePart } from "./vocab-page";

type WordProps = {
  word: string;
  imageParts: ImagePart[];
  dragFrom: (fromImagePart: ImagePart, dragItem: ImagePart) => void;
  doWordDrop: (newImagePart: ImagePart, corner: number) => void;
  dragItem?: ImagePart
}

export const Word = ({word, imageParts, dragFrom, doWordDrop, dragItem}: WordProps) => {

  const doDrop = (newImagePart: ImagePart, corner: number) => {
    doWordDrop(newImagePart, corner);
  }

  return (
    <div className="word">
      <div className="images">
        <label>{word}</label>
        {[0,1,2,3].map(corner => 
          <DropZone
            doDrop={doDrop}
            dragFrom={dragFrom}
            word={word}
            corner={corner}
            imagePart={imageParts[corner]}
            dragItem={dragItem}
          />)}
      </div>
    </div>
  );
}

type DropZoneProps = {
  imagePart?: ImagePart;
  word: string;
  corner: number;
  dragFrom: (fromImagePart: ImagePart, newImagePart: ImagePart) => void;
  doDrop: (newImagePart: ImagePart, corner: number) => void;
  dragItem?: ImagePart
}

const DropZone = ({imagePart, word, corner, dragFrom, doDrop, dragItem}: DropZoneProps) => {

  const source = imagePart ? `${import.meta.env.BASE_URL}${vocabList[imagePart.word].image}` : undefined;
  const selected = imagePart && dragItem && dragItem.word === imagePart.word && dragItem.corner === imagePart.corner;

  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const drop = () => {
    // e.preventDefault();
    console.log('Dropped:', dragItem);
    dragItem && doDrop(dragItem, corner);
  };

  const drag = () => {
    imagePart && dragFrom({word, corner}, imagePart);
  };

  return (
    <div className={`imgWrapper ${selected ? 'selected' : ''}`} onClick={() => dragItem ? drop() : drag()}>
      { imagePart
        ? <img
            onDrop={drop}
            onDragOver={allowDrop}
            src={source}
            className={imagePart ? imageClassForCorner(imagePart.corner) : ''}
            draggable
            onDragStart={drag}
          />
        : <div
          className="emptyImage" 
          onDrop={drop}
          onDragOver={allowDrop}
          draggable
          onDragStart={drag}
        />
      }
    </div>
  );
}