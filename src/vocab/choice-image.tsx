import { vocabList } from "../lesson/vocab-list";
import { imageClassForCorner, type ImagePart } from "./vocab-page";

export const ChoiceImage = ({imagePart, dragFrom}: {imagePart: ImagePart, dragFrom: () => void}) => {

  const source = `${import.meta.env.BASE_URL}${vocabList[imagePart.word].image}`;

  const drag = (e: React.DragEvent<HTMLImageElement>) => {
    e.dataTransfer.setData('text', JSON.stringify(imagePart));
    dragFrom();
  };

  return (
    <div className="imgWrapper">
      <img 
        className={imageClassForCorner(imagePart.corner)}
        src={source}
        draggable
        onDragStart={drag} 
      />
    </div>
  )
}