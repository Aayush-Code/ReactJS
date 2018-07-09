import { createStore } from 'redux';
import Reducer from '../reducers/reducer'

export default function configureStore(initialState) {
    return createStore(
        Reducer,
        initialState
    );
}