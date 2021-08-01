import React from 'react';
import HomePage from './pages/home/Home';
import './index.scss';

import { Route, RouteComponentProps, Switch, useLocation } from 'react-router-dom';
import Blog from './pages/blog/Blog';
import Header from './pages/component/header/Header';
import Footer from './pages/component/footer/Footer';
import { AnimatePresence } from 'framer-motion';
import useWindowDimensions from './hooks/useWindowDimensions';

const App: React.FunctionComponent<any> = () => {

    const location = useLocation();

    
    const { width, height } = useWindowDimensions();
    
    return <>
        <Header height={height} />
        <AnimatePresence>
            <Switch location={location} key={location.key}>
                <Route 
                    path='/'
                    exact={true}
                    render={(props: RouteComponentProps<any>) => (
                        <HomePage {...props} name={'HomePage'} width={width}
                    />)}
                    />
                <Route
                    path='/blog'
                    exact={true}
                    render={(props: RouteComponentProps<any>) => (
                        <Blog {...props} name={'BlogPage'} />
                    )} />
                    
            </Switch>
        </AnimatePresence>
        <Footer name="footer" />
    </>
}

export default App