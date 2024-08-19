const ImageMap = () => {
    const projects=[
        {coords:"10,13,173,60",link:"https://shbak-api.vercel.app/",name:"SHBAKAPI"},
        {coords:"202,12,403,60",link:"https://playground-2e7h.onrender.com/",name:"PLAYGROUND"},
        {coords:"431,14,580,63",link:"https://chatapp-izc9.onrender.com/",name:"CHATAPP"},
        {coords:"606,12,730,60",link:"https://effect-kin5.onrender.com/",name:"EFFECT"},
    ]
  return (
    <div>
      <p>
        Image Map lets a developer map/link different parts of images with the
        different web pages. It can be achieved by the map tag in HTML5, using
        which we can link images with clickable areas.
      </p>
      <div className="d-flex jcc">
        <img
          src="Capture.png"
          alt="projects"
          style={{ width: "auto" }}
          className="mobile-d-none "
          useMap="#imagemap"
        />
        <map id="imagemap">
            {projects.map((project,i)=>{
                return <area shape="rect" alt={project.name} coords={project.coords} href={project.link}/>
            })}
        </map>
      </div>
    </div>
  );
};

export default ImageMap;
