import { useQuery, gql } from "@apollo/client";
const queryEpisode = gql`
  {
    episodes {
      results {
        id
        name
        episode
      }
    }
  }
`;
export const AutoSelect = ({ handleEpisodeNameChange }) => {
  const { loading, error, data } = useQuery(queryEpisode);
  console.log(loading, error, data);
  return (
    <div className='input-field col s6'>
      <select
        style={{ display: "block" }}
        onChange={(e) => {
          handleEpisodeNameChange(e.target.value);
        }}>
        {data ? (
          data.episodes.results.map((ep, key) => (
            <option key={key} value={ep.id}>
              {" "}
              {ep.name}-{ep.episode}
            </option>
          ))
        ) : (
          <option value='Loading'>Loading</option>
        )}
      </select>
    </div>
  );
};
