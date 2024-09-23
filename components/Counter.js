'use client';

import { useState } from 'react';

export default function Counter({ user }) {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>There are {user.length}</p>
      <button onClick={() => setCounter((c) => c + 1)}>{counter}</button>;
    </div>
  );
}
