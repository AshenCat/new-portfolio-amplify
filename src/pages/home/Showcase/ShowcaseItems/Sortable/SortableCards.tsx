import React, { useState } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import Column from './Column';
import InView from '../../../../../components/InView/InView';
// import Column from './Column';

function Board() {
    const [board, setBoard] = useState<Board>(BoardData);

    const handleOnDragEnd = (result: DropResult) => {
        const { destination, source, type } = result;

        if (!destination) return;

        //Handle
        if (type === 'column') {
            const entries = Array.from(board.columns.entries());
            const [removed] = entries.splice(source.index, 1);
            entries.splice(destination.index, 0, removed);
            const rearangedColumns = new Map(entries);
            setBoard({
                ...board,
                columns: rearangedColumns,
            });
            return;
        }

        const columns = Array.from(board.columns);
        const startColIndex = columns[Number(source.droppableId)];
        const finishColIndex = columns[Number(destination.droppableId)];

        const startCol: ColumnType = {
            id: startColIndex[0],
            todos: startColIndex[1].todos,
        };

        const finishCol: ColumnType = {
            id: finishColIndex[0],
            todos: finishColIndex[1].todos,
        };

        if (!startCol || !finishCol) return;
        if (source.index === destination.index && startCol === finishCol)
            return;

        const startColNewTodos = startCol.todos;
        const [todoMoved] = startColNewTodos.splice(source.index, 1);

        if (startCol.id === finishCol.id) {
            // same column task drag
            startColNewTodos.splice(destination.index, 0, todoMoved);
            const newCol = {
                id: startCol.id,
                todos: startColNewTodos,
            };
            const newColumns = new Map(board.columns);
            newColumns.set(startCol.id, newCol);

            setBoard({ ...board, columns: newColumns });
        } else {
            //drag to different column
            const finishTodos = Array.from(finishCol.todos);
            finishTodos.splice(destination.index, 0, todoMoved);

            const newColumns = new Map(board.columns);
            const newCol = {
                id: startCol.id,
                todos: startColNewTodos,
            };

            newColumns.set(startCol.id, newCol);
            newColumns.set(finishCol.id, {
                id: finishCol.id,
                todos: finishTodos,
            });

            // update db

            setBoard({ ...board, columns: newColumns });
        }
    };

    return (
        <section className="mt-8">
            <div className='dark-color mb-4'>
                Here&apos;s what I am up to. Why dont you help me sort my priorities a bit:
            </div>
            <InView>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable
                        droppableId="board"
                        direction="horizontal"
                        type="column"
                    >
                        {(provided) => {
                            return (
                                <div
                                    className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {Array.from(board.columns.entries()).map(
                                        ([id, column], index) => (
                                            <Column
                                                key={id}
                                                id={id}
                                                todos={column.todos}
                                                index={index}
                                                board={board}
                                                setBoard={setBoard}
                                            />
                                        )
                                    )}
                                </div>
                            );
                        }}
                    </Droppable>
                </DragDropContext>
            </InView>
        </section>
    );
}

const BoardData: Board = {
    columns: new Map<TypedColumn, ColumnType>([
        [
            'todo',
            {
                id: 'todo',
                todos: [
                    {
                        id: '1',
                        title: 'Explore the wonders of the world',
                        status: 'todo',
                    },
                    {
                        id: '2',
                        title: 'Check for latest web technology updates',
                        status: 'todo',
                    },
                ],
            },
        ],
        [
            'in-progress',
            {
                id: 'in-progress',
                todos: [
                    {
                        id: '3',
                        title: 'Live life to the fullest',
                        status: 'todo',
                    },
                    {
                        id: '4',
                        title: 'Daily coding grind',
                        status: 'in-progress',
                    },
                    {
                        id: '5',
                        title: 'Learn new skills',
                        status: 'in-progress',
                    },
                ],
            },
        ],
        [
            'done',
            {
                id: 'done',
                todos: [
                    {
                        id: '6',
                        title: 'Take a good sip of coffee',
                        status: 'done',
                    },
                    {
                        id: '7',
                        title: 'Update this web portfolio',
                        status: 'done',
                    },
                ],
            },
        ],
    ]),
};

export interface Board {
    columns: Map<TypedColumn, ColumnType>;
}

export type TypedColumn = 'todo' | 'in-progress' | 'done';

export type ColumnType = {
    id: TypedColumn;
    todos: Todo[];
};

export type Todo = {
    id: string;
    title: string;
    status: TypedColumn;
};

export default Board;
