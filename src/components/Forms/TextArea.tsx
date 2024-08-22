const Input = ({
  name,
  label,
  register,
  required = true,
  error,
}: {
  name: string;
  label?: string;
  register: any;
  required?: boolean;
  error?: any;
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text capitalize">{label || name}</span>
      </label>
      {error?.type === "required" && (
        <label className="label label-text text-error">
          <span className="capitalize">{label || name}</span>
          is required
        </label>
      )}
      <textarea
        className="textarea textarea-bordered"
        placeholder={(label || name).toUpperCase()}
        {...register(name, { required })}
      ></textarea>
    </div>
  );
};

export default Input;
