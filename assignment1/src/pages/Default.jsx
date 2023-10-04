import React from 'react'
import {Link} from "react-router-dom"
function Default() {
  return (
    <div>
      <Link to="/page/1">
        <div className="block rounded-lg py-2 px-4 bg-blue-500 text-center align-middle border font-sans text-white  text-bold hover:shadow-lg hover:shadow-pink-blue/40 focus:opacity-[0.85]">
          Go to Home
        </div>
      </Link>
    </div>
  );
}

export default Default