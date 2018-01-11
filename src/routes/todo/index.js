import React from 'react';
import FooterTodo from '../../components/FooterTodo';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';
import Layout from '../../components/Layout';

const title = 'TO DO';

function action() {
  return {
    chunks: ['todo'],
    title,
    component: (
      <Layout>
        <AddTodo />
        <VisibleTodoList />
        <FooterTodo />
      </Layout>
    ),
  };
}
export default action;
