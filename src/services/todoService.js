import axios from 'axios';

class ToDoService {
  constructor() {
    this.toDos = axios.create({
      baseURL: 'http://localhost:4000/api/v1',
    })
  }

  createToDo(todo){
    const { title, body } = todo;
    return this.toDos.post('/todos', { title, body })
    .then(response => response);
  }

  getToDos(){
    return this.toDos.get('/todos')
    .then(response => response);
  }
  
  getToDo(id){
    return this.toDos.get(`/todos/${id}`)
    .then(response => response);
  }
  
  updateToDo(todo){
    console.log(todo);
    const id = todo._id;
    const {title, body} = todo
    return this.toDos.put(`/todos/${id}`, { title, body })
    .then(response => response);
  }
  
  deleteToDo(id){
    return this.toDos.delete(`/todos/${id}`)
    .then(response => response);
  }
}

const toDoService = new ToDoService();
export default toDoService;
  