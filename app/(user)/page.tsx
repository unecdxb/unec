
import Home from "../components/home";
export default async function Page() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/home`, { next: { revalidate: 60 } });
  const data = await response.json();

  const projectResponse = await fetch(`${process.env.BASE_URL}/api/admin/project`, { next: { revalidate: 60 } });
  const projectData = await projectResponse.json();

  const newsResponse = await fetch(`${process.env.BASE_URL}/api/admin/news`, { next: { revalidate: 60 } });
  const newsData = await newsResponse.json();

  return (
    <main>
      <Home data={data.data} projectData={projectData.data} newsData={newsData.data} />
    </main>
  );
}
