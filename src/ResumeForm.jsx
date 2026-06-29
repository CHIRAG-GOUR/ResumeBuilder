import React from 'react';

export default function ResumeForm({ data, setData, onGenerate }) {

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (e, index, arrayName, field) => {
    const newArray = [...data[arrayName]];
    newArray[index][field] = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setData({ ...data, [arrayName]: newArray });
  };

  const handlePointsChange = (e, index, arrayName) => {
    const newArray = [...data[arrayName]];
    newArray[index].points = e.target.value.split('\n');
    setData({ ...data, [arrayName]: newArray });
  };

  const addArrayItem = (arrayName, emptyItem) => {
    setData({ ...data, [arrayName]: [...(data[arrayName] || []), emptyItem] });
  };

  const removeArrayItem = (arrayName, index) => {
    const newArray = [...(data[arrayName] || [])];
    newArray.splice(index, 1);
    setData({ ...data, [arrayName]: newArray });
  };

  const handleCustomSectionChange = (e, index, field) => {
    const newSections = [...(data.customSections || [])];
    newSections[index][field] = e.target.value;
    setData({ ...data, customSections: newSections });
  };

  const handleCustomItemChange = (e, sectionIndex, itemIndex, field) => {
    const newSections = [...(data.customSections || [])];
    newSections[sectionIndex].items[itemIndex][field] = e.target.value;
    setData({ ...data, customSections: newSections });
  };

  const handleCustomPointsChange = (e, sectionIndex, itemIndex) => {
    const newSections = [...(data.customSections || [])];
    newSections[sectionIndex].items[itemIndex].points = e.target.value.split('\n');
    setData({ ...data, customSections: newSections });
  };

  const addCustomSection = () => {
    const newSections = [...(data.customSections || [])];
    newSections.push({ title: "NEW CUSTOM SECTION", column: "right", items: [] });
    setData({ ...data, customSections: newSections });
  };

  const removeCustomSection = (index) => {
    const newSections = [...(data.customSections || [])];
    newSections.splice(index, 1);
    setData({ ...data, customSections: newSections });
  };

  const addCustomItem = (sectionIndex) => {
    const newSections = [...(data.customSections || [])];
    newSections[sectionIndex].items.push({ title: "Item Title", subtitle: "", date: "", points: [] });
    setData({ ...data, customSections: newSections });
  };

  const removeCustomItem = (sectionIndex, itemIndex) => {
    const newSections = [...(data.customSections || [])];
    newSections[sectionIndex].items.splice(itemIndex, 1);
    setData({ ...data, customSections: newSections });
  };

  const sectionStyle = {
    marginBottom: '30px',
    padding: '20px',
    background: '#f9fafb',
    borderRadius: '8px',
    border: '1px solid #e5e7eb'
  };

  const labelStyle = { fontWeight: 600, fontSize: '0.9rem', color: '#374151', display: 'block', marginBottom: '5px' };
  const inputStyle = { width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db', marginBottom: '15px' };
  const btnStyle = { padding: '8px 16px', background: '#e5e7eb', borderRadius: '6px', cursor: 'pointer', border: 'none', fontSize: '0.9rem', marginBottom: '15px' };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f3f4f6', fontFamily: 'Inter, sans-serif', padding: '40px' }}>
      <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'left', width: '100%', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '2rem', color: '#111827', marginBottom: '16px', textAlign: 'center' }}>Advanced Resume Builder</h1>
        <p style={{ color: '#4b5563', marginBottom: '32px', lineHeight: '1.6', textAlign: 'center' }}>
          Configure every section of your resume. The template dynamically adapts to your data.
        </p>

        <div style={sectionStyle}>
          <h2 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#1f2937'}}>Personal Details</h2>
          <label style={labelStyle}>Full Name</label><input name="name" value={data.name} onChange={handleChange} style={inputStyle} />
          <label style={labelStyle}>Job Title</label><input name="jobTitle" value={data.jobTitle} onChange={handleChange} style={inputStyle} />
          <div style={{display:'flex', gap:'16px'}}>
            <div style={{flex:1}}><label style={labelStyle}>Phone</label><input name="phone" value={data.phone} onChange={handleChange} style={inputStyle} /></div>
            <div style={{flex:1}}><label style={labelStyle}>Email</label><input name="email" value={data.email} onChange={handleChange} style={inputStyle} /></div>
          </div>
          <div style={{display:'flex', gap:'16px'}}>
            <div style={{flex:1}}><label style={labelStyle}>LinkedIn Name</label><input name="linkedin" value={data.linkedin} onChange={handleChange} style={inputStyle} /></div>
            <div style={{flex:1}}><label style={labelStyle}>LinkedIn URL</label><input name="linkedinUrl" value={data.linkedinUrl} onChange={handleChange} style={inputStyle} /></div>
          </div>
          <label style={labelStyle}>Location</label><input name="location" value={data.location} onChange={handleChange} style={inputStyle} />
          <label style={labelStyle}>Professional Summary</label><textarea name="summary" value={data.summary} onChange={handleChange} rows="5" style={{...inputStyle, fontFamily: 'inherit'}} />
        </div>

        <div style={sectionStyle}>
          <h2 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#1f2937'}}>Skills (Check to Highlight)</h2>
          {data.skills.map((skill, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
              <input type="checkbox" checked={skill.highlighted} onChange={(e) => handleArrayChange(e, i, 'skills', 'highlighted')} style={{width: '20px', height: '20px'}} />
              <input value={skill.text} onChange={(e) => handleArrayChange(e, i, 'skills', 'text')} style={{...inputStyle, marginBottom: 0}} />
              <button onClick={() => removeArrayItem('skills', i)} style={{background: '#ef4444', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer'}}>X</button>
            </div>
          ))}
          <button onClick={() => addArrayItem('skills', { text: "New Skill", highlighted: false })} style={{...btnStyle, marginTop: '10px'}}>+ Add Skill</button>
        </div>

        <div style={sectionStyle}>
          <h2 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#1f2937'}}>Interests</h2>
          {data.interests.map((int, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
              <select value={int.icon} onChange={(e) => handleArrayChange(e, i, 'interests', 'icon')} style={{...inputStyle, width: '120px', marginBottom: 0}}>
                <option value="gym">Gym</option>
                <option value="cricket">Cricket</option>
                <option value="boxing">Boxing</option>
                <option value="tech">Tech</option>
                <option value="default">Default</option>
              </select>
              <input value={int.name} onChange={(e) => handleArrayChange(e, i, 'interests', 'name')} style={{...inputStyle, marginBottom: 0}} />
              <button onClick={() => removeArrayItem('interests', i)} style={{background: '#ef4444', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer'}}>X</button>
            </div>
          ))}
          <button onClick={() => addArrayItem('interests', { name: "New Interest", icon: "default" })} style={{...btnStyle, marginTop: '10px'}}>+ Add Interest</button>
        </div>

        <div style={sectionStyle}>
          <h2 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#1f2937'}}>Projects</h2>
          {data.projects.map((proj, i) => (
            <div key={i} style={{ border: '1px solid #d1d5db', padding: '15px', borderRadius: '6px', marginBottom: '15px', background: '#fff' }}>
              <label style={labelStyle}>Title</label><input value={proj.title} onChange={(e) => handleArrayChange(e, i, 'projects', 'title')} style={inputStyle} />
              <div style={{display:'flex', gap:'16px'}}>
                <div style={{flex:1}}><label style={labelStyle}>Link Text (e.g. Live ↗)</label><input value={proj.linkText} onChange={(e) => handleArrayChange(e, i, 'projects', 'linkText')} style={inputStyle} /></div>
                <div style={{flex:1}}><label style={labelStyle}>Link URL</label><input value={proj.linkUrl} onChange={(e) => handleArrayChange(e, i, 'projects', 'linkUrl')} style={inputStyle} /></div>
              </div>
              <div style={{display:'flex', gap:'16px'}}>
                <div style={{flex:1}}><label style={labelStyle}>Date</label><input value={proj.date} onChange={(e) => handleArrayChange(e, i, 'projects', 'date')} style={inputStyle} /></div>
                <div style={{flex:1}}><label style={labelStyle}>Technologies</label><input value={proj.tech} onChange={(e) => handleArrayChange(e, i, 'projects', 'tech')} style={inputStyle} /></div>
              </div>
              <label style={labelStyle}>Bullet Points (One per line)</label>
              <textarea value={proj.points.join('\n')} onChange={(e) => handlePointsChange(e, i, 'projects')} rows="4" style={{...inputStyle, fontFamily: 'inherit'}} />
              <button onClick={() => removeArrayItem('projects', i)} style={{background: '#ef4444', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer'}}>Remove Project</button>
            </div>
          ))}
          <button onClick={() => addArrayItem('projects', { title: "New Project", linkText: "", linkUrl: "", date: "", tech: "", points: ["Details here"] })} style={btnStyle}>+ Add Project</button>
        </div>

        <div style={sectionStyle}>
          <h2 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#1f2937'}}>Experience</h2>
          {data.experience.map((exp, i) => (
            <div key={i} style={{ border: '1px solid #d1d5db', padding: '15px', borderRadius: '6px', marginBottom: '15px', background: '#fff' }}>
              <div style={{display:'flex', gap:'16px'}}>
                <div style={{flex:1}}><label style={labelStyle}>Role</label><input value={exp.role} onChange={(e) => handleArrayChange(e, i, 'experience', 'role')} style={inputStyle} /></div>
                <div style={{flex:1}}><label style={labelStyle}>Company</label><input value={exp.company} onChange={(e) => handleArrayChange(e, i, 'experience', 'company')} style={inputStyle} /></div>
              </div>
              <label style={labelStyle}>Date</label><input value={exp.date} onChange={(e) => handleArrayChange(e, i, 'experience', 'date')} style={inputStyle} />
              <label style={labelStyle}>Bullet Points (One per line)</label>
              <textarea value={exp.points.join('\n')} onChange={(e) => handlePointsChange(e, i, 'experience')} rows="4" style={{...inputStyle, fontFamily: 'inherit'}} />
              <button onClick={() => removeArrayItem('experience', i)} style={{background: '#ef4444', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer'}}>Remove Experience</button>
            </div>
          ))}
          <button onClick={() => addArrayItem('experience', { role: "New Role", company: "", date: "", points: ["Details here"] })} style={btnStyle}>+ Add Experience</button>
        </div>

        <div style={sectionStyle}>
          <h2 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#1f2937'}}>Education</h2>
          {data.education.map((edu, i) => (
            <div key={i} style={{ border: '1px solid #d1d5db', padding: '15px', borderRadius: '6px', marginBottom: '15px', background: '#fff' }}>
              <label style={labelStyle}>Degree/Certification</label><input value={edu.degree} onChange={(e) => handleArrayChange(e, i, 'education', 'degree')} style={inputStyle} />
              <div style={{display:'flex', gap:'16px'}}>
                <div style={{flex:1}}><label style={labelStyle}>School/Institution</label><input value={edu.school} onChange={(e) => handleArrayChange(e, i, 'education', 'school')} style={inputStyle} /></div>
                <div style={{flex:1}}><label style={labelStyle}>Date</label><input value={edu.date} onChange={(e) => handleArrayChange(e, i, 'education', 'date')} style={inputStyle} /></div>
              </div>
              <button onClick={() => removeArrayItem('education', i)} style={{background: '#ef4444', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer'}}>Remove Education</button>
            </div>
          ))}
          <button onClick={() => addArrayItem('education', { degree: "New Degree", school: "", date: "" })} style={btnStyle}>+ Add Education</button>
        </div>

        <div style={sectionStyle}>
          <h2 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#1f2937'}}>Extra Projects & Live Links</h2>
          {data.extraProjects.map((ep, i) => (
            <div key={i} style={{ border: '1px solid #d1d5db', padding: '15px', borderRadius: '6px', marginBottom: '15px', background: '#fff' }}>
              <div style={{display:'flex', gap:'16px'}}>
                <div style={{flex:1}}><label style={labelStyle}>Title</label><input value={ep.title} onChange={(e) => handleArrayChange(e, i, 'extraProjects', 'title')} style={inputStyle} /></div>
                <div style={{flex:1}}><label style={labelStyle}>Link URL (Optional)</label><input value={ep.linkUrl} onChange={(e) => handleArrayChange(e, i, 'extraProjects', 'linkUrl')} style={inputStyle} /></div>
              </div>
              <label style={labelStyle}>Description</label><input value={ep.desc} onChange={(e) => handleArrayChange(e, i, 'extraProjects', 'desc')} style={inputStyle} />
              <button onClick={() => removeArrayItem('extraProjects', i)} style={{background: '#ef4444', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer'}}>Remove Extra Project</button>
            </div>
          ))}
          <button onClick={() => addArrayItem('extraProjects', { title: "New Project", linkUrl: "", desc: "" })} style={btnStyle}>+ Add Extra Project</button>
        </div>

        <div style={sectionStyle}>
          <h2 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#1f2937'}}>Certifications</h2>
          {data.certifications.map((cert, i) => (
            <div key={i} style={{ border: '1px solid #d1d5db', padding: '15px', borderRadius: '6px', marginBottom: '15px', background: '#fff' }}>
              <label style={labelStyle}>Certification Name</label><input value={cert.role} onChange={(e) => handleArrayChange(e, i, 'certifications', 'role')} style={inputStyle} />
              <div style={{display:'flex', gap:'16px'}}>
                <div style={{flex:1}}><label style={labelStyle}>Institution</label><input value={cert.school} onChange={(e) => handleArrayChange(e, i, 'certifications', 'school')} style={inputStyle} /></div>
                <div style={{flex:1}}><label style={labelStyle}>Date</label><input value={cert.date} onChange={(e) => handleArrayChange(e, i, 'certifications', 'date')} style={inputStyle} /></div>
              </div>
              <button onClick={() => removeArrayItem('certifications', i)} style={{background: '#ef4444', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer'}}>Remove Certification</button>
            </div>
          ))}
          <button onClick={() => addArrayItem('certifications', { role: "New Cert", school: "", date: "" })} style={btnStyle}>+ Add Certification</button>
        </div>

        <div style={sectionStyle}>
          <h2 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#1f2937'}}>Volunteering / Extracurriculars</h2>
          {data.volunteering.map((vol, i) => (
            <div key={i} style={{ border: '1px solid #d1d5db', padding: '15px', borderRadius: '6px', marginBottom: '15px', background: '#fff' }}>
              <label style={labelStyle}>Role</label><input value={vol.role} onChange={(e) => handleArrayChange(e, i, 'volunteering', 'role')} style={inputStyle} />
              <div style={{display:'flex', gap:'16px'}}>
                <div style={{flex:1}}><label style={labelStyle}>Description</label><input value={vol.school} onChange={(e) => handleArrayChange(e, i, 'volunteering', 'school')} style={inputStyle} /></div>
                <div style={{flex:1}}><label style={labelStyle}>Date/Type</label><input value={vol.date} onChange={(e) => handleArrayChange(e, i, 'volunteering', 'date')} style={inputStyle} /></div>
              </div>
              <button onClick={() => removeArrayItem('volunteering', i)} style={{background: '#ef4444', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer'}}>Remove Item</button>
            </div>
          ))}
          <button onClick={() => addArrayItem('volunteering', { role: "New Role", school: "", date: "" })} style={btnStyle}>+ Add Item</button>
        </div>

        <div style={sectionStyle}>
          <h2 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#1f2937'}}>Custom Sections</h2>
          <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '15px' }}>Add entirely new sections to your resume. You can choose whether they appear on the left or right column.</p>
          
          {(data.customSections || []).map((cs, i) => (
            <div key={i} style={{ border: '2px solid #3b82f6', padding: '15px', borderRadius: '6px', marginBottom: '15px', background: '#eff6ff' }}>
              <div style={{display:'flex', gap:'16px'}}>
                <div style={{flex:2}}><label style={labelStyle}>Section Title</label><input value={cs.title} onChange={(e) => handleCustomSectionChange(e, i, 'title')} style={inputStyle} /></div>
                <div style={{flex:1}}>
                  <label style={labelStyle}>Column</label>
                  <select value={cs.column} onChange={(e) => handleCustomSectionChange(e, i, 'column')} style={inputStyle}>
                    <option value="left">Left Column</option>
                    <option value="right">Right Column</option>
                  </select>
                </div>
              </div>
              
              <div style={{ marginTop: '10px' }}>
                <label style={labelStyle}>Section Items</label>
                {cs.items.map((item, j) => (
                  <div key={j} style={{ border: '1px solid #93c5fd', padding: '10px', borderRadius: '6px', marginBottom: '10px', background: '#fff' }}>
                    <div style={{display:'flex', gap:'10px'}}>
                      <div style={{flex:1}}><input placeholder="Item Title (e.g. Role)" value={item.title} onChange={(e) => handleCustomItemChange(e, i, j, 'title')} style={inputStyle} /></div>
                      <div style={{flex:1}}><input placeholder="Subtitle (e.g. Company)" value={item.subtitle} onChange={(e) => handleCustomItemChange(e, i, j, 'subtitle')} style={inputStyle} /></div>
                      <div style={{flex:1}}><input placeholder="Date" value={item.date} onChange={(e) => handleCustomItemChange(e, i, j, 'date')} style={inputStyle} /></div>
                    </div>
                    <textarea placeholder="Bullet points (one per line)" value={item.points.join('\n')} onChange={(e) => handleCustomPointsChange(e, i, j)} rows="3" style={{...inputStyle, fontFamily: 'inherit'}} />
                    <button onClick={() => removeCustomItem(i, j)} style={{background: '#ef4444', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem'}}>Remove Item</button>
                  </div>
                ))}
                <button onClick={() => addCustomItem(i)} style={{...btnStyle, background: '#bfdbfe', color: '#1e3a8a'}}>+ Add Item to {cs.title}</button>
              </div>

              <div style={{ marginTop: '15px', textAlign: 'right' }}>
                <button onClick={() => removeCustomSection(i)} style={{background: '#ef4444', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer'}}>Remove Entire Section</button>
              </div>
            </div>
          ))}
          <button onClick={addCustomSection} style={{...btnStyle, background: '#3b82f6', color: '#fff'}}>+ Create New Custom Section</button>
        </div>

        <button 
          onClick={onGenerate}
          style={{ width: '100%', backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '16px', fontSize: '1.2rem', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', marginTop: '10px', transition: '0.2s' }}>
          Generate Resume
        </button>
      </div>
    </div>
  );
}
