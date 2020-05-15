import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  // array destructuring
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <h1>Hello from App</h1>
      <UserList />
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
        <br />
        <ResourceList resource={resource} />
      </div>
    </div>
  );
};

export default App;
