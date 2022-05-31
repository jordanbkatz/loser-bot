import React from 'react';
import { FaSadTear } from 'react-icons/fa';

export default function () {
    return (
        <div className="main main--static error">
            <div className="card">
                <div className="error-404">
                    4<FaSadTear className="icon" />4
                </div>
                <div className="description">Page Not Found</div>
            </div>
        </div>
    );
}