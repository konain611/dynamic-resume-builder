"use client"

import { useState, ChangeEvent, FormEvent } from "react";
import PersonalInfo from "./components/PersonalInfo";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import SkillsForm from "./components/SkillsForm";
import GeneratedCV from "./components/GeneratedCV";



export default function Home() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    about: "",
    education: [{ institution: "", type: "", years: "", field: "" }],
    experience: [{ company: "", position: "", years: "", description: "" }],
    skills: [] as string[],
    languages: [] as string[], 

  });

  const [isCVGenerated, setIsCVGenerated] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      education: [...prevData.education, { institution: "", type: "", years: "", field: "" }],
    }));
  };

  const handleEducationChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newEducation = [...formData.education];
    newEducation[index] = { ...newEducation[index], [name]: value };
    setFormData({ ...formData, education: newEducation });
  };

  const handleAddExperience = () => {
    setFormData((prevData) => ({
      ...prevData,
      experience: [...prevData.experience, { company: "", position: "", years: "", description: "" }],
    }));
  };

  const handleExperienceChange = (index: number, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newExperience = [...formData.experience];
    newExperience[index] = { ...newExperience[index], [name]: value };
    setFormData({ ...formData, experience: newExperience });
  };

  const handleSkillSelect = (skill: string) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, skill],
    }));
  };

  const handleSkillRemove = (skill: string) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((s) => s !== skill),
    }));
  };



  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsCVGenerated(true);
  };

  return (
    <div>
      <h1 className="title">Dynamic Resume Builder</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
      <span>Fields with * are Required</span>
          <PersonalInfo formData={formData} handleChange={handleChange} />
          <EducationForm
            education={formData.education}
            handleEducationChange={handleEducationChange}
            handleAddEducation={handleAddEducation}
          />
          <ExperienceForm
            experience={formData.experience}
            handleExperienceChange={handleExperienceChange}
            handleAddExperience={handleAddExperience}
          />
          <SkillsForm
            formData={formData}
            handleSkillSelect={handleSkillSelect}
            handleSkillRemove={handleSkillRemove}
          />
          
          <button type="submit"  className="gen-cv-btn">
            Generate Resume
          </button>
         
        </form>
      </div>

      {isCVGenerated && <GeneratedCV formData={formData} />}
    </div>
  );
}
