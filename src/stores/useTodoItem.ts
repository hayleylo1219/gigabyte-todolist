import { defineStore } from 'pinia'

interface TodoItem {
  uuid: string
  title: string | null
  imageUrl: string | null
  imageUploaded: string | null
  content: string | null
  startDate: string | null
  endDate: string | null
}

interface TodoItemState {
  todoItems: TodoItem[]; 
  activeItemUuid: string;
}

export const useTodoItemStore = defineStore('todo', {
  state: ():TodoItemState => ({
    todoItems: [{
      uuid: '1',
      title: '',
      imageUrl: null,
      imageUploaded: null,
      content: null,
      startDate: null,
      endDate: null,
    }],
    activeItemUuid: '1',
  }),
  getters: {
    getActiveItem: (state) => {
      return state.todoItems.filter(item => item.uuid === state.activeItemUuid)[0]
    },
    getTodoItems: (state) => {
      return state.todoItems
    },
  },
  actions: {
    addTodoitem(payload: TodoItem) {
      this.todoItems.push(payload)
    },
    updateTodoitem(payload: TodoItem) { 
      const index = this.todoItems.findIndex(item => item.uuid === payload.uuid)
      this.todoItems[index] = payload
    },
    updateActiveItemUuid(uuid: string) {
      this.activeItemUuid = uuid
    },
    deleteTodoitem(uuid: string) {    
      this.todoItems = this.todoItems.filter(item => item.uuid !== uuid)
    },
  },
})
