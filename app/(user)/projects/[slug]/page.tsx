import Index from "@/app/components/project-details";

const Page = async ({ params }: {
    params: Promise<{ slug: string }>;
}) => {
    const slug = (await params).slug;
    const response = await fetch(
        `${process.env.BASE_URL}/api/admin/project?slug=${slug}`,
        { next: { revalidate: 60 } }
    );
    const data = await response.json();

    const allProjectResponse = await fetch(
        `${process.env.BASE_URL}/api/admin/project`,
        { next: { revalidate: 60 } }
    );
    const allProjectData = await allProjectResponse.json();

    return <Index data={data.data} allProjectData={allProjectData.data} />

}

export default Page;