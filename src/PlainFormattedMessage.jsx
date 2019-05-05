import React from 'react';
import { FormattedMessage } from 'react-intl'

const PlainFormattedMessage = (props) => 
    <FormattedMessage {...props}>
        {(message) => message }
    </FormattedMessage>

export default PlainFormattedMessage