import { combineReducers } from 'redux';
import darkModeReducer from './features/context/contextSlice';
import projectsReducer from './features/projects/projectsSlice';
import experiencesReducer from './features/experiences/experiencesSlice';


export const rootReducer = combineReducers({
    darkMode: darkModeReducer,
    projects: projectsReducer,
    experiences: experiencesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;