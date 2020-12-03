import Buttons from '../components/Button';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../modules/store';


const mapStateToProps = (state) => ({
    color: state.color,
    number: state.number
});

const mapDispatchToProps = (dispatch) => ({
    onInCreate: () => dispatch(actions.onCreate()),
    onDeRemove: () => dispatch(actions.onRemove())
});

const CreateCrwl = connect(
    mapStateToProps,
    mapDispatchToProps
)(Buttons);

export default CreateCrwl;