const SubmitBtn = ({
  title,
  disabled,
}: {
  title: string;
  disabled?: boolean;
}) => {
  return (
    <div className="form-control mt-6">
      <button disabled={disabled} className="btn btn-primary">
        {title}
      </button>
    </div>
  );
};

export default SubmitBtn;
