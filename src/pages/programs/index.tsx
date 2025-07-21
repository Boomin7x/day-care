import ActivitySection from "../landing/_components/activitySection";
import ParentActivitySection from "../landing/_components/parentsActivitySection";

const ProgramPage = () => {
  return (
    <div className="flex flex-col">
      <ActivitySection />
      <ParentActivitySection />
    </div>
  );
};

export default ProgramPage;
