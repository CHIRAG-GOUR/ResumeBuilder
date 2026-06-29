import React, { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { initialData } from './data';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';

function App() {
  const [view, setView] = useState('home');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const contentRef = useRef(null);

  // Load from local storage if available on mount (for persistent edits)
  useEffect(() => {
    const savedData = localStorage.getItem('resumeFormData');
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
      } catch (e) {
        console.error("Failed to parse saved resume data");
      }
    }
  }, []);

  // Sync data to local storage
  useEffect(() => {
    localStorage.setItem('resumeFormData', JSON.stringify(formData));
  }, [formData]);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const generatePDF = async () => {
    const element = document.getElementById('resume-content');
    if (!element) return;
    
    // Briefly remove the edit outline for export if it's on
    const wasEditing = isEditing;
    if (wasEditing) setIsEditing(false);

    // Wait a tick for react to remove the outline
    await new Promise(r => setTimeout(r, 100));

    const canvas = await html2canvas(element, { 
      scale: 2, 
      useCORS: true 
    });
    
    if (wasEditing) setIsEditing(true);

    const imgData = canvas.toDataURL('image/jpeg', 0.98);
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    
    // Add margins to prevent edge-to-edge stretching
    const margin = 40; // 40px margin on all sides
    const pdfWidth = canvasWidth + (margin * 2);
    const pdfHeight = canvasHeight + (margin * 2);
    
    const pdf = new jsPDF({
      orientation: pdfWidth > pdfHeight ? 'landscape' : 'portrait',
      unit: 'px',
      format: [pdfWidth, pdfHeight]
    });
    
    pdf.addImage(imgData, 'JPEG', margin, margin, canvasWidth, canvasHeight);
    pdf.save(`${formData.name.replace(/\s+/g, '_')}_Resume.pdf`);
  };

  const downloadJPG = async () => {
    const element = document.getElementById('resume-content');
    if (!element) return;
    
    const wasEditing = isEditing;
    if (wasEditing) setIsEditing(false);
    await new Promise(r => setTimeout(r, 100));

    const canvas = await html2canvas(element, { 
      scale: 3, 
      useCORS: true 
    });
    
    if (wasEditing) setIsEditing(true);

    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    const link = document.createElement('a');
    link.href = imgData;
    link.download = `${formData.name.replace(/\s+/g, '_')}_Resume.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (view === 'home') {
    return (
      <ResumeForm 
        data={formData} 
        setData={setFormData} 
        onGenerate={() => setView('resume')} 
      />
    );
  }

  return (
    <div className="App">
      <div className="toolbar" style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <button className="export-btn" onClick={() => setView('home')} style={{ backgroundColor: '#6b7280' }}>← Edit Data in Form</button>
        <button className="export-btn" onClick={generatePDF}>Export PDF (With Margins)</button>
        <button className="export-btn" onClick={downloadJPG} style={{ backgroundColor: '#10b981' }}>Export JPG</button>
        <button className="export-btn" onClick={toggleEdit} style={{ backgroundColor: isEditing ? '#ef4444' : '#f59e0b' }}>
          {isEditing ? 'Save Manual Changes' : 'Live Edit (Typing Mode)'}
        </button>
      </div>

      <div className="resume-wrapper">
        <div 
          ref={contentRef}
          contentEditable={isEditing} 
          suppressContentEditableWarning={true} 
          style={{ 
            outline: isEditing ? '2px dashed #f59e0b' : 'none', 
            cursor: isEditing ? 'text' : 'default',
            width: '100%',
            height: '100%'
          }}
        >
          <ResumePreview data={formData} />
        </div>
      </div>
    </div>
  );
}

export default App;
