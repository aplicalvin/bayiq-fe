/* eslint-disable react/prop-types */
import CardArtEdu from "./CardArtikelEdu";

function Edukasi2({ post, result }) {
  const data = result.isActive ? result.data : post;
  return (
    <>
      <div className="flex justify-center w-full h-fit  place-self-center">
        <div className="max-w-[1440px] w-fit lg:w-full px-6 md:px-20 py-12 justify-between grid gap-6">
          <div className="self-stretch justify-start items-start gap-12 grid md:grid-cols-2 lg:grid-cols-3">
            {data?.map((key, index) => (
              <div key={index} className="w-full">
                <CardArtEdu
                  className="w-full"
                  title={key.title}
                  excerpt={key.excerpt}
                  kategori={[key.kategoris]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Edukasi2;
