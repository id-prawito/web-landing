import React from "react";
import {
  CardComponents,
  DetailComponents,
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
      <div className="heading">
        <h2>Terdaftar dan Diawasi oleh</h2>
        <p>
          Kami percaya bahwa pengalaman transaksi perbankan yang berfokus pada
          kehidupan Anda akan memungkinkan Anda untuk terus bertumbuh.
        </p>
      </div>
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

export { Informasi, Card, Detail, OjkInformasi };
