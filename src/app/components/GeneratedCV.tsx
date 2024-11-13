import React, { useRef, useEffect, useState } from "react";

interface GeneratedCVProps {
    formData: {
        fname: string;
        lname: string;
        email: string;
        phone: string;
        city: string;
        country: string;
        about?: string;
        education: { institution: string; type: string; years?: string; field: string }[];
        experience: { company: string; position: string; years: string; description: string }[];
        skills: string[];
    };
}




const GeneratedCV: React.FC<GeneratedCVProps> = ({ formData }) => {
    const cvRef = useRef<HTMLDivElement>(null);
    const [html2pdf, setHtml2pdf] = useState<any>(null);

    useEffect(() => {
        import("html2pdf.js").then((module) => {
            setHtml2pdf(() => module.default);
        });
    }, []);

    const handleDownload = () => {
        console.log("Download button clicked");
        const element = cvRef.current;
        console.log("cvRef current:", element);
        
        if (element && html2pdf) {
            const opt = {
                margin: 1,
                filename: 'resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } 
            };
            if (typeof html2pdf !== 'function') {
                console.error("html2pdf is not a function");
                return;
            }
            html2pdf().from(element).set(opt).save();
        } else {
            console.log("Element or html2pdf not available");
        }
    };
    return (
        <div>
            <h1 id="resume" className="title">
                Generated resume
            </h1>
            <button onClick={handleDownload} className="download-btn">
                Download Resume
            </button>
            <div className="generated-cv" ref={cvRef}>
                <div className="cv-header">
                    <h1>
                        {formData.fname} {formData.lname}
                    </h1>
                    <p>
                        Email: {formData.email} | Phone: {formData.phone} | Location: {formData.city}, {formData.country}
                    </p>
                </div>

                <div className="cv-content">
                    <div className="cv-left">
                        <div className="cv-skills">
                            <h3 className="section-title">Skills</h3>
                            <ul>
                                {formData.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="cv-right">
                        <div className="cv-profile">
                            <h3 className="section-title">About</h3>
                            <p>{formData.about}</p>
                        </div>

                        <div className="cv-education">
                            <h3 className="section-title">Education</h3>
                            {formData.education.map((edu, index) => (
                                <div key={index} className="education-item">
                                    <h4>{edu.institution}</h4>
                                    <p>
                                        <strong>Type:</strong> {edu.type}
                                    </p>
                                    <p>
                                        <strong>Years:</strong> {edu.years}
                                    </p>
                                    <p>
                                        <strong>Field:</strong> {edu.field}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="cv-experience">
                            <h3 className="section-title">Experience</h3>
                            {formData.experience.map((exp, index) => (
                                <div key={index} className="experience-item">
                                    <h4>{exp.company}</h4>
                                    <h5>
                                        {exp.position} | {exp.years}
                                    </h5>
                                    <p>{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default GeneratedCV;