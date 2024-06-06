function Media() {
  return (
    <div>
      <p style={{ paddingBottom:20 }}>
        video, audio, embed, source and track.
      </p>
      <div className="d-flex aic jcb">
        <video width={400} controls>
          <source src="/video/1.mp4" type="video/mp4" />
          <track
            src="/meta/1.vtt"
            kind="subtitles"
            srclang="ar"
            label="Arabic"
          />
        </video>
        <dl style={{ width: 500 }}>
          <dt>{"<video controls>"}</dt>
          <dd>{'<source src="" type="video/mp4" />'}</dd>
          <dd>
            {'<track src="" kind="subtitles" srclang="ar" label="Arabic"/>'}
          </dd>
          <dt>{"</video>"}</dt>
        </dl>
      </div>

      <div style={{ paddingTop: 20 }} className="d-flex aic jcb">
        <audio style={{ width: 400 }} controls>
          <source src="/audio/1.mp3" type="audio/mp3" />
        </audio>
        <dl style={{ width: 500 }}>
          <dt>{"<audio controls>"}</dt>
          <dd>{'<source src="" type="audio/mp3"  />'}</dd>

          <dt>{"</audio>"}</dt>
        </dl>
      </div>
      <div style={{ paddingTop: 20 }} className="d-flex aic jcb">
        <embed
          type="image/jpg"
          src="https://img.freepik.com/free-vector/flat-kids-playground-park-with-sandbox-slide-swing_88138-1007.jpg"
          width="400"
        />

        <dl style={{ width: 500 }}>
          <dt>{'<embed type="image/jpg" src=""/>'}</dt>
        </dl>
      </div>
    </div>
  );
}
export default Media;
