import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

interface IDeletePlace {
  isDraggingFromthis: boolean;
  isDraggingOver: boolean;
}

const Trash = styled.div<IDeletePlace>`
  text-align: center;
  line-height: 50px;
  font-size: 1.5rem;
  border-radius: 50%;
  margin: 5rem auto 0 auto;
  position: fixed;
  left: 0;
  right: 0;
  width: 50px;
  height: 50px;
  top: 120px;
`;

function DeletePlace() {
  return (
    <Droppable droppableId="del">
      {(maigc, snapshot) => (
        <Trash
          isDraggingOver={snapshot.isDraggingOver}
          isDraggingFromthis={Boolean(snapshot.draggingFromThisWith)}
          ref={maigc.innerRef}
        >
          ❌{maigc.placeholder}
        </Trash>
      )}
    </Droppable>
  );
}

export default DeletePlace;
