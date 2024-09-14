import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import "font-awesome/css/font-awesome.min.css";
import "./a.css";
import Layout from "./Layout.js";

// Import your pages/components
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import YetToBeDone from "./pages/YetToBeDone";
import Bot from "./pages/chatbot/Bot";
import LandingPg from "./pages/LandingPg";
import PitchDeckForm from "./pages/Startup_Dashboard/PitchDeck/PitchDeckForm";
import Schemes from "./pages/Startup_Dashboard/GovernmentSchemes/GovernmentSchemes";
import FindInvestor from "./pages/Startup_Dashboard/FindInvestors/FindInvestors";
import Workshop from "./pages/Startup_Dashboard/Workshops/exploreWorkshops";
import StartupDashboard from "./pages/Startup_Dashboard/Dashboard/index";
import StartupProfile from "./pages/Startup_Dashboard/Profile";
import News from "./pages/Startup_Dashboard/News/News";
import Info from "./pages/Startup_Dashboard/Info/Info";
import StartupPosts from "./pages/Startup_Dashboard/Posts/Posts";
import MentorData from "./pages/Startup_Dashboard/Mentor/Mentor";
import CreatePostForm from "./pages/Startup_Dashboard/CreatePost/Post.js";
import Dashboard from "./components/Dashboard.jsx";
import InvestorDashboard from "./pages/Investor_Dashboard/Dashboard/index";
import InvestorProfile from "./pages/Investor_Dashboard/Profile";
import InvestorPosts from "./pages/Investor_Dashboard/Posts/Posts";
import CreateWorkshop from "./pages/CreateWorkshop/CreateWorkshop";
import AIQueryBox from "./pages/Prompt/AIQueryBox";
import Posts from "./pages/Posts/Posts";
import "./pages/YetToBeDone.css";
import ViewRegistration from './pages/Startup_Dashboard/ViewRegistration/ViewRegistration.js';
import CompleteRegistration from './pages/Investor_Dashboard/CompleteRegistration/index.js';
import StartupRegistration from './pages/Startup_Dashboard/CompleteRegistration/index.js';

const App = () => {
  const location = useLocation();
  const shouldRenderAdminActions =
    location.pathname !== "/login" && location.pathname !== "/";

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPg />} />
          <Route path="/login" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/investor/dashboard" element={<InvestorDashboard />} />
          <Route path="/investor/profile" element={<InvestorProfile />} />
          <Route path="/investor/posts" element={<InvestorPosts />} />
          <Route path="/investor/completeregistration" element={<CompleteRegistration />} />
          <Route path="/startup/startupregistration" element={<StartupRegistration />} />
          <Route path="/startup/viewregistration" element={<ViewRegistration />} />
          <Route path="/startup/dashboard" element={<StartupDashboard />} />
          <Route path="/startup/profile" element={<StartupProfile />} />
          <Route path="/startup/pitchdeck" element={<PitchDeckForm />} />
          <Route path="/startup/govt-schemes" element={<Schemes />} />
          <Route path="/startup/exploreWorkshop" element={<Workshop />} />
          <Route path="/startup/find-investor" element={<FindInvestor />} />
          <Route path="/startup/mentor" element={<MentorData />} />
          <Route path="/startup/news" element={<News />} />
          <Route path="/startup/guide" element={<Info />} />
          <Route path="/startup/create-posts" element={<CreatePostForm />} />
          <Route path="/startup/posts" element={<StartupPosts />} />
          <Route path="/incubator/createWorkshop" element={<CreateWorkshop />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/chats" element={<Chat />} />
          <Route path="/bot" element={<Bot />} />
          <Route path="/prompt" element={<AIQueryBox />} />
          <Route path="/yettobedone" element={<YetToBeDone />} />
          <Route path="/ai" element={<AIQueryBox />} />
        </Route>
      </Routes>
      {shouldRenderAdminActions && (
        <div className="adminActions">
          <input type="checkbox" name="adminToggle" className="adminToggle" />
          <a className="adminButton" href="#!">
            <i className="fa fa-bars"></i>
          </a>
          <div className="adminButtons">
            <a href="/bot" title="Bot">
              <i className="fa fa-robot"></i>
            </a>
            <a href="/chats" title="Chat">
              <i className="fa fa-comments"></i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
