import React, { Component } from 'react';
import '../App.css';
import TrashIcon from '../trash.svg';

class Trash extends Component {

  isVisible = () => {
    // console.log(this.props.trashStatus )
    if (this.props.trashStatus === true) {
      return <img onClick={this.addPoint} src={ TrashIcon } alt="Trash" className="trash"></img>
    }
  }

  addPoint = () => {
    this.props.onTrashClicked();
    console.log(this)
  }


  render() {

    return (
      <div className="bin">
      {this.isVisible()}

      </div>
    );
  }
}

export default Trash;
