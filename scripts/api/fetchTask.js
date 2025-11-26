/**
 * The website link (URL) where we fetch the Kanban tasks from.
 * @type {string}
 */
const API_URL = 'https://jsl-kanban-api.vercel.app/';

/**
 * This will store the tasks after we fetch them the first time.
 * We keep it here so we don't fetch the same data again.
 * @type {Array<Object>|undefined}
 */
let initialTasks;

/**
 * Gets the starting tasks from the API.
 *
 * - If we already fetched the data before, it returns the saved version (cached data).
 * - If not, it fetches from the API and saves it in `initialTasks`.
 *
 * @async
 * @returns {Promise<Array<Object>|undefined>}
 * Returns an array of task objects.
 * If something goes wrong, it logs the error
 */
export async function fetchInitialData() {
    if (initialTasks) {
        return initialTasks;
    }

    try {
        const response = await fetch(API_URL);
        initialTasks = await response.json();
        return initialTasks;
    } catch (error) {
        console.error('API error:', error);
    }
}

/**
 * An array that can hold all tasks while the app is running.
 * Other files can add/remove tasks from this array.
 * @type {Array<Object>}
 */
export const allTasks = [];