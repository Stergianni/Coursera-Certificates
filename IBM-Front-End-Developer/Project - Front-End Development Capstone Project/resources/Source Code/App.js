 
// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';

// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>

          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;



// Import the Notification component in the App.js component and place it in a way that the notification appears on every website page once a patient books an appointment.

// Click here for a hint.
// Include the notification component within <BrowserRouter></BrowserRouter> and wrap <Routes></Routes> within it.
// Click here to view the exemplar code.
// <div className="App">
	// <BrowserRouter>
	  // <Notification>
		  // <Routes>
			// <Route path="/login" element={<Login />}/>
			// <Route path="/signup" element={<SignUp />}/>
			// <Route path="/instant-consultation" element={<InstantConsultation />} />
			 // <Route path="<component_route>" element={<component_name/>}/> //Replace the component_route with the component path and component_name with the component name as imported in the App.js file. 
			// />
		  // </Routes>
	  // </Notification>
	// </BrowserRouter>