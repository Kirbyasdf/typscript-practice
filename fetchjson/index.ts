import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`id : ${id}, title : ${title}, status: ${completed})`);
};

try {
  const res = await axios.get<{ todo: Todo }>(url);
  const { todo } = res.data;
  const { id, title, completed } = todo as Todo;
  logTodo(id, title, completed);
} catch (err) {
  console.error(err);
}
