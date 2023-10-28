<script src="./index.js"> </script>
<template>
  <div class="app" id="app">
    <h1>Список дел</h1>
    <div class="add-todo">
      <input v-model="newTodo" placeholder="Задайте новую задачу" @keyup.enter="addTodo" />
      <button @click="addTodo">Добавить</button>
      <div v-show="error" class="error">{{ error }}</div>
    </div>

    <div class="todo-list">
      <h2>Невыполненные задачи</h2>
      <ul>
        <li v-for="(todo, index) in todoList" :key="index">
          <span :class="{ done: todo.completed }">{{ todo.title }}</span>
          <button @click="editTodo(index)">Редактировать</button>
          <button @click="deleteTodo(index)">Удалить</button>
          <button @click="toggleTodoComplete(index)">
            {{ todo.completed ? "◄" : "►"  }}
          </button>
        </li>
      </ul>

      <h2>Выполненные задачи</h2>
      <ul>
        <li v-for="(todo, index) in completedTodo" :key="index">
          <span>{{ todo.title }}</span>
        </li>
      </ul>
    </div>
    <div class="stats">
      <p>Выполнено: {{ completedTodo.length }} / {{ todoList.filter((t) => !t.completed).length }} осталось</p>
    </div>
  </div>
</template>



