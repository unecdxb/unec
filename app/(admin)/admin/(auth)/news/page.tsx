"use client"

import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { MdDelete, MdEdit } from "react-icons/md";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation";
import Image from "next/image";


export default function News() {

    const [newsList, setNewsList] = useState<{ _id: string, title: string, thumbnail: string }[]>([]);
    const [metaTitle, setMetaTitle] = useState<string>("");
    const [metaDescription, setMetaDescription] = useState<string>("");
    const router = useRouter();


    const handleFetchNews = async () => {
        try {
            const response = await fetch("/api/admin/news");
            if (response.ok) {
                const data = await response.json();
                setNewsList(data.data.news);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error fetching news", error);
        }
    }


    const handleFetchMeta = async () => {
        try {
            const response = await fetch("/api/admin/news/intrometa");
            if (response.ok) {
                const data = await response.json();
                setMetaTitle(data.data.metaTitle);
                setMetaDescription(data.data.metaDescription);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error fetching details", error);
        }
    }



    const handleDeleteNews = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/news?id=${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchNews();
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error deleting news", error);
        }
    }

    const submitMetaSection = async () => {
        try {
            const response = await fetch("/api/admin/news/intrometa", {
                method: "POST",
                body: JSON.stringify({ metaTitle, metaDescription }),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchNews();
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error saving details", error);
        }
    }

    useEffect(() => {
        handleFetchMeta();
        handleFetchNews();
    }, [])

    return (
        <div className="h-fit grid grid-cols-1 gap-5">
            <div className="h-fit w-full p-2 border-2 border-gray-300 rounded-md mt-5">
                <div className="flex justify-between border-b-2 pb-2">
                    <Label className="text-sm font-bold">Meta Section</Label>
                    <Button onClick={submitMetaSection} className="text-white text-[16px]">Save</Button>
                </div>
                <div className="mt-2 grid grid-cols-1 gap-2  h-fit">
                    <div>
                        <Label>Meta title</Label>
                        <Input type="text" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />
                    </div>
                    <div>
                        <Label>Meta Description</Label>
                        <Input type="text" value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} />
                    </div>
                </div>
            </div>

            <div className="h-[500px] w-full p-2 border-2 border-gray-300 rounded-md overflow-y-hidden">
                <div className="flex justify-between border-b-2 pb-2">
                    <Label className="text-sm font-bold">News</Label>
                    <Button onClick={() => router.push("/admin/news/add")} className="text-white text-[16px]">Add News</Button>
                </div>
                <div className="mt-2 flex flex-col gap-2 overflow-y-scroll h-[90%]">
                    {newsList?.map((item) => (
                        <div className="flex justify-between border p-1 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300 h-12" key={item._id}>
                            <div className="h-full">
                                <div className="flex gap-2 items-center h-full">
                                    <Image src={item.thumbnail} alt={item.title} width={100} height={100} className="h-full object-cover" />
                                    {item.title}
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <MdEdit onClick={() => router.push(`/admin/news/edit/${item._id}`)} />

                                <Dialog>
                                    <DialogTrigger><MdDelete /></DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Are you sure?</DialogTitle>
                                        </DialogHeader>
                                        <div className="flex gap-2">
                                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md">No</DialogClose>
                                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleDeleteNews(item._id)}>Yes</DialogClose>
                                        </div>

                                    </DialogContent>

                                </Dialog>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    );
}

