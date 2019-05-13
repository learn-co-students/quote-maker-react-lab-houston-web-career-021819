import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';

class QuoteForm extends Component {

  state = {
    content: "",
    author: ""
  }

  handleOnChange = e => {
    e.persist()
    this.setState({ [`${e.target.name}`]: e.target.value})
  }

  handleOnSubmit = e => {
    e.persist()
    e.preventDefault()
    this.props.addQuote({
      id: uuid(),
      content: this.state.content,
      author: this.state.author,
      votes: 0
    })

    this.setState({ content: "", author: "" })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        value={this.state.content}
                        name="content"
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        name="author"
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed

const mapDispatchToProps = dispatch => ({
  addQuote: payload => dispatch({ type: "ADD_QUOTE", payload })
})

export default connect(null, mapDispatchToProps)(QuoteForm);
