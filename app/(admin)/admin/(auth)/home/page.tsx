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
import { toast } from 'sonner';
import { FileUploader } from '@/components/ui/file-uploader';

interface HomeFormProps {
    metaTitle: string;
    metaDescription: string;
    bannerSection: {
        items: {
            image: string;
            imageAlt: string;
            title: string;
            description: string;
        }[];
    };
    firstSection: {
        description: string;
        fileTitle: string;
        file: string;
        items: {
            number: string;
            value: string;
        }[];
    };
    secondSection: {
        title: string;
    };
    thirdSection: {
        title: string;
    };
    fourthSection: {
        title: string;
        items: {
            logo: string;
            logoAlt: string;
        }[];
    };
}

const Home = () => {


    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<HomeFormProps>();


    const { fields: firstSectionItems, append: firstSectionAppend, remove: firstSectionRemove } = useFieldArray({
        control,
        name: "firstSection.items"
    });

    const { fields: bannerSectionItems, append: bannerSectionAppend, remove: bannerSectionRemove } = useFieldArray({
        control,
        name: "bannerSection.items"
    });


    const { fields: fourthSectionItems, append: fourthSectionAppend, remove: fourthSectionRemove } = useFieldArray({
        control,
        name: "fourthSection.items"
    });


    const handleAddHome = async (data: HomeFormProps) => {
        try {
            const response = await fetch(`/api/admin/home`, {
                method: "PATCH",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in adding home", error);
        }
    }

    const fetchHomeData = async () => {
        try {
            const response = await fetch(`/api/admin/home`);
            if (response.ok) {
                const data = await response.json();
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("firstSection", data.data.firstSection);
                setValue("firstSection.items", data.data.firstSection.items);
                setValue("secondSection", data.data.secondSection);
                setValue("thirdSection", data.data.thirdSection);
                setValue("fourthSection", data.data.fourthSection);
                setValue("fourthSection.items", data.data.fourthSection.items);
                setValue("bannerSection", data.data.bannerSection);
                setValue("bannerSection.items", data.data.bannerSection.items);
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error in fetching home data", error);
        }
    }

    useEffect(() => {
        fetchHomeData();
    }, []);


    return (
        <div className='flex flex-col gap-5'>
            <form className='flex flex-col gap-5 relative' onSubmit={handleSubmit(handleAddHome)}>
                <div className='flex justify-center fixed top-5 right-10 z-50'>
                    <Button type='submit' className="cursor-pointer text-white text-[16px] w-full">Save Changes</Button>
                </div>

                <div className='mt-14'>
                    <AdminItemContainer>
                        <Label className='' main>Banner Section</Label>
                        <div className='p-5 flex flex-col gap-5'>
                            <Label className=' font-bold'>Items</Label>
                            <div className='border p-2 rounded-md grid grid-cols-2 gap-5'>

                                {bannerSectionItems.map((field, index) => (
                                    <div key={field.id} className='grid grid-cols-1 gap-2 relative border-b pb-5'>
                                        <div className='absolute top-2 right-2'>
                                            <RiDeleteBinLine onClick={() => bannerSectionRemove(index)} className='cursor-pointer text-red-600' />
                                        </div>


                                        <div className='p-5 rounded-md grid grid-cols-2 gap-5'>
                                            <div className='flex flex-col gap-2'>
                                                <div className='flex flex-col gap-2'>
                                                    <Label className=''>Image</Label>
                                                    <Controller
                                                        name={`bannerSection.items.${index}.image`}
                                                        control={control}
                                                        rules={{ required: "Image is required" }}
                                                        render={({ field }) => (
                                                            <ImageUploader
                                                                value={field.value}
                                                                onChange={field.onChange}
                                                            />
                                                        )}
                                                    />
                                                    {errors.bannerSection?.items?.[index]?.image && (
                                                        <p className="text-red-500">{errors.bannerSection?.items?.[index]?.image.message}</p>
                                                    )}
                                                </div>

                                                <div className='flex flex-col gap-2'>
                                                    <Label className=' font-bold'>Alt Tag</Label>
                                                    <Input type='text' placeholder='Alt Tag' {...register(`bannerSection.items.${index}.imageAlt`)} />
                                                </div>



                                            </div>

                                            <div className='flex flex-col gap-2'>
                                                <div className='flex flex-col gap-2'>
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Title</Label>
                                                        <Input type='text' placeholder='Title' {...register(`bannerSection.items.${index}.title`, {
                                                            required: "Value is required"
                                                        })} />
                                                        {errors.bannerSection?.items?.[index]?.title && <p className='text-red-500'>{errors.bannerSection?.items?.[index]?.title.message}</p>}
                                                    </div>
                                                    <div className='flex flex-col gap-2'>
                                                        <div className='flex flex-col gap-2'>
                                                            <Label className='font-bold'>Description</Label>
                                                            <Textarea placeholder='Description' {...register(`bannerSection.items.${index}.description`, {
                                                                required: "Value is required"
                                                            })} />
                                                            {errors.bannerSection?.items?.[index]?.description && <p className='text-red-500'>{errors.bannerSection?.items?.[index]?.description.message}</p>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                ))}


                            </div>
                            <div className='flex justify-end mt-2'>
                                <Button type='button' className="" addItem onClick={() => bannerSectionAppend({ title: "", image: "", description: "", imageAlt: "" })}>Add Item</Button>
                            </div>
                        </div>
                    </AdminItemContainer>

                </div>

                <AdminItemContainer>
                    <Label className='' main>First Section</Label>
                    <div className='p-5 flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Description</Label>
                                <Textarea placeholder='Description' {...register("firstSection.description", {
                                    required: "Description is required"
                                })} />
                                {errors.firstSection?.description && <p className='text-red-500'>{errors.firstSection?.description.message}</p>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>File Title</Label>
                                <Input type='text' placeholder='File Title' {...register("firstSection.fileTitle", {
                                    required: "Title is required"
                                })} />
                                {errors.firstSection?.fileTitle && <p className='text-red-500'>{errors.firstSection?.fileTitle.message}</p>}
                            </div>
                            <div>
                                <Label className=' font-bold'>File</Label>
                                <Controller
                                    name="firstSection.file"
                                    control={control}
                                    rules={{ required: "File is required" }}
                                    render={({ field }) => (
                                        <FileUploader
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    )}
                                />
                            </div>
                        </div>


                        <div className='flex flex-col gap-2'>
                            <Label className=' font-bold'>Items</Label>
                            <div className='border p-2 rounded-md grid grid-cols-2 gap-5'>


                                {firstSectionItems.map((field, index) => (
                                    <div key={field.id} className='grid grid-cols-1 gap-2 relative border-b  pb-5'>
                                        <div className='absolute top-2 right-2'>
                                            <RiDeleteBinLine onClick={() => firstSectionRemove(index)} className='cursor-pointer text-red-600' />
                                        </div>


                                        <div className='flex flex-col gap-2'>
                                            <div className='flex flex-col gap-2'>
                                                <Label className=' font-bold'>Number</Label>
                                                <Input type='text' placeholder='Number' {...register(`firstSection.items.${index}.number`)} />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <Label className=' font-bold'>Value</Label>
                                                <Input type='text' placeholder='Value' {...register(`firstSection.items.${index}.value`, {
                                                    required: "Value is required"
                                                })} />
                                                {errors.firstSection?.items?.[index]?.value && <p className='text-red-500'>{errors.firstSection?.items?.[index]?.value.message}</p>}
                                            </div>
                                        </div>

                                    </div>
                                ))}

                            </div>
                            <div className='flex justify-end'>
                                <Button type='button' className="" addItem onClick={() => firstSectionAppend({ number: "", value: "" })}>Add Item</Button>
                            </div>
                        </div>

                    </div>
                </AdminItemContainer>



                <AdminItemContainer>
                    <Label className='' main>Second Section</Label>
                    <div className='p-5  flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Title</Label>
                                <Input type='text' placeholder='Title' {...register("secondSection.title", {
                                    required: "Title is required"
                                })} />
                                {errors.secondSection?.title && <p className='text-red-500'>{errors.secondSection?.title.message}</p>}
                            </div>
                        </div>
                    </div>
                </AdminItemContainer>


                <AdminItemContainer>
                    <Label className='' main>Third Section</Label>
                    <div className='p-5  flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Title</Label>
                                <Input type='text' placeholder='Title' {...register("thirdSection.title", {
                                    required: "Title is required"
                                })} />
                                {errors.thirdSection?.title && <p className='text-red-500'>{errors.thirdSection?.title.message}</p>}
                            </div>
                        </div>
                    </div>
                </AdminItemContainer>


                <AdminItemContainer>
                    <Label className='' main>Fourth Section</Label>
                    <div className='rounded-md flex flex-col gap-5 p-5'>

                        <div className='flex flex-col gap-1'>
                            <Label className=' font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("fourthSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.fourthSection?.title && <p className='text-red-500'>{errors.fourthSection?.title.message}</p>}
                        </div>

                        <div className=''>
                            <Label className=' font-bold'>Items</Label>
                            <div className='rounded-md grid grid-cols-2 gap-5 border p-2'>
                                {fourthSectionItems.map((field, index) => (
                                    <div key={field.id} className='grid grid-cols-1 gap-2 relative border-b pb-5'>
                                        <div className='absolute top-0 right-2'>
                                            <RiDeleteBinLine onClick={() => fourthSectionRemove(index)} className='cursor-pointer text-red-600' />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <div>
                                                <Label className=' font-bold'>Logo</Label>
                                                <Controller
                                                    name={`fourthSection.items.${index}.logo`}
                                                    control={control}
                                                    rules={{ required: "Logo is required" }}
                                                    render={({ field }) => (
                                                        <ImageUploader
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                            isLogo
                                                        />
                                                    )}
                                                />
                                                {errors.fourthSection?.items?.[index]?.logo && (
                                                    <p className="text-red-500">{errors.fourthSection?.items?.[index]?.logo.message}</p>
                                                )}
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <Label className=' font-bold'>Alt Tag</Label>
                                                <Input type='text' placeholder='Alt Tag' {...register(`fourthSection.items.${index}.logoAlt`)} />
                                            </div>
                                        </div>
                                    </div>
                                ))}



                            </div>

                            <div className='flex justify-end mt-5'>
                                <Button type='button' className="" addItem onClick={() => fourthSectionAppend({ logo: "", logoAlt: "" })}>Add Item</Button>
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



            </form>
        </div>
    )
}

export default Home