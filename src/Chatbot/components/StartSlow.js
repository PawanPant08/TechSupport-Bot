import React from 'react';

export default function IssueSelector(props) {
    const selectIssueType = (issueType) => {
        const { name } = props.state.userData;
        props.state.userData.issueType = issueType;
        props.actions.getSolution(name, issueType);
    };

    return (
        <div>
            <button className='start-btn' onClick={() => selectIssueType("software")}>
                🖥️ Software Issue
            </button>
            <button className='start-btn slow-btn' onClick={() => selectIssueType("hardware")}>
                🔧 Hardware Issue
            </button>
        </div>
    );
}
