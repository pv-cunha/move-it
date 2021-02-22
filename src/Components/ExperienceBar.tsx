export const ExperienceBar = () => {
  return (
    <header className="experienceBar">
      <span>0 xp</span>

      <div>
        <div style={{width: '50%'}}></div>
        <span className="current-experience" style={{left: '50%'}}>300 xp</span>
      </div>

      <span>600 xp</span>
    </header>
  );
}