import React from 'react';
import {
    DraggableProvidedDragHandleProps,
    DraggableProvidedDraggableProps,
} from 'react-beautiful-dnd';
import { Board, ColumnType, Todo, TypedColumn } from './SortableCards';
import { IoClose } from 'react-icons/io5';

type Props = {
    todo: Todo;
    index: number;
    id: TypedColumn;
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
    board: Board;
    setBoard: React.Dispatch<React.SetStateAction<Board>>;
};

function TodoCard({
    todo,
    index,
    // id,
    innerRef,
    draggableProps,
    dragHandleProps,
    board,
    setBoard,
}: Props) {
    const onDeleteClick = (id: string) => {
        const columns = Array.from(board.columns);
        console.log(id);

        const currCol = columns[index];

        const newCol: ColumnType = {
            id: currCol[0],
            todos: [...currCol[1].todos.filter((todo) => todo.id !== id)],
        };
        const newBoard = new Map(board.columns);

        newBoard.set(currCol[0], newCol);

        setBoard({ columns: newBoard });
    };
    return (
        <div
            className="bg-white rounded space-y-2 drop-shadow"
            {...draggableProps}
            {...dragHandleProps}
            ref={innerRef}
        >
            <div className="flex justify-between items-center p-5">
                <p className="flex-1 pr-2">{todo.title}</p>
                <button
                    className="text-red-500 hover:text-red-600 p-2 border-2 border-white hover:border-red-600 transition-all"
                    onClick={() => onDeleteClick(todo.id)}
                >
                    <IoClose className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
}

export default TodoCard;
