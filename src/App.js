import React from 'react';
import Buttons from './components/Button';
import CreateCrwl from './containers/CreateCrwl'
import { connect } from 'react-redux';
import * as actions from './modules/store';
const App = () => {
    return (
        <div className="App">
        <Buttons
            onCreate={onCreate}
            onRemove={onRemove}
            >
            </Buttons>

            <CreateCrwl></CreateCrwl>
            </div>
    );
}
const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create(color)),
    onRemove: () => dispatch(actions.remove(number))
});

export default connect(null, mapToDispatch)(App);