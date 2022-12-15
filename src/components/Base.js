import CustomNavbar from "./CustomNavbar";

const Base = ({ title = "Welcome to our website", children }) => {
  return (
    <div className="container-fluid">
      <CustomNavbar />
      {children}
      <h1>This is a footer</h1>
    </div>
  );
};
export default Base;
