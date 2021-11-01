import React from 'react'
import FeedsContainer from '../../containers/FeedsContainer'
import FeedsUI from './FeedsUI'
function Index(props) {
    return (
        <FeedsContainer {...props}>
            <FeedsUI/>
        </FeedsContainer>
    )
}

export default Index
