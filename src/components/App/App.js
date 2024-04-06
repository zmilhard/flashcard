import React from 'react';

// import Game from '../Game';
// import Header from '../Header';
import Container from '../Container/Container';


function App() {
  const [lastThree, setLastThree] = React.useState([-1, -2, -3]);

  React.useEffect(() => {
    fetch("/public/codes.json")
      .then((res) => console.log(res));
    // .then((videos) => videos.filter((video) => {
    //   return video.id === videoID;
    // }))
    // .then((matched) => setVideo(matched[0]));
  }, []);

  return (
    // <div className="wrapper">
    //   <Header />

    //   <div className="game-wrapper">
    //     <Game />
    //   </div>
    // </div>



    <Container lastThree={lastThree} setLastThree={setLastThree}></Container>
  );
}

export default App;
