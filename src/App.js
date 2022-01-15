import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

function App() {
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="efc0ad9a-1a89-4149-8461-dc45e9e24dcc"
        userName="OmariusC"
        userSecret="secret2"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;
