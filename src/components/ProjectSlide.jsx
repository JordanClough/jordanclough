function ProjectSlide({ title, desc, techlogies, img }) {
  return (
    <div className="project-slide">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
      <h3>{techlogies}</h3>
    </div>
  );
}

export default ProjectSlide;