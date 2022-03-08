const Character = ({ data }) => {
     const {name, portrayed, nickname, birthday, status, img} = data;
     const style={
          backgroundImage:`url(${img})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 100%'
     }
  return (
    <div className="character-container">
      <div className="card">
        <div className="card-front" style={style}>
        </div>
        <div className="card-back">
          <h1>{name}</h1>
          <p>Actor name : {portrayed}</p>
          <p>Nick name: {nickname}</p>
          <p>Birthday: {birthday}</p>
          <p>Status: {status}</p>
        </div>
      </div>
    </div>
  );
};

export default Character;
