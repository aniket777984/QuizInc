import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { getLeaderboardUsers, clearErrors } from "../../actions/userAction";
import Loader from "../layout/Loader/Loader";
import "./LeaderBoard.css";
import logo from "../../assets/logo.png";

const LeaderBoard = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { loading, error, users } = useSelector((state) => state.leaderBoard);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getLeaderboardUsers());
  }, [dispatch, alert, error, history]);


  const search = () => {
    var text = document.getElementById('search').value;
    const tr = document.getElementsByTagName('tr');
    for (let i=1;i<tr.length;i++){
        if(!tr[i].children[1].children[1].innerHTML.toLowerCase().includes(
            text.toLowerCase()
        )){
            tr[i].style.display = 'none';
        }
        else{
            tr[i].style.display = '';
        }
    }
   }

  
  return (
    <Fragment>
      <MetaData title={`LeaderBoard`} />
      
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          {users && users.length === 0 ? (
            <div className="leaderboard-emptyCart">
              <div className="empty-container">
                <h1>No Users Present in the LeaderBoard</h1>
              <div class="leaderboard-link-box">
                    <a href="/" className="leaderboardBtn">
                      Home
                    </a>
              </div>
              </div>
            </div>
          ) : (
            <>
              <div class="leaderboard-container">
              <img src={logo} alt="quizinc" className="quizinclogo" />  
                <h1 className="leaderboardHeading">LeaderBoard</h1>
                <div class="leaderboard-search-box">
                    <input
                      id="search"
                      className="search"
                      placeholder="Search Using Name"
                      onInput={search}
                    />
                  </div>
                <div class="card">
                  <table>
                    <thead>
                      <tr>
                        <td>Rank</td>
                        <td>Player</td>
                        <td>Score</td>
                      </tr>
                    </thead>
                    <tbody>
                      {users && users.map((user, idx) => (
                        <tr>
                          <td>{idx+1}</td>
                          <td>
                            <img src={user.avatar.url} alt="Aniket" />
                            <p> {user.name}</p>
                          </td>
                          <td>{user.score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default LeaderBoard;

{
  /* <Fragment>
              <div className="cartPage">
                <div>

                <div className="upperContent">
                <h1>QuizInc-LeaderBoard</h1>
                <form className="searchForm" onSubmit={submitHandler}>
                  <input
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Button type="submit">
                    Search
                  </Button>
                </form>
                </div>

                <div className="users">
                  {users &&
                    users.map((user, index) => (
                      <div className="cartContainer" key={index}>
                        <UserCard user={user}/>
                      </div>
                    ))}
                </div>
                </div>
              </div>
            </Fragment> */
}
