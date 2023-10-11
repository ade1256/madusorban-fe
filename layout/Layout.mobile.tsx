import "./style.scss";

const LayoutMobile = ({ children }: any) => {
  return (
    <div className="layout-mobile">
      <div className="content">{children}</div>
    </div>
  );
};

export default LayoutMobile;
