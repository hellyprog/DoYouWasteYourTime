import React from 'react'
import { 
  Link
} from 'react-router-dom'
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="home-link">Do You Waste Your Time?</Link>
      </div>
    );
  }
}

export default Header;