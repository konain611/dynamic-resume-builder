import React from "react";

// Define the structure of each experience entry
interface ExperienceEntry {
  company: string;
  position: string;
  years: string;
  description: string;
}

// Define the structure of the form data
interface ExperienceFormProps {
  experience: ExperienceEntry[];
  handleExperienceChange: (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleAddExperience: () => void;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ experience, handleExperienceChange, handleAddExperience }) => {
  return (
    <div id="experience" className="form-group">
      <h3>Work Experience</h3>
      {experience.map((exp, index) => (
        <div key={index} className="experience-entry">
          <div>
            <label htmlFor={`company-${index}`}>Company *</label>
            <input
              type="text"
              id={`company-${index}`}
              name="company"
              value={exp.company}
              onChange={(e) => handleExperienceChange(index, e)}
              placeholder="Enter company name"
              required
            />
          </div>
          <div>
            <label htmlFor={`position-${index}`}>Position *</label>
            <input
              type="text"
              id={`position-${index}`}
              name="position"
              value={exp.position}
              onChange={(e) => handleExperienceChange(index, e)}
              placeholder="Enter your position"
              required
            />
          </div>
          <div>
            <label htmlFor={`years-${index}`}>Years *</label>
            <input
              type="text"
              id={`years-${index}`}
              name="years"
              value={exp.years}
              onChange={(e) => handleExperienceChange(index, e)}
              placeholder="Enter years of experience"
              required
            />
          </div>
          <div>
            <label htmlFor={`description-${index}`}>Description</label>
            <textarea
              id={`description-${index}`}
              name="description"
              value={exp.description}
              onChange={(e) => handleExperienceChange(index, e)}
              placeholder="Describe your responsibilities and achievements"
            />
          </div>
        </div>
      ))}
      <button type="button" onClick={handleAddExperience} className="add-experience-btn">
        Add Experience
      </button>
    </div>
  );
};

export default ExperienceForm;