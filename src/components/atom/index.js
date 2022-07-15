import React from "react";
import { CardComponents, InformasiSite } from "./AtomElements";
import imgwbs from "../../assets/img/wbs-icon.png";
import blogImg from "../../assets/img/blog.jpg";

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
      <div className="heading_card">
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

export { Informasi, Card };
