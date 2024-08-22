"use client";
import Title from "@/components/Title";
import { Team } from "@/models/Team";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Image from "next/image";
import Input from "@/components/Forms/Input";
import File from "@/components/Forms/File";
import SubmitBtn from "@/components/Forms/SubmitBtn";

const AdminTeam = ({ updateData }: { updateData?: any }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Team>({
    defaultValues: updateData,
  });
  const router = useRouter();
  const onSubmit = async (data: Team) => {
    data.avatar = imgUrl;
    let res: any = {};
    try {
      if (updateData) {
        res = await axios.put(`/api/team/${updateData._id}`, data);
        router.push("/team");
      } else {
        res = await axios.post("/api/team", data);
        reset();
      }
      if (res.status < 400) {
        toast.success("Success!");
      } else {
        toast.error("Failed!");
      }
    } catch (e: any) {
      toast.error(e.message || "Failed");
    }
  };
  const [preview, setPreview] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");
  return (
    <div className="w-full">
      <Title>{updateData ? "Update" : "Add"} Team</Title>
      <div className="flex justify-evenly gap-3 w-full my-10 flex-wrap">
        <Image
          src={
            preview ||
            updateData?.avatar ||
            "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
          }
          alt="team"
          className="max-w-md rounded-xl"
          width={500}
          height={500}
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 max-w-md bg-base-300 p-5 rounded-xl "
        >
          <Input name="name" register={register} error={errors.name} />
          <File name="avatar" setUrl={setImgUrl} setPreview={setPreview} />
          <Input name="role" register={register} error={errors.role} />
          <SubmitBtn
            disabled={imgUrl === "Loading"}
            title={updateData ? "Update" : "Add"}
          />
        </form>
      </div>
    </div>
  );
};

export default AdminTeam;
