"use client";
import File from "@/components/Forms/File";
import Input from "@/components/Forms/Input";
import SubmitBtn from "@/components/Forms/SubmitBtn";
import Title from "@/components/Title";
import { Client } from "@/models/Clients";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AdminClients = ({ updateData }: { updateData?: any }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Client>({
    defaultValues: updateData,
  });

  const [imgUrl, setImgUrl] = useState<string>(updateData?.imgUrl || "");
  const [preview, setPreview] = useState<string>("");
  const router = useRouter();

  const onSubmit = async (data: Client) => {
    if (imgUrl === "Loading") {
      toast.error("Image is loading, please wait");
    } else if (imgUrl) {
      data.imgUrl = imgUrl;
      toast.loading(`${updateData ? "Updating" : "Adding"} Client...`);
      let res: any = {};
      try {
        if (updateData) {
          res = await axios.put(`/api/clients/${updateData._id}`, data);
          router.push("/clients");
        } else {
          res = await axios.post("/api/clients", data);
          reset();
        }
        toast.dismiss();
        if (res.status < 400) {
          toast.success("Client Added");
        } else {
          toast.error("Failed to add client");
        }
      } catch (e: any) {
        console.info(e);

        toast.dismiss();
        toast.error(e.message || "Failed to add client");
      }
    }
  };

  return (
    <div className="w-full">
      <Title>{updateData ? "Update" : "add"} CLIENT</Title>
      <div className="flex justify-evenly gap-3 w-full my-10 flex-wrap">
        <Image
          src={
            preview ||
            updateData?.imgUrl ||
            "https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg"
          }
          alt="Preview"
          width={500}
          height={500}
          className="rounded-xl w-full p-1 max-w-md"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body max-w-md w-full bg-base-200 rounded-xl shadow-xl"
        >
          <Input register={register} error={errors.name} name="name" />
          <File name="logo" setUrl={setImgUrl} setPreview={setPreview} />
          <SubmitBtn
            disabled={imgUrl === "Loading"}
            title={updateData ? "Update Client" : "Add Client"}
          />
        </form>
      </div>
    </div>
  );
};

export default AdminClients;
