import Navbar from "./Navbar";

const Layout = ({ childComp }: { childComp: JSX.Element }) => {
  return (
    <div>
      <Navbar />
      <div className="bg-dark">{childComp}</div>
    </div>
  );
};

export default Layout;
