import React, { useEffect, useState } from 'react';

export default function JobModal({ data, onClose }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const apiKey = import.meta.env.VITE_GROQ_API_KEY;
        if (!apiKey) {
          throw new Error('API key is missing. Please add VITE_GROQ_API_KEY to your environment variables.');
        }
        
        // Strip out unnecessary heavy data for the prompt
        const resumeData = {
          title: data.jobTitle,
          skills: data.skills?.map(s => s.text),
          experience: data.experience?.map(e => ({ role: e.role, company: e.company, desc: e.points?.join(" ") })),
          projects: data.projects?.map(p => ({ title: p.title, tech: p.tech })),
          education: data.education?.map(e => ({ degree: e.degree }))
        };

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: [
              {
                role: "system",
                content: `You are an expert tech recruiter. Analyze the following resume data and suggest 10 highly relevant job roles at specific top companies that match the candidate's skills and experience. 
                Return ONLY a JSON object with this structure: {"jobs": [{"title": "Frontend Engineer", "company": "Vercel", "reason": "Matches React and Next.js skills"}]}`
              },
              {
                role: "user",
                content: JSON.stringify(resumeData)
              }
            ],
            response_format: { type: "json_object" }
          })
        });

        if (!response.ok) {
          throw new Error('Failed to fetch recommendations');
        }

        const result = await response.json();
        const content = JSON.parse(result.choices[0].message.content);
        setJobs(content.jobs || []);
      } catch (err) {
        console.error(err);
        setError("Unable to load recommendations at this time.");
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, [data]);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      zIndex: 9999, padding: '20px'
    }}>
      <div style={{
        background: '#fff', width: '100%', maxWidth: '800px', maxHeight: '85vh',
        borderRadius: '12px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        display: 'flex', flexDirection: 'column', overflow: 'hidden'
      }}>
        <div style={{
          padding: '24px 32px', borderBottom: '1px solid #e5e7eb',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: '#f8fafc'
        }}>
          <h2 style={{ margin: 0, color: '#1e293b', fontSize: '1.5rem', fontWeight: 'bold' }}>
            Recommended Opportunities
          </h2>
          <button onClick={onClose} style={{
            background: 'none', border: 'none', fontSize: '1.5rem',
            color: '#64748b', cursor: 'pointer', padding: '4px'
          }}>×</button>
        </div>

        <div style={{ padding: '32px', overflowY: 'auto', flex: 1 }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{
                width: '40px', height: '40px', border: '4px solid #e2e8f0',
                borderTopColor: '#3b82f6', borderRadius: '50%',
                animation: 'spin 1s linear infinite', margin: '0 auto 16px'
              }}></div>
              <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
              <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Analyzing profile for the best matches...</p>
            </div>
          ) : error ? (
            <div style={{ textAlign: 'center', color: '#ef4444', padding: '20px' }}>
              <p>{error}</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
              {jobs.map((job, idx) => (
                <div key={idx} style={{
                  border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px',
                  background: '#fff', transition: 'box-shadow 0.2s',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#0f172a' }}>{job.title}</h3>
                  </div>
                  <div style={{ color: '#3b82f6', fontWeight: 600, fontSize: '0.95rem', marginBottom: '12px' }}>
                    {job.company}
                  </div>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#475569', lineHeight: '1.5' }}>
                    {job.reason}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div style={{ padding: '16px 32px', borderTop: '1px solid #e5e7eb', background: '#f8fafc', textAlign: 'right' }}>
          <button onClick={onClose} style={{
            background: '#3b82f6', color: 'white', border: 'none',
            padding: '10px 24px', borderRadius: '6px', fontWeight: 600,
            cursor: 'pointer'
          }}>Close</button>
        </div>
      </div>
    </div>
  );
}
