import { Navbar, ProjectDisplayCard } from "../../components";

export const WorkGallery = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap">
        <ProjectDisplayCard />
      </div>
    </div>
  );
};

export default WorkGallery;
