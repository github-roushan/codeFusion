import React, { Component } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

class Posts extends Component {
    render() { 
        const { year, month, params } = this.props;
        console.log(params);
        const {sortby, level} = params;
        console.log(sortby, level);
        return (
            <div>
                <h1>
                    All our posts here<br/>
                    Posts from: {year} and {month}
                </h1>
            </div>
        );
    }
}

function PostsWrapper() {
  const { year, month } = useParams();
  const [searchParams] = useSearchParams();
  const queryStrings =  Object.fromEntries(searchParams);

  return <Posts year={year} month={month} params={queryStrings} />;
}

export default PostsWrapper;