import dispatcher from "../dispatcher";
//import axios from 'axios';

export function createTodo(name) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    name,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

// export function reloadTodos() {
//   axios("https://api.citybik.es/v2/networks/bicing").then((data) => {
//   dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [data.data.network.id]});
//     console.log("got the data!", data.data.network.id);
//   })
// }
