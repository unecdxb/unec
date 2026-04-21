"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })
import 'react-quill-new/dist/quill.snow.css';
import dynamic from 'next/dynamic'
import { useForm, Controller } from "react-hook-form";
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { ImageUploader } from '@/components/ui/image-uploader'
import Image from 'next/image'
import { RiAiGenerateText } from 'react-icons/ri'
import TinyEditor from "@/app/components/TinyMce/TinyEditor";



interface NewsFormProps {
    banner: string;
    bannerAlt: string;
    title: string;
    subTitle:string;
    slug: string;
    content: string;
    thumbnail: string;
    thumbnailAlt: string;
    metaTitle: string;
    metaDescription: string;
    date: string;
}

const NewsForm = ({ editMode }: { editMode?: boolean }) => {

    const router = useRouter();
    const { id } = useParams();

    const { register, handleSubmit, setValue, watch, control, formState: { errors } } = useForm<NewsFormProps>();

    const handleAddNews = async (data: NewsFormProps) => {
        try {
            const response = await fetch(editMode ? `/api/admin/news?id=${id}` : "/api/admin/news", {
                method: editMode ? "PATCH" : "POST",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                router.push("/admin/news");
            }
        } catch (error) {
            console.log("Error in adding news", error);
        }
    }

    const fetchNewsData = async () => {
        try {
            const response = await fetch(`/api/admin/news?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                setValue("banner", data.data.banner);
                setValue("bannerAlt", data.data.bannerAlt);
                setValue("title", data.data.title);
                setValue("subTitle", data.data.subTitle);
                setValue("slug", data.data.slug);
                setValue("content", data.data.content);
                setValue("thumbnail", data.data.thumbnail);
                setValue("thumbnailAlt", data.data.thumbnailAlt);
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                const isoDate = new Date(data.data.date).toISOString().split("T")[0];
                setValue("date", isoDate);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching news data", error);
        }
    }


    // const fetchLocation = async () => {
    //     try {
    //         const response = await fetch("/api/admin/location");
    //         if (response.ok) {
    //             const data = await response.json();
    //             setLocationList(data.data);
    //         }
    //     } catch (error) {
    //         console.log("Error in fetching location", error);
    //     }
    // }


    useEffect(() => {
        if (editMode) fetchNewsData();
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

    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-md font-semibold'>{editMode ? "Edit News" : "Add News"}</h1>
            <form className='flex flex-col gap-5 border p-2 rounded-md' onSubmit={handleSubmit(handleAddNews)}>
                <div className='grid grid-cols-1 gap-2'>
                    <div>
                        <div>
                            <Label className=''>Banner</Label>
                            <ImageUploader onChange={(url) => setValue("banner", url)} value={watch("banner")} />
                            {errors.banner && <p className='text-red-500'>{errors.banner.message}</p>}
                        </div>
                        <div>
                            <Label className=''>Banner Alt</Label>
                            <Input type='text' placeholder='Alt Tag' {...register("bannerAlt")} />
                            {errors.bannerAlt && <p className='text-red-500'>{errors.bannerAlt.message}</p>}
                        </div>
                    </div>


                </div>
                <div>
                    <Label className=''>Title</Label>
                    <Input type='text' placeholder='Title' {...register("title", { required: "Title is required" })} />
                    {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                </div>

                <div>
                    <Label className=''>Sub Title</Label>
                    <Input type='text' placeholder='Sub Title' {...register("subTitle")} />
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

                <div>
                    <Label className=''>Date</Label>
                    <Input type='date' placeholder='Date' max={new Date().toISOString().split("T")[0]} {...register("date", { required: "Date is required" })} />
                    {errors.date && <p className='text-red-500'>{errors.date.message}</p>}
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

                <div className="flex flex-col gap-1">
                    <Label className=''>Content</Label>
                    <Controller name="content" control={control} rules={{ required: "Content is required" }} render={({ field }) => {
                        return <TinyEditor setNewsContent={field.onChange} newsContent={field.value} />
                    }} />
                    {errors.content && <p className='text-red-500'>{errors.content.message}</p>}
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


                <div className='flex justify-center'>
                    <Button type='submit' className='bg-primary text-white w-full text-[16px]'>Submit</Button>
                </div>

            </form>
        </div>
    )
}

export default NewsForm