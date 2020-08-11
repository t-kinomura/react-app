import React from 'react';

class ViewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateText:　'',
    }
  }

  handleDelete = () => {
    this.props.onDelete(this.props.data.id);
  }

  handleUpdate = () => {
    this.props.onUpdate(this.props.date.id, this.state.updateText);
  }

  handleInput = (e) => {
    this.setState({updateText: e.target.value});
  }

  render() {
    return(
      <div>
        <span>{ this.props.data.product }</span>
        <span className="deleteButton" onClick={this.handleDelete}>X</span>
        <span>
          <input type="text" value={this.state.updateText} onChange={e => this.handleInput(e)} />
        </span>
        <span>
          <button type="text" onClick={this.handleUpdate}>更新！</button>
        </span>
      </div>
    )
  }
}

export default ViewProduct;