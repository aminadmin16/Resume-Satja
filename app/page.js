import dynamic from "next/dynamic";

const ResumePdfOnePage = dynamic(() => import("./ResumePdfOnePage"));
const ResumeClient = dynamic(() => import("./ResumeClient"));
const ResumePaper = dynamic(() => import("./ResumePaper"));

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const isPdf = params?.pdf === "1";

  if (isPdf) {
    const lang = params?.lang === "th" ? "th" : "en";
    return (
      <main className="resume-page resume-page--pdf">
        <ResumePdfOnePage>
          <ResumePaper lang={lang} />
        </ResumePdfOnePage>
      </main>
    );
  }

  return <ResumeClient />;
}
