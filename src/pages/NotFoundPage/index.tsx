import React from 'react';
import { Link } from 'react-router-dom';

import notFoundImage from '../../assets/images/not-found.svg';
import './index.scss';

const NotFoundPage: React.FC = () => {
  return (
    <div className="notfound-page">
      <div className="vertical-space" style={{ textAlign: 'center', margin: '20px 0' }}>
        <img src={notFoundImage} alt="Not found" className="image" />
        <strong>Oops! The page you are looking for does not exist.</strong>
        <div style={{ marginTop: '20px' }}>
          <Link to="/" className="primary-button">Back to home</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage; 