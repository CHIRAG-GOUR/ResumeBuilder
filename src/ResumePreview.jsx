import React from 'react';

const icons = {
  gym: (
    <svg className="icon" viewBox="0 0 24 24"><path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43 1.43-1.43-1.43-1.43z" /></svg>
  ),
  cricket: (
    <img src="/cricket.png" alt="Cricket" style={{ width: '18px', height: '18px', objectFit: 'contain', filter: 'invert(31%) sepia(85%) saturate(2404%) hue-rotate(210deg) brightness(97%) contrast(92%)' }} />
  ),
  boxing: (
    <img src="/boxing.png" alt="Boxing" style={{ width: '18px', height: '18px', objectFit: 'contain', filter: 'invert(31%) sepia(85%) saturate(2404%) hue-rotate(210deg) brightness(97%) contrast(92%)' }} />
  ),
  tech: (
    <svg className="icon" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" /></svg>
  ),
  default: (
    <svg className="icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
  )
};

function ClassicTemplate({ data }) {
  return (
    <div id="resume-content" className="template-classic" style={{ display: 'flex', padding: '40px', gap: '1.5rem', background: '#fff', height: '100%' }}>
      {/* LEFT COLUMN */}
      <div className="left-col" style={{ flex: '0 0 34%', paddingRight: '1rem' }}>
        <h1 className="name" style={{ fontSize: '2.8rem', fontWeight: 400, color: 'var(--primary-color)', letterSpacing: '1px', marginBottom: '0.5rem', lineHeight: 1.1 }}>{data.name}</h1>
        <div className="job-title" style={{ fontSize: '1.2rem', color: 'var(--secondary-color)', marginBottom: '1.5rem', fontWeight: 400 }}>{data.jobTitle}</div>

        <ul className="contact-info" style={{ listStyle: 'none', marginBottom: '2rem', fontSize: '0.85rem', color: '#555' }}>
          {data.phone && <li style={{display:'flex', alignItems:'center', gap:'8px', marginBottom:'0.6rem'}}><svg className="icon" viewBox="0 0 24 24"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.2-.6-2.4-.6-3.6 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.8-3.9-8.7-8.7-8.7v2c3.7 0 6.7 3 6.7 6.7z" /></svg>{data.phone}</li>}
          {data.email && <li style={{display:'flex', alignItems:'center', gap:'8px', marginBottom:'0.6rem'}}><svg className="icon" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" /></svg><a href={`mailto:${data.email}`}>{data.email}</a></li>}
          {data.linkedin && <li style={{display:'flex', alignItems:'center', gap:'8px', marginBottom:'0.6rem'}}><svg className="icon" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg><a href={data.linkedinUrl} style={{ color: 'var(--secondary-color)', fontWeight: 600 }}>{data.linkedin}</a></li>}
          {data.location && <li style={{display:'flex', alignItems:'center', gap:'8px', marginBottom:'0.6rem'}}><svg className="icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>{data.location}</li>}
        </ul>

        {data.skills && data.skills.length > 0 && (
          <>
            <div className="section-title" style={{fontSize:'0.85rem', color:'var(--heading-color)', textTransform:'uppercase', fontWeight:600, letterSpacing:'1px', marginBottom:'1rem', borderBottom:'1px solid var(--line-color)', paddingBottom:'0.4rem'}}>SKILLS</div>
            <div className="skills-container" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px', marginBottom:'2rem'}}>
              {data.skills.map((skill, i) => (
                <span key={i} className={`skill-item ${skill.highlighted ? 'highlighted-skill' : ''}`} style={skill.highlighted ? {border:'1.5px solid var(--secondary-color)', color:'var(--secondary-color)', fontWeight:600, padding:'4px 8px', borderRadius:'4px', display:'flex', alignItems:'center', fontSize:'0.75rem'} : {border:'1px solid #ccc', color:'#333', fontWeight:500, padding:'4px 8px', borderRadius:'4px', display:'flex', alignItems:'center', fontSize:'0.75rem'}}>
                  {skill.text}
                </span>
              ))}
            </div>
          </>
        )}

        {data.projects && data.projects.length > 0 && (
          <>
            <div className="section-title" style={{fontSize:'0.85rem', color:'var(--heading-color)', textTransform:'uppercase', fontWeight:600, letterSpacing:'1px', marginBottom:'1rem', borderBottom:'1px solid var(--line-color)', paddingBottom:'0.4rem'}}>PROJECTS</div>
            <div className="projects-section" style={{marginBottom:'2rem'}}>
              {data.projects.map((proj, i) => (
                <div key={i} className="project-block" style={{marginBottom:'1.2rem'}}>
                  <div className="project-name" style={{fontWeight:600, fontSize:'1rem', color:'var(--primary-color)', marginBottom:'0.2rem'}}>
                    <a href={proj.linkUrl} target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                      {proj.title} {proj.linkText && <span style={{fontSize:'0.75rem', color:'var(--secondary-color)', fontWeight:500, verticalAlign:'middle'}}>({proj.linkText})</span>}
                    </a>
                  </div>
                  <div className="project-date" style={{display:'flex', alignItems:'center', gap:'5px', fontSize:'0.75rem', color:'var(--heading-color)', marginBottom:'0.4rem'}}>
                    <svg className="icon" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" /></svg>
                    {proj.date}
                  </div>
                  <div className="project-tech" style={{fontSize:'0.75rem', color:'#666', textTransform:'uppercase', marginBottom:'0.4rem', fontWeight:500}}>{proj.tech}</div>
                  <ul style={{listStyleType:'disc', paddingLeft:'1.2rem', fontSize:'0.8rem', color:'#444'}}>
                    {proj.points.map((pt, j) => <li key={j} style={{marginBottom:'0.3rem'}}>{pt}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

        {data.interests && data.interests.length > 0 && (
          <>
            <div className="section-title" style={{fontSize:'0.85rem', color:'var(--heading-color)', textTransform:'uppercase', fontWeight:600, letterSpacing:'1px', marginBottom:'1rem', borderBottom:'1px solid var(--line-color)', paddingBottom:'0.4rem'}}>OTHER INTERESTS</div>
            <ul className="interests-list" style={{listStyle:'none'}}>
              {data.interests.map((int, i) => (
                <li key={i} style={{display:'flex', alignItems:'center', gap:'15px', marginBottom:'2rem', fontSize:'0.95rem', fontWeight:500}}>
                  <div className="interest-icon-box" style={{width:'38px', height:'38px', background:'#f0f4f8', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--secondary-color)'}}>
                    {icons[int.icon] || icons.default}
                  </div>
                  {int.name}
                </li>
              ))}
            </ul>
          </>
        )}

        {data.customSections?.filter(cs => cs.column === 'left').map((cs, i) => (
          <React.Fragment key={`cs-left-${i}`}>
            <div className="section-title" style={{fontSize:'0.85rem', color:'var(--heading-color)', textTransform:'uppercase', fontWeight:600, letterSpacing:'1px', marginBottom:'1rem', borderBottom:'1px solid var(--line-color)', paddingBottom:'0.4rem'}}>{cs.title.toUpperCase()}</div>
            <div className="experience-section" style={{marginBottom:'2rem'}}>
              {cs.items.map((item, j) => (
                <div key={j} className="job-block" style={{marginBottom: '1rem'}}>
                  <div className="job-role" style={{fontWeight:500, fontSize:'1rem', color:'var(--primary-color)', marginBottom:'0.2rem'}}>{item.title}</div>
                  <div className="company-header" style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: '0.2rem'}}>
                    <div className="company-name" style={{color:'var(--secondary-color)', fontSize:'0.95rem', fontWeight:500}}>{item.subtitle}</div>
                    {item.date && (
                      <div className="job-date" style={{display:'flex', alignItems:'center', gap:'5px', fontSize:'0.75rem', color:'var(--heading-color)'}}>
                        <svg className="icon" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" /></svg>
                        {item.date}
                      </div>
                    )}
                  </div>
                  {item.points && item.points.length > 0 && item.points[0] !== "" && (
                    <ul style={{listStyleType:'disc', paddingLeft:'1.2rem', fontSize:'0.85rem', color:'#444'}}>
                      {item.points.map((pt, k) => <li key={k} style={{marginBottom:'0.3rem'}}>{pt}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* RIGHT COLUMN */}
      <div className="right-col" style={{ flex: 1, paddingLeft: '1rem' }}>
        {data.summary && data.summary.trim() !== '' && (
          <>
            <div className="section-title" style={{fontSize:'0.85rem', color:'var(--heading-color)', textTransform:'uppercase', fontWeight:600, letterSpacing:'1px', marginBottom:'1rem', borderBottom:'1px solid var(--line-color)', paddingBottom:'0.4rem'}}>SUMMARY</div>
            <p className="summary-text" style={{fontSize:'0.85rem', marginBottom:'2rem', paddingLeft:'1rem', position:'relative'}}>{data.summary}</p>
          </>
        )}

        {data.experience && data.experience.length > 0 && (
          <>
            <div className="section-title" style={{fontSize:'0.85rem', color:'var(--heading-color)', textTransform:'uppercase', fontWeight:600, letterSpacing:'1px', marginBottom:'1rem', borderBottom:'1px solid var(--line-color)', paddingBottom:'0.4rem'}}>EXPERIENCE</div>
            <div className="experience-section" style={{marginBottom:'2rem'}}>
              {data.experience.map((exp, i) => (
                <div key={i} className="job-block" style={{marginBottom:'1.5rem'}}>
                  <div className="job-role" style={{fontWeight:500, fontSize:'1rem', color:'var(--primary-color)', marginBottom:'0.2rem'}}>{exp.role}</div>
                  <div className="company-header" style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: '0.4rem'}}>
                    <div className="company-name" style={{color:'var(--secondary-color)', fontSize:'0.95rem', fontWeight:500}}>{exp.company}</div>
                    <div className="job-date" style={{display:'flex', alignItems:'center', gap:'5px', fontSize:'0.75rem', color:'var(--heading-color)'}}>
                      <svg className="icon" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" /></svg>
                      {exp.date}
                    </div>
                  </div>
                  <ul style={{listStyleType:'disc', paddingLeft:'1.2rem', fontSize:'0.85rem', color:'#444'}}>
                    {exp.points.map((pt, j) => <li key={j} style={{marginBottom:'0.3rem'}}>{pt}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

        {data.education && data.education.length > 0 && (
          <>
            <div className="section-title" style={{fontSize:'0.85rem', color:'var(--heading-color)', textTransform:'uppercase', fontWeight:600, letterSpacing:'1px', marginBottom:'1rem', borderBottom:'1px solid var(--line-color)', paddingBottom:'0.4rem'}}>EDUCATION</div>
            <div className="education-section" style={{marginBottom:'2rem'}}>
              {data.education.map((edu, i) => (
                <div key={i} className="edu-block" style={{marginBottom:'1.2rem'}}>
                  <div className="edu-degree" style={{fontWeight:500, fontSize:'0.95rem', color:'var(--primary-color)', marginBottom:'0.2rem'}}>{edu.degree}</div>
                  <div className="edu-details" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <div className="edu-school" style={{color:'var(--secondary-color)', fontSize:'0.85rem'}}>{edu.school}</div>
                    <div className="edu-meta" style={{display:'flex', gap:'15px', fontSize:'0.75rem', color:'var(--heading-color)'}}>
                      <span className="job-date" style={{display:'flex', alignItems:'center', gap:'5px'}}>
                        <svg className="icon" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" /></svg>
                        {edu.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {data.extraProjects && data.extraProjects.length > 0 && (
          <>
            <div className="section-title" style={{fontSize:'0.85rem', color:'var(--heading-color)', textTransform:'uppercase', fontWeight:600, letterSpacing:'1px', marginBottom:'1rem', borderBottom:'1px solid var(--line-color)', paddingBottom:'0.4rem'}}>EXTRA PROJECTS & LIVE LINKS</div>
            <div className="experience-section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '1.5rem' }}>
              {data.extraProjects.map((ep, i) => (
                <div key={i} className="job-block" style={{ marginBottom: 0 }}>
                  <div className="company-header" style={{ marginBottom: '0.1rem' }}>
                    <div className="job-role" style={{ color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight:500 }}>
                      {ep.linkUrl ? (
                        <a href={ep.linkUrl} target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                          {ep.title} <span style={{fontSize:'0.7rem', color:'var(--secondary-color)'}}>(Live ↗)</span>
                        </a>
                      ) : (
                        <span>{ep.title}</span>
                      )}
                    </div>
                  </div>
                  <div className="edu-school" style={{ fontSize: '0.75rem', lineHeight: '1.2', color:'var(--secondary-color)'}}>{ep.desc}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {data.certifications && data.certifications.length > 0 && (
          <>
            <div className="section-title" style={{fontSize:'0.85rem', color:'var(--heading-color)', textTransform:'uppercase', fontWeight:600, letterSpacing:'1px', marginBottom:'1rem', borderBottom:'1px solid var(--line-color)', paddingBottom:'0.4rem'}}>ACHIEVEMENTS & CERTIFICATIONS</div>
            {data.certifications.map((cert, i) => (
              <div key={i} className="volunteering-block" style={{marginBottom:'1rem'}}>
                <div className="vol-role" style={{fontWeight:500, fontSize:'0.95rem', color:'var(--primary-color)', marginBottom:'0.2rem'}}>{cert.role}</div>
                <div className="edu-details" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <div className="edu-school" style={{color:'var(--secondary-color)', fontSize:'0.85rem'}}>{cert.school}</div>
                  <div className="edu-meta" style={{display:'flex', gap:'15px', fontSize:'0.75rem', color:'var(--heading-color)'}}>
                    <span className="job-date" style={{display:'flex', alignItems:'center', gap:'5px'}}>
                      <svg className="icon" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" /></svg>
                      {cert.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        {data.volunteering && data.volunteering.length > 0 && (
          <>
            <div className="section-title" style={{fontSize:'0.85rem', color:'var(--heading-color)', textTransform:'uppercase', fontWeight:600, letterSpacing:'1px', marginBottom:'1rem', borderBottom:'1px solid var(--line-color)', paddingBottom:'0.4rem'}}>EXTRACURRICULARS & VOLUNTEERING</div>
            {data.volunteering.map((vol, i) => (
              <div key={i} className="volunteering-block" style={{marginBottom:'1rem'}}>
                <div className="vol-role" style={{fontWeight:500, fontSize:'0.95rem', color:'var(--primary-color)', marginBottom:'0.2rem'}}>{vol.role}</div>
                <div className="edu-details" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <div className="edu-school" style={{color:'var(--secondary-color)', fontSize:'0.85rem'}}>{vol.school}</div>
                  <div className="edu-meta" style={{display:'flex', gap:'15px', fontSize:'0.75rem', color:'var(--heading-color)'}}>
                    <span className="job-date" style={{display:'flex', alignItems:'center', gap:'5px'}}>
                      <svg className="icon" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" /></svg>
                      {vol.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        {data.customSections?.filter(cs => cs.column === 'right').map((cs, i) => (
          <React.Fragment key={`cs-right-${i}`}>
            <div className="section-title" style={{fontSize:'0.85rem', color:'var(--heading-color)', textTransform:'uppercase', fontWeight:600, letterSpacing:'1px', marginBottom:'1rem', borderBottom:'1px solid var(--line-color)', paddingBottom:'0.4rem'}}>{cs.title.toUpperCase()}</div>
            <div className="experience-section" style={{marginBottom:'2rem'}}>
              {cs.items.map((item, j) => (
                <div key={j} className="job-block" style={{marginBottom: '1rem'}}>
                  <div className="job-role" style={{fontWeight:500, fontSize:'1rem', color:'var(--primary-color)', marginBottom:'0.2rem'}}>{item.title}</div>
                  <div className="company-header" style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: '0.2rem'}}>
                    <div className="company-name" style={{color:'var(--secondary-color)', fontSize:'0.95rem', fontWeight:500}}>{item.subtitle}</div>
                    {item.date && (
                      <div className="job-date" style={{display:'flex', alignItems:'center', gap:'5px', fontSize:'0.75rem', color:'var(--heading-color)'}}>
                        <svg className="icon" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" /></svg>
                        {item.date}
                      </div>
                    )}
                  </div>
                  {item.points && item.points.length > 0 && item.points[0] !== "" && (
                    <ul style={{listStyleType:'disc', paddingLeft:'1.2rem', fontSize:'0.85rem', color:'#444'}}>
                      {item.points.map((pt, k) => <li key={k} style={{marginBottom:'0.3rem'}}>{pt}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}

      </div>
    </div>
  );
}

function ModernTemplate({ data }) {
  const sectionTitleStyle = { fontSize: '1.2rem', color: '#1f2937', borderBottom: '2px solid #3b82f6', paddingBottom: '0.3rem', marginBottom: '1.2rem', fontWeight: 'bold' };
  
  return (
    <div id="resume-content" className="template-modern" style={{ display: 'flex', flexDirection: 'column', background: '#fff', height: '100%', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      
      {/* HEADER */}
      <div style={{ background: '#1e3a8a', color: 'white', padding: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', margin: 0, fontWeight: 'bold', letterSpacing: '1px' }}>{data.name}</h1>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 300, marginTop: '10px', color: '#bfdbfe' }}>{data.jobTitle}</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', fontSize: '0.9rem', flexWrap: 'wrap' }}>
          {data.phone && <span>{data.phone}</span>}
          {data.email && <span>{data.email}</span>}
          {data.location && <span>{data.location}</span>}
          {data.linkedinUrl && <a href={data.linkedinUrl} style={{color: '#93c5fd', textDecoration: 'none'}}>{data.linkedin}</a>}
        </div>
      </div>

      <div style={{ padding: '40px' }}>
        
        {/* SUMMARY */}
        {data.summary && data.summary.trim() !== '' && (
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={sectionTitleStyle}>Professional Summary</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#4b5563' }}>{data.summary}</p>
          </div>
        )}

        <div style={{ display: 'flex', gap: '40px' }}>
          
          {/* LEFT CONTENT */}
          <div style={{ flex: '2' }}>
            {data.experience && data.experience.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={sectionTitleStyle}>Experience</h3>
                {data.experience.map((exp, i) => (
                  <div key={i} style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <strong style={{ fontSize: '1.1rem', color: '#111827' }}>{exp.role}</strong>
                      <span style={{ fontSize: '0.9rem', color: '#6b7280', fontWeight: 500 }}>{exp.date}</span>
                    </div>
                    <div style={{ color: '#3b82f6', fontWeight: 500, marginBottom: '0.5rem' }}>{exp.company}</div>
                    <ul style={{ listStyleType: 'circle', paddingLeft: '1.2rem', color: '#4b5563', fontSize: '0.9rem' }}>
                      {exp.points.map((pt, j) => <li key={j} style={{ marginBottom: '4px' }}>{pt}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {data.projects && data.projects.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={sectionTitleStyle}>Key Projects</h3>
                {data.projects.map((proj, i) => (
                  <div key={i} style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <strong style={{ fontSize: '1.1rem', color: '#111827' }}>{proj.title}</strong>
                      <span style={{ fontSize: '0.9rem', color: '#6b7280', fontWeight: 500 }}>{proj.date}</span>
                    </div>
                    <div style={{ color: '#3b82f6', fontWeight: 500, marginBottom: '0.5rem', fontSize: '0.9rem' }}>{proj.tech}</div>
                    <ul style={{ listStyleType: 'circle', paddingLeft: '1.2rem', color: '#4b5563', fontSize: '0.9rem' }}>
                      {proj.points.map((pt, j) => <li key={j} style={{ marginBottom: '4px' }}>{pt}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Custom Sections mapped to main column in Modern layout */}
            {(data.customSections || []).map((cs, i) => (
              <div key={`modern-cs-${i}`} style={{ marginBottom: '2rem' }}>
                <h3 style={sectionTitleStyle}>{cs.title}</h3>
                {cs.items.map((item, j) => (
                  <div key={j} style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <strong style={{ color: '#111827' }}>{item.title}</strong>
                      <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>{item.date}</span>
                    </div>
                    <div style={{ color: '#3b82f6', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.subtitle}</div>
                    {item.points && item.points.length > 0 && item.points[0] !== "" && (
                      <ul style={{ listStyleType: 'circle', paddingLeft: '1.2rem', color: '#4b5563', fontSize: '0.9rem' }}>
                        {item.points.map((pt, k) => <li key={k}>{pt}</li>)}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
          <div style={{ flex: '1' }}>
            {data.skills && data.skills.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={sectionTitleStyle}>Skills</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {data.skills.map((skill, i) => (
                    <span key={i} style={{ 
                      background: skill.highlighted ? '#eff6ff' : '#f3f4f6', 
                      color: skill.highlighted ? '#1d4ed8' : '#4b5563', 
                      border: skill.highlighted ? '1px solid #93c5fd' : '1px solid transparent',
                      padding: '4px 10px', 
                      borderRadius: '16px', 
                      fontSize: '0.85rem',
                      fontWeight: skill.highlighted ? 600 : 400
                    }}>
                      {skill.text}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {data.education && data.education.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={sectionTitleStyle}>Education</h3>
                {data.education.map((edu, i) => (
                  <div key={i} style={{ marginBottom: '1rem' }}>
                    <strong style={{ display: 'block', color: '#111827', fontSize: '0.95rem' }}>{edu.degree}</strong>
                    <span style={{ display: 'block', color: '#4b5563', fontSize: '0.9rem' }}>{edu.school}</span>
                    <span style={{ display: 'block', color: '#9ca3af', fontSize: '0.85rem' }}>{edu.date}</span>
                  </div>
                ))}
              </div>
            )}

            {data.certifications && data.certifications.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={sectionTitleStyle}>Certifications</h3>
                {data.certifications.map((cert, i) => (
                  <div key={i} style={{ marginBottom: '1rem' }}>
                    <strong style={{ display: 'block', color: '#111827', fontSize: '0.95rem' }}>{cert.role}</strong>
                    <span style={{ display: 'block', color: '#4b5563', fontSize: '0.9rem' }}>{cert.school}</span>
                  </div>
                ))}
              </div>
            )}
            
            {data.interests && data.interests.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={sectionTitleStyle}>Interests</h3>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                  {data.interests.map((int, i) => (
                    <li key={i} style={{ color: '#4b5563', fontSize: '0.9rem', marginBottom: '0.3rem' }}>• {int.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

function MinimalistTemplate({ data }) {
  const headingStyle = { fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#000', marginBottom: '1.2rem', borderBottom: '1px solid #000', paddingBottom: '0.5rem', fontWeight: 600 };
  
  return (
    <div id="resume-content" className="template-minimalist" style={{ display: 'block', padding: '50px 60px', background: '#fff', height: '100%', fontFamily: 'Georgia, serif', color: '#333' }}>
      
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 'normal', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '4px', color: '#111' }}>{data.name}</h1>
        <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#555', marginBottom: '15px' }}>{data.jobTitle}</p>
        <p style={{ fontSize: '0.95rem', color: '#666', letterSpacing: '0.5px' }}>
          {data.phone} &nbsp;|&nbsp; {data.email} &nbsp;|&nbsp; {data.location} &nbsp;|&nbsp; {data.linkedin}
        </p>
      </header>

      {data.summary && data.summary.trim() !== '' && (
        <section style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>{data.summary}</p>
        </section>
      )}

      {data.experience && data.experience.length > 0 && (
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={headingStyle}>Experience</h2>
          {data.experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.3rem' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{exp.role} — {exp.company}</span>
                <span style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>{exp.date}</span>
              </div>
              <ul style={{ listStyleType: 'square', paddingLeft: '1.2rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {exp.points.map((pt, j) => <li key={j}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </section>
      )}

      {data.projects && data.projects.length > 0 && (
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={headingStyle}>Selected Projects</h2>
          {data.projects.map((proj, i) => (
            <div key={i} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.3rem' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{proj.title} <span style={{fontWeight:'normal', fontSize:'0.9rem'}}>({proj.tech})</span></span>
                <span style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>{proj.date}</span>
              </div>
              <ul style={{ listStyleType: 'square', paddingLeft: '1.2rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {proj.points.map((pt, j) => <li key={j}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </section>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          {data.education && data.education.length > 0 && (
            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={headingStyle}>Education</h2>
              {data.education.map((edu, i) => (
                <div key={i} style={{ marginBottom: '1rem' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{edu.degree}</div>
                  <div style={{ fontSize: '0.95rem' }}>{edu.school}</div>
                  <div style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#666' }}>{edu.date}</div>
                </div>
              ))}
            </section>
          )}
          
          {(data.customSections || []).map((cs, i) => (
            <section key={i} style={{ marginBottom: '2.5rem' }}>
              <h2 style={headingStyle}>{cs.title}</h2>
              {cs.items.map((item, j) => (
                <div key={j} style={{ marginBottom: '1rem' }}>
                  <div style={{ fontWeight: 'bold' }}>{item.title}</div>
                  <div style={{ fontSize: '0.95rem' }}>{item.subtitle}</div>
                  {item.points && item.points.length > 0 && item.points[0] !== "" && (
                    <ul style={{ listStyleType: 'square', paddingLeft: '1.2rem', fontSize: '0.95rem', marginTop: '0.3rem' }}>
                      {item.points.map((pt, k) => <li key={k}>{pt}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          ))}
        </div>
        
        <div>
          {data.skills && data.skills.length > 0 && (
            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={headingStyle}>Skills</h2>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {data.skills.map((skill, i) => (
                  <li key={i} style={{ fontSize: '0.95rem', marginBottom: '0.3rem' }}>
                    {skill.highlighted ? <strong>{skill.text}</strong> : skill.text}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {data.certifications && data.certifications.length > 0 && (
            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={headingStyle}>Certifications</h2>
              {data.certifications.map((cert, i) => (
                <div key={i} style={{ marginBottom: '0.8rem' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>{cert.role}</div>
                  <div style={{ fontSize: '0.9rem' }}>{cert.school}</div>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ResumePreview({ data }) {
  if (data.template === 'modern') {
    return <ModernTemplate data={data} />;
  }
  if (data.template === 'minimalist') {
    return <MinimalistTemplate data={data} />;
  }
  return <ClassicTemplate data={data} />;
}
