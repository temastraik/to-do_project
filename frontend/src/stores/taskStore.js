import { defineStore } from 'pinia'
import axios from 'axios'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
    loading: false,
    error: null
  }),
  
  actions: {
    // Получение всех задач
    async fetchTasks() {
      this.loading = true
      try {
        const response = await axios.get('/api/tasks')
        this.tasks = response.data
        this.error = null
      } catch (err) {
        this.error = err.response?.data?.message || 'Ошибка при загрузке задач'
      } finally {
        this.loading = false
      }
    },

    // Получение конкретной задачи по ID
    async fetchTask(id) {
      this.loading = true
      try {
        const response = await axios.get(`/api/tasks/${id}`)
        this.error = null
        return response.data
      } catch (err) {
        this.error = err.response?.data?.message || 'Ошибка при загрузке задачи'
        throw err
      } finally {
        this.loading = false
      }
    },
    
    // Создание новой задачи
    async createTask(taskData) {
      this.loading = true
      try {
        const response = await axios.post('/api/tasks', taskData)
        this.tasks.push(response.data)
        this.error = null
        return response.data
      } catch (err) {
        this.error = err.response?.data?.message || 'Ошибка при создании задачи'
        throw err
      } finally {
        this.loading = false
      }
    },
    
    // Обновление задачи
    async updateTask(id, taskData) {
      this.loading = true
      try {
        const response = await axios.put(`/api/tasks/${id}`, taskData)
        const index = this.tasks.findIndex(task => task.id === id)
        if (index !== -1) {
          this.tasks[index] = response.data
        }
        this.error = null
        return response.data
      } catch (err) {
        this.error = err.response?.data?.message || 'Ошибка при обновлении задачи'
        throw err
      } finally {
        this.loading = false
      }
    },
    
    // Удаление задачи
    async deleteTask(id) {
      this.loading = true
      try {
        await axios.delete(`/api/tasks/${id}`)
        this.tasks = this.tasks.filter(task => task.id !== id)
        this.error = null
      } catch (err) {
        this.error = err.response?.data?.message || 'Ошибка при удалении задачи'
        throw err
      } finally {
        this.loading = false
      }
    }
  }
})