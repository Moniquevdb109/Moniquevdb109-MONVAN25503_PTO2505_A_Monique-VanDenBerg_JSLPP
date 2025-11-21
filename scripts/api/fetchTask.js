const API_URL = 'https://jsl-kanban-api.vercel.app/';

//Empty initial task array
let initialTasks;


export async function fetchInitialData() {
    //runs if the data is already fetched
    if (initialTasks) {
        return initialTasks;
    }

    // Fetching data from API and populate array
    try {
        const response = await fetch(API_URL);
        initialTasks = await response.json();
        return initialTasks;
    } catch (error) {
        console.error('API error:', error);
    }
}

// Empty array for holding all of the tasks in local storage
export const allTasks = [];