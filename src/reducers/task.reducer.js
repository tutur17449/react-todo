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
            tasks: [...state.taks, action.playload]
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