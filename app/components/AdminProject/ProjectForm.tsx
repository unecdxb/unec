"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { ImageUploader } from '@/components/ui/image-uploader'
import Image from 'next/image'
import { RiAiGenerateText } from 'react-icons/ri'
import { closestCorners, DndContext, DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import ImageCard from './ImageCard'
import { TbReorder } from "react-icons/tb";
import { GiConfirmed } from "react-icons/gi";
import AdminItemContainer from '../common/AdminItemContainer'
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from 'sonner'
import { statusData } from './statusData'



interface ProjectFormProps {
    banner: string;
    galleryTitle: string;
    bannerAlt: string;
    title: string;
    firstSection: {
        title: string;
        location: string;
        category: string;
        status: string;
        items: {
            title: string;
            value: string;
        }[]
    };
    images: string[];
    slug: string;
    thumbnail: string;
    thumbnailAlt: string;
    metaTitle: string;
    metaDescription: string;
}

const ProjectForm = ({ editMode }: { editMode?: boolean }) => {

    const router = useRouter();
    const { id } = useParams();

    const [regionList, setRegionList] = useState<{ _id: string; name: string }[]>([]);
    const [categoryList, setCategoryList] = useState<{ _id: string; name: string }[]>([]);
    const [reorderMode, setReorderMode] = useState(false);

    const { register, handleSubmit, setValue, watch, control, formState: { errors } } = useForm<ProjectFormProps>();


    const { fields: firstSectionItems, append: firstSectionAppend, remove: firstSectionRemove } = useFieldArray({
        control,
        name: "firstSection.items"
    });



    const handleAddProject = async (data: ProjectFormProps) => {
        try {
            const response = await fetch(editMode ? `/api/admin/project?id=${id}` : `/api/admin/project`, {
                method: editMode ? "PATCH" : "POST",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                router.push("/admin/projects");
            }
        } catch (error) {
            console.log("Error in adding project", error);
        }
    }

    const fetchProjectData = async () => {
        try {
            const response = await fetch(`/api/admin/project?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                setValue("firstSection", {
                    ...data.data.firstSection,
                    location: data.data.firstSection.location?._id || "",
                    category: data.data.firstSection.category?._id || "",
                });
                setValue("firstSection.items", data.data.firstSection.items);
                setValue("banner", data.data.banner);
                setValue("galleryTitle", data.data.galleryTitle);
                setValue("bannerAlt", data.data.bannerAlt);
                setValue("title", data.data.title);
                setValue("images", data.data.images);
                setValue("slug", data.data.slug);
                setValue("thumbnail", data.data.thumbnail);
                setValue("thumbnailAlt", data.data.thumbnailAlt);
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setImageUrls(data.data.images);
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error in fetching project data", error);
        }
    }


    const fetchRegion = async () => {
        try {
            const response = await fetch("/api/admin/project/region");
            if (response.ok) {
                const data = await response.json();
                setRegionList(data.data);
            }
        } catch (error) {
            console.log("Error in fetching location", error);
        }
    }

    const fetchCategory = async () => {
        try {
            const response = await fetch("/api/admin/project/category");
            if (response.ok) {
                const data = await response.json();
                setCategoryList(data.data);
            }
        } catch (error) {
            console.log("Error in fetching sector", error);
        }
    }


    useEffect(() => {
        if (editMode) {
            fetchRegion().then(() => fetchCategory()).then(() => fetchProjectData());
        } else {
            fetchRegion().then(() => fetchCategory());
        }
    }, []);

    useEffect(() => {
        if (watch("slug") === undefined) return;
        const slug = watch("slug").replace(/\s+/g, '-');
        setValue("slug", slug);
    }, [watch("slug")])

    const handleAutoGenerate = () => {
        const name = watch("title");
        if (!name) return;
        const slug = name
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, ''); // remove leading/trailing dashes
        setValue("slug", slug);
    };



    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const handleImageUpload = async (uploadedUrl: string) => {
        setImageUrls((prev) => [...prev, uploadedUrl]);
        setValue("images", [...imageUrls, uploadedUrl]);
    };

    const handleRemoveImage = (indexToRemove: number) => {
        setImageUrls((prev) => prev.filter((_, index) => index !== indexToRemove));
        setValue(
            "images",
            imageUrls.filter((_, index) => index !== indexToRemove)
        );
    };


    const getTaskPos = (id: string) => imageUrls.findIndex((item: string) => (item == id))
    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over || active.id === over.id) return;

        const oldIndex = getTaskPos(active.id as string);
        const newIndex = getTaskPos(over.id as string);

        const newPosition = arrayMove(imageUrls, oldIndex, newIndex);
        setImageUrls(newPosition);
        setValue("images", newPosition);

    };

    useEffect(() => {
        console.log(imageUrls);
    }, [imageUrls]);



    return (
        <div className='flex flex-col gap-5'>
            <form className='flex flex-col gap-5 rounded-md' onSubmit={handleSubmit(handleAddProject)}>
                <AdminItemContainer>
                    <Label className='' main>Banner Section</Label>
                    <div className='p-5 rounded-md flex flex-col gap-5'>
                        <div>
                            <Label className=''>Banner</Label>
                            <Controller
                                name="banner"
                                control={control}
                                rules={{ required: "Banner is required" }}
                                render={({ field }) => (
                                    <ImageUploader
                                        onChange={(url: string) => field.onChange(url)}
                                        value={field.value}
                                    />
                                )}
                            />
                            {errors.banner && <p className='text-red-500'>{errors.banner.message}</p>}
                        </div>
                        <div>
                            <Label className=''>Banner Alt</Label>
                            <Input type='text' placeholder='Banner Alt' {...register("bannerAlt", { required: "Banner Alt is required" })} />
                            {errors.bannerAlt && <p className='text-red-500'>{errors.bannerAlt.message}</p>}
                        </div>
                        <div>
                            <Label className=''>Title</Label>
                            <Input type='text' placeholder='Title' {...register("title", { required: "Title is required" })} />
                            {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                        </div>
                        <div>
                            <Label className='flex gap-2 items-center mb-1'>
                                Slug
                                <div className='flex gap-2 items-center bg-green-600 text-white p-1 rounded-md cursor-pointer w-fit' onClick={handleAutoGenerate}>
                                    <p>Auto Generate</p>
                                    <RiAiGenerateText />
                                </div>
                            </Label>
                            <Input type='text' placeholder='Slug' {...register("slug", {
                                required: "Slug is required", pattern: {
                                    value: /^[a-z0-9]+(-[a-z0-9]+)*$/,
                                    message: "Slug must contain only lowercase letters, numbers, and hyphens (no spaces)"
                                }
                            })} />
                            {errors.slug && <p className='text-red-500'>{errors.slug.message}</p>}
                        </div>
                    </div>
                </AdminItemContainer>

                <AdminItemContainer>
                    <Label className='' main>First Section</Label>
                    <div className='p-5 rounded-md flex flex-col gap-5'>

                        <div>
                            <Label className=''>Title</Label>
                            <Input type='text' placeholder='Title' {...register("firstSection.title", { required: "Title is required" })} />
                            {errors.firstSection?.title && <p className='text-red-500'>{errors.firstSection.title.message}</p>}
                        </div>

                        <div className='flex flex-col gap-2'>
                            <Label className=''>Location</Label>
                            <Controller
                                name="firstSection.location"
                                control={control}
                                rules={{ required: "Location is required" }}
                                render={({ field }) => (
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue=""
                                    >

                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Sector" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {regionList.map((item, index) => (
                                                <SelectItem key={index} value={item._id}>
                                                    {item.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.firstSection?.location && <p className="text-red-500">{errors.firstSection.location.message}</p>}

                        </div>

                        <div className='flex flex-col gap-2'>
                            <Label className=''>Category</Label>
                            <Controller
                                name="firstSection.category"
                                control={control}
                                rules={{ required: "Category is required" }}
                                render={({ field }) => (
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue=""
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categoryList.map((item, index) => (
                                                <SelectItem key={index} value={item._id}>
                                                    {item.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.firstSection?.category && <p className="text-red-500">{errors.firstSection.category.message}</p>}

                        </div>


                        <div className='flex flex-col gap-2'>
                            <Label className=''>Status</Label>
                            <Controller
                                name="firstSection.status"
                                control={control}
                                rules={{ required: "Status is required" }}
                                render={({ field }) => (
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue=""
                                    >
                                        <SelectTrigger className="w-full bg-white">
                                            <SelectValue placeholder="Select Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {statusData.map((item, index) => (
                                                <SelectItem key={index} value={item.value.toString()}>
                                                    {item.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.firstSection?.status && <p className="text-red-500">{errors.firstSection.status.message}</p>}

                        </div>

                        <div className='grid grid-cols-1 gap-2'>
                            <div>
                                <div>
                                    <Label className=''>Thumbnail</Label>
                                    <ImageUploader onChange={(url) => setValue("thumbnail", url)} value={watch("thumbnail")} />
                                    {errors.thumbnail && <p className='text-red-500'>{errors.thumbnail.message}</p>}
                                </div>
                                <div>
                                    <Label className=''>Thumbnail Alt</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register("thumbnailAlt")} />
                                    {errors.thumbnailAlt && <p className='text-red-500'>{errors.thumbnailAlt.message}</p>}
                                </div>
                            </div>


                        </div>

                        <div className='flex flex-col gap-2'>
                            <Label className=' font-bold'>Items</Label>
                            <div className='border p-2 rounded-md flex flex-col gap-5'>


                                {firstSectionItems.map((field, index) => (
                                    <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b  pb-5'>
                                        <div className='absolute top-2 right-2'>
                                            <RiDeleteBinLine onClick={() => firstSectionRemove(index)} className='cursor-pointer text-red-600' />
                                        </div>

                                        <div className='flex flex-col gap-2'>
                                            <div className='flex flex-col gap-2'>
                                                <Label className=' font-bold'>Title</Label>
                                                <Input type='text' placeholder='Number' {...register(`firstSection.items.${index}.title`)} />
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-2'>
                                            <div className='flex flex-col gap-2'>
                                                <Label className=' font-bold'>Value</Label>
                                                <Input type='text' placeholder='Value' {...register(`firstSection.items.${index}.value`)} />
                                            </div>
                                        </div>

                                    </div>
                                ))}

                                <div className='flex justify-end'>
                                    <Button type='button' className="" addItem onClick={() => firstSectionAppend({ title: "", value: "" })}>Add Item</Button>
                                </div>

                            </div>
                        </div>

                    </div>

                </AdminItemContainer>


                <div className='flex flex-col gap-2 p-5 rounded-md bg-white shadow-md'>

                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <Label className=' font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register(`galleryTitle`)} />
                        </div>
                    </div>

                    <div>
                        <div className='flex justify-between items-center'>
                            <Label className="block text-sm">Images</Label>
                            <Button className="bg-green-600 text-white" type="button" onClick={() => setReorderMode(!reorderMode)}>{reorderMode ? <GiConfirmed /> : <TbReorder />}</Button>
                        </div>
                        <div className="mt-2">
                            <ImageUploader onChange={handleImageUpload} deleteAfterUpload={true} multiple={true} />
                        </div>

                        {reorderMode && <div className="mt-4 grid grid-cols-3 gap-4">
                            <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
                                <SortableContext items={imageUrls} strategy={verticalListSortingStrategy}>
                                    {imageUrls.map((url, index) => (
                                        <ImageCard key={url} url={url} index={index} handleRemoveImage={handleRemoveImage} id={url} />
                                    ))}
                                </SortableContext>
                            </DndContext>
                        </div>}


                        {!reorderMode && <div className="mt-4 grid grid-cols-3 gap-4">
                            {imageUrls.map((url, index) => (
                                <div key={index} className="relative h-40">
                                    <Image
                                        src={url}
                                        alt={`Uploaded image ${index + 1}`}
                                        className="h-full w-full object-cover rounded-lg"
                                        width={100}
                                        height={100}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveImage(index)}
                                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>}
                    </div>



                </div>

                <div className="h-fit w-full p-2 border-2 border-gray-300 rounded-md mt-5">
                    <div className="flex justify-between border-b-2 pb-2">
                        <Label className="text-sm ">Meta Section</Label>
                    </div>
                    <div className="mt-2 grid grid-cols-1 gap-2  h-fit">
                        <div>
                            <Label>Meta title</Label>
                            <Input type="text" {...register("metaTitle")} />
                        </div>
                        <div>
                            <Label>Meta Description</Label>
                            <Input type="text" {...register("metaDescription")} />
                        </div>
                    </div>
                </div>


                <div className='flex justify-center w-full'>
                    <Button type='submit' className="cursor-pointer text-white w-full">Submit</Button>
                </div>

            </form>
        </div>
    )
}

export default ProjectForm