"use client"

import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { MdDelete, MdEdit } from "react-icons/md";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation";
import AdminItemContainer from '@/app/components/common/AdminItemContainer';
import { useForm, Controller } from "react-hook-form";
import { ImageUploader } from '@/components/ui/image-uploader'
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { closestCorners, DndContext, DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import ProjectCard from "./ProjectCard";


interface ProjectPageProps {
    metaTitle: string;
    metaDescription: string;
    banner: string;
    bannerAlt: string;
    pageTitle: string;
    pageDescription: string;
}



export default function Projects() {

    const [region, setRegion] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [projectList, setProjectList] = useState<{ _id: string, title: string, description: string }[]>([]);
    const [categoryList, setCategoryList] = useState<{ _id: string, name: string }[]>([]);
    const [regionList, setRegionList] = useState<{ _id: string, name: string }[]>([]);
    const [reorderMode, setReorderMode] = useState(false);

    const router = useRouter();

    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<ProjectPageProps>();

    const handleFetchProjects = async () => {
        try {
            const response = await fetch("/api/admin/project");
            if (response.ok) {
                const data = await response.json();
                setProjectList(data.data.projects);
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error fetching projects", error);
        }
    }

    const handleAddRegion = async () => {
        try {
            const response = await fetch("/api/admin/project/region", {
                method: "POST",
                body: JSON.stringify({ name: region }),
            });
            if (response.ok) {
                const data = await response.json();
                setRegion("");
                toast.success(data.message);
                handleFetchRegion();
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error adding region", error);
        }
    }

    const handleFetchRegion = async () => {
        try {
            const response = await fetch("/api/admin/project/region");
            if (response.ok) {
                const data = await response.json();
                setRegionList(data.data);
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error fetching region", error);
        }
    }

    const handleEditRegion = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/project/region?id=${id}`, {
                method: "PATCH",
                body: JSON.stringify({ name: region }),
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                handleFetchRegion();
                setRegion("");
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error editing region", error);
        }
    }

    const handleDeleteRegion = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/project/region?id=${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                handleFetchRegion();
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error deleting region", error);
        }
    }


    const handleFetchCategory = async () => {
        try {
            const response = await fetch("/api/admin/project/category");
            if (response.ok) {
                const data = await response.json();
                setCategoryList(data.data);
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error fetching category", error);
        }
    }

    const handleAddCategory = async () => {
        try {
            const response = await fetch("/api/admin/project/category", {
                method: "POST",
                body: JSON.stringify({ name: category }),
            });
            if (response.ok) {
                const data = await response.json();
                setCategory("");
                toast.success(data.message);
                handleFetchCategory();
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error adding category", error);
        }
    }

    const handleEditCategory = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/project/category?id=${id}`, {
                method: "PATCH",
                body: JSON.stringify({ name: category }),
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                handleFetchCategory();
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error editing category", error);
        }
    }

    const handleDeleteCategory = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/project/category?id=${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                handleFetchCategory();
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error deleting category", error);
        }
    }

    const handleDeleteProject = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/project?id=${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                handleFetchProjects();
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error deleting project", error);
        }
    }

    const onSubmit = async (data: ProjectPageProps) => {
        try {
            const response = await fetch(`/api/admin/project`, {
                method: "PATCH",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in submitting project details", error);
        }
    }

    const fetchProjectDetails = async () => {
        try {
            const response = await fetch("/api/admin/project");
            if (response.ok) {
                const data = await response.json();
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("banner", data.data.banner);
                setValue("bannerAlt", data.data.bannerAlt);
                setValue("pageTitle", data.data.pageTitle);
                setValue("pageDescription", data.data.pageDescription);
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error fetching project details", error);
        }
    }

    const getTaskPos = (id: string) => projectList.findIndex((item: { _id: string }) => (item._id == id))
    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over || active.id === over.id) return;

        const oldIndex = getTaskPos(active.id as string);
        const newIndex = getTaskPos(over.id as string);

        const newPosition = arrayMove(projectList, oldIndex, newIndex);
        setProjectList(newPosition);
        // setValue("projects", newPosition);
    };



    const confirmPosition = async () => {
        setReorderMode(!reorderMode);

        const updatedProjects = projectList.map((project, index) => ({
            ...project
        }));

        setProjectList(updatedProjects);

        const formData = new FormData()
        formData.append('projects', JSON.stringify(updatedProjects))
        const response = await fetch(`/api/admin/project/reorder`, {
            method: "POST",
            body: formData
        })
        if (response.ok) {
            const data = await response.json()
            if (data.success) {
                toast.success(data.message)
            }
        }
    };


    useEffect(() => {
        handleFetchProjects();
        handleFetchRegion();
        handleFetchCategory();
        fetchProjectDetails();
    }, [])

    return (
        <div className="flex flex-col gap-5">

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
                <AdminItemContainer>
                    <Label className='' main>Banner Section</Label>
                    <div className='p-5 rounded-md flex flex-col gap-5'>
                        <div className='grid grid-cols-2 gap-2 relative pb-5'>

                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Image</Label>
                                    <Controller
                                        name={`banner`}
                                        control={control}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.banner && (
                                        <p className="text-red-500">{errors.banner?.message}</p>
                                    )}
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col gap-2'>
                                        <Label className='font-bold'>Alt Tag</Label>
                                        <Input type='text' placeholder='Alt Tag' {...register(`bannerAlt`, {
                                            required: "Value is required"
                                        })} />
                                        {errors.bannerAlt && <p className='text-red-500'>{errors.bannerAlt.message}</p>}
                                    </div>
                                </div>


                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col gap-2'>
                                        <Label className='font-bold'>Page Title</Label>
                                        <Input type='text' placeholder='PageTitle' {...register(`pageTitle`, {
                                            required: "Value is required"
                                        })} />
                                        {errors.pageTitle && <p className='text-red-500'>{errors.pageTitle.message}</p>}
                                    </div>

                                    <div>
                                        <Label className="text-sm font-bold"> Page Description</Label>
                                        <Controller name="pageDescription" control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                                            return <Textarea value={field.value} onChange={field.onChange} />
                                        }} />
                                        {errors.pageDescription && <p className='text-red-500'>{errors.pageDescription.message}</p>}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </AdminItemContainer>

                <div className='flex flex-col gap-2'>
                    <Label className='font-bold'>Meta Title</Label>
                    <Input type='text' placeholder='Meta Title' {...register("metaTitle")} />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label className='font-bold'>Meta Description</Label>
                    <Input type='text' placeholder='Meta Description' {...register("metaDescription")} />
                </div>

                <div className='flex justify-center mt-5'>
                    <Button type='submit' className="cursor-pointer text-white text-[16px] w-full">Submit</Button>
                </div>

            </form>


            <div className="h-screen grid grid-cols-2 gap-5">

                <div className="flex flex-col gap-2 h-screen">
                    <div className="h-1/2 w-full p-5 shadow-md border-gray-300 rounded-md overflow-y-hidden bg-white">
                        <div className="flex justify-between border-b-2 pb-2">
                            <Label className="text-sm font-bold">Region</Label>
                            <Dialog>
                                <DialogTrigger className="bg-black text-white px-2 py-1 rounded-md" onClick={() => setRegion("")}>Add Region</DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Add Region</DialogTitle>
                                        <DialogDescription>
                                            <Input type="text" placeholder="Region" value={region} onChange={(e) => setRegion(e.target.value)} />
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={handleAddRegion}>Save</DialogClose>
                                </DialogContent>

                            </Dialog>
                        </div>
                        <div className="mt-2 flex flex-col gap-2 overflow-y-scroll h-[80%]">
                            {regionList.map((item) => (
                                <div className="flex justify-between border p-2 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300" key={item._id}>
                                    <div className="text-[16px]">
                                        {item.name}
                                    </div>
                                    <div className="flex gap-5">
                                        <Dialog>
                                            <DialogTrigger onClick={() => { setRegion(item.name) }}><MdEdit /></DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Edit Region</DialogTitle>
                                                    <DialogDescription>
                                                        <Input type="text" placeholder="Region Name" value={region} onChange={(e) => setRegion(e.target.value)} />
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleEditRegion(item._id)}>Save</DialogClose>
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
                                                    <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleDeleteRegion(item._id)}>Yes</DialogClose>
                                                </div>

                                            </DialogContent>

                                        </Dialog>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>


                    <div className="h-1/2 w-full p-5 shadow-md border-gray-300 rounded-md overflow-y-hidden bg-white">
                        <div className="flex justify-between border-b-2 pb-2">
                            <Label className="text-sm font-bold">Category</Label>
                            <Dialog>
                                <DialogTrigger className="bg-black text-white px-2 py-1 rounded-md" onClick={() => setCategory("")}>Add Category</DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Add Category</DialogTitle>
                                        <DialogDescription>
                                            <Input type="text" placeholder="Category Name" value={category} onChange={(e) => setCategory(e.target.value)} />
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={handleAddCategory}>Save</DialogClose>
                                </DialogContent>

                            </Dialog>
                        </div>
                        <div className="h-full">

                            <div className="mt-2 flex flex-col gap-2 overflow-y-scroll h-[80%]">
                                {categoryList.map((item) => (
                                    <div className="flex justify-between border p-2 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300" key={item._id}>
                                        <div className="text-[16px]">
                                            {item.name}
                                        </div>
                                        <div className="flex gap-5">
                                            <Dialog>
                                                <DialogTrigger onClick={() => { setCategory(item.name) }}><MdEdit /></DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>Edit Category</DialogTitle>
                                                        <DialogDescription>
                                                            <Input type="text" placeholder="Category Name" value={category} onChange={(e) => setCategory(e.target.value)} />
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleEditCategory(item._id)}>Save</DialogClose>
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
                                                        <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleDeleteCategory(item._id)}>Yes</DialogClose>
                                                    </div>

                                                </DialogContent>

                                            </Dialog>

                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>

                </div>

                <div className="h-screen w-full p-5 shadow-md border-gray-300 rounded-md overflow-y-hidden bg-white">
                    <div className="flex justify-between border-b-2 pb-2">
                        <Label className="text-sm font-bold">Projects</Label>
                        <div className="flex gap-2">
                            <Button className={`text-white text-[16px] ${reorderMode ? "bg-yellow-700" : "bg-green-700"}`} onClick={() => reorderMode ? confirmPosition() : setReorderMode(!reorderMode)}>{reorderMode ? "Done" : "Reorder"}</Button>
                            <Button onClick={() => router.push("/admin/projects/add")} disabled={reorderMode}>Add Project</Button>

                        </div>
                    </div>
                    <div className="mt-2 flex flex-col gap-2 overflow-y-scroll h-[90%]">

                        {reorderMode &&

                            <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
                                <SortableContext items={projectList.map((project) => project._id)} strategy={verticalListSortingStrategy}>
                                    {projectList?.map((project, index) => (
                                        <ProjectCard key={index} project={project} id={project._id} />
                                    ))}
                                </SortableContext>
                            </DndContext>

                        }
                        {!reorderMode && projectList.map((item) => (
                            <div className="flex justify-between border p-2 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300" key={item._id}>
                                <div className="text-[16px]">
                                    {item.title}
                                </div>
                                <div className="flex gap-5">
                                    <MdEdit onClick={() => router.push(`/admin/projects/edit/${item._id}`)} />

                                    <Dialog>
                                        <DialogTrigger><MdDelete /></DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Are you sure?</DialogTitle>
                                            </DialogHeader>
                                            <div className="flex gap-2">
                                                <DialogClose className="bg-black text-white px-2 py-1 rounded-md">No</DialogClose>
                                                <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleDeleteProject(item._id)}>Yes</DialogClose>
                                            </div>

                                        </DialogContent>

                                    </Dialog>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </div>
    );
}
