import React from "react";
import { FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { HeadingComponent } from "../atom";
import { TentangKamiSite } from "./SectionElements";

const HubungiKami = () => {
  return <div>Hubungi Kami</div>;
};

const TentangKami = () => {
  return (
    <TentangKamiSite>
      <div className="tentang_container">
        <div className="tentang_content">
          <HeadingComponent
            Heading="Kontak Kami"
            Text="Jika Anda memiliki pertanyaan atau tidak dapat menemukan apa yang Anda cari, jangan ragu untuk menghubungi kami di:"
          />
        </div>
        <div className="tentang_maps">
          <div className="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.8803638379372!2d111.09416161436485!3d-6.66174566697648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e772ad5771a3afb%3A0xe749d504c33e504!2sKoperasi%20Bank%20Perkreditan%20Rakyat!5e0!3m2!1sid!2sid!4v1641217024980!5m2!1sid!2sid"
              allowFullScreen
              loading="lazy"
              title="Map Bank"
            />
          </div>
          <div className="contact">
            <h1>Head Office</h1>
            <p>
              PT Bank Jago Tbk Menara BTPN Lt. 46 Jl. Dr. Ide Anak Agung Gde
              Agung Kav.5.5 – 5.6 Jakarta Selatan
            </p>
            <div className="no_telp">
              <p>
                <FaPhone /> (021) 50927460
              </p>
              <p>
                <FiMail /> kbpr.pati@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="tentang_cabang">
          <h1>Kantor Cabang</h1>
          <div className="cabang_bank">
            <div className="cabang_content">
              <h1>Jakarta</h1>
              <p>
                KC Mega Kuningan Menara BTPN Lt. GF Jl. Dr. Ide Anak Agung Gde
                Agung Kav. 5.5 - 5.6 Jakarta Selatan 12950
              </p>
              <div className="no_telp">
                <p>
                  <FaPhone /> (021) 50927460
                </p>
                <p>
                  <FiMail /> kbpr.pati@gmail.com
                </p>
              </div>
            </div>
            <div className="cabang_content">
              <h1>Jakarta</h1>
              <p>
                KC Mega Kuningan Menara BTPN Lt. GF Jl. Dr. Ide Anak Agung Gde
                Agung Kav. 5.5 - 5.6 Jakarta Selatan 12950
              </p>
              <div className="no_telp">
                <p>
                  <FaPhone /> (021) 50927460
                </p>
                <p>
                  <FiMail /> kbpr.pati@gmail.com
                </p>
              </div>
            </div>
            <div className="cabang_content">
              <h1>Jakarta</h1>
              <p>
                KC Mega Kuningan Menara BTPN Lt. GF Jl. Dr. Ide Anak Agung Gde
                Agung Kav. 5.5 - 5.6 Jakarta Selatan 12950
              </p>
              <div className="no_telp">
                <p>
                  <FaPhone /> (021) 50927460
                </p>
                <p>
                  <FiMail /> kbpr.pati@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TentangKamiSite>
  );
};

export { HubungiKami, TentangKami };
