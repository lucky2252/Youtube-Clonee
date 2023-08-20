import React from "react";
import Header from "./Header";
import SearchPage from "./SearchPage";
import SideBar from "./SideBar";
import RecommendedVideos from "./RecommendedVideos";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="app">
//       <Router>
//         <Header />

//         <Switch>
//           <Route path="/search/:searchTerm">
//             <div className="app_page">
//               <h1>Hey! its a search-page</h1>
//             </div>
//           </Route>

//           <Route path="/">
//             <div className="app_page">
//               <SideBar />
//               <RecommendedVideos />
//             </div>
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;

// if we have to call through element han only tag like element can be use
// but if we have to pass in the form of tag then Container is used

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/search/:searchTerm"
            element={
              <>
                <div className="app_page">
                  <SideBar />
                  <SearchPage />
                </div>
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <div className="app_page">
                  <SideBar />
                  <RecommendedVideos />
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
