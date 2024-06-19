import Navigation from "@/components/Navigation";

import dynamic from "next/dynamic";

// Dynamically import the client component
const CreateAltarForm = dynamic(() => import("@/components/CreateAltarForm"), {
  ssr: false,
});

const CreateAltarPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Create a New Altar</h1>
      <CreateAltarForm />
    </div>
  );
};

export default CreateAltarPage;
