import React from 'react';
import { Link } from 'react-router-dom';

import { style as PageStyle } from './style';

const Menu = () => (
    <div
        className={PageStyle}
    >
        <Link
            to="/engineer"
        >
            Engineer
        </Link>
        <Link
            to="/mentor"
        >
            Mentor
        </Link>
        <Link
            to="/writer"
        >
            Writer
        </Link>
    </div>
);

export default Menu;