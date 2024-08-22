const Loading = ({ classes }: { classes?: string }) => {
  return (
    <div className={`my-10 flex justify-center items-center w-full ${classes}`}>
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
};

export default Loading;
