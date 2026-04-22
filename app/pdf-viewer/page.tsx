
const CompanyProfile = () => {
    return (
        <iframe
            src={`/api/admin/pdf-proxy?url=${encodeURIComponent("https://dl.dropboxusercontent.com/scl/fi/qjxrtdj7qmlxlzosy8j99/1776683847814Company-Profile-2024-v1.pdf?rlkey=hrm03oia5a0db5yk2o2j5hm1b&dl=0")}`}
            className="w-full h-screen"
        />
    );
}

export default CompanyProfile;