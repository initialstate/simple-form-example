#Simple HTML Form

This is a simple example of using an HTML form to submit data to a nodejs server app that then sends the data to Initial State.

The reason this app uses an intermediary nodejs server instead of submitting directly to Initial State is to give the implementer control over the exposure of his/her Initial State Access Key.

###To Run

`$ npm install`

`$ INITIALSTATE_ACCESS_KEY=YOURKEY PORT=3000 npm start`

Then navigate to `localhost:3000/temperature` and submit temperatures