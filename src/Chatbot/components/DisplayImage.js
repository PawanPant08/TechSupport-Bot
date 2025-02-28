import React from 'react';

export default function DisplayImage(props) {
    const { solutionImage, solutionLink } = props.state.userData.solution;
    console.log(props.state.userData);

    return (
        <div className='img-component'>
            {solutionImage && (
                <div className='img-container'>
                    <img src={solutionImage} alt="Solution Guide" />
                </div>
            )}
            {solutionLink && (
                <a href={solutionLink} target='_blank' rel="noreferrer">View Solution</a>
            )}
        </div>
    );
}
