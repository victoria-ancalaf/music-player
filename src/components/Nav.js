import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
   return (
      <nav>
         <h1>Music Player</h1>
         <button onClick={() => setLibraryStatus(!libraryStatus)}>
            Library
            <FontAwesomeIcon icon={faMusic} style={{ paddingLeft: "5px" }} />
         </button>
      </nav>
   );
};

export default Nav;
