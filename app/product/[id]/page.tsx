"use client";

import { products } from "@/app/products";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./detailpage.style.scss";
import LayoutMobile from "@/layout/Layout.mobile";

const DetailProduct = (props: any) => {
  const router = useRouter();
  const slug = props.params.id;
  const [product, setProduct] = useState<any>({});

  const handleClickBeli = (itemName: any = '') => {
    if (typeof window !== 'undefined') {
      if(itemName === '') {
        window.location.href = `https://api.whatsapp.com/send?phone=6281215689928&text=Halo%20saya%20ingin%20membeli%20MADU%2C%0ASaya%20dapat%20info%20dari%20website%20Madu%20Sorban%2C%20mohon%20pesan%20ini%20dibalas%20secepatnya.%20Terima%20kasih.`;
      } else {
        window.location.href = `https://api.whatsapp.com/send?phone=6281215689928&text=Halo%20saya%20ingin%20membeli%20${itemName}%2C%0ASaya%20dapat%20info%20dari%20website%20Madu%20Sorban%2C%20mohon%20pesan%20ini%20dibalas%20secepatnya.%20Terima%20kasih.%0A%0AFormat%20pemesanan%0A%0ANama%20Lengkap%20%3A%0ANo%20HP%20%3A%0AAlamat%20lengkap%20%3A`;
      }
    }
  }

  const rupiah = (number: number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(number)
  }

  useEffect(() => {
    const product = products.filter((item) => item.slug === slug)[0];
    setProduct(product);
  }, []);
  return (
    <LayoutMobile>
      <div className="content-detail">
        <h2>{product.title}</h2>
        <img className="image" src={product.imageUrl} />
        <div className="price">
            {rupiah(product.price)}
        </div>
        <div
          className="about-detail"
          dangerouslySetInnerHTML={{ __html: product.info }}
        />
        <div className="cta-section-detail-page">
        <h3 className="text-black">PESAN SEKARANG DAN KIRIM SEKARANG</h3>
        <div className="text-center relative w-fit mx-auto my-0 pt-4 flex items-center flex-nowrap flex-row gap-4">
            <button className="btn btn-primary" onClick={() => handleClickBeli(product.title)}>Beli Sekarang</button>
            <span className="text-black text-center text-xs not-italic font-normal leading-[normal]">atau</span>
            <button className="btn btn-link relative mx-auto my-0" onClick={() => handleClickBeli(product.title)}>
              Beli via Whatsapp{" "}
              <span className="icon ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_34)">
                    <path
                      d="M0.298756 6.91622C0.298428 8.09249 0.608178 9.24103 1.19716 10.2534L0.242428 13.7122L3.8098 12.7841C4.79649 13.3171 5.902 13.5964 7.02543 13.5964H7.02838C10.737 13.5964 13.7559 10.602 13.7575 6.92148C13.7582 5.138 13.0589 3.46093 11.7883 2.19919C10.5179 0.937566 8.82831 0.242395 7.02811 0.241581C3.31904 0.241581 0.300342 3.23584 0.298811 6.91622"
                      fill="url(#paint0_linear_1_34)"
                    />
                    <path
                      d="M0.0585156 6.91405C0.0581328 8.13264 0.378984 9.32226 0.988969 10.3709L0 13.9537L3.69529 12.9923C4.71346 13.5432 5.85982 13.8336 7.0263 13.834H7.02931C10.871 13.834 13.9984 10.7319 14 6.91958C14.0007 5.07202 13.2762 3.33466 11.9602 2.02772C10.644 0.720946 8.89399 0.00075969 7.02931 0C3.18697 0 0.0600469 3.10171 0.0585156 6.91405ZM2.25914 10.1903L2.12116 9.97294C1.54115 9.05784 1.23501 8.00035 1.23545 6.91448C1.2367 3.74576 3.83567 1.16775 7.0315 1.16775C8.57916 1.1684 10.0336 1.76704 11.1276 2.85318C12.2215 3.93943 12.8235 5.38338 12.8231 6.91915C12.8216 10.0879 10.2226 12.6662 7.02931 12.6662H7.02702C5.98724 12.6657 4.96748 12.3886 4.07816 11.865L3.86652 11.7405L1.67366 12.3109L2.25914 10.1902V10.1903Z"
                      fill="url(#paint1_linear_1_34)"
                    />
                    <path
                      d="M5.28708 4.02354C5.15659 3.73578 5.01927 3.72997 4.89519 3.72492C4.79358 3.72058 4.67742 3.72091 4.56137 3.72091C4.44522 3.72091 4.25649 3.76426 4.09697 3.93709C3.93728 4.11009 3.48731 4.52813 3.48731 5.37839C3.48731 6.2287 4.11146 7.05041 4.19847 7.16583C4.28559 7.28103 5.4034 9.08171 7.17374 9.77444C8.64505 10.3501 8.94447 10.2356 9.26379 10.2068C9.58316 10.178 10.2943 9.78882 10.4394 9.38526C10.5846 8.98176 10.5846 8.63588 10.5411 8.5636C10.4975 8.4916 10.3814 8.44835 10.2072 8.36196C10.033 8.27552 9.17667 7.85742 9.01704 7.79974C8.85735 7.74211 8.74125 7.71335 8.62509 7.8864C8.50894 8.05917 8.1754 8.44835 8.07373 8.5636C7.97218 8.67913 7.87051 8.69351 7.69639 8.60707C7.5221 8.52036 6.96117 8.33809 6.29568 7.74938C5.7779 7.29129 5.42834 6.72559 5.32673 6.55254C5.22512 6.37977 5.31584 6.28611 5.40318 6.19999C5.48144 6.12256 5.57741 5.99819 5.66459 5.89731C5.75143 5.79638 5.78041 5.72437 5.83849 5.60912C5.89662 5.49375 5.86753 5.39282 5.82405 5.30638C5.78041 5.21994 5.44195 4.36523 5.28708 4.02354Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_34"
                      x1="675.997"
                      y1="1347.31"
                      x2="675.997"
                      y2="0.241581"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#1FAF38" />
                      <stop offset="1" stopColor="#60D669" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_34"
                      x1="700"
                      y1="1395.37"
                      x2="700"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F9F9F9" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <clipPath id="clip0_1_34">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </button>
            </div>
      </div>
      </div>
    </LayoutMobile>
  );
};

export default DetailProduct;
