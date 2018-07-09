import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/actions'


class ApplicationPage extends React.Component {
    constructor(props) {
        super(props);


    }


    render() {
       
        return (
            <div>
                <h1>Sup..?</h1>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return { "Data": state };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(Actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationPage);