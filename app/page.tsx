import ContentContainer from "@/components/ContentContainer";
import Part from "@/components/Part";
import AddNewPartSection from "@/components/Sections/AddNewPartSection";
import getParts from "@/utils/queries/getParts";

export default async function Home() {
  const data = await getParts();

  return (
    <ContentContainer>
      <h1 className="pb-6 text-3xl">Available parts for purchase</h1>
      {typeof data !== "string" && (
        <>
          {data.map((item) => (
            <Part key={`part_${item.id}`} part={item} />
          ))}
          <AddNewPartSection lastId={data[data.length - 1].id} />
        </>
      )}
    </ContentContainer>
  );
}
