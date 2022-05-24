import React from 'react';

function Command({ data }) {
    return (
        <div className="command">
            <div className="command__top">
                <div className="command__name">{data.name}</div>
                {
                    data.admin && <div className="command__admin">Admin</div>
                }
            </div>
            <div className="command__description">{data.description}</div>
            <div className="command__usage">{data.usage}</div>
        </div>
    );
}

export default Command;