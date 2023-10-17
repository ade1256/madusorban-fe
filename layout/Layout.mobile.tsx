import "./style.scss";
import ImageContact from "@/assets/images/contact.jpeg"

const LayoutMobile = ({ children }: any) => {
  return (
    <div className="layout-mobile">
      <div className="content">{children}</div>
      <div className="contact">
        <img src={ImageContact.src} alt="Contact person pembelian" />
      </div>
      <div className="footer">
        <div className="info">
          <p>SERTIFIKASI SPP-IRT</p>
          <p>P-IRT 6073302010556-27</p>
        </div>
        <div className="info">
          <p>SERTIFIKASI HALAL</p>
          <p>ID33110003549730523</p>
        </div>
        <div className="info">
          <p>LOKASI</p>
          <p>
            Jalan KH. Agus Salim, Karangpucung, Purwokerto Selatan, Kab.
            Banyumas, Jawa Tengah
          </p>
        </div>
      </div>
    </div>
  );
};

export default LayoutMobile;
