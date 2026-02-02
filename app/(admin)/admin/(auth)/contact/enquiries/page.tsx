"use client"

import { Label } from '@/components/ui/label';
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';

import { Textarea } from '@/components/ui/textarea';
import { BiExpandAlt } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";



const AdminEnquiry = () => {
    const [enquiryList, setEnquiryList] = useState<{ _id: string, firstName: string, lastName: string, email: string, subject: string, message: string, query: string, newsletter: string }[]>([]);


    const handleFetchEnquiry = async () => {
        try {
            const response = await fetch("/api/admin/contact/enquiry");
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
            const response = await fetch(`/api/admin/contact/enquiry`, {
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
            <div className="h-full w-full p-5 shadow-md border-gray-300 rounded-md bg-white">
                <div className="flex justify-between border-b-2 pb-2">
                    <Label className="text-sm font-bold">Enquiries</Label>
                </div>
                <div className="mt-2 flex flex-col gap-2 h-[80%] overflow-y-auto">
                    {enquiryList.map((item) => (
                        <div className="flex justify-between border p-2 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300" key={item._id}>
                            <div className='text-[16px]'>
                                {item.firstName + " " + item.lastName}
                            </div>
                            <div className="flex gap-5">
                                <Dialog>
                                    <DialogTrigger className='cursor-pointer'><BiExpandAlt /></DialogTrigger>
                                    <DialogContent className="max-h-[500px] overflow-y-auto">
                                        <DialogHeader>
                                            <DialogTitle>Details</DialogTitle>
                                            <div className='flex flex-col gap-3'>
                                                <div className='flex flex-col gap-2'>
                                                    <Label>First Name</Label>
                                                    <Input type="text" value={item.firstName} readOnly />
                                                </div>

                                                <div className='flex flex-col gap-2'>
                                                    <Label>Last Name</Label>
                                                    <Input type="text" value={item.lastName} readOnly />
                                                </div>

                                                <div className='flex flex-col gap-2'>
                                                    <Label>Email</Label>
                                                    <Input type="text" value={item.email} readOnly />
                                                </div>

                                                <div className='flex flex-col gap-2'>
                                                    <Label>Subject</Label>
                                                    <Input type="text" value={item.subject} readOnly />
                                                </div>

                                                <div className='flex flex-col gap-2'>
                                                    <Label>Message</Label>
                                                    <Textarea value={item.message} readOnly />
                                                </div>

                                                <div className='flex flex-col gap-2'>
                                                    <Label>Query</Label>
                                                    <Input type="text" value={item.query} readOnly />
                                                </div>

                                                <div className='flex gap-2 items-center'>
                                                    <Label>Newsletter</Label>
                                                    {item.newsletter ? <TiTick className="text-green-500" /> : <ImCross className="text-red-500" />}
                                                </div>


                                            </div>
                                        </DialogHeader>
                                        <DialogClose className="bg-black text-white px-2 py-1 rounded-md">Close</DialogClose>
                                    </DialogContent>

                                </Dialog>


                                <MdDelete className='cursor-pointer' onClick={() => handleDeleteEnquiry(item._id)} />

                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default AdminEnquiry