import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="efc0ad9a-1a89-4149-8461-dc45e9e24dcc"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;
