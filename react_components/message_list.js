/**
 * Created by nigelnindo on 8/1/16.
 */

var React = require('React');
var moment = require('moment');

 export const MessageList = React.createClass({
  renderMessage(message){
    const sender = message.sentBy || dummyUser;

    return <div className="message flex flex-row">
      <img src={sender.avatar || PLACEHOLDER} alt={sender.email}/>
      <div className="message-wrapper">
        <p className="message-header">
          <span className="username font-600">{sender.email}</span>
          <span className="sent-date font-300">
            {moment(message.createdAt).format('MMM Do, hh:mm:ss')}
          </span>
        </p>
        <p className="message-content font-300">{message.text}</p>
      </div>
    </div>;
  },

  render(){
    return <main className="chat flex flex-column flex-1 clear">
      {this.props.messages.map(this.renderMessage)}
    </main>
  }
});


