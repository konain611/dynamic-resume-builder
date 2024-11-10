import React from "react";

// Define the structure of the form data
interface FormData {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  about?: string; // Optional field
}

// Define the props for the PersonalInfo component
interface PersonalInfoProps {
  formData: FormData;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ formData, handleChange }) => {
  return (
    <div id="personal-info" className="form-group">
      <h3>Personal Information</h3>
      <div>
        <label htmlFor="fname">First Name *</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          placeholder="Enter your first name"
          required
        />
      </div>
      <div>
        <label htmlFor="lname">Last Name *</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
          placeholder="Enter your last name"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />
      </div>
      <div>
        <label htmlFor="city">City *</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter your city"
          required
        />
      </div>
      <div>
        <label htmlFor="country">Country *</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Enter your country"
          required
        />
      </div>
      <div>
        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          value={formData.about}
          onChange={handleChange}
          placeholder="Write a short description about yourself"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;