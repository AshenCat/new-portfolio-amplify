import React, { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import TodoCard from './TodoCard';
import { Board, ColumnType, Todo, TypedColumn } from './SortableCards';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

type Props = {
    id: TypedColumn;
    todos: Todo[];
    index: number;
    board: Board;
    setBoard: React.Dispatch<React.SetStateAction<Board>>;
};

const idToColumnText: {
    [key in TypedColumn]: string;
} = {
    todo: 'To Do',
    'in-progress': 'In Progress',
    done: 'Done',
};

function Column({ id, todos, index, board, setBoard }: Props) {
    const [openCreate, setOpenCreate] = useState(false);
    const [newTitle, setNewTitle] = useState('');

    const onSaveClick = () => {
        const columns = Array.from(board.columns);
        // console.log(columns[index]);

        const currCol = columns[index];

        const newCol: ColumnType = {
            id: currCol[0],
            todos: [
                ...currCol[1].todos,
                { id: uuidv4(), title: newTitle, status: currCol[0] },
            ],
        };
        const newBoard = new Map(board.columns);

        newBoard.set(currCol[0], newCol);

        setBoard({ columns: newBoard });
        setNewTitle('');
        setOpenCreate(false);
    };

    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Droppable droppableId={index.toString()} type="card">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={`p-2 rounded shadow-sm ${
                                    snapshot.isDraggingOver
                                        ? 'bg-green-200'
                                        : 'bg-white/50'
                                }`}
                            >
                                <h2 className="flex justify-between font-bold text-xl">
                                    <span className="gradient-text-1">
                                        {idToColumnText[id]}
                                    </span>
                                    <span className="text-gray-500 bg-gray-200 rounded font-normal px-2 py-1 text-sm">
                                        {todos.length}
                                    </span>
                                </h2>

                                <div className="py-2 space-y-2">
                                    {todos.map((todo, index) => (
                                        <Draggable
                                            key={todo.id}
                                            draggableId={todo.id}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <TodoCard
                                                    board={board}
                                                    setBoard={setBoard}
                                                    todo={todo}
                                                    index={index}
                                                    id={id}
                                                    innerRef={provided.innerRef}
                                                    draggableProps={
                                                        provided.draggableProps
                                                    }
                                                    dragHandleProps={
                                                        provided.dragHandleProps
                                                    }
                                                />
                                            )}
                                        </Draggable>
                                    ))}

                                    {provided.placeholder}

                                    {openCreate && (
                                        <div className="bg-white rounded space-y-2 drop-shadow">
                                            <div className="flex grow justify-between items-center p-5">
                                                <input
                                                    type="text"
                                                    className="border-b-2 p-2 w-full max-w-[75%]"
                                                    value={newTitle}
                                                    onChange={(e) =>
                                                        setNewTitle(
                                                            e.target.value
                                                        )
                                                    }
                                                    onKeyDown={(event) => {
                                                        if (
                                                            event.key ==
                                                                'Enter' &&
                                                            newTitle.trim() !==
                                                                ''
                                                        ) {
                                                            onSaveClick();
                                                        }
                                                    }}
                                                />
                                                <button
                                                    className="enabled:hover:text-green-600 p-2 rounded"
                                                    disabled={
                                                        newTitle.trim() === ''
                                                    }
                                                    onClick={onSaveClick}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-end justify-end p-2">
                                        <button
                                            className={`flex items-center hover:text-${
                                                openCreate ? 'red' : 'green'
                                            }-600 transition p-2`}
                                            onClick={() =>
                                                setOpenCreate((prev) => !prev)
                                            }
                                        >
                                            <span className="mr-2">
                                                {openCreate
                                                    ? 'Cancel'
                                                    : 'Add Task'}
                                            </span>
                                            {openCreate ? (
                                                <FaMinus />
                                            ) : (
                                                <FaPlus />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
    );
}

export default Column;
