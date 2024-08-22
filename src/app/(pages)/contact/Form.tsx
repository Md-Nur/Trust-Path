"use client";
import File from "@/components/Forms/File";
import Input from "@/components/Forms/Input";
import TextArea from "@/components/Forms/TextArea";
import { useForm } from "react-hook-form";
import SubmitBtn from "@/components/Forms/SubmitBtn";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

type ContactData = {
  name: string;
  email: string;
  subject: string;
  imgUrl?: string;
  message: string;
};
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactData>();
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const onSubmit = async (data: ContactData) => {
    if (imgUrl === "Loading") {
      toast.loading("Please wait while image is uploading...");
      return;
    } else if (imgUrl) {
      data.imgUrl = imgUrl;
    }
    const res = await axios.post("/api/msg", data);
    if (res?.status === 201) {
      toast.success(res.data.message);
    } else {
      toast.error(res?.data?.message || "Message not sent");
    }
  };
  return (
    <div className="card bg-base-200 w-full max-w-md shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <Input register={register} error={errors.name} name="name" />
        <Input
          register={register}
          error={errors.email}
          name="email"
          type="email"
        />
        <Input register={register} name="subject" error={errors.subject} />
        <File name="Photo" setUrl={setImgUrl} />

        <TextArea register={register} name="message" error={errors.message} />

        <SubmitBtn title="Send" />
      </form>
    </div>
  );
};

export default Form;
