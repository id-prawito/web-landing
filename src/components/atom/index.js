import React, { useEffect, useRef, useState } from "react";
import {
  CardComponents,
  CardItemComponents,
  DetailComponents,
  FocusComponentSite,
  FocusComponentSiteContact,
  HeadingAll,
  InformasiSite,
  OjkComponents,
  OrganisasiSite,
  PimpinanComponent,
} from "./AtomElements";
import imgwbs from "../../assets/img/wbs-icon.png";
import imgDetail from "../../assets/img/2.png";
import imgOjk from "../../assets/img/ojk.png";
import imgLps from "../../assets/img/lps.1.png";
import imgBpr from "../../assets/img/bpr.png";
import imgAyo from "../../assets/img/ayobank.png";
import bgGopay from "../../assets/img/kemudahan-gopay-bg.png";
import { Button, ButtonTransparent } from "../form";
import { FaAccusoft } from "react-icons/fa";
import { ORGANISASI } from "../../config/data";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import SliderWrapper from "../carousel/_SlickSliderStyle";
import DOMPurify from "dompurify";
import styled from "styled-components";
import { devices } from "../../assets/_respondTo";

const Informasi = () => {
  return (
    <InformasiSite>
      <div className="informasi_container">
        <div className="informasi">
          <div className="img">
            <img src={imgwbs} alt="imgwbs" />
          </div>
          <div className="text_content">
            <div className="content">
              <h1>LAPORKAN!</h1>
              <p className="text_p">
                Jika anda melihat dan mendengar Pelanggaran/Kecurangan yang
                dilakukan oleh Pejabat/Pegawai di lingkungan Bank Jago.
              </p>
            </div>
          </div>
        </div>
      </div>
    </InformasiSite>
  );
};

const CardItem = ({ item }) => {
  let text = item.judul;
  let result = text.toLowerCase();
  const judulBerita = result.split(" ").join("-");
  const idNumber = item.id.toString();
  const gabunganJudul = idNumber + "-" + judulBerita;

  return (
    <CardItemComponents>
      <a href={`./berita-kami/${gabunganJudul}`} className="card_item">
        <div className="card_img">
          <img src={item.img} alt="blog_img" />
        </div>
        <div className="card_body">
          <h4>{item.judul}</h4>

          <div
            className="berita_text"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(item.kontenBerita),
            }}
          />
        </div>
        <div className="card_footer">{item.date}</div>
      </a>
    </CardItemComponents>
  );
};

const BeritaContent = styled.div`
  .card_content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    gap: 30px;
    transition: all 0.35s ease-in-out;

    ${devices.smartphone} {
      grid-template-columns: repeat(1, 1fr);
    }

    @media only screen and (min-width: 560px) and (max-width: 760px) {
      grid-template-columns: repeat(2, 1fr);
    }

    ${devices.ipads} {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const Card = ({ itemBerita, text }) => {
  const [start, setStart] = useState(3);
  const posts = itemBerita;
  const [isActive, setActive] = useState(false);
  const testRef = useRef();
  const cardRef = useRef();
  // console.log(cardRef.current.offsetTop);
  const LoadMore = () => {
    setStart((prevValue) => prevValue + 3);

    setActive(true);
    window.scrollTo({
      behavior: "smooth",
      top: cardRef.current.offsetTop,
    });
  };

  const ShowLess = () => {
    setStart(3);
    window.scrollTo({ behavior: "smooth", top: testRef.current.offsetTop });
  };

  return (
    <CardComponents>
      <div ref={testRef} className="card_container">
        <HeadingComponent
          Heading="Berita Kami"
          Text="Kami percaya bahwa pengalaman transaksi perbankan yang berfokus pada
          kehidupan Anda akan memungkinkan Anda untuk terus bertumbuh."
        />
        {text === "Lihat Lebih" ? (
          <BeritaContent isActive={isActive}>
            <div className="card_content">
              {posts ? (
                <>
                  {posts.slice(0, 6).map((item, i) => (
                    <CardItem key={i} item={item} />
                  ))}
                </>
              ) : (
                "Tidak ada data"
              )}
            </div>
            <Button
              icon={FaAccusoft}
              label={text}
              style={{ margin: "auto", marginTop: "40px" }}
              to="./berita-kami"
            />
          </BeritaContent>
        ) : (
          <BeritaContent>
            <div className="card_content">
              {posts ? (
                <>
                  {posts.slice(0, start).map((item, i) => (
                    <CardItem key={i} item={item} />
                  ))}
                </>
              ) : (
                "Tidak ada data"
              )}
            </div>
            <div ref={cardRef} className="class_baru">
              <Button
                icon={FaAccusoft}
                label={start >= posts.length + 1 ? "Show Less" : text}
                style={{ margin: "auto", marginTop: "40px" }}
                onClick={start >= posts.length + 1 ? ShowLess : LoadMore}
              />
            </div>
          </BeritaContent>
        )}
      </div>
    </CardComponents>
  );
};

const Detail = (item) => {
  return (
    <DetailComponents>
      <div className="detail_container">
        <div className="detail_content">
          <div className="detail_img">
            <img src={imgDetail} alt="imgDetail" />
          </div>
          <div className="detail_text">
            <div className="visi_misi">
              <div className="detail_text_heading">{item.judul}</div>
              <div className="detail_text_p">{item.deskripsi}</div>
            </div>
            {/* <div className="visi_misi">
              <div className="detail_text_heading">Misi</div>
              <div className="detail_text_p">
                Menjadi BPR yang kuat, dipercaya dan selalu dihati masyarakat di
                seluruh wilayah kerja Kabupaten Pati dan sekitarnya.
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </DetailComponents>
  );
};

const DetailLayanan = ({ item, imgDetail }) => {
  return (
    <DetailComponents>
      <div className="detail_content">
        <div className="detail_img">
          <img src={imgDetail} alt="imgDetail" />
        </div>
        <div className="detail_text">
          <div className="visi_misi">
            <div className="detail_text_heading">Visi {item}</div>
            <div className="detail_text_p">
              Menjadi BPR yang kuat, dipercaya dan selalu dihati masyarakat di
              seluruh wilayah kerja Kabupaten Pati dan sekitarnya.
            </div>
          </div>
          <div className="visi_misi">
            <div className="detail_text_heading">Misi</div>
            <div className="detail_text_p">
              Menjadi BPR yang kuat, dipercaya dan selalu dihati masyarakat di
              seluruh wilayah kerja Kabupaten Pati dan sekitarnya.
            </div>
          </div>
        </div>
      </div>
    </DetailComponents>
  );
};

const DetailLayananPages = (item) => {
  return (
    <DetailComponents>
      <div className="detail_container">
        <div className="detail_content">
          <div className="detail_img">
            <img src={item.imgDetail} alt="imgDetail" />
          </div>
          <div className="detail_text">
            <div className="visi_misi">
              <div className="detail_text_heading">Visi {item.item}</div>
              <div className="detail_text_p">
                Menjadi BPR yang kuat, dipercaya dan selalu dihati masyarakat di
                seluruh wilayah kerja Kabupaten Pati dan sekitarnya.
              </div>
            </div>
            <div className="visi_misi">
              <div className="detail_text_heading">Misi</div>
              <div className="detail_text_p">
                Menjadi BPR yang kuat, dipercaya dan selalu dihati masyarakat di
                seluruh wilayah kerja Kabupaten Pati dan sekitarnya.
              </div>
            </div>
            <Button icon={item.icon} label={item.label} to={item.to} />
          </div>
        </div>
      </div>
    </DetailComponents>
  );
};

const OjkInformasi = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 480px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width: 480px)").matches);
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };
  return (
    <OjkComponents>
      <div className="ojk_container">
        <HeadingComponent
          Heading="Terdaftar dan Diawasi oleh"
          Text="Kami percaya bahwa pengalaman transaksi perbankan yang berfokus pada
          kehidupan Anda akan memungkinkan Anda untuk terus bertumbuh."
        />

        {isMobile ? (
          <SliderWrapper>
            <Slider {...settings}>
              <div className="ojk_img">
                <img src={imgOjk} alt="imgOjk" />
              </div>
              <div className="ojk_img">
                <img src={imgLps} alt="imgLps" />
              </div>
              <div className="ojk_img">
                <img src={imgBpr} alt="imgBpr" style={{ width: "50px" }} />
              </div>
              <div className="ojk_img">
                <img src={imgAyo} alt="imgAyo" />
              </div>
            </Slider>
          </SliderWrapper>
        ) : (
          <div className="ojk_content">
            <div className="ojk_img">
              <img src={imgOjk} alt="imgOjk" />
            </div>
            <div className="ojk_img">
              <img src={imgLps} alt="imgLps" />
            </div>
            <div className="ojk_img">
              <img src={imgBpr} alt="imgBpr" style={{ width: "50px" }} />
            </div>
            <div className="ojk_img">
              <img src={imgAyo} alt="imgAyo" />
            </div>
          </div>
        )}
      </div>
    </OjkComponents>
  );
};

const HeadingComponent = (item) => {
  return (
    <HeadingAll>
      <div className="heading" style={item.Style}>
        <h2>{item.Heading}</h2>
        <p>{item.Text}</p>
      </div>
    </HeadingAll>
  );
};

const FocusComponent = ({ backgroundColor }) => {
  return (
    <FocusComponentSite>
      <div className="focus_container">
        <div className="gambar_bg" style={{ backgroundColor: backgroundColor }}>
          <HeadingComponent
            Style={{ textAlign: "center", width: "100%", color: "#fff" }}
            Heading="Coba simulasi kredit sekarang!"
            Text="Untuk mengetahui berapa biaya yang harus digunakan untuk melakukan kredit KPR."
          />
          <Button icon={FaAccusoft} label="Hitung KPR" to="./berita-kami" />
        </div>
      </div>
    </FocusComponentSite>
  );
};

const FocusComponentContactUs = ({ img }) => {
  return (
    <FocusComponentSiteContact>
      <div className="focus_container">
        <div
          className="gambar_bg_tentang"
          style={{ backgroundImage: `url(${bgGopay})` }}
        >
          <HeadingComponent
            Style={{
              textAlign: "start",
              width: "100%",
              color: "#fff",
            }}
            Heading="Coba simulasi kredit sekarang!"
            Text="Untuk mengetahui berapa biaya yang harus digunakan untuk melakukan kredit KPR."
          />
          <div className="gambar_img">
            <img src={img} alt="imgContact" />
          </div>
        </div>
      </div>
    </FocusComponentSiteContact>
  );
};

const FocusComponentColor = ({ img, backgroundColor }) => {
  return (
    <FocusComponentSiteContact>
      <div className="focus_container">
        <div
          className="gambar_bg_tentang"
          style={{ backgroundColor: backgroundColor }}
        >
          <HeadingComponent
            Style={{
              textAlign: "start",
              width: "100%",
              color: "#fff",
            }}
            Heading="Coba simulasi kredit sekarang!"
            Text="Untuk mengetahui berapa biaya yang harus digunakan untuk melakukan kredit KPR."
          />
          <div className="gambar_img">
            <img src={img} alt="imgContact" />
          </div>
        </div>
      </div>
    </FocusComponentSiteContact>
  );
};

const Organisasi = ({ item }) => {
  return (
    <OrganisasiSite>
      <motion.div className="informasi" layout>
        <div className="gambar_img">
          <img src={item.img} alt={item.label} />
        </div>
        <div className="text_nama">
          <h1>{item.label}</h1>
          <p>{item.jabatan}</p>
        </div>
      </motion.div>
    </OrganisasiSite>
  );
};

const ButtonFilter = ({ filter, button, active }) => {
  return (
    <>
      {button.map((buttonItem, i) => (
        <ButtonTransparent
          active={active === buttonItem ? "active" : ""}
          key={i}
          style={{ fontWeight: "400", border: "2px solid var(--colorMain)" }}
          icon={FaAccusoft}
          label={buttonItem}
          onClick={() => filter(buttonItem)}
        />
      ))}
    </>
  );
};

const DetailOrganisasi = () => {
  const allOrganisasi = [
    "All",
    ...new Set(ORGANISASI.map((item) => item.jabatan)),
  ];

  const [organisasi, setOrganisasi] = useState(ORGANISASI);

  const buttons = allOrganisasi;

  const [active, setActive] = useState("All");

  const filter = (button) => {
    if (button === "All") {
      setOrganisasi(ORGANISASI);
      setActive(button);
      return;
    }
    const filteredData = ORGANISASI.filter((item) => item.jabatan === button);
    setOrganisasi(filteredData);
    setActive(button);
  };

  return (
    <PimpinanComponent>
      <div className="organisasi_container">
        <HeadingComponent
          Heading="Pimpinan Kami"
          Text="Kami percaya bahwa pengalaman transaksi perbankan yang berfokus pada kehidupan Anda akan memungkinkan Anda untuk terus bertumbuh."
        />

        <div className="organisasi_all">
          <div className="organisasi_button">
            <ButtonFilter filter={filter} button={buttons} active={active} />
          </div>

          {organisasi.length === 1 ? (
            <motion.div className="organisasi_content_active" layout>
              <AnimatePresence>
                {organisasi.map((item, i) => (
                  <Organisasi key={i} item={item} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div className="organisasi_content" layout>
              <AnimatePresence>
                {organisasi.map((item, i) => (
                  <Organisasi key={i} item={item} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
        <div className="download">
          <a href="#try">Download Struktur Organisasi</a>
        </div>
      </div>
    </PimpinanComponent>
  );
};

export {
  Informasi,
  Card,
  Detail,
  OjkInformasi,
  HeadingComponent,
  FocusComponent,
  DetailOrganisasi,
  DetailLayanan,
  DetailLayananPages,
  FocusComponentContactUs,
  FocusComponentColor,
};
