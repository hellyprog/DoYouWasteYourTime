import React from 'react'
import { 
  Link
} from 'react-router-dom'
import './Header.scss';

class Header extends React.Component {
  constructor() {
    super();

    this.openMenu = this.openMenu.bind(this);
  }

  render() {
    return (
      <div className="header">
        <Link to="/" className="home-link">Do You Waste Your Time?</Link>
        <button className="menu-button" onClick={this.openMenu}>Menu</button>
      </div>
    );
  }

  openMenu() {
    document.getElementById("menu-div").style.width = "100%";
    document.body.style.overflow = "hidden";
  }
}

export default Header;