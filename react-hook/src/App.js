import React, { useState } from 'react'

const App = () => {
  const [location, setLocation] = useState('Seattle, WA')

  return (
    <div className="App">
      <form>
        <label htmlFor="location">Location: </label>
        <input id="location" value={location} placeholder="Location" onChange={e => setLocation(e.target.value)} />
      </form>
    </div>
  );
}

export default App;
