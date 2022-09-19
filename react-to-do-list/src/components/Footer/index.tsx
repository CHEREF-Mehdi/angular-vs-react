import * as React from 'react';
import './styles.css';

interface IFooterProps {
  footerText: string;
}

export const FooterFC: React.FC<IFooterProps> = ({ footerText }) => {
  React.useEffect(() => {
    console.log('componentDidUpdate : Effect Runs on every render');
  });

  React.useEffect(() => {
    console.log('componentDidMount: Effect Runs only on the first render');
    return () => {
      console.log(
        'componentWillUnmount: Runs only when component will unmount'
      );
    };
  }, []);

  React.useEffect(() => {
    console.log(
      'Effect Runs on the first render And any dependency value changes'
    );
  }, [footerText]);

  return (
    <div className='footer'>
      <div className='row'>
        <div className='col-md-8'>
          <h1>{footerText}</h1>
        </div>
      </div>
    </div>
  );
};
