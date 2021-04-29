import '../styles/App.css';
import SignUpContainer from "./signup/SignUpContainer";
import PostSignUpPage from "./signup/PostSignUpPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/" exact component={SignUpContainer} />
          <Route path="/confirm" exact component={PostSignUpPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
