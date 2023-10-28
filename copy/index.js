//import { filter } from "vue/types/umd";

export default {
    name: "App",
    data() {
        return {
            newTodo: "",
            error: "",
            todoList: [],
            index: null,
        };
    },
    methods: {
        addTodo() {
            if (!this.newTodo) {
                this.error = "Задача не может быть пустой!";
                return;
            }

            if (this.index === null) {
                this.todoList.push({
                    title: this.newTodo,
                    completed: false,
                });
            } else {
                this.todoList.splice(this.index, 1, {
                    title: this.newTodo,
                    completed: this.todoList[this.index].completed,
                });
                this.index = null;
            }

            this.newTodo = "";
            this.error = "";

            localStorage.setItem("todoList", JSON.stringify(this.todoList));
        },
        editTodo(index) {
            this.newTodo = this.todoList[index].title;
            this.index = index;

            localStorage.setItem("todoList", JSON.stringify(this.todoList));
        },
        deleteTodo(index) {
            // console.log("s "+localStorage.getItem("todoList").filter(title != "").length);
            this.todoList.splice(index, 1);
            localStorage.setItem("todoList", JSON.stringify(this.todoList));
            // console.log("e "+localStorage.getItem("todoList").filter(title != "").length);
        },
        toggleTodoComplete(index) {
            this.todoList[index].completed = !this.todoList[index].completed;
            localStorage.setItem("todoList", JSON.stringify(this.todoList));
        },

    },
    computed: {
        completedTodo() {
            return this.todoList.filter((Todo) => Todo.completed);
        },
    },
    mounted() {
          const storedTodo = localStorage.getItem("todoList");
          if (storedTodo) {
            this.todoList = JSON.parse(storedTodo);
          }
          else {
        
            fetch('https://jsonplaceholder.typicode.com/todos/?_limit=20')
            .then(response => response.json())
            .then((data) => (this.todoList = data))
        }

    },
};

