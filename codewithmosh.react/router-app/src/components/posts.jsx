import React, { Component } from 'react';
import { useParams, useLocation, useSearchParams, useMatch /*, useMatches */ } from 'react-router-dom';

class Posts extends Component {
    render() { 
        const { year, month } = this.props;
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
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // match is null if the current URL doesn't match this pattern
  const match = useMatch('/posts/:year?/:month?');

  // If you switch to the data router (createBrowserRouter), you can use:
  // const matches = useMatches(); // array of matched routes with params/route info

  console.log({
    params: { year, month },
    pathname: location.pathname,
    search: location.search,
    hash: location.hash,
    state: location.state,
    query: Object.fromEntries(searchParams),
    match: match && {
      params: match.params,
      pathname: match.pathname,
      pathnameBase: match.pathnameBase,
      pattern: match.pattern.path
    },
    // matches // uncomment when using data router
  });

  return <Posts year={year} month={month} />;
}

export default PostsWrapper;