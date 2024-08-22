"use cleint";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const File = ({
  name,

  setUrl,
  setPreview,
  ...props
}: {
  name: string;
  setUrl: any;
  setPreview?: any;
}) => {
  const [error, setError] = useState<string | null>(null);
  const handleImg = async (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const size = file.size / 1024 / 1024;
      if (size > 2) {
        setError("File size should be less than 2MB");
      } else {
        setError(null);
        if (setPreview) {
          setPreview(URL.createObjectURL(file));
        }
        const formData = new FormData();
        formData.append("image", file);
        toast.loading("Uploading Image...");
        setUrl("Loading");
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
          formData
        );
        setUrl(response.data.data.url);
        toast.dismiss();
      }
    }
  };
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text capitalize">{name}</span>
        {error && <span className="label-text text-error">{error}</span>}
      </label>
      <input
        type="file"
        className="file-input file-input-bordered w-full"
        onChange={handleImg}
        {...props}
      />
    </div>
  );
};

export default File;
