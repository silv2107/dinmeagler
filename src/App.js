import { Router } from "@reach/router";
import './App.scss';
import AgentDetails from "./pages/AgentDetails";
import Agents from "./pages/Agents";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import PropertyDetail from "./pages/PropertyDetail";
import PropertyList from "./pages/PropertyList";
import LoginContextTokenProvider from "./contexts/LoginContextToken";
import Register from "./pages/Register";

function App() {

  return (
    <LoginContextTokenProvider>
      <Router>
        <Home path="/"/>
        <PropertyList path="/propertylist"/>
        <PropertyList path="/propertylist/:searchParams"/>
        <PropertyDetail path="/propertydetail/:id"/>
        <AgentDetails path="/agentdetails/:id"/>
        <Agents path="/agents"/>
        <ContactUs path="/contact"/>
        <LoginForm path="/login"/>
        <Register path="/register"/>      
      </Router>
    </LoginContextTokenProvider>
  );
}

export default App;
