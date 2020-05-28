import Layout from "../components/Layout";
import PhotoFrame from "../components/profile/PhotoFrame";
import { profileData } from "../interfaces/profile";

const data: profileData = {
  img:
    "https://avatars3.githubusercontent.com/u/48559454?s=460&u=a5ca89eef46c643ba9e49f7373c27ad2f27c90d3&v=4",
  name_en: "JaeSeoKim",
  name_ko: "김재서",
  name_ch: "金材書",
};

const IndexPage = () => (
  <Layout title="Profile | JaeSeoKim Portfolio!">
    <div className="flex justify-center">
      <div>
        <PhotoFrame img={data.img} />
        <h1 className="text-4xl text-center text-gray-700">{data.name_en}</h1>
        <h2 className="text-3xl text-center text-gray-700">
          {data.name_ko}
          {"\t"}
          {data.name_ch}
        </h2>
        테스트
      </div>
    </div>
  </Layout>
);

export default IndexPage;
