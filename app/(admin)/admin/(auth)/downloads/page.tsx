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
import { ImageUploader } from '@/components/ui/image-uploader'
import { FileUploader } from "@/components/ui/file-uploader";


export default function News() {

    const [banner, setBanner] = useState<string>("");
    const [bannerAlt, setBannerAlt] = useState<string>("");
    const [downloadList, setDownloadList] = useState<{ _id: string, title: string, file: string }[]>([]);
    const [metaTitle, setMetaTitle] = useState<string>("");
    const [metaDescription, setMetaDescription] = useState<string>("");
    const router = useRouter();
    const [title, setTitle] = useState<string>("");
    const [file, setFile] = useState<string>("");


    const handleAddDownload = async () => {
        try {
            const response = await fetch("/api/admin/downloads", {
                method: "POST",
                body: JSON.stringify({ title, file }),
            });
            if (response.ok) {
                const data = await response.json();
                setTitle("");
                setFile("");
                alert(data.message);
                handleFetchDownload();
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error adding download", error);
        }
    }

    const handleEditDownload = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/downloads?id=${id}`, {
                method: "PATCH",
                body: JSON.stringify({ title, file }),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchDownload();
                setTitle("");
                setFile("");
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error editing download", error);
        }
    }

    const handleFetchDownload = async () => {
        try {
            const response = await fetch("/api/admin/downloads");
            if (response.ok) {
                const data = await response.json();
                setDownloadList(data.data.downloads);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error fetching downloads", error);
        }
    }


    const handleFetchMeta = async () => {
        try {
            const response = await fetch("/api/admin/downloads/intrometa");
            if (response.ok) {
                const data = await response.json();
                setBanner(data.data.banner);
                setBannerAlt(data.data.bannerAlt);
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



    const handleDeleteDownload = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/downloads?id=${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchDownload();
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error deleting download", error);
        }
    }

    const submitMetaSection = async () => {
        try {
            const response = await fetch("/api/admin/downloads/intrometa", {
                method: "POST",
                body: JSON.stringify({ metaTitle, metaDescription, banner, bannerAlt }),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchMeta();
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
        handleFetchDownload();
    }, [])

    return (
        <div className="h-fit grid grid-cols-1 gap-5">
            <div className="h-fit w-full p-2 border-2 border-gray-300 rounded-md mt-5">
                <div className="flex justify-between border-b-2 pb-2">
                    <Label className="text-sm font-bold">Meta Section</Label>
                    <Button onClick={submitMetaSection} className="text-white text-[16px]">Save</Button>
                </div>
                <div className='grid grid-cols-1 gap-2'>
                    <div>
                        <div>
                            <Label className=''>Banner</Label>
                            <ImageUploader onChange={(url) => setBanner(url)} value={banner} />
                        </div>
                        <div>
                            <Label className=''>Banner Alt</Label>
                            <Input type='text' placeholder='Alt Tag' value={bannerAlt} onChange={(e) => setBannerAlt(e.target.value)} />
                        </div>
                    </div>


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
                    <Label className="text-sm font-bold">Downloads</Label>
                    <Dialog>
                        <DialogTrigger className="bg-primary text-white px-3 py-2 rounded-md font-bold" onClick={() => { setTitle("") }}>Add Download</DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add Download</DialogTitle>
                                <div>
                                    <div>
                                        <Label>Title</Label>
                                        <Input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                    </div>
                                    <div>
                                        <Label>File</Label>
                                        <FileUploader
                                            onChange={(url) => setFile(url)}
                                            value={file}
                                        />
                                    </div>
                                </div>
                            </DialogHeader>
                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={handleAddDownload}>Save</DialogClose>
                        </DialogContent>

                    </Dialog>
                </div>
                <div className="mt-2 flex flex-col gap-2 overflow-y-scroll h-[90%]">
                    {downloadList?.map((item) => (
                        <div className="flex justify-between border p-1 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300 h-12" key={item._id}>
                            <div className="h-full">
                                <div className="flex gap-2 items-center h-full">
                                    {item.title}
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <Dialog>
                                    <DialogTrigger onClick={() => { setTitle(item.title); setFile(item.file) }}><MdEdit /></DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Edit Download</DialogTitle>
                                            <div>
                                                <div>
                                                    <Label>Title</Label>
                                                    <Input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                                </div>
                                                <div>
                                                    <Label>File</Label>
                                                    <FileUploader
                                                        onChange={(url) => setFile(url)}
                                                        value={file}
                                                    />
                                                </div>
                                            </div>
                                        </DialogHeader>
                                        <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleEditDownload(item._id)}>Save</DialogClose>
                                    </DialogContent>

                                </Dialog>

                                <Dialog>
                                    <DialogTrigger><MdDelete /></DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Are you sure?</DialogTitle>
                                        </DialogHeader>
                                        <div className="flex gap-2">
                                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md">No</DialogClose>
                                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleDeleteDownload(item._id)}>Yes</DialogClose>
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

