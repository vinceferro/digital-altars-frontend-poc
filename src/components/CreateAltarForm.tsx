"use client";

import { useState } from "react";

const CreateAltarForm = () => {
  const [deceasedName, setDeceasedName] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [offering, setOffering] = useState("apple");
  const [altarStyle, setAltarStyle] = useState("traditional"); // Default to 'traditional'

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPhoto(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic
    console.log("Form Submitted:", {
      deceasedName,
      photo,
      offering,
      altarStyle,
    });

    // Implement the logic to handle the submission, such as:
    // - Uploading the photo to a server or IPFS
    // - Storing the data on a blockchain (e.g., using a smart contract)
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label
          htmlFor="deceasedName"
          className="block text-sm font-medium text-gray-700"
        >
          Deceased Name
        </label>
        <input
          type="text"
          id="deceasedName"
          value={deceasedName}
          onChange={(e) => setDeceasedName(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="photo"
          className="block text-sm font-medium text-gray-700"
        >
          Upload Photo
        </label>
        <input
          type="file"
          id="photo"
          accept="image/*"
          onChange={handlePhotoChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="offering"
          className="block text-sm font-medium text-gray-700"
        >
          Offering
        </label>
        <select
          id="offering"
          value={offering}
          onChange={(e) => setOffering(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          required
        >
          <option value="apple">Apple</option>
          <option value="orange">Orange</option>
          <option value="rice">Rice</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="altarStyle"
          className="block text-sm font-medium text-gray-700"
        >
          Altar Style
        </label>
        <select
          id="altarStyle"
          value={altarStyle}
          onChange={(e) => setAltarStyle(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          required
        >
          <option value="traditional">Traditional</option>
          <option value="modern">Modern</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
      >
        Create Altar
      </button>
    </form>
  );
};

export default CreateAltarForm;
