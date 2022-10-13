import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topics from "../../Data";
function Navside({ setPosts, setLogged }) {
  const navigate = useNavigate();
  // sets up the initial state of the Navside components
  const [topic, setTopic] = useState("Animals");

  // maps the topics to the corresponding li tag in the navigation component
  const topicsList = Topics.map((topic, index) => (
    <li onClick={handleTopicClick} className={topic} key={index}>
      {topic}
    </li>
  ));
  // updates state when a topic is updated
  function handleTopicClick(event) {
    const farmTopic = event.target.className;
    setTopic(farmTopic);
  }

  // useEffect should be called when the user loads the page and state changes accordingly and posts of a specific farm topic are loaded
  useEffect(() => {
    const abortController = new AbortController();
    fetch(`https://shamba-shape-up-data.herokuapp.com/${topic}`)
      .then((res) => res.json())
      .then((data) => setPosts((prevData) => (prevData = data)))
      .catch((error) => console.log(error));

    // cleanup function for the useEffect hook
    return () => {
      abortController.abort();
    };
  }, [topic, setPosts]);

  // when a the log out button is clicked function os called to log out the user
  function logUserOut() {
    setLogged((prevLogged) => prevLogged = false);
    navigate("/login");
    localStorage.removeItem("isLoggedIn");
  }

  return (
    <nav id="nav-bar">
      <h2>Topics</h2>
      <ul>{topicsList}</ul>
      <button className="logout-btn" onClick={logUserOut}>
        Log Out
      </button>
    </nav>
  );
}

export default Navside;
