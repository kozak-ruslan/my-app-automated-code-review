import { FC } from 'react';

import { ToDoList } from '../components/ToDoLists';

export const Home: FC = () => {
    return (
        <div className="home">
            <ToDoList initialItems={['Item 1', 'Item 2', 'Item 3']} />
        </div>
    );
};
