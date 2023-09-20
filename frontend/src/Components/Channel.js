import React from 'react'

function Channel ({talent}) {
  const { url } = talent;
  
 const handleClick = (event) => {
    event.preventDefault();
    window.open(url, "_blank");
  };

  

return (
<div>
      <button onClick={handleClick}>
        Kunjungi
      </button>
</div>
  );
}

export default Channel;