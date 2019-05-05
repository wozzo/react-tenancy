import React from 'react';
import { IntlProvider } from 'react-intl'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import opTenantMessages from './messages/op-tenant.json'

const tenant = "op-tenants"
const getMessages = () => {
    if (tenant && tenant === "op-tenant")
        return opTenantMessages
    return {}
}

ReactDOM.render(
    <IntlProvider locale="en" messages={getMessages()}>
        <App />
    </IntlProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
