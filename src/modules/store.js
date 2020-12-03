import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

export const CREATE = 'CREATE';
export const REMOVE = 'REMOVE';

export const create = createAction(CREATE);
export const remove = createAction(REMOVE);

const initialState = Map({
    color: 'white',
    number : 0
});

export default handleActions({
    [CREATE]: (state, action) => {
        return Map({
            color: 'black',
            number: 0
        })
    },
    [REMOVE]: (state, action) => {
        return Map({
            color: 'green',
            number: 1
        })
    },
}, initialState);
