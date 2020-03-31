import React from 'react';
import Header from './Header';
import StudyDashboard from './StudyDashboard';
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css"
function App() {
  return (
    <div>
        <Header />
        <StudyDashboard />
    </div>
  );
}

export default App;
