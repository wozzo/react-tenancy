import React from 'react';

export default class ExampleForm extends React.Component {
  render = () => {
    return (
      <div className="register-form">
        <h1>Example</h1>
        <form>
          <div class="row">
            <label htmlFor="procedureName">Procedure Name</label>
            <input name="procedureName" type="text" />
          </div>
          <input type="submit" value="Submit procedure" />
        </form>
      </div>
    )
  }
}
