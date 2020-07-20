export default function postsReducer(state, action) {
    switch (action.type) {
      case 'GET_TASKS':
        return {
            ...state,
            isLoading: false,
            tasks: action.playload
        }
      case 'ADD_TASK':
        return {
            ...state,
            isLoading: false,
            tasks: [...state.tasks, action.playload]
      }
      case 'DELETE_TASK':
        return {
            ...state,
            isLoading: false,
            tasks: state.tasks.filter(task => task.id !== action.playload)
      }
      case 'UPDATE_TASK':
        const tasksData = [...state.tasks]
        tasksData[tasksData.indexOf(action.playload.oldTask, 0)] = action.playload.newTask 
        return {
            ...state,
            isLoading: false,
            tasks: tasksData
      }
      case 'ERROR':
        return {
            ...state,
            error: action.playload
        }
      default:
        throw new Error();
    }
  }