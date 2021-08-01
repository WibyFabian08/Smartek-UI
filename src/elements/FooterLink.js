import React from 'react';
import {Link} from 'react-router-dom';

const FooterLink = ({path, label}) => {
    return (
        <Link className="text-gray-400 hover:underline mb-3 text-sm" to={path}>{label}</Link>
    )
}

export default FooterLink;