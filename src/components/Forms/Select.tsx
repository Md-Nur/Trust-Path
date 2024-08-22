const Select = ({
  label,
  name,
  options,
  register,
  required = true,
  defaultValue,
  error,
  ...rest
}: {
  label?: string;
  name: string;
  options: string[];
  register: any;
  required?: boolean;
  defaultValue?: string;
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
      <select
        className="select select-bordered w-full "
        defaultValue={defaultValue}
        {...register(name, { required })}
        {...rest}
      >
        {options.map((option) => (
          <option key={option} value={option} className="capitalize">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
