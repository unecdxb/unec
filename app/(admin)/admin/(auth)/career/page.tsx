"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useEffect } from 'react'

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Button } from '@/components/ui/button'
import { ImageUploader } from '@/components/ui/image-uploader'
import { RiDeleteBinLine } from "react-icons/ri";
import { Textarea } from '@/components/ui/textarea'
import AdminItemContainer from '@/app/components/common/AdminItemContainer';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CareerFormProps {
    metaTitle: string;
    metaDescription: string;
    banner: string;
    bannerAlt: string;
    pageTitle: string;
    firstSection: {
        items: {
            title: string;
            subTitle: string;
            description: string;
            image: string;
            imageAlt: string;
        }[];
    };
    secondSection: {
        title: string;
        items: {
            title: string;
            mode: string;
            jobType: string;
        }[];
    };
}

const CareerPage = () => {


    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<CareerFormProps>();


    const { fields: firstSectionItems, append: firstSectionAppend, remove: firstSectionRemove } = useFieldArray({
        control,
        name: "firstSection.items"
    });

    const { fields: secondSectionItems, append: secondSectionAppend, remove: secondSectionRemove } = useFieldArray({
        control,
        name: "secondSection.items"
    });


    const handleAddCareer = async (data: CareerFormProps) => {
        try {
            const response = await fetch(`/api/admin/career`, {
                method: "PATCH",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in adding career", error);
        }
    }

    const fetchCareerData = async () => {
        try {
            const response = await fetch(`/api/admin/career`);
            if (response.ok) {
                const data = await response.json();
                setValue("banner", data.data.banner);
                setValue("bannerAlt", data.data.bannerAlt);
                setValue("pageTitle", data.data.pageTitle);
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("firstSection.items", data.data.firstSection.items);
                setValue("secondSection.title", data.data.secondSection.title);
                setValue("secondSection.items", data.data.secondSection.items);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching career data", error);
        }
    }



    useEffect(() => {
        fetchCareerData();
    }, []);


    return (
        <div className='flex flex-col gap-5'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit(handleAddCareer)}>
                <div className='flex justify-center fixed top-5 right-10 z-50'>
                    <Button type='submit' className="cursor-pointer text-white text-[16px] w-full">Save Changes</Button>
                </div>

                <div className='mt-14'>
                    <AdminItemContainer>
                        <Label className="" main>Banner</Label>
                        <div className='p-5 rounded-md grid grid-cols-2 gap-5'>
                            <div>
                                <Controller
                                    name="banner"
                                    control={control}
                                    rules={{ required: "Banner is required" }}
                                    render={({ field }) => (
                                        <ImageUploader
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    )}
                                />
                                {errors.banner && (
                                    <p className="text-red-500">{errors.banner.message}</p>
                                )}
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-1'>
                                    <Label className='font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register("bannerAlt")} />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <Label className='font-bold'>Page Title</Label>
                                    <Input type='text' placeholder='Page Title' {...register("pageTitle")} />
                                </div>
                            </div>
                        </div>
                    </AdminItemContainer>
                </div>

                <AdminItemContainer>
                    <Label main>First Section</Label>
                    <div className='p-5 rounded-md flex flex-col gap-2'>
                        <div>
                            <Label className='font-bold'>Items</Label>
                            <div className='border p-2 rounded-md flex flex-col gap-5 mt-0.5 grid grid-cols-3'>

                                {firstSectionItems.map((field, index) => (
                                    <div key={field.id} className='grid grid-cols-1 gap-2 relative border-b pb-5 last:border-b-0'>
                                        <div className='absolute top-2 right-2'>
                                            <RiDeleteBinLine onClick={() => firstSectionRemove(index)} className='cursor-pointer text-red-600' />
                                        </div>

                                        <div className='flex flex-col gap-2'>
                                            <div className='flex flex-col gap-2'>
                                                <div className='flex flex-col gap-2'>
                                                    <Label className='font-bold'>Title</Label>
                                                    <Input type='text' placeholder='Title' {...register(`firstSection.items.${index}.title`, {
                                                        required: "Value is required"
                                                    })} />
                                                    {errors.firstSection?.items?.[index]?.title && <p className='text-red-500'>{errors.firstSection?.items?.[index]?.title.message}</p>}
                                                </div>
                                            </div>

                                            <div className='flex flex-col gap-2'>
                                                <div className='flex flex-col gap-2'>
                                                    <Label className='font-bold'>Sub Title</Label>
                                                    <Input type='text' placeholder='Sub Title' {...register(`firstSection.items.${index}.subTitle`)} />
                                                </div>
                                            </div>

                                            <div className='flex flex-col gap-2'>
                                                <div className='flex flex-col gap-2'>
                                                    <Label className='font-bold'>Description</Label>
                                                    <Textarea placeholder='Description' {...register(`firstSection.items.${index}.description`, {
                                                        required: "Value is required"
                                                    })} />
                                                    {errors.firstSection?.items?.[index]?.description && <p className='text-red-500'>{errors.firstSection?.items?.[index]?.description.message}</p>}
                                                </div>
                                            </div>

                                            <div className='flex flex-col gap-1'>
                                                <Label className='font-bold'>Image</Label>
                                                <Controller
                                                    name={`firstSection.items.${index}.image`}
                                                    control={control}
                                                    rules={{ required: "Image is required" }}
                                                    render={({ field }) => (
                                                        <ImageUploader
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />
                                                {errors.firstSection?.items?.[index]?.image && (
                                                    <p className="text-red-500">{errors.firstSection?.items?.[index]?.image.message}</p>
                                                )}
                                                <Label className='font-bold'>Alt Tag</Label>
                                                <Input type='text' placeholder='Alt Tag' {...register(`firstSection.items.${index}.imageAlt`)} />
                                            </div>

                                        </div>

                                    </div>
                                ))}



                            </div>
                            <div className='flex justify-end mt-5'>
                                <Button type='button' className="" addItem onClick={() => firstSectionAppend({ title: "", description: "", subTitle: "", image: "", imageAlt: "" })}>Add Item</Button>
                            </div>
                        </div>


                    </div>
                </AdminItemContainer>


                <AdminItemContainer>
                    <Label main>Second Section</Label>
                    <div className='p-5 rounded-md flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("secondSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.secondSection?.title && <p className='text-red-500'>{errors.secondSection?.title.message}</p>}
                        </div>

                        <div>
                            <Label className=' font-bold'>Items</Label>
                            <div className='border p-2 rounded-md flex flex-col gap-5'>


                                {secondSectionItems.map((field, index) => (
                                    <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b pb-5 last:border-b-0'>
                                        <div className='absolute top-2 right-2'>
                                            <RiDeleteBinLine onClick={() => secondSectionRemove(index)} className='cursor-pointer text-red-600' />
                                        </div>

                                        <div className='flex flex-col gap-2'>
                                            <div className='flex flex-col gap-2'>
                                                <Label className='font-bold'>Title</Label>
                                                <Input type='text' placeholder='Title' {...register(`secondSection.items.${index}.title`, {
                                                    required: "Title is required"
                                                })} />
                                                {errors.secondSection?.items?.[index]?.title && <p className='text-red-500'>{errors.secondSection.items?.[index]?.title.message}</p>}
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <Label className='font-bold'>Mode</Label>
                                                <Controller
                                                    name={`secondSection.items.${index}.mode`}
                                                    control={control}
                                                    rules={{ required: "Mode is required" }}
                                                    render={({ field }) => (
                                                        <Select
                                                            onValueChange={field.onChange}
                                                            value={field.value}
                                                            defaultValue=""
                                                        >
                                                            <SelectTrigger className="w-full">
                                                                <SelectValue placeholder="Select Mode" />
                                                            </SelectTrigger>
                                                            <SelectContent>

                                                                <SelectItem key={"Onsite"} value="Onsite">
                                                                    Onsite
                                                                </SelectItem>
                                                                <SelectItem key={"Remote"} value="Remote">
                                                                    Remote
                                                                </SelectItem>
                                                                <SelectItem key={"Hybrid"} value="Hybrid">
                                                                    Hybrid
                                                                </SelectItem>

                                                            </SelectContent>
                                                        </Select>
                                                    )}
                                                />
                                                {errors.secondSection?.items?.[index]?.mode && <p className="text-red-500">{errors.secondSection.items?.[index]?.mode.message}</p>}

                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-2'>
                                            <Label className='font-bold'>Type</Label>
                                            <Controller
                                                name={`secondSection.items.${index}.jobType`}
                                                control={control}
                                                rules={{ required: "Type is required" }}
                                                render={({ field }) => (
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        value={field.value}
                                                        defaultValue=""
                                                    >
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Select Type" />
                                                        </SelectTrigger>
                                                        <SelectContent>

                                                            <SelectItem key={"Fulltime"} value="Fulltime">
                                                                Fulltime
                                                            </SelectItem>
                                                            <SelectItem key={"Parttime"} value="Parttime">
                                                                Parttime
                                                            </SelectItem>
                                                            <SelectItem key={"Contract"} value="Contract">
                                                                Contract
                                                            </SelectItem>

                                                        </SelectContent>
                                                    </Select>
                                                )}
                                            />
                                            {errors.secondSection?.items?.[index]?.jobType && <p className="text-red-500">{errors.secondSection.items?.[index]?.jobType.message}</p>}

                                        </div>

                                    </div>
                                ))}



                            </div>
                            <div className='flex justify-end mt-2'>
                                <Button type='button' className="cursor-pointer" addItem onClick={() => secondSectionAppend({ title: "", mode: "", jobType: "" })}>Add Item</Button>
                            </div>
                        </div>


                    </div>

                </AdminItemContainer>

                <div className='flex flex-col gap-2'>
                    <Label className='pl-3 font-bold'>Meta Title</Label>
                    <Input type='text' placeholder='Meta Title' {...register("metaTitle")} />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label className='pl-3 font-bold'>Meta Description</Label>
                    <Input type='text' placeholder='Meta Description' {...register("metaDescription")} />
                </div>


            </form>
        </div>
    )
}

export default CareerPage