import React from 'react';
import {FormattedMessage, defineMessages} from 'react-intl'
import PlainFormattedMessage from './PlainFormattedMessage'

const amessages = {
  procedureNameLabel: {
    id: "ExampleForm.ProcedureName.Label",
    defaultMessage: "Procedure Name",
    description: "Label text for the procedure name input text box on the Example form"
  },
  exampleFormSubmitProcedureButtonText: {
    id: "ExampleForm.SubmitProcedure.ButtonText",
    defaultMessage: "Submit procedure"
  }
}

const messages = defineMessages(amessages)

export default class ExampleForm extends React.Component {
  render = () => {
    return (
      <div className="register-form">
        <h1>Example</h1>
        <form>
          <div className="row">
            <label htmlFor="procedureName">
              <PlainFormattedMessage {...messages.procedureNameLabel} />
            </label>
            <input name="procedureName" type="text" />
          </div>
          <FormattedMessage {...messages.exampleFormSubmitProcedureButtonText}>
            {(message) => <input type="submit" value={message} />}
          </FormattedMessage>
        </form>
      </div>
    )
  }
}
