// Defines the UI structure and renders child components.

import Todo from './components/Todo';  // Importing Todo component
import Modal from './components/Modal';  // Importing Modal component
import Backdrop from './components/Backdrop';  // Importing Backdrop component

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      {/* Rendering Todo components with different text */}
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Explore the Full React Course" />

      {/* Optional: Render Modal and Backdrop */}
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;



