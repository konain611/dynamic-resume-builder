import React from "react";

interface SkillsFormProps {
  skills: string[];
  handleSkillSelect: (skill: string) => void;
  handleSkillRemove: (skill: string) => void;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ skills, handleSkillSelect, handleSkillRemove }) => {
  return (
    <div id="skills" className="form-group">
      <h3>Skills</h3>
      <input
        type="text"
        placeholder="Add a skill"
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.currentTarget.value) {
            handleSkillSelect(e.currentTarget.value);
            e.currentTarget.value = ""; // Clear the input after adding
          }
        }}
      />
      <div>
        {skills.map((skill, index) => (
          <span key={index}>
            {skill}
            <button type="button" onClick={() => handleSkillRemove(skill)}>Remove</button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsForm;