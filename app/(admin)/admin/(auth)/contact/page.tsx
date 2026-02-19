"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useEffect } from 'react'

import { useForm, useFieldArray } from "react-hook-form";
import { Button } from '@/components/ui/button'
import { RiDeleteBinLine } from "react-icons/ri";
import { Textarea } from '@/components/ui/textarea'
import AdminItemContainer from '@/app/components/common/AdminItemContainer';

interface ContactFormProps {

    metaTitle: string;
    metaDescription: string;
    firstSection: {
        items: {
            title: string;
            address: string;
            phone: string;
            email: string;
            fax: string;
            po: string;
            map: string;
        }[]
    }
}

const ContactPage = () => {


    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<ContactFormProps>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "firstSection.items"
    });


    const handleAddContact = async (data: ContactFormProps) => {
        try {
            const response = await fetch(`/api/admin/contact`, {
                method: "PATCH",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in adding contact", error);
        }
    }

    const fetchContactData = async () => {
        try {
            const response = await fetch(`/api/admin/contact`);
            if (response.ok) {
                const data = await response.json();
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("firstSection", data.data.firstSection);
                setValue("firstSection.items", data.data.firstSection.items);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching contact data", error);
        }
    }

    useEffect(() => {
        fetchContactData();
    }, []);


    return (
        <div className='flex flex-col gap-5'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit(handleAddContact)}>
                <div className='flex justify-center fixed top-5 right-10 z-50'>
                    <Button type='submit' className="cursor-pointer text-white text-[16px] w-full">Save Changes</Button>
                </div>

                <div className='mt-14'>
                    <AdminItemContainer>
                        <Label main>First Section</Label>
                        <div className='p-5 rounded-md flex flex-col gap-2'>
                            <div>
                                <Label className='font-bold'>Items</Label>
                                <div className='border border-black/20 p-2 rounded-md flex flex-col gap-5'>


                                    {fields.map((field, index) => (
                                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b border-black/20 p-2 pb-5 last:border-b-0'>
                                            <div className='absolute top-2 right-2'>
                                                <RiDeleteBinLine onClick={() => remove(index)} className='cursor-pointer text-red-600' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <div className='flex flex-col gap-2'>
                                                    <Label className='font-bold'>Title</Label>
                                                    <Input type='text' placeholder='Title' {...register(`firstSection.items.${index}.title`, {
                                                        required: "Title is required"
                                                    })} />
                                                    {errors.firstSection?.items?.[index]?.title && <p className='text-red-500'>{errors.firstSection?.items?.[index]?.title.message}</p>}
                                                </div>
                                                <div className='flex flex-col gap-2'>
                                                    <Label className='font-bold'>Address</Label>
                                                    <Textarea placeholder='Address' {...register(`firstSection.items.${index}.address`)} />
                                                </div>
                                                <div className='flex flex-col gap-2'>
                                                    <Label className='font-bold'>Phone</Label>
                                                    <Input type='text' placeholder='Phone' {...register(`firstSection.items.${index}.phone`)} />
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-2'>

                                                <div className='flex flex-col gap-2'>
                                                    <Label className='font-bold'>Email</Label>
                                                    <Textarea placeholder='Email' {...register(`firstSection.items.${index}.email`)} />
                                                </div>
                                                <div className='flex flex-col gap-2'>
                                                    <Label className='font-bold'>Fax</Label>
                                                    <Input type='text' placeholder='Fax' {...register(`firstSection.items.${index}.fax`)} />
                                                </div>
                                                <div className='flex flex-col gap-2'>
                                                    <Label className='font-bold'>PO</Label>
                                                    <Textarea placeholder='PO' {...register(`firstSection.items.${index}.po`)} />
                                                </div>
                                                <div className='flex flex-col gap-2'>
                                                    <Label className='font-bold'>Map</Label>
                                                    <Input type='text' placeholder='Map' {...register(`firstSection.items.${index}.map`)} />
                                                </div>
                                            </div>

                                        </div>
                                    ))}



                                </div>
                                <div className='flex justify-end mt-2'>
                                    <Button type='button' addItem onClick={() => append({ title: "", address: "", phone: "", email: "", fax: "", po: "", map: "" })}>Add Item</Button>
                                </div>
                            </div>


                        </div>

                    </AdminItemContainer>
                </div>

                <AdminItemContainer>
                    <Label main>SEO</Label>
                    <div className="flex flex-col gap-2 p-5">
                        <div className='flex flex-col gap-2'>
                            <Label className='font-bold'>Title</Label>
                            <Input type='text' placeholder='' {...register("metaTitle")} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label className='font-bold'>Description</Label>
                            <Input type='text' placeholder='' {...register("metaDescription")} />
                        </div>
                    </div>
                </AdminItemContainer>



            </form>
        </div>
    )
}

export default ContactPage