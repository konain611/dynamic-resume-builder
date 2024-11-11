"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import PersonalInfo from "./components/PersonalInfo";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import SkillsForm from "./components/SkillsForm";

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
  });

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
    console.log(formData); // Log the data to the console or handle the resume generation here.
  };

  return (
    <div>
      <h1>Dynamic Resume Builder</h1>
      <form onSubmit={handleSubmit}>
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
          skills={formData.skills}
          handleSkillSelect={handleSkillSelect}
          handleSkillRemove={handleSkillRemove}
        />
        <button type="submit">Generate CV</button>
      </form>
    </div>
  );
}