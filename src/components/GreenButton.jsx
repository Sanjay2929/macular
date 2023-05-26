import React from 'react'

const GreenButton = (props) => {
  return (
    <>
      <button className="nav_button border-0 clr_white fw_600 fs_md ff_jakarta rounded-pill">
        {props.greenButton}
      </button>
    </>
  );
}

export default GreenButton