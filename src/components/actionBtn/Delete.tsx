"use client";
import axios from "axios";
import { useRef } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Delete = ({ url }: { url: string }) => {
  const deleteModal = useRef({} as HTMLDialogElement);
  const handleDelete = async () => {
    // delete the data
    try {
      await axios.delete(url);
      // show success message
      toast.success("Deleted successfully");
    } catch (error) {
      console.info(error);
      toast.error("Failed to delete");
    } finally {
      // close the modal
      deleteModal?.current.close();
    }
  };
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-error btn-sm"
        onClick={() => deleteModal?.current.showModal()}
      >
        Delete <MdDelete />
      </button>
      <dialog ref={deleteModal} id={url} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Are you sure?</h3>
          <button onClick={handleDelete} className="btn btn-error py-4">
            Delete <MdDelete />
          </button>
        </div>
      </dialog>
    </>
  );
};

export default Delete;
