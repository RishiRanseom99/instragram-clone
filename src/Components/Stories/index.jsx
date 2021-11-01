import React from 'react'
import StoriesContainer from '../../containers/StoriesContainer'
import StoriesUI from './StoriesUI'
function index(props) {
    return (
        <StoriesContainer {...props}>
            <StoriesUI/>
        </StoriesContainer>
    )
}

export default index
