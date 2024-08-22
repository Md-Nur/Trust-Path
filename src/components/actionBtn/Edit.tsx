"use client";
import AdminClients from "@/app/(pages)/(admin)/(clients)/AdminClients";
import AdminServices from "@/app/(pages)/(admin)/(services)/AdminServices";
import AdminTeam from "@/app/(pages)/(admin)/(team)/AdminTeam";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const Edit = ({ data }: { data: any }) => {
  const updateModal = useRef({} as HTMLDialogElement);
  const pathname = usePathname();
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-info btn-sm"
        onClick={() => updateModal.current.showModal()}
      >
        Edit
      </button>
      <dialog ref={updateModal} id={data._id} className="modal">
        <div className="modal-box w-11/12 max-w-7xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {pathname === "/manage-services" && (
            <AdminServices updateData={data} />
          )}
          {pathname === "/manage-clients" && <AdminClients updateData={data} />}
          {pathname === "/manage-team" && <AdminTeam updateData={data} />}
        </div>
      </dialog>
    </>
  );
};

export default Edit;
