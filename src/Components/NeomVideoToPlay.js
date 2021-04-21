import { Component } from "react"

import play from "../styles/img/play-icon.png"
import pause from "../styles/img/pause-icon.png"

class VideoToPlayNeom extends Component {
  playVideo = () => {
    // You can use the play method as normal on your video ref
    this.refs.vidRef.play()
  }

  pauseVideo = () => {
    // Pause as well
    this.refs.vidRef.pause()
  }
  render() {
    return (
      <div className="container-fluid rounded mb-0">
        <video
          className="container-fluid mt-5"
          ref="vidRef"
          style={{
            Width: "900px",
            height: "500px",
          }}
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/projects-comments.appspot.com/o/explainer-video-en.mp4?alt=media&token=682c978e-f546-4558-a53f-dc9e0b90a866"
            type="video/mp4"
          />
        </video>
        <div className="m-4">
          <img style={{ width: "30px", height: "30px" }} src={play} onClick={this.playVideo} alt="play-icon" />
          &nbsp;&nbsp;
          <img style={{ width: "30px", height: "30px" }} src={pause} onClick={this.pauseVideo} alt="pause-icon" />
        </div>
      </div>
    )
  }
}
export default VideoToPlayNeom
