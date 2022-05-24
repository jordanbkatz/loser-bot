import React from 'react';
import { FaSadTear } from 'react-icons/fa';

function Error() {
    return (
        <div className="main main--static error">
            <div className="error__404">
                4<FaSadTear className="error__icon" />4
            </div>
            <div className="error__description">Page Not Found</div>
        </div>
    );
}

export default Error;