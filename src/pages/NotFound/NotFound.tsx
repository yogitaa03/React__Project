import React, {FC} from "react";
import "./NotFound.css"

 const NotFound: FC = () =>{
    return(
        <div className="notFound">
            <h1 className="notFoundError">404 Error!!</h1>
            <h1 className="notFoundError">Page not found</h1>
        </div>
    )
}

export default NotFound