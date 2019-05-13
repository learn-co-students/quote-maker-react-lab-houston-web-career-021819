import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(q => <QuoteCard {...q} deleteQuote={this.props.deleteQuote} upvote={this.props.upvote} downvote={this.props.downvote}/> )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  quotes: state.quotes.quotes
})

const mapDispatchToProps = dispatch => ({
  deleteQuote: payload => dispatch({ type: "DELETE_QUOTE", payload }),
  downvote: payload => dispatch({ type: "DOWNVOTE", payload }),
  upvote: payload => dispatch({ type: "UPVOTE", payload })
})

export default connect(mapStateToProps, mapDispatchToProps)(Quotes)
