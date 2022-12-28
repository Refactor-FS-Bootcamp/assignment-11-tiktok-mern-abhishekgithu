import "./App.css";
import Video from "./components/Video";

function App() {
  return (
    //BEM
    <div className="app">
      <div className="app__videos">
        <Video
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          channel="raunak.kumar.4"
          description="ok working"
          song="the game of thrones"
          likes={111}
          messages={222}
          shares={333}
        />
        <Video
          url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
          channel="raunak.kumar.4"
          description="ok working"
          song="the game of thrones"
          likes={391}
          messages={372}
          shares={133}
        />
      </div>
    </div>
  );
};

export default App;
