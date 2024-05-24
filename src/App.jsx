
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import WelcomePage from './WelcomePage'; // Create a WelcomePage component
import ForgetPasswordPage from './ForgetPasswordPage';

import "./App.css"

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<WelcomePage/>} /> {/* Welcome page */}
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/signup" element={<SignupPage/>} />
                <Route path="/forgetpassword" element={<ForgetPasswordPage/>} />

            </Routes>
        </Router>
    );
}

export default App;
