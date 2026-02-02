import Index from "@/app/components/projects";
const Page = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/admin/project`, { next: { revalidate: 60 } });
    const data = await response.json();

    const regionResponse = await fetch(`${process.env.BASE_URL}/api/admin/project/region`, { next: { revalidate: 60 } });
    const regionData = await regionResponse.json();

    const categoryResponse = await fetch(`${process.env.BASE_URL}/api/admin/project/category`, { next: { revalidate: 60 } });
    const categoryData = await categoryResponse.json();

    return (
        <Index data={data.data} regionData={regionData.data} categoryData={categoryData.data} />
    );
}
export default Page;