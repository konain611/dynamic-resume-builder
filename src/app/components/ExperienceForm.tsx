import React from "react";

interface ExperienceEntry {
  company: string;
  position: string;
  years: string;
  description: string;
}

interface ExperienceFormProps {
  experience: ExperienceEntry[];
  handleExperienceChange: (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleAddExperience: () => void;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ experience, handleExperienceChange, handleAddExperience }) => {
  return (
    <div id="experience" className="form-group">
      <br></br>
      <br></br>
      <h3>Work Experience</h3>
      {experience.map((exp, index) => (
        <div key={index} className="form-group">
        
            htmlFor={`company-${index}`}
            <input
              type="text"
              id={`company-${index}`}
              name="company"
              value={exp.company}
              onChange={(e) => handleExperienceChange(index, e)}
              placeholder="Enter company name"
              required
            />
          htmlFor={`position-${index}`}
            <input
              type="text"
              id={`position-${index}`}
              name="position"
              value={exp.position}
              onChange={(e) => handleExperienceChange(index, e)}
              placeholder="Enter your position"
              required
            />
          
            htmlFor={`years-${index}`}
            <input
              type="text"
              id={`years-${index}`}
              name="years"
              value={exp.years}
              onChange={(e) => handleExperienceChange(index, e)}
              placeholder="Enter years of experience"
              required
            />
            htmlFor={`description-${index}`}
            <textarea
              id={`description-${index}`}
              name="description"
              value={exp.description}
              onChange={(e) => handleExperienceChange(index, e)}
              placeholder="Describe your responsibilities and achievements"
            />
          
        </div>
      ))}
      <button type="button" onClick={handleAddExperience} className="add-experience-btn">
        Add Experience
      </button>
    </div>
  );
};

export default ExperienceForm;