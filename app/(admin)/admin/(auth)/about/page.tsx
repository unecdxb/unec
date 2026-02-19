"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect } from 'react'

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Button } from '@/components/ui/button'
import { ImageUploader } from '@/components/ui/image-uploader'
import { RiDeleteBinLine } from "react-icons/ri";
import { Textarea } from '@/components/ui/textarea'
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })
import 'react-quill-new/dist/quill.snow.css';
import dynamic from 'next/dynamic'
import AdminItemContainer from '@/app/components/common/AdminItemContainer';

interface AboutFormProps {

  metaTitle: string;
  metaDescription: string;
  banner: string;
  bannerAlt: string;
  pageTitle: string;
  pageDescription: string;
  firstSection: {
    items: {
      title: string;
      description: string;
    }[];
  };
  secondSection: {
    id: string;
    items: {
      title: string;
      scrollToId: string;
    }[];
  };
  thirdSection: {
    id: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    name: string;
    designation: string;
  };
  fourthSection: {
    id: string;
    title: string;
    items: {
      image: string;
      imageAlt: string;
      name: string;
      designation: string;
    }[];
  };
  fifthSection: {
    id: string;
    title: string;
    subTitle: string;
    description: string;
    image: string;
    imageAlt: string;
    items: {
      image: string;
      imageAlt: string;
      title: string;
      description: string;
    }[];
  };
  sixthSection: {
    id: string;
    title: string;
    image: string;
    imageAlt: string;
    items: {
      title: string;
      subTitle: string;
    }[];
  };
  seventhSection: {
    id: string;
    title: string;
    items: {
      image: string;
      imageAlt: string;
      title: string;
      description: string;
      websiteLink: string;
    }[];
  };
  eighthSection: {
    id: string;
    title: string;
    items: {
      image: string;
      imageAlt: string;
      title: string;
      description: string;
    }[];
  };
}

const AboutPage = () => {


  const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<AboutFormProps>();


  const { fields: firstSectionItems, append: firstSectionAppend, remove: firstSectionRemove } = useFieldArray({
    control,
    name: "firstSection.items"
  });

  const { fields: secondSectionItems, append: secondSectionAppend, remove: secondSectionRemove } = useFieldArray({
    control,
    name: "secondSection.items"
  });

  const { fields: fourthSectionItems, append: fourthSectionAppend, remove: fourthSectionRemove } = useFieldArray({
    control,
    name: "fourthSection.items"
  });

  const { fields: fifthSectionItems, append: fifthSectionAppend, remove: fifthSectionRemove } = useFieldArray({
    control,
    name: "fifthSection.items"
  });

  const { fields: sixthSectionItems, append: sixthSectionAppend, remove: sixthSectionRemove } = useFieldArray({
    control,
    name: "sixthSection.items"
  });

  const { fields: seventhSectionItems, append: seventhSectionAppend, remove: seventhSectionRemove } = useFieldArray({
    control,
    name: "seventhSection.items"
  });

  const { fields: eighthSectionItems, append: eighthSectionAppend, remove: eighthSectionRemove } = useFieldArray({
    control,
    name: "eighthSection.items"
  });


  const handleAddAbout = async (data: AboutFormProps) => {
    try {
      const response = await fetch(`/api/admin/about`, {
        method: "PATCH",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        // router.push("/admin/commitment");
      }
    } catch (error) {
      console.log("Error in adding about", error);
    }
  }

  const fetchAboutData = async () => {
    try {
      const response = await fetch(`/api/admin/about`);
      if (response.ok) {
        const data = await response.json();
        setValue("banner", data.data.banner);
        setValue("bannerAlt", data.data.bannerAlt);
        setValue("pageTitle", data.data.pageTitle);
        setValue("pageDescription", data.data.pageDescription);
        setValue("metaTitle", data.data.metaTitle);
        setValue("metaDescription", data.data.metaDescription);
        setValue("firstSection.items", data.data.firstSection.items);
        setValue("secondSection.items", data.data.secondSection.items);
        setValue("thirdSection", data.data.thirdSection);
        setValue("fourthSection", data.data.fourthSection);
        setValue("fourthSection.items", data.data.fourthSection.items);
        setValue("fifthSection", data.data.fifthSection);
        setValue("fifthSection.items", data.data.fifthSection.items);
        setValue("sixthSection", data.data.sixthSection);
        setValue("sixthSection.items", data.data.sixthSection.items);
        setValue("seventhSection", data.data.seventhSection);
        setValue("seventhSection.items", data.data.seventhSection.items);
        setValue("eighthSection", data.data.eighthSection);
        setValue("eighthSection.items", data.data.eighthSection.items);
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error in fetching about data", error);
    }
  }



  useEffect(() => {
    fetchAboutData();
  }, []);


  return (
    <div className='flex flex-col gap-5'>
      <form className='flex flex-col gap-5' onSubmit={handleSubmit(handleAddAbout)}>
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
                <div>
                  <Label className="text-sm font-bold">Page Description</Label>
                  <Controller name="pageDescription" control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                    return <Textarea value={field.value} onChange={field.onChange} />
                  }} />
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
              <div className='border border-black/20 p-2 rounded-md flex flex-col gap-5 mt-0.5 grid grid-cols-3'>

                {firstSectionItems.map((field, index) => (
                  <div key={field.id} className='grid grid-cols-1 gap-2 relative border-r border-black/20 pr-5 last:border-0'>
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
                          <Label className='font-bold'>Description</Label>
                          <Textarea placeholder='Description' {...register(`firstSection.items.${index}.description`, {
                            required: "Value is required"
                          })} />
                          {errors.firstSection?.items?.[index]?.description && <p className='text-red-500'>{errors.firstSection?.items?.[index]?.description.message}</p>}
                        </div>
                      </div>
                    </div>

                  </div>
                ))}



              </div>
              <div className='flex justify-end mt-5'>
                <Button type='button' className="" addItem onClick={() => firstSectionAppend({ title: "", description: "" })}>Add Item</Button>
              </div>
            </div>


          </div>
        </AdminItemContainer>


        <AdminItemContainer>
          <Label main>Second Section</Label>
          <div className='p-5 rounded-md flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>


              <div>
                <Label className='font-bold'>Items</Label>
                <div className='border border-black/20 p-2 rounded-md flex flex-col gap-5 mt-0.5 grid grid-cols-3'>


                  {secondSectionItems.map((field, index) => (
                    <div key={field.id} className='grid grid-cols-1 gap-2 relative border-r border-black/20 pr-5 last:border-0'>
                      <div className='absolute top-2 right-2'>
                        <RiDeleteBinLine onClick={() => secondSectionRemove(index)} className='cursor-pointer text-red-600' />
                      </div>
                      <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                          <Label className='font-bold'>Title</Label>
                          <Input type='text' placeholder='Title' {...register(`secondSection.items.${index}.title`)} />
                        </div>
                      </div>
                      <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                          <Label className='font-bold'>Scroll To Id</Label>
                          <Input type='text' placeholder='Value' {...register(`secondSection.items.${index}.scrollToId`)} />
                        </div>
                      </div>

                    </div>
                  ))}



                </div>
                <div className='flex justify-end mt-5'>
                  <Button type='button' className="" addItem onClick={() => secondSectionAppend({ title: "", scrollToId: "" })}>Add Item</Button>
                </div>
              </div>
            </div>

          </div>
        </AdminItemContainer>


        <AdminItemContainer>
          <Label main>Third Section</Label>
          <div className='p-5 rounded-md flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                  <Label className='font-bold'>Id</Label>
                  <Input type='text' placeholder='Value' {...register(`thirdSection.id`)} />
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <Label className='font-bold'>Title</Label>
                <Textarea placeholder='Title' {...register("thirdSection.title", {
                  required: "Title is required"
                })} />
              </div>
              <div>
                <Label className="text-sm font-bold">Description</Label>
                <Controller name="thirdSection.description" control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                  return <Textarea value={field.value} onChange={field.onChange} />
                }} />
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <Label className='font-bold'>Image</Label>
              <Controller
                name="thirdSection.image"
                control={control}
                rules={{ required: "Image is required" }}
                render={({ field }) => (
                  <ImageUploader
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.thirdSection?.image && (
                <p className="text-red-500">{errors.thirdSection?.image.message}</p>
              )}
              <Label className='font-bold'>Alt Tag</Label>
              <Input type='text' placeholder='Alt Tag' {...register("thirdSection.imageAlt")} />
            </div>

            <div className='flex flex-col gap-1'>
              <Label className='font-bold'>Name</Label>
              <Input type='text' placeholder='Name' {...register("thirdSection.name", {
                required: "Name is required"
              })} />
            </div>

            <div className='flex flex-col gap-1'>
              <Label className='font-bold'>Designation</Label>
              <Input type='text' placeholder='Designation' {...register("thirdSection.designation", {
                required: "Designation is required"
              })} />
            </div>

          </div>
        </AdminItemContainer>

        <AdminItemContainer>
          <Label main>Fourth Section</Label>
          <div className='p-5 rounded-md flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                  <Label className='font-bold'>Id</Label>
                  <Input type='text' placeholder='Value' {...register(`fourthSection.id`)} />
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <Label className='font-bold'>Title</Label>
                <Input type='text' placeholder='Title' {...register("fourthSection.title", {
                  required: "Title is required"
                })} />
                {errors.fourthSection?.title && <p className='text-red-500'>{errors.fourthSection?.title.message}</p>}
              </div>

            </div>


            <div>
              <Label className='font-bold'>Items</Label>
              <div className='border border-black/20 p-2 rounded-md flex flex-col gap-5'>


                {fourthSectionItems.map((field, index) => (
                  <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b border-black/20 pb-5 last:border-b-0'>
                    <div className='absolute top-2 right-2'>
                      <RiDeleteBinLine onClick={() => fourthSectionRemove(index)} className='cursor-pointer text-red-600' />
                    </div>

                    <div className='flex flex-col gap-2'>
                      <div className='flex flex-col gap-2'>
                        <Label className='font-bold'>Image</Label>
                        <Controller
                          name={`fourthSection.items.${index}.image`}
                          control={control}
                          rules={{ required: "Image is required" }}
                          render={({ field }) => (
                            <ImageUploader
                              value={field.value}
                              onChange={field.onChange}
                            />
                          )}
                        />
                        {errors.fourthSection?.items?.[index]?.image && (
                          <p className="text-red-500">{errors.fourthSection?.items?.[index]?.image.message}</p>
                        )}
                      </div>

                      <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                          <Label className='font-bold'>Alt Tag</Label>
                          <Input type='text' placeholder='Alt Tag' {...register(`fourthSection.items.${index}.imageAlt`, {
                            required: "Value is required"
                          })} />
                          {errors.fourthSection?.items?.[index]?.imageAlt && <p className='text-red-500'>{errors.fourthSection?.items?.[index]?.imageAlt.message}</p>}
                        </div>
                      </div>


                    </div>

                    <div className='flex flex-col gap-2'>

                      <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                          <Label className='font-bold'>Name</Label>
                          <Input type='text' placeholder='Name' {...register(`fourthSection.items.${index}.name`, {
                            required: "Value is required"
                          })} />
                          {errors.fourthSection?.items?.[index]?.name && <p className='text-red-500'>{errors.fourthSection?.items?.[index]?.name.message}</p>}
                        </div>
                      </div>

                      <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                          <Label className='font-bold'>Designation</Label>
                          <Input type='text' placeholder='Designation' {...register(`fourthSection.items.${index}.designation`, {
                            required: "Value is required"
                          })} />
                          {errors.fourthSection?.items?.[index]?.designation && <p className='text-red-500'>{errors.fourthSection?.items?.[index]?.designation.message}</p>}
                        </div>
                      </div>
                    </div>

                  </div>
                ))}



              </div>
              <div className='flex justify-end mt-2'>
                <Button type='button' addItem onClick={() => fourthSectionAppend({ name: "", designation: "", image: "", imageAlt: "" })}>Add Item</Button>
              </div>
            </div>


          </div>
        </AdminItemContainer>


        <AdminItemContainer>
          <Label main>Fifth Section</Label>
          <div className='p-5 rounded-md flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                  <Label className='font-bold'>Id</Label>
                  <Input type='text' placeholder='Value' {...register(`fifthSection.id`)} />
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <Label className='font-bold'>Title</Label>
                <Input type='text' placeholder='Title' {...register("fifthSection.title", {
                  required: "Title is required"
                })} />
                {errors.fifthSection?.title && <p className='text-red-500'>{errors.fifthSection?.title.message}</p>}
              </div>
            </div>


            <div>
              <Label className='font-bold'>Items</Label>
              <div className='border border-black/20 p-2 rounded-md flex flex-col gap-5'>


                {fifthSectionItems.map((field, index) => (
                  <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b border-black/20 pb-5 last:border-b-0'>
                    <div className='absolute top-2 right-2'>
                      <RiDeleteBinLine onClick={() => fifthSectionRemove(index)} className='cursor-pointer text-red-600' />
                    </div>

                    <div className='flex flex-col gap-2'>
                      <div className='flex flex-col gap-2'>
                        <Label className='font-bold'>Image</Label>
                        <Controller
                          name={`fifthSection.items.${index}.image`}
                          control={control}
                          rules={{ required: "Image is required" }}
                          render={({ field }) => (
                            <ImageUploader
                              isLogo
                              value={field.value}
                              onChange={field.onChange}
                            />
                          )}
                        />
                        {errors.fifthSection?.items?.[index]?.image && (
                          <p className="text-red-500">{errors.fifthSection?.items?.[index]?.image.message}</p>
                        )}
                      </div>

                      <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                          <Label className='font-bold'>Alt Tag</Label>
                          <Input type='text' placeholder='Alt Tag' {...register(`fifthSection.items.${index}.imageAlt`, {
                            required: "Value is required"
                          })} />
                          {errors.fifthSection?.items?.[index]?.imageAlt && <p className='text-red-500'>{errors.fifthSection?.items?.[index]?.imageAlt.message}</p>}
                        </div>
                      </div>


                    </div>

                    <div className='flex flex-col gap-2'>

                      <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                          <Label className='font-bold'>Title</Label>
                          <Input type='text' placeholder='Title' {...register(`fifthSection.items.${index}.title`, {
                            required: "Title is required"
                          })} />
                          {errors.fifthSection?.items?.[index]?.title && <p className='text-red-500'>{errors.fifthSection?.items?.[index]?.title.message}</p>}
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-bold">Description</Label>
                        <Controller name={`fifthSection.items.${index}.description`} control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                          return <Textarea value={field.value} onChange={field.onChange} />
                        }} />
                      </div>
                    </div>

                  </div>
                ))}



              </div>
              <div className='flex justify-end mt-2'>
                <Button type='button' addItem onClick={() => fifthSectionAppend({ title: "", description: "", image: "", imageAlt: "" })}>Add Item</Button>
              </div>
            </div>


          </div>
        </AdminItemContainer>


        <AdminItemContainer>
          <Label main>Sixth Section</Label>
          <div className='p-5 rounded-md flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                  <Label className='font-bold'>Id</Label>
                  <Input type='text' placeholder='Value' {...register(`sixthSection.id`)} />
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <Label className='font-bold'>Title</Label>
                <Input type='text' placeholder='Title' {...register("sixthSection.title", {
                  required: "Title is required"
                })} />
                {errors.sixthSection?.title && <p className='text-red-500'>{errors.sixthSection?.title.message}</p>}
              </div>

            </div>

            <div className='flex flex-col gap-1'>
              <Label className='font-bold'>Image</Label>
              <Controller
                name="sixthSection.image"
                control={control}
                rules={{ required: "Image is required" }}
                render={({ field }) => (
                  <ImageUploader
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.sixthSection?.image && (
                <p className="text-red-500">{errors.sixthSection?.image.message}</p>
              )}
              <Label className='font-bold'>Alt Tag</Label>
              <Input type='text' placeholder='Alt Tag' {...register("sixthSection.imageAlt")} />
            </div>


            <div>
              <Label className='font-bold'>Items</Label>
              <div className='border border-black/20 p-2 rounded-md flex flex-col gap-5 grid grid-cols-3'>


                {sixthSectionItems.map((field, index) => (
                  <div key={field.id} className='grid grid-cols-1 gap-2 relative border-black/20 border-r  pr-5 last:border-0'>
                    <div className='absolute top-2 right-2'>
                      <RiDeleteBinLine onClick={() => sixthSectionRemove(index)} className='cursor-pointer text-red-600' />
                    </div>

                    <div className='flex flex-col gap-2'>

                      <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                          <Label className='font-bold'>Title</Label>
                          <Input type='text' placeholder='Title' {...register(`sixthSection.items.${index}.title`, {
                            required: "Title is required"
                          })} />
                          {errors.sixthSection?.items?.[index]?.title && <p className='text-red-500'>{errors.sixthSection?.items?.[index]?.title.message}</p>}
                        </div>
                      </div>

                      <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                          <Label className='font-bold'>Sub Title</Label>
                          <Input type='text' placeholder='Title' {...register(`sixthSection.items.${index}.subTitle`)} />
                        </div>
                      </div>

                    </div>

                  </div>
                ))}



              </div>
              <div className='flex justify-end mt-2'>
                <Button type='button' addItem onClick={() => sixthSectionAppend({ title: "", subTitle: "" })}>Add Item</Button>
              </div>
            </div>


          </div>
        </AdminItemContainer>


        <AdminItemContainer>
          <Label main>Seventh Section</Label>
          <div className='p-5 rounded-md flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                  <Label className='font-bold'>Id</Label>
                  <Input type='text' placeholder='Value' {...register(`seventhSection.id`)} />
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <Label className='font-bold'>Title</Label>
                <Input type='text' placeholder='Title' {...register("seventhSection.title", {
                  required: "Title is required"
                })} />
                {errors.seventhSection?.title && <p className='text-red-500'>{errors.seventhSection?.title.message}</p>}
              </div>

            </div>


            <div>
              <Label className='font-bold'>Items</Label>
              <div className='border border-black/20 p-2 rounded-md flex flex-col gap-5'>


                {seventhSectionItems.map((field, index) => (
                  <div key={field.id} className='grid grid-cols-2 gap-2 relative border-black/20 border-b pb-5 last:border-b-0'>
                    <div className='absolute top-2 right-2'>
                      <RiDeleteBinLine onClick={() => seventhSectionRemove(index)} className='cursor-pointer text-red-600' />
                    </div>

                    <div className='flex flex-col gap-2'>
                      <div className='flex flex-col gap-2'>
                        <Label className='font-bold'>Image</Label>
                        <Controller
                          name={`seventhSection.items.${index}.image`}
                          control={control}
                          rules={{ required: "Image is required" }}
                          render={({ field }) => (
                            <ImageUploader
                              value={field.value}
                              onChange={field.onChange}
                            />
                          )}
                        />
                        {errors.seventhSection?.items?.[index]?.image && (
                          <p className="text-red-500">{errors.seventhSection?.items?.[index]?.image.message}</p>
                        )}
                      </div>

                      <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                          <Label className='font-bold'>Alt Tag</Label>
                          <Input type='text' placeholder='Alt Tag' {...register(`seventhSection.items.${index}.imageAlt`, {
                            required: "Value is required"
                          })} />
                          {errors.seventhSection?.items?.[index]?.imageAlt && <p className='text-red-500'>{errors.seventhSection?.items?.[index]?.imageAlt.message}</p>}
                        </div>
                      </div>


                    </div>

                    <div className='flex flex-col gap-2'>

                      <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                          <Label className='font-bold'>Title</Label>
                          <Input type='text' placeholder='Title' {...register(`seventhSection.items.${index}.title`, {
                            required: "Title is required"
                          })} />
                          {errors.seventhSection?.items?.[index]?.title && <p className='text-red-500'>{errors.seventhSection?.items?.[index]?.title.message}</p>}
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-bold">Description</Label>
                        <Controller name={`seventhSection.items.${index}.description`} control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                          return <Textarea value={field.value} onChange={field.onChange} />
                        }} />
                      </div>

                      <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                          <Label className='font-bold'>Website Link</Label>
                          <Input type='text' placeholder='Website Link' {...register(`seventhSection.items.${index}.websiteLink`)} />
                          {errors.seventhSection?.items?.[index]?.websiteLink && <p className='text-red-500'>{errors.seventhSection?.items?.[index]?.websiteLink.message}</p>}
                        </div>
                      </div>

                    </div>

                  </div>
                ))}



              </div>
              <div className='flex justify-end mt-2'>
                <Button type='button' addItem onClick={() => seventhSectionAppend({ title: "", description: "", image: "", imageAlt: "", websiteLink: "" })}>Add Item</Button>
              </div>
            </div>


          </div>
        </AdminItemContainer>

        <AdminItemContainer>
          <Label main>Eighth Section</Label>
          <div className='p-5 rounded-md flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                  <Label className='font-bold'>Id</Label>
                  <Input type='text' placeholder='Value' {...register(`eighthSection.id`)} />
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <Label className='font-bold'>Title</Label>
                <Input type='text' placeholder='Title' {...register("eighthSection.title", {
                  required: "Title is required"
                })} />
                {errors.eighthSection?.title && <p className='text-red-500'>{errors.eighthSection?.title.message}</p>}
              </div>

            </div>


            <div>
              <Label className='font-bold'>Items</Label>
              <div className='border border-black/20 p-2 rounded-md flex flex-col gap-5'>


                {eighthSectionItems.map((field, index) => (
                  <div key={field.id} className='grid grid-cols-2 gap-2 relative border-black/20 border-b pb-5 last:border-b-0'>
                    <div className='absolute top-2 right-2'>
                      <RiDeleteBinLine onClick={() => eighthSectionRemove(index)} className='cursor-pointer text-red-600' />
                    </div>

                    <div className='flex flex-col gap-2'>
                      <div className='flex flex-col gap-2'>
                        <Label className='font-bold'>Image</Label>
                        <Controller
                          name={`eighthSection.items.${index}.image`}
                          control={control}
                          rules={{ required: "Image is required" }}
                          render={({ field }) => (
                            <ImageUploader
                              isLogo
                              value={field.value}
                              onChange={field.onChange}
                            />
                          )}
                        />
                        {errors.eighthSection?.items?.[index]?.image && (
                          <p className="text-red-500">{errors.eighthSection?.items?.[index]?.image.message}</p>
                        )}
                      </div>

                      <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                          <Label className='font-bold'>Alt Tag</Label>
                          <Input type='text' placeholder='Alt Tag' {...register(`eighthSection.items.${index}.imageAlt`, {
                            required: "Value is required"
                          })} />
                          {errors.eighthSection?.items?.[index]?.imageAlt && <p className='text-red-500'>{errors.eighthSection?.items?.[index]?.imageAlt.message}</p>}
                        </div>
                      </div>


                    </div>

                    <div className='flex flex-col gap-2'>

                      <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                          <Label className='font-bold'>Title</Label>
                          <Input type='text' placeholder='Title' {...register(`eighthSection.items.${index}.title`, {
                            required: "Title is required"
                          })} />
                          {errors.eighthSection?.items?.[index]?.title && <p className='text-red-500'>{errors.eighthSection?.items?.[index]?.title.message}</p>}
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-bold">Description</Label>
                        <Controller name={`eighthSection.items.${index}.description`} control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                          return <Textarea value={field.value} onChange={field.onChange} />
                        }} />
                      </div>
                    </div>

                  </div>
                ))}



              </div>
              <div className='flex justify-end mt-2'>
                <Button type='button' addItem onClick={() => eighthSectionAppend({ title: "", description: "", image: "", imageAlt: "" })}>Add Item</Button>
              </div>
            </div>


          </div>
        </AdminItemContainer>

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

export default AboutPage