"use client";

import { useSearchParams } from "next/navigation";

const CompanyProfile = () => {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");

  if (!url) {
    return <div>No PDF URL provided</div>;
  }

  return (
    <iframe
      src={`/api/admin/pdf-proxy?url=${encodeURIComponent(url)}`}
      className="w-full h-screen"
    />
  );
};

export default CompanyProfile;