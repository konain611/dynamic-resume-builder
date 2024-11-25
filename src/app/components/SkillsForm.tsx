import React from "react";
import SkillsInput from "./PreDefinedSkills";


interface FormData {
    skills: string[];
}


// interface SkillsFormProps {
//     formData?: FormData; 
//     handleSkillSelect: (skill: string) => void;
//     handleSkillRemove: (skill: string) => void;
// }

export default function SkillsForm({
    formData = { skills: [] },  
    handleSkillSelect,
    handleSkillRemove,
}: SkillsFormProps) {
    return (
        <div id="skills" className="form-group">
            <br /><br />
            <h3>Skills</h3>
            <SkillsInput 
                selectedSkills={formData.skills ?? []} 
                onSkillSelect={handleSkillSelect} 
                onSkillRemove={handleSkillRemove} 
            />
        </div>
    );
}
