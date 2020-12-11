import React from "react";
import Character from "./Character/Character";
import { useQuery, gql } from "@apollo/client";
const queryList = gql`
  query episode($id: ID!) {
    episode(id: $id) {
      characters {
        name
        species
        image
      }
    }
  }
`;

export const ListCharacter = ({ id }) => {
  const { data: episode } = useQuery(queryList, {
    variables: {
      id: id ? id : "1",
    },
  });

  return (
    <div className='row'>
      <div>
        {episode ? (
          episode.episode.characters.map((charachter, key) => (
            <Character
              key={key}
              CharacterName={charachter.name}
              CharacterImage={charachter.image}
              CharacterSpecies={charachter.species}
            />
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};
