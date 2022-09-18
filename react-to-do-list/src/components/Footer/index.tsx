import { Component } from 'react';
import './styles.css';

interface IFooterProps {
  footerText: string;
}

export default class Footer extends Component<IFooterProps> {
  constructor(props: IFooterProps) {
    super(props);
    console.log("I'm from constructor()");
  }

  componentDidMount() {
    console.log("I'm from componentDidMount()");
  }

  getSnapshotBeforeUpdate() {
    console.log("I'm from getSnapshotBeforeUpdate()");
  }

  componentDidUpdate() {
    console.log("I'm from getSnapshotBeforeUpdate()");
  }

  componentWillUnmount() {
    console.log("I'm from componentWillUnmount()");
  }

  render() {
    return (
      <div className='footer'>
        <div className='row'>
          <div className='col-md-8'>
            <h1>{this.props.footerText}</h1>
          </div>
        </div>
      </div>
    );
  }
}
