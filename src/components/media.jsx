import { useEffect, useState } from "react";
import MEVP from "../../node_modules/me-vp/index.js";
function Media() {
let [mounted ,setMounted]=useState(false)
useEffect(()=>{
  setMounted(true)
},[])
useEffect(()=>{
   if(mounted)
   { 
    new MEVP(
      "videoContiner",
      "/video/1.mp4",
      "100%",
      2,
      { color: "orange", backgroundColor: "black", accent: "orange" }
    );
  }
  
},[mounted])
  return (
    <div className="mobile-fs-11">
      <p style={{ paddingBottom:20 }}>
        video, audio, embed, source and track.
      </p>
      <div className="d-flex flex-wrap aic jcb " >
        {/* <video width={300} controls>
          <source src="/video/1.mp4" type="video/mp4" />
          <track
            src="/meta/1.vtt"
            kind="subtitles"
            srcLang="ar"
            label="Arabic"
          />
        </video> */}
        <div style={{ width:500 }}  id="videoContiner"></div>
        <dl style={{ width:300 }}>
          <dt>{"<video controls>"}</dt>
          <dd>{'<source src="" type="video/mp4" />'}</dd>
          <dd>
            {'<track src="" kind="subtitles" srclang="ar" label="Arabic"/>'}
          </dd>
          <dt>{"</video>"}</dt>
        </dl>
      </div>

      <div style={{ paddingTop: 20 }} className="d-flex flex-wrap aic jcb">
        <audio style={{ width: 300 }} controls>
          <source src="/audio/1.mp3" type="audio/mp3" />
        </audio>
        <dl style={{ width: 300 }}>
          <dt>{"<audio controls>"}</dt>
          <dd>{'<source src="" type="audio/mp3"  />'}</dd>

          <dt>{"</audio>"}</dt>
        </dl>
      </div>
      <div style={{ paddingTop: 20 }} className="d-flex flex-wrap mobile-w-100 aic jcb">
        <embed
          type="image/jpg"
          src="https://img.freepik.com/free-vector/flat-kids-playground-park-with-sandbox-slide-swing_88138-1007.jpg"
          width="300"
        />

        <dl style={{ width: 300 }}>
          <dt>{'<embed type="image/jpg" src=""/>'}</dt>
        </dl>
      </div>
    </div>
  );
}
export default Media;
