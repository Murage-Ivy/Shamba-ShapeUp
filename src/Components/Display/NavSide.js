import React, { useEffect, useState } from "react";
import Topics from "../../Data";
function Navside({ setPosts }) {
  const [topic, setTopic] = useState("Animals");
  const topicsList = Topics.map((topic, index) => (
    <li onClick={handleTopicClick} className={topic} key={index}>
      {topic}
    </li>
  ));

  function handleTopicClick(event) {
    const farmTopic = event.target.className;
    setTopic(farmTopic);
  }

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`http://localhost:4000/${topic}`)
      .then((res) => res.json())
      .then((data) => setPosts((prevData) => (prevData = data)))
      .catch((error) => console.log(error));

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
