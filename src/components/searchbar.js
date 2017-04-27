import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../actions/index';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchCities(this.state.term);
    this.setState({
      term: ''
    });
  }

  render() {

    return (
      <div>
        <form
          className='input-group'
          onSubmit={this.onFormSubmit}>
          <input
            placeholder='Search for a city'
            className='form-control'
            value={this.state.term}
            onChange={this.onInputChange}/>
          <span className='input-group-btn'>
            <button
              className='btn btn-secondary'
              type='submit'>
              Search
            </button>
          </span>
        </form>

        {this.props.error &&
            <div className='alert alert-danger'>City doesn't exist</div>}

      </div>
    )
  }
}

function mapStateToProps({ error }) {
  return { error };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCities }, dispatch);
}

export default connect(mapStateToProps, { fetchCities })(SearchBar);
