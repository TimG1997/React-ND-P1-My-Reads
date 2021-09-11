import React from 'react';
import {Link} from "react-router-dom";

class CloseSearchButton extends React.Component {
    render() {
        return (
            <Link to='/'>
                <button className="close-search">Close</button>
            </Link>
        )
    }
}

export default CloseSearchButton
