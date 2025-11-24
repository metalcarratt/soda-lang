import { vocabList } from "../lesson/vocab-list";
import { imageClassForCorner, type ImagePart } from "./vocab-page";

type WordProps = {
  word: string;
  imageParts: ImagePart[];
  dragFrom: (fromImagePart: ImagePart) => void;
  doWordDrop: (newImagePart: ImagePart, corner: number) => void
}

export const Word = ({word, imageParts, dragFrom, doWordDrop}: WordProps) => {

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
          />)}
      </div>
    </div>
  );
}

type DropZoneProps = {
  imagePart?: ImagePart;
  word: string;
  corner: number;
  dragFrom: (fromImagePart: ImagePart) => void;
  doDrop: (newImagePart: ImagePart, corner: number) => void;
}

const DropZone = ({imagePart, word, corner, dragFrom, doDrop}: DropZoneProps) => {

  const source = imagePart ? `${import.meta.env.BASE_URL}${vocabList[imagePart.word].image}` : undefined;

  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text');
    const newImagePart = JSON.parse(data) as ImagePart;
    console.log('Dropped:', newImagePart);
    doDrop(newImagePart, corner);
  };

  const drag = (e: React.DragEvent<HTMLImageElement>) => {
    e.dataTransfer.setData('text', JSON.stringify(imagePart));
    dragFrom({word, corner});
  };

  return (
    <div className="imgWrapper">
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