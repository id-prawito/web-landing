import React from "react";
import {
  Detail,
  DetailOrganisasi,
  FocusComponentContactUs,
} from "../components/atom";
import imgContact from "../assets/img/contact-us.png";
import { SimpleSliderFicture } from "../components/carousel";
import { TentangKami } from "../components/section";

const ContactUs = () => {
  return (
    <>
      <FocusComponentContactUs img={imgContact} />
      <Detail
        judul="Koperasi BPR Wedarijaksa"
        deskripsi="Koperasi BPR Wedarijaksa Kabupaten Pati (KBPR Wedarijaksa) berlokasi di Jalan Raya Juana-Tayu Km.7, Guyangan Kecamatan Trangkil Kabupaten Pati. Didirikan berdasarkan Surat Pengurus Koperasi BPR Wedarijaksa No: 21/KBPR/IV/1990 tanggal 2 April 1990 dan No : 24/KBPR/VI/1990 tanggal 18 Juni 1990 perihal permohonan izin usaha Koperasi BPR Wedarijaksa di Kecamatan Wedarijaksa, Kabupaten Pati, Jawa Tengah dan dengan surat Menteri Keuangan No. S-944/MK.13/1989 tanggal 9 Agustus 1989"
      />
      <SimpleSliderFicture
        judul="Foto dan Informasi Tentang Kami"
        deskripsi="Koperasi BPR Wedarijaksa Kabupaten Pati (KBPR Wedarijaksa) berlokasi"
      />
      <DetailOrganisasi />
      <TentangKami />
    </>
  );
};

export default ContactUs;
