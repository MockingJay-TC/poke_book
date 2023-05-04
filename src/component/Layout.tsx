import Navbar from "./Navbar";

const Layout = ({ childComp }: { childComp: JSX.Element }) => {
  return (
    <div>
      <Navbar />
      <div className="bg-dark h-96">{childComp}</div>
    </div>
  );
};

export default Layout;
