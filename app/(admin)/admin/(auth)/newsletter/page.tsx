"use client"

import { Label } from '@/components/ui/label';
import { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md';

const AdminEnquiry = () => {
    const [enquiryList, setEnquiryList] = useState<{ _id: string, email: string, createdAt: string }[]>([]);


    const handleFetchEnquiry = async () => {
        try {
            const response = await fetch("/api/admin/newsletter");
            if (response.ok) {
                const data = await response.json();
                setEnquiryList(data.data);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {   
            console.log("Error in fetching type", error);
        }

    }


    const handleDeleteEnquiry = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/newsletter`, {
                method: "DELETE",
                body: JSON.stringify({ id })
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchEnquiry();
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in deleting enquiry", error);
        }
    }




    useEffect(() => {
        handleFetchEnquiry();
    }, [])


return (
  <div className="h-screen grid grid-cols-1 gap-5">
    <div className="h-full w-full p-5 shadow-md border border-gray-200 rounded-md bg-white flex flex-col">

      {/* Header */}
      <div className="flex justify-between border-b border-gray-200 pb-3 mb-4">
        <Label className="text-sm font-semibold tracking-wide uppercase">Newsletter Subscribers</Label>
      </div>

      {/* Table */}
      <div className="overflow-y-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
            <tr className="text-left">
              <th className="py-3 px-3 font-medium text-gray-600">Email</th>
              <th className="py-3 px-3 font-medium text-gray-600 w-[160px]">Date</th>
              <th className="py-3 px-3 font-medium text-gray-600 text-right w-[80px]">Action</th>
            </tr>
          </thead>

          <tbody>
            {enquiryList.map((item) => (
              <tr
                key={item._id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-3 text-gray-900">{item.email}</td>

                <td className="py-3 px-3 text-gray-600">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>

                <td className="py-3 px-3 text-right">
                  <button
                    onClick={() => handleDeleteEnquiry(item._id)}
                    className="text-gray-500 hover:text-black transition-colors"
                  >
                    <MdDelete size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty state */}
        {enquiryList.length === 0 && (
          <div className="text-center text-gray-400 py-16 text-sm">
            No subscribers yet
          </div>
        )}
      </div>
    </div>
  </div>
);

}

export default AdminEnquiry