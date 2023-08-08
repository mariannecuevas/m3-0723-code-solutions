import Accordion from './Accordion';
import './Accordion.css';
import { useState } from 'react';

const topics = [
  {
    id: 1,
    topicHeader: 'Overwatch',
    details:
      'A hero-focused first-person team shooter from Blizzard Entertainment.',
  },
  {
    id: 2,
    topicHeader: 'Valorant',
    details:
      'A team-based first-person tactical hero shooter set in the near future.',
  },
  {
    id: 3,
    topicHeader: 'Fortnite',
    details:
      'A third-person shooter game where up to 100 players compete to be the last person or team standing.',
  },
  {
    id: 4,
    topicHeader: 'PlateUp!',
    details: 'Classic cooking action with permanent roguelite progression.',
  },
];

function App() {
  const [isActive, setIsActive] = useState(null);

  function handleChange(topicId) {
    setIsActive((prevId) => (prevId === topicId ? null : topicId));
  }

  return (
    <Accordion
      isActive={isActive}
      topics={topics}
      handleChange={handleChange}
    />
  );
}

export default App;
