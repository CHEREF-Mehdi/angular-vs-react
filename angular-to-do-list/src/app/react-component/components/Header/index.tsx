import { css, cx } from '@emotion/css';
import * as React from 'react';

interface IHeaderProps {
  toggleFooter: () => void;
}

export const HeaderFC: React.FC<IHeaderProps> = ({ toggleFooter }) => {
  return (
    <div className={cx(styles.bgcolorgree, "jumbotron jumbotron-fluid")}>
      <div className='container row'>
        <div className='col-md-8'>
          <h1 className='display-4'>TO DO LIST</h1>
        </div>
        <div className='col-md-4'>
          <p>
            <button className='btn btn-primary' onClick={toggleFooter}>
              Toggle Footer
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  header: css`
    width: 70%;
    padding: 3%;
    background-color: green;
  `,
  bgcolorgree: css`
    background-color: yellowgreen;
  `,
};