import { vocabList } from "../lesson/vocab-list";
import { imageClassForCorner, type ImagePart } from "./vocab-page";

export const ChoiceImage = ({imagePart, dragFrom, dragItem}: {imagePart: ImagePart, dragFrom: (dragItem: ImagePart) => void, dragItem?: ImagePart}) => {

  const source = `${import.meta.env.BASE_URL}${vocabList[imagePart.word].image}`;

  const selected = dragItem?.word === imagePart.word && dragItem?.corner === imagePart.corner;

  const drag = () => {
    dragFrom(imagePart);
  };

  return (
    <div className={`imgWrapper ${selected ? 'selected' : ''}`}>
      <img 
        className={imageClassForCorner(imagePart.corner)}
        src={source}
        draggable
        onDragStart={drag}
        onClick={drag}
      />
    </div>
  )
}