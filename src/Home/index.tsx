import PostList from "PostList";
import Headers from "../components/Headers";
import UserInfo from "../components/UserInfo";

const Home: React.FC = () => {
  return (
    <>
      <Headers />
        <div className="flex justify-center">
              <div className="w-full lg:w-[700px] mt-7">
                <PostList />
              </div>
              <div className="lg:w-[320px]">
                <UserInfo />
              </div>
        </div>
    </>
  );
};

export default Home;
