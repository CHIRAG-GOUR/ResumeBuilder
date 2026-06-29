import React from 'react';

const icons = {
  gym: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43 1.43-1.43-1.43-1.43z" />
    </svg>
  ),
  cricket: (
    <img src="/cricket.png" alt="Cricket" style={{ width: '18px', height: '18px', objectFit: 'contain', filter: 'invert(31%) sepia(85%) saturate(2404%) hue-rotate(210deg) brightness(97%) contrast(92%)' }} />
  ),
  boxing: (
    <img src="/boxing.png" alt="Boxing" style={{ width: '18px', height: '18px', objectFit: 'contain', filter: 'invert(31%) sepia(85%) saturate(2404%) hue-rotate(210deg) brightness(97%) contrast(92%)' }} />
  ),
  tech: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </svg>
  ),
  default: (
    <svg className="icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
  )
};

export default function ResumePreview({ data }) {
  return (
    <div id="resume-content">
      {/* LEFT COLUMN */}
      <div className="left-col">
        <h1 className="name">{data.name}</h1>
        <div className="job-title">{data.jobTitle}</div>

        <ul className="contact-info">
          <li>
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.2-.6-2.4-.6-3.6 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.8-3.9-8.7-8.7-8.7v2c3.7 0 6.7 3 6.7 6.7z" />
            </svg>
            {data.phone}
          </li>
          <li>
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
            </svg>
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </li>
          <li>
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <a href={data.linkedinUrl} style={{ color: 'var(--secondary-color)', fontWeight: 600 }}>{data.linkedin}</a>
          </li>
          <li>
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            {data.location}
          </li>
        </ul>

        {data.skills && data.skills.length > 0 && (
          <>
            <div className="section-title">SKILLS</div>
            <div className="skills-container">
              {data.skills.map((skill, i) => (
                <span key={i} className={`skill-item ${skill.highlighted ? 'highlighted-skill' : ''}`}>
                  {skill.text}
                </span>
              ))}
            </div>
          </>
        )}

        {data.projects && data.projects.length > 0 && (
          <>
            <div className="section-title">PROJECTS <span style={{ textTransform: 'none', fontWeight: 400 }}>&nbsp;Full-Stack & UI</span></div>
            <div className="projects-section">
              {data.projects.map((proj, i) => (
                <div key={i} className="project-block">
                  <div className="project-name">
                    <a href={proj.linkUrl} target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                      {proj.title} {proj.linkText && <span style={{fontSize:'0.75rem', color:'var(--secondary-color)', fontWeight:500, verticalAlign:'middle'}}>({proj.linkText})</span>}
                    </a>
                  </div>
                  <div className="project-date">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                    </svg>
                    {proj.date}
                  </div>
                  <div className="project-tech">{proj.tech}</div>
                  <ul>
                    {proj.points.map((pt, j) => <li key={j}>{pt}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

        {data.interests && data.interests.length > 0 && (
          <>
            <div className="section-title">OTHER INTERESTS</div>
            <ul className="interests-list">
              {data.interests.map((int, i) => (
                <li key={i}>
                  <div className="interest-icon-box">
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
            <div className="section-title">{cs.title.toUpperCase()}</div>
            <div className="experience-section">
              {cs.items.map((item, j) => (
                <div key={j} className="job-block" style={{marginBottom: '1rem'}}>
                  <div className="job-role">{item.title}</div>
                  <div className="company-header" style={{marginBottom: '0.2rem'}}>
                    <div className="company-name">{item.subtitle}</div>
                    {item.date && (
                      <div className="job-date">
                        <svg className="icon" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" /></svg>
                        {item.date}
                      </div>
                    )}
                  </div>
                  {item.points && item.points.length > 0 && item.points[0] !== "" && (
                    <ul>
                      {item.points.map((pt, k) => <li key={k}>{pt}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* RIGHT COLUMN */}
      <div className="right-col">
        {data.summary && data.summary.trim() !== '' && (
          <>
            <div className="section-title">SUMMARY</div>
            <p className="summary-text">{data.summary}</p>
          </>
        )}

        {data.experience && data.experience.length > 0 && (
          <>
            <div className="section-title">EXPERIENCE</div>
            <div className="experience-section">
              {data.experience.map((exp, i) => (
                <div key={i} className="job-block">
                  <div className="job-role">{exp.role}</div>
                  <div className="company-header">
                    <div className="company-name">{exp.company}</div>
                    <div className="job-date">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                      </svg>
                      {exp.date}
                    </div>
                  </div>
                  <ul>
                    {exp.points.map((pt, j) => <li key={j}>{pt}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

        {data.education && data.education.length > 0 && (
          <>
            <div className="section-title">EDUCATION</div>
            <div className="education-section">
              {data.education.map((edu, i) => (
                <div key={i} className="edu-block">
                  <div className="edu-degree">{edu.degree}</div>
                  <div className="edu-details">
                    <div className="edu-school">{edu.school}</div>
                    <div className="edu-meta">
                      <span className="job-date">
                        <svg className="icon" viewBox="0 0 24 24">
                          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                        </svg>
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
            <div className="section-title">EXTRA PROJECTS & LIVE LINKS</div>
            <div className="experience-section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '1.5rem' }}>
              {data.extraProjects.map((ep, i) => (
                <div key={i} className="job-block" style={{ marginBottom: 0 }}>
                  <div className="company-header" style={{ marginBottom: '0.1rem' }}>
                    <div className="job-role" style={{ color: 'var(--primary-color)', fontSize: '0.9rem' }}>
                      {ep.linkUrl ? (
                        <a href={ep.linkUrl} target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                          {ep.title} <span style={{fontSize:'0.7rem', color:'var(--secondary-color)'}}>(Live ↗)</span>
                        </a>
                      ) : (
                        <span>{ep.title}</span>
                      )}
                    </div>
                  </div>
                  <div className="edu-school" style={{ fontSize: '0.75rem', lineHeight: '1.2' }}>{ep.desc}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {data.certifications && data.certifications.length > 0 && (
          <>
            <div className="section-title">ACHIEVEMENTS & CERTIFICATIONS</div>
            {data.certifications.map((cert, i) => (
              <div key={i} className="volunteering-block">
                <div className="vol-role">{cert.role}</div>
                <div className="edu-details">
                  <div className="edu-school">{cert.school}</div>
                  <div className="edu-meta">
                    <span className="job-date">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                      </svg>
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
            <div className="section-title">EXTRACURRICULARS & VOLUNTEERING</div>
            {data.volunteering.map((vol, i) => (
              <div key={i} className="volunteering-block">
                <div className="vol-role">{vol.role}</div>
                <div className="edu-details">
                  <div className="edu-school">{vol.school}</div>
                  <div className="edu-meta">
                    <span className="job-date">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                      </svg>
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
            <div className="section-title">{cs.title.toUpperCase()}</div>
            <div className="experience-section">
              {cs.items.map((item, j) => (
                <div key={j} className="job-block" style={{marginBottom: '1rem'}}>
                  <div className="job-role">{item.title}</div>
                  <div className="company-header" style={{marginBottom: '0.2rem'}}>
                    <div className="company-name">{item.subtitle}</div>
                    {item.date && (
                      <div className="job-date">
                        <svg className="icon" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" /></svg>
                        {item.date}
                      </div>
                    )}
                  </div>
                  {item.points && item.points.length > 0 && item.points[0] !== "" && (
                    <ul>
                      {item.points.map((pt, k) => <li key={k}>{pt}</li>)}
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
