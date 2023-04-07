import React from 'react';
import { useSelector } from 'react-redux';
import R from 'ramda';

import Column from 'react-bulma-companion/lib/Column';
import Columns from 'react-bulma-companion/lib/Columns';
import Title from 'react-bulma-companion/lib/Title';

import Todo from '_components/molecules/Todo';

const filteredNotes = (todos, columnId) => {
  const allNotesInOrder = R.reverse(todos).map(todo => <Todo key={todo.id} columnAt={todo.columnAt} {...todo} />);
  const allNotesFilteredByColumn = allNotesInOrder.filter(todo => todo.props.columnAt === columnId);
  return allNotesFilteredByColumn;
};

export default function TodoList() {
  const { todos } = useSelector(R.pick(['todos']));

  return (
    <Columns>
      <Column size="3" offset="2" className="has-text-to-left" column-id="1">
        <Title>
          To do
        </Title>
        <ul className="todo-list">
          {filteredNotes(todos, '0')}
        </ul>
      </Column>
      <Column column-id="2">
        <Title>
          In Progress
        </Title>
        <ul className="todo-list">
          {filteredNotes(todos, '1')}
        </ul>
      </Column>
      <Column column-id="3">
        <Title>
          Complete
        </Title>
        <ul className="todo-list">
          {filteredNotes(todos, '2')}
        </ul>
      </Column>
    </Columns>
  );
}
