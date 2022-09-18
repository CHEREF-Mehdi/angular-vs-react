import { Component } from 'react';
import './styles.css';

interface IHeader {
  toggleFooter: () => void;
}

export default class Header extends Component<IHeader> {
  render() {
    return (
      <div className='bgcolorgree jumbotron jumbotron-fluid'>
        <div className='container row'>
          <div className='col-md-8'>
            <h1 className='display-4'>TO DO LIST</h1>
          </div>
          <div className='col-md-4'>
            <p>
              <button
                className='btn btn-primary'
                onClick={this.props.toggleFooter}
              >
                Toggle Footer
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
