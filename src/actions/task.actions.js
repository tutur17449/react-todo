import fetcher from '../tools/fetcher'

export const getTasks = async () => {
    const config = {
        method: 'GET',
    }

    const response = await fetcher(`https://jsonplaceholder.typicode.com/todos`, config)
    return response
}

export const addTask = async (data) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    const response = await fetcher(`https://jsonplaceholder.typicode.com/todos`, config)
    return response
}

export const updateTask = async (data) => {
    const config = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    const response = await fetcher(`https://jsonplaceholder.typicode.com/todos/${data.id}`, config)
    return response
}

export const deleteTask = async (id) => {
    const config = {
        method: 'DELETE',
    }

    const response = await fetcher(`https://jsonplaceholder.typicode.com/todos/${id}`, config)
    return response
}

