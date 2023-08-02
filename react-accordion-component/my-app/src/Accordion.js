function Accordion({ topics, handleChange, isActive }) {
  return (
    <>
      <div className="topics">
        {topics.map((topic) => (
          <>
            <button
              key={topic.id}
              className="topic"
              onClick={() => handleChange(topic.id)}>
              {topic.topicHeader}
            </button>
            {isActive === topic.id && <p>{topic.details}</p>}
          </>
        ))}
      </div>
    </>
  );
}

export default Accordion;
