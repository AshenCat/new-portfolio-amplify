import React, { useEffect } from 'react';
import HomePage from './pages/Home';
import './index.scss';

import { BrowserRouter, Route, RouteComponentProps } from 'react-router-dom';

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
            </BrowserRouter>
        </div>
    </>
}

export default App