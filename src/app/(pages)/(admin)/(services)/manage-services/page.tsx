import Manage from "@/components/Manage";
const ManageServices = () => {
  return (
    <Manage
      urlEnd="services"
      unwantedFields={[
        "_id",
        "createdAt",
        "updatedAt",
        "__v",
        "password",
        "role",
        "content",
      ]}
    />
  );
};

export default ManageServices;
