import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

function ChatFeed(props) {
  const { chats, activeChat, username, messages } = props;

  const chat = chats && chats[activeChat];

  console.log(chat, username, messages);

  const fetchMessages = () => {
    const keys = Object.keys(messages);
    console.log(keys);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = username === message.sender.username;
      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            {isMyMessage ? <MyMessage /> : <TheirMessage />}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? '18px' : '0px',
              marginLeft: isMyMessage ? '0px' : '68px',
            }}
          >
            read-receipts
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <p>ChatFeed!</p>
    </div>
  );
}

export default ChatFeed;
