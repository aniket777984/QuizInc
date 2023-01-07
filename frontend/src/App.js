import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";

import LoginSignUp from "./components/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import { useEffect } from "react";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import Profile from "./components/User/Profile";
import UserOption from "./components/layout/Header/UserOption";
import { useSelector } from "react-redux";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Quiz/Result";
import Dashboard from "./components/Admin/DashBoard";
import UsersList from "./components/Admin/UserList";
import QuestionList from "./components/Admin/QuestionList";
import UpdateUser from "./components/Admin/UpdateUser";
import DeleteUser from "./components/Admin/DeleteUser";
import NewQuestion from "./components/Admin/NewQuestion";
import EndPage from "./components/Quiz/EndPage";
import LeaderBoard from "./components/User/LeaderBoard";
import NewSponser from "./components/Admin/NewSponser";
import NewUpcomingEvent from "./components/Admin/NewUpcomingEvent";

import SponserList from "./components/Admin/SponserList";
import UpcomingEventList from "./components/Admin/UpcomingEventList";


import UpdateProfile from "./components/User/UpdateProfile";
import UpdatePassword from "./components/User/UpdatePassword";
import WelcomePage from "./components/Quiz/WelcomePage";
import "swiper/css/bundle";
import Third from "./components/Strength/Third";
import QuizzitchEvents from "./components/Strength/QuizzitchEvents";
import FourthYear from "./components/Strength/FourthYear";
import SecondYear from "./components/Strength/SecondYear";
import Alumini from "./components/Strength/Alumini";

import QuizzItchPage from "./components/Home/QuizzItchPage";

function App() {
  const { user, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  
  return (
    <Router>
      {/* <Header /> */}
      {isAuthenticated && <UserOption user={user} />}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={QuizzitchEvents} />
        <Route exact path="/quizzitchcup" component={QuizzItchPage} />
        <Route exact path="/strength/fourth" component={FourthYear} />
        <Route exact path="/strength/second" component={SecondYear} />
        <Route exact path="/strength/alumini" component={Alumini} />

        <Route exact path="/login" component={LoginSignUp} />
        <ProtectedRoute exact path="/account" component={Profile} />
        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
        <ProtectedRoute exact path="/password/update" component={UpdatePassword} />
        <ProtectedRoute exact path="/play/welcome" component={WelcomePage} />
        <ProtectedRoute isState={true} exact path="/play/quiz" component={Quiz} />
        <ProtectedRoute exact path="/play/quiz/end" component={EndPage} />
        <ProtectedRoute exact path="/quiz/result" component={Result} />
        <ProtectedRoute exact path="/display/leaderboard" component={LeaderBoard} />

        <Route exact path="/strength/third" component={Third} />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute isAdmin={true} exact path="/admin/sponser" component= {NewSponser} />
        <ProtectedRoute isAdmin={true} exact path="/admin/sponsers" component= {SponserList} />


        <ProtectedRoute isAdmin={true} exact path="/admin/upcomingevent" component= {NewUpcomingEvent} />
        <ProtectedRoute isAdmin={true} exact path="/admin/upcomingevents" component= {UpcomingEventList} />
        <ProtectedRoute isAdmin={true} exact path="/admin/users" component= {UsersList} />
        <ProtectedRoute isAdmin={true} exact path="/admin/questions" component= {QuestionList} />
        <ProtectedRoute isAdmin={true} exact path="/admin/user/:id" component= {UpdateUser} />
        <ProtectedRoute isAdmin={true} exact path="/admin/delete/user/:id" component= {DeleteUser} />
        <ProtectedRoute isAdmin={true} exact path="/admin/new/question" component= {NewQuestion} />
      </Switch>
    </Router>
  );
}

export default App;
