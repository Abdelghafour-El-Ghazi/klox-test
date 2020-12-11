import { AutoSelect } from "./components/AutoSelect";
import { ListCharacter } from "./components/ListCharacter";
import { useState } from "react";
function App() {
  const [episodeId, setEpisodeId] = useState();

  const handleEpisodeNameChange = (value) => {
    setEpisodeId(value);
  };

  return (
    <div>
      <AutoSelect handleEpisodeNameChange={handleEpisodeNameChange} />
      <ListCharacter id={episodeId} />
    </div>
  );
}

export default App;
