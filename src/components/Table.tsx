import camelToNormal from "@/utils/camelCaseConvert";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Delete from "./actionBtn/Delete";
import Edit from "./actionBtn/Edit";

const Table = ({
  datas,
  unwantFields = ["_id", "__v", "createdAt", "updatedAt", "password"],
  availableActions = ["delete", "edit"],
  avatarField,
}: {
  datas: any[];
  unwantFields?: string[];
  availableActions?: string[];
  avatarField?: string;
}) => {
  const pathname = usePathname();
  const urlField = pathname.split("-")[1] === "services";
  if (!datas || datas.length < 1)
    return <h2 className="text-xl text-center">No data found</h2>;

  return (
    <div className="overflow-x-auto">
      <table className="table w-auto mx-auto table-xs sm:table-sm md:table-md lg:table-lg">
        <thead>
          <tr>
            {urlField && <th className="capitalize">View</th>}
            {avatarField && <th>Image</th>}
            {Object.keys(datas[0]).map(
              (key) =>
                !unwantFields.includes(key) &&
                avatarField?.toLowerCase() !== key.toLowerCase() && (
                  <th className="capitalize" key={key}>
                    {camelToNormal(key)}
                  </th>
                )
            )}
            {availableActions.includes("delete") && <th>Delete</th>}
            {availableActions.includes("edit") && <th>Edit</th>}
          </tr>
        </thead>
        <tbody>
          {datas.map((data: any, index) => (
            <tr key={index}>
              {urlField && (
                <td className="hover">
                  <Link
                    href={`/${data?.serviceType}#${data._id}`}
                    className="btn btn-accent btn-sm"
                  >
                    View
                  </Link>
                </td>
              )}
              {avatarField && (
                <td className="hover" key={avatarField}>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <Image
                        height={50}
                        width={50}
                        src={data[avatarField]}
                        alt={avatarField}
                      />
                    </div>
                  </div>
                </td>
              )}
              {Object.keys(data).map(
                (key) =>
                  !unwantFields.includes(key) &&
                  avatarField?.toLowerCase() !== key.toLowerCase() && (
                    <td className="hover" key={key}>
                      {data[key]}
                    </td>
                  )
              )}
              {availableActions.includes("delete") && (
                <td>
                  <Delete url={`/api/${pathname.split("-")[1]}/${data._id}`} />
                </td>
              )}
              {availableActions.includes("edit") && (
                <td>
                  <Edit data={data} />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
