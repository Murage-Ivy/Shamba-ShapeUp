import React, { useEffect, useState } from "react";
import Topics from "../../Data";
function Navside({ setPosts }) {
  // sets up the initial state of the Navside components
  const [topic, setTopic] = useState("Animals");

  // maps the topics to the corresponding li tag in the navigation component
  const topicsList = Topics.map((topic, index) => (
    <li onClick={handleTopicClick} className={topic} key={index}>
      {topic}
    </li>
  ));

  function handleTopicClick(event) {
    const farmTopic = event.target.className;
    setTopic(farmTopic);
  }

  // useEffect should be called when the user loads the page and state changes accordingly
  useEffect(() => {
    const abortController = new AbortController();
    fetch(`http://localhost:4000/${topic}`)
      .then((res) => res.json())
      .then((data) => setPosts((prevData) => (prevData = data)))
      .catch((error) => console.log(error));

    // cleanup function for the useEffect hook
    return () => {
      abortController.abort();
    };
  }, [topic, setPosts]);

  return (
    <nav id="nav-bar">
      <h2>Topics</h2>
      <ul>{topicsList}</ul>
    </nav>
  );
}

export default Navside;
