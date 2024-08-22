const Input = ({
  name,
  label,
  register,
  required = true,
  type = "Text",
  error,
}: {
  name: string;
  label?: string;
  register: any;
  required?: boolean;
  type?: string;
  error?: any;
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text capitalize">{label || name}</span>
      </label>
      {error?.type === "required" && (
        <label className="label label-text text-error justify-start gap-1">
          <span className="capitalize">{label || name}</span>
          is required
        </label>
      )}
      <input
        type={type}
        placeholder={(label || name).toUpperCase()}
        className="input input-bordered"
        {...register(name, { required })}
      />
    </div>
  );
};

export default Input;
