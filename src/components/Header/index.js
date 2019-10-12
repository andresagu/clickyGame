import React from "react";

function Header({ children }){
  return(
    <header class="header">
    <h1>Clicky Game!</h1>
    {children}
    </header>
  );
}

export default Header;
