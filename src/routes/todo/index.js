import React from 'react'
import Footer_todo from '../../components/Footer_todo'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'
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
            <Footer_todo />
      </Layout>
    ),
  };
}
export default action;