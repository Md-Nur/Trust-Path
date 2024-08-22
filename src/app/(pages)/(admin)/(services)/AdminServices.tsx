"use client";
import Input from "@/components/Forms/Input";
import Title from "@/components/Title";
import { Service } from "@/models/Services";
import Editor from "@/components/Forms/Editor";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import Select from "@/components/Forms/Select";
import SubmitBtn from "@/components/Forms/SubmitBtn";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AdminServices = ({ updateData }: { updateData?: any }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Service>({
    defaultValues: updateData,
  });

  const router = useRouter();

  const onSubmit = async (data: Service) => {
    data.content = editorRef.current.getContent();
    let res: any = {};
    try {
      if (updateData) {
        res = await axios.put(`/api/services/${updateData._id}`, data);
        router.push(`/${data.serviceType}#${updateData._id}`);
      } else {
        res = await axios.post("/api/services", data);
        reset();
      }

      if (res.status < 400) {
        toast.success("Success");
      } else {
        toast.error("Failed !");
      }
    } catch (error) {
      toast.error("Failed !");
    }
  };
  const editorRef = useRef<any>();
  return (
    <div className="w-full">
      <Title>Add service</Title>
      <div className="flex justify-center items-center card w-full my-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body w-full bg-base-200 rounded-xl shadow-xl"
        >
          <Input register={register} name="name" error={errors.name} />
          <Editor initialValue={updateData?.content} editorRef={editorRef} />
          <Select
            name="serviceType"
            options={[
              "audit & assurance",
              "taxation",
              "consulting",
              "corporate law",
              "business advisory",
            ]}
            register={register}
            error={errors.serviceType}
          />
          <SubmitBtn title={updateData ? "Update Service" : "Add Service"} />
        </form>
      </div>
    </div>
  );
};

export default AdminServices;
