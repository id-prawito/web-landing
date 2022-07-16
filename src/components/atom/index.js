import React from "react";
import {
  CardComponents,
  DetailComponents,
  FocusComponentSite,
  HeadingAll,
  InformasiSite,
  OjkComponents,
} from "./AtomElements";
import imgwbs from "../../assets/img/wbs-icon.png";
import blogImg from "../../assets/img/blog.jpg";
import imgDetail from "../../assets/img/2.png";
import imgOjk from "../../assets/img/ojk.png";
import imgLps from "../../assets/img/lps.1.png";
import imgBpr from "../../assets/img/bpr.png";
import imgAyo from "../../assets/img/ayobank.png";
import bgGopay from "../../assets/img/kemudahan-gopay-bg.png";
import { Button } from "../form";
import { FaAccusoft } from "react-icons/fa";

const Informasi = () => {
  return (
    <InformasiSite>
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
    </InformasiSite>
  );
};

const Card = () => {
  return (
    <CardComponents>
      <div className="heading">
        <h2>Berita Kami</h2>
        <p>
          Kami percaya bahwa pengalaman transaksi perbankan yang berfokus pada
          kehidupan Anda akan memungkinkan Anda untuk terus bertumbuh.
        </p>
      </div>
      <div className="card_content">
        <a href="#try" className="card">
          <div className="card_img">
            <img src={blogImg} alt="blog_img" />
          </div>
          <div className="card_body">
            <h4>
              Sering jadi bendahara lupaan ? Bela punya solusi selangkah lebih
              Jagonya
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              laborum blanditiis non mollitia? Dolor veniam dicta a nobis
              sapiente quos quae dolores iusto suscipit quisquam ullam,
              necessitatibus incidunt laborum voluptatibus.
            </p>
          </div>
          <div className="card_footer">Footer</div>
        </a>
        <a href="#try" className="card">
          <div className="card_img">
            <img src={blogImg} alt="blog_img" />
          </div>
          <div className="card_body">
            <h4>
              Sering jadi bendahara lupaan ? Bela punya solusi selangkah lebih
              Jagonya
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              laborum blanditiis non mollitia? Dolor veniam dicta a nobis
            </p>
          </div>
          <div className="card_footer">Footer</div>
        </a>
        <a href="#try" className="card">
          <div className="card_img">
            <img src={blogImg} alt="blog_img" />
          </div>
          <div className="card_body">
            <h4>
              Sering jadi bendahara lupaan ? Bela punya solusi selangkah lebih
              Jagonya
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              laborum blanditiis non mollitia? Dolor veniam dicta a nobis
              sapiente quos quae dolores iusto suscipit quisquam ullam,
              necessitatibus incidunt laborum voluptatibus.
            </p>
          </div>
          <div className="card_footer">Footer</div>
        </a>
        <a href="#try" className="card">
          <div className="card_img">
            <img src={blogImg} alt="blog_img" />
          </div>
          <div className="card_body">
            <h4>
              Sering jadi bendahara lupaan ? Bela punya solusi selangkah lebih
              Jagonya
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              laborum blanditiis non mollitia? Dolor veniam dicta a nobis
              sapiente quos quae dolores iusto suscipit quisquam ullam,
              necessitatibus incidunt laborum voluptatibus.
            </p>
          </div>
          <div className="card_footer">Footer</div>
        </a>
      </div>
    </CardComponents>
  );
};

const Detail = () => {
  return (
    <DetailComponents>
      <div className="detail_content">
        <div className="detail_img">
          <img src={imgDetail} alt="imgDetail" />
        </div>
        <div className="detail_text">
          <div className="visi_misi">
            <div className="detail_text_heading">Visi</div>
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

const OjkInformasi = () => {
  return (
    <OjkComponents>
      <HeadingComponent
        Heading="Terdaftar dan Diawasi oleh"
        Text="Kami percaya bahwa pengalaman transaksi perbankan yang berfokus pada
          kehidupan Anda akan memungkinkan Anda untuk terus bertumbuh."
      />
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

const FocusComponent = () => {
  return (
    <FocusComponentSite>
      <div className="focus_container">
        <div
          className="gambar_bg"
          style={{ backgroundImage: `url(${bgGopay})` }}
        >
          <HeadingComponent
            Style={{ textAlign: "center", width: "100%", color: "#fff" }}
            Heading="Coba simulasi kredit sekarang!"
            Text="Untuk mengetahui berapa biaya yang harus digunakan untuk melakukan kredit KPR."
          />
          <Button
            style={{
              padding: "20px 50px",
              fontSize: "20px",
              fontWeight: "600",
            }}
            icon={FaAccusoft}
            label="Hitung KPR"
          />
        </div>
      </div>
    </FocusComponentSite>
  );
};

export {
  Informasi,
  Card,
  Detail,
  OjkInformasi,
  HeadingComponent,
  FocusComponent,
};
