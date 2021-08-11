import React from 'react';

const App1Button = React.lazy(
  () => import('MFE1/Button')
);

const App = () => {
  return (
    <div>
        <React.Suspense fallback='Loading Button'>
          <App1Button />
        </React.Suspense>
    </div>
  );
}

export default App;
