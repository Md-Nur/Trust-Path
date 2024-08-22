import Manage from "@/components/Manage";

const Message = () => {
  return (
    <Manage
      urlEnd="message"
      avatarField="imgUrl"
      availableActions={["delete"]}
    />
  );
};

export default Message;
