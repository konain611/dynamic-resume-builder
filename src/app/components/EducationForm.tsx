import React from "react";

// Define the structure of each education entry
interface EducationEntry {
  institution: string;
  type: string;
  years?: string; // Optional field
  field: string;
}

// Define the props for the EducationForm component
interface EducationFormProps {
  education: EducationEntry[];
  handleEducationChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddEducation: () => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ education, handleEducationChange, handleAddEducation }) => {
  return (
    <div id="education" className="form-group">
      <h3>Education & Certifications</h3>
      {education.map((edu, index) => (
        <div key={index} className="education-entry">
          <div>
            <label htmlFor={`institution-${index}`}>Institution Name *</label>
            <input
              type="text"
              id={`institution-${index}`}
              name="institution"
              value={edu.institution}
              onChange={(e) => handleEducationChange(index, e)}
              placeholder="Enter institution name"
              required
            />
          </div>
          <div>
            <label htmlFor={`type-${index}`}>Type of Education *</label>
            <input
              type="text"
              id={`type-${index}`}
              name="type"
              value={edu.type}
              onChange={(e) => handleEducationChange(index, e)}
              placeholder="e.g., Bachelor, Masters, Course"
              required
            />
          </div>
          <div>
            <label htmlFor={`years-${index}`}>Years of Program</label>
            <input
              type="text"
              id={`years-${index}`}
              name="years"
              value={edu.years}
              onChange={(e) => handleEducationChange(index, e)}
              placeholder="Enter years of study"
            />
          </div>
          <div>
            <label htmlFor={`field-${index}`}>Field of Study *</label>
            <input
              type="text"
              id={`field-${index}`}
              name="field"
              value={edu.field}
              onChange={(e) => handleEducationChange(index, e)}
              placeholder="e.g., Computer Science, Business Analytics"
              required
            />
          </div>
        </div>
      ))}
      <button type="button" onClick={handleAddEducation} className="add-education-btn">
        Add Education
      </button>
    </div>
  );
};

export default EducationForm;