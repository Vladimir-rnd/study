<script src="./index.js"></script>
<template>
  <div class="app" id="app">
    <div class="header">
      <h1>Список дел</h1>
      <div class="add-todo">
        <input v-model="newTodo" placeholder="Задайте новую задачу" />
        <button @click="addTodo">Добавить</button>
        <div v-show="error" class="error">{{ error }}</div>
      </div>
      <div class="add-todo">
      <p><input type="text" v-model="title4filter" placeholder="Задайте маску" /></p>
      <button class="toggle" @click="unfiltTodo()">☺</button>
    </div>
    <div class="stats">
      <p>Выполнено: {{ completedTodo.length }} / {{ todoList.filter((t) => !t.completed).length }} осталось</p>
    </div>

    </div>

    <div class="todo-list">
      <div>
        <div class="todo-head">
          <h2>Невыполненные задачи</h2>
          <button class="toggle" @click="sortTodo(true)">↑</button>
          <button class="toggle" @click="sortTodo(false)">↓</button>
        </div>
        <ul>
          <li class="mainRow" v-for="(todo, index) in todoListFilt" :key="index">
            <span class="todoTitle" :class="{ completed: todo.completed }">{{ todo.title }}</span>
            <button @click="editTodo(index)">Редактировать</button>
            <button @click="deleteTodo(index)">Удалить</button>
            <button class="toggle" @click="toggleTodoComplete(index)">
              {{ todo.completed ? "◄" : "►" }}
            </button>
          </li>
        </ul>
      </div>
      <div class="completed-block">
        <h2>Выполненные задачи</h2>
        <ul>
          <li v-for="(todo, index) in completedTodo" :key="index">
            <span>{{ todo.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
