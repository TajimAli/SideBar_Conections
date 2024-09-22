import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SidebarOne from './SidebarOne';
import SidebarTwo from './sidebarTwo';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import PageOne from './pageOne';
import PageTwo from './pageTwo';
import PageThree from './pageThree';
import PageFour from './PageFour'
import DashboardOne from './dashbordOne';
import DashboardTwo from './DashbordTwo';
import './sidebar.css';

function MainAppPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is already logged in
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div className="app-container">
        {!isLoggedIn ? (
          <SidebarOne />
        ) : (
          <SidebarTwo setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="content-container">
          <Routes>
            {!isLoggedIn ? (
              <>
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/page1" element={<PageOne />} />
                <Route path="/page2" element={<PageTwo />} />
                <Route path="/page3" element={<PageThree />} />
                <Route path="/page4" element={<PageFour />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            ) : (
              <>
                <Route path="/dashboard1" element={<DashboardOne />} />
                <Route path="/dashboard2" element={<DashboardTwo />} />
                <Route path="*" element={<Navigate to="/dashboard1" />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default MainAppPage;







// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import SidebarOne from './SidebarOne';
// import SidebarTwo from './sidebarTwo';
// import SignupPage from './SignupPage';
// import LoginPage from './LoginPage';
// import PageOne from './pageOne';
// import PageTwo from './pageTwo';
// import PageThree from './pageThree';
// import PageFour from './PageFour';
// import DashboardOne from './dashbordOne';
// import DashboardTwo from './DashbordTwo';
// import './sidebar.css';

// function MainAppPage() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     // Check if the user is already logged in
//     useEffect(() => {
//         const loggedInStatus = localStorage.getItem('isLoggedIn');
//         if (loggedInStatus === 'true') {
//             setIsLoggedIn(true);
//         }
//     }, []);

//     return (
//         <Router>
//             <div className="app-container">
//                 {!isLoggedIn ? <SidebarOne /> : <SidebarTwo />}

//                 <div className="content-container">
//                     <Routes>
//                         {/* Routes for first sidebar */}
//                         {!isLoggedIn ? (
//                             <>
//                                 <Route path="/signup" element={<SignupPage />} />
//                                 <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
//                                 <Route path="/page1" element={<PageOne />} />
//                                 <Route path="/page2" element={<PageTwo />} />
//                                 <Route path="/page3" element={<PageThree />} />
//                                 <Route path="/page4" element={<PageFour />} />
//                                 <Route path="*" element={<Navigate to="/login" />} />
//                             </>
//                         ) : (
//                             <>
//                                 <Route path="/dashboard1" element={<DashboardOne />} />
//                                 <Route path="/dashboard2" element={<DashboardTwo />} />
//                                 <Route path="*" element={<Navigate to="/dashboard1" />} />
//                             </>
//                         )}
//                     </Routes>
//                 </div>
//             </div>
//         </Router>
//     );
// }

// export default MainAppPage;















// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // import SidebarOne from './SidebarOne';
// // import SidebarTwo from './sidebarTwo';
// // import LoginPage from './LoginPage';
// // import PageOne from './pageOne';
// // import PageTwo from './pageTwo';
// // import PageThree from './pageThree';
// // import PageFour from './PageFour';
// // import DashboardOne from './dashbordOne';
// // import DashboardTwo from './DashbordTwo';
// // import './sidebar.css';

// // function MainAppPage() {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);

// //   return (
// //     <Router>
// //       <div className="app-container">
// //         {/* Conditionally render sidebars based on login status */}
// //         {!isLoggedIn ? <SidebarOne /> : <SidebarTwo />}

// //         <div className="content-container">
// //           <Routes>
// //             {/* Routes for first sidebar */}
// //             {!isLoggedIn ? (
// //               <>
// //                 <Route path="/page1" element={<PageOne />} />
// //                 <Route path="/page2" element={<PageTwo />} />
// //                 <Route path="/page3" element={<PageThree />} />
// //                 <Route path="/page4" element={<PageFour />} />
// //                 <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
// //                 <Route path="*" element={<Navigate to="/page1" />} />
// //               </>
// //             ) : (
// //               // Routes for second sidebar (post-login)
// //               <>
// //                 <Route path="/dashboard1" element={<DashboardOne />} />
// //                 <Route path="/dashboard2" element={<DashboardTwo />} />
// //                 <Route path="*" element={<Navigate to="/dashboard1" />} />
// //               </>
// //             )}
// //           </Routes>
// //         </div>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default MainAppPage;
