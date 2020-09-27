import React from 'react'


const LikeButton = (props) => {
    return (
        <button id="counter">いいね数: {props.count}</button>
    )
}

export default LikeButton