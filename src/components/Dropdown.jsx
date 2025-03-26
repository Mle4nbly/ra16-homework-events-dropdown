import { useState } from "react"
import DropdownList from './DropdownList'

function Dropdown() {
  const [isOpen, toggleOpen] = useState(false);
  const items = ['Profile information', 'Change Password', 'Become PRO', 'Help', 'Log Out']

  const handleBtn = () => {
    toggleOpen(isOpen === true ? false : true)
  }

  return (
    <div className={`dropdown-wrapper ${isOpen === true ? "open" : ""}`}>
      <button 
        type="button" 
        className="btn"
        onClick={handleBtn}
      >
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      <DropdownList items={items} />
    </div>
  )
}

export default Dropdown