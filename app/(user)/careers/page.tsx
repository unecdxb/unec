import Index from "@/app/components/careers/index";
const Page = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/admin/career`, { next: { revalidate: 60 } });
    const data = await response.json();
    return <Index data={data.data} />
}
export default Page;