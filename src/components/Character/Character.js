const Character = ({ CharacterName, CharacterImage, CharacterSpecies }) => {
  return (
    <div className='col s6'>
      <div className='col s12 m7'>
        <div className='card'>
          <div className='card-image'>
            <img src={CharacterImage} alt='charachter' />
            <span className='card-title'>{CharacterName}</span>
          </div>
          <div className='card-content'>{CharacterSpecies}</div>
        </div>
      </div>
    </div>
  );
};

export default Character;
