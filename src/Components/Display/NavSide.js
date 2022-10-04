import React, { useEffect, useState } from "react";
import Topics from "../../Data";
function Navside() {
  const [topic, setTopic] = useState("");
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
    fetch(`http://localhost:4000/${topic}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, [topic]);

  return (
    <nav id="nav-bar">
      <h2>Topics</h2>
      <ul>{topicsList}</ul>
    </nav>
  );
}

export default Navside;
