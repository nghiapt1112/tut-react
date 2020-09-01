import React from 'react';
import ReactDOM from 'react-dom';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import {ThemeProvider} from '@material-ui/core/styles';
// import theme from './theme';
import App from './App';
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <App/>
        </Router>
    </React.StrictMode>,

    // <ThemeProvider theme={theme}>
    //     {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    //     <CssBaseline/>
    //
    // </ThemeProvider>,
    document.querySelector('#root'),
);
