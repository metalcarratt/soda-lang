import { useData } from "../data/use-data";
import { imageClassForCorner, type ImagePart } from "./vocab-page";

export const ChoiceImage = ({imagePart, dragFrom, dragItem}: {imagePart: ImagePart, dragFrom: (dragItem: ImagePart) => void, dragItem?: ImagePart}) => {

  const { words } = useData();
  const word = imagePart ? words.findWord(imagePart.word) : undefined;
  const source = word ? `${import.meta.env.BASE_URL}${word.image}` : undefined;

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