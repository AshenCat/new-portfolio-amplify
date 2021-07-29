import React, { useEffect } from 'react';
import HomePage from './pages/home/Home';
import './index.scss';

import { BrowserRouter, Route, RouteComponentProps } from 'react-router-dom';
import Blog from './pages/blog/Blog';

const App: React.FunctionComponent<any> = () => {
    useEffect(()=> {

    })
    return <>
        <div>
            <BrowserRouter>
                <Route 
                    path='/'
                    exact={true}
                    render={(props: RouteComponentProps<any>) => (
                        <HomePage {...props} name={'HomePage'}
                        />)}
                    />
                <Route
                    path='/blog'
                    exact={true}
                    render={(props: RouteComponentProps<any>) => (
                        <Blog {...props} name={'BlogPage'} />
                    )} />
            </BrowserRouter>
        </div>
    </>
}

export default App