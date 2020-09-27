import React from 'react';
import Article from './Article';

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPublished: false,
            order: 1
        }
    }

    togglePublished = () => {
        this.setState({
            isPublished: !this.state.isPublished
        })
        this.setState({
            order: 2
        })
    };

    render() {
        return (
            <>
                <Article title="リタの記事" isPublished={this.state.isPublished} order={this.state.order} toggle={() => this.togglePublished}/>
            </>
        )
    }
}

export default Blog