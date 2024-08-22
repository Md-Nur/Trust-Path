"use client";
import Input from "@/components/Forms/Input";
import SubmitBtn from "@/components/Forms/SubmitBtn";
import Title from "@/components/Title";
import useUser from "@/provider/UserProvider";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type LoginData = {
  username: string;
  passowrd: string;
};
const Login = () => {
  const router = useRouter();
  const { setUser } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();
  const onSubmit = async (data: LoginData) => {
    toast.loading("Login...");
    try {
      const res = await axios.post("/api/login", data);
      toast.dismiss();
      setUser(res.data);
      router.push("/manage-services");
      toast.success("Login Successfull");
    } catch (e: any) {
      toast.dismiss();
      toast.error(e.message || "Login Failed");
    }
  };
  return (
    <section className="w-full">
      <Title>LOGIN</Title>
      <div className="flex justify-center items-center card w-full my-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body max-w-md w-full bg-base-200 rounded-xl shadow-xl"
        >
          <Input register={register} error={errors.username} name="username" />
          <Input
            register={register}
            error={errors.passowrd}
            name="password"
            type="password"
          />
          <SubmitBtn title="Login" />
        </form>
      </div>
    </section>
  );
};

export default Login;
