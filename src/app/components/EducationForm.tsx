import React from "react";

interface EducationEntry {
  institution: string;
  type: string;
  years?: string;
  field: string;
}

interface EducationFormProps {
  education: EducationEntry[];
  handleEducationChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddEducation: () => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ education, handleEducationChange, handleAddEducation }) => {
  return (
    <div id="education" className="form-group">
      <br></br>
      <br></br>
      <h3>Education & Certifications</h3>
      {education.map((edu, index) => (
        <div key={index} className="form-group"> 
            <input
              type="text"
              id={`institution-${index}`}
              name="institution"
              value={edu.institution}
              onChange={(e) => handleEducationChange(index, e)}
              placeholder="Institution Name *"
              required
            />

            <input
              type="text"
              id={`type-${index}`}
              name="type"
              value={edu.type}
              onChange={(e) => handleEducationChange(index, e)}
              placeholder="Type of Education (Bachelor/Masters/Course etc) *"
              required
            />
     
         
            <input
              type="text"
              id={`years-${index}`}
              name="years"
              value={edu.years}
              onChange={(e) => handleEducationChange(index, e)}
              placeholder="Years/Months of Program"
            />
        
        
            <input
              type="text"
              id={`field-${index}`}
              name="field"
              value={edu.field}
              onChange={(e) => handleEducationChange(index, e)}
              placeholder="Field (Computer Science/Business Analytics/Cyber Security etc) *"
              required
            />
        
        </div>
      ))}
      <button type="button" onClick={handleAddEducation}>
        Add Education
      </button>
    </div>
  );
};

export default EducationForm;
