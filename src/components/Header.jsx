import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="left-div">
        <h1>Musick</h1>
        
      </div>
      
      <div className="right-div">
      <input type="text" placeholder="Search..." />
        <button onClick={() => setIsOpen(!isOpen)}>☰</button>
        
        {isOpen && (
          <div>
            <ul>
              <li>Upgrade</li>
              <li>Profile</li>
              <li>Support</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
