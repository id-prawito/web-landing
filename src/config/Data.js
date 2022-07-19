import { FiGithub, FiLinkedin, FiPhone, FiTwitter } from "react-icons/fi";
import { FaEllipsisV, FaInstagram } from "react-icons/fa";
import organisasiImg from "../assets/img/organisasi.png";
import blogImg from "../assets/img/blog.jpg";

export const NAVLINKS = [
  {
    to: "",
    icon: FaEllipsisV,
    name: "HOME",
  },
  {
    to: "experience",
    icon: FaEllipsisV,
    name: "PRODUK & LAYANAN",
  },
  {
    to: "work",
    icon: FaEllipsisV,
    name: "SIMULASI KPR",
  },
  {
    to: "/berita-kami",
    icon: FaEllipsisV,
    name: "BERITA KAMI",
  },
  {
    to: "/project",
    icon: FaEllipsisV,
    name: "PUBLIKASI",
  },
  {
    to: "/we-contact-us",
    icon: FaEllipsisV,
    name: "TENTANG KAMI",
  },
];

export const MEDIA_SOSIAL = [
  {
    to: "https://github.com/id-prawito",
    label: "Github",
    icon: FiGithub,
  },
  {
    to: "https://www.instagram.com/praw.ito/",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    to: "https://twitter.com/id_praw",
    label: "Twitter",
    icon: FiTwitter,
  },
  {
    to: "https://linkedin.com/in/prawito/",
    label: "Linkedin",
    icon: FiLinkedin,
  },
  {
    to: "tel:+6282137925172",
    label: "Phone",
    icon: FiPhone,
  },
];

export const ORGANISASI = [
  {
    id: 1,
    label: "Github",
    img: organisasiImg,
    jabatan: "Komisaris",
  },
  {
    id: 2,
    label: "Github",
    img: organisasiImg,
    jabatan: "Dewan Direksi",
  },
  {
    id: 7,
    label: "Github",
    img: organisasiImg,
    jabatan: "Dewan Direksi",
  },
  {
    id: 8,
    label: "Github",
    img: organisasiImg,
    jabatan: "Dewan Direksi",
  },
  {
    id: 3,
    label: "Github",
    img: organisasiImg,
    jabatan: "Dewan Direksi",
  },
  {
    id: 4,
    label: "Github",
    img: organisasiImg,
    jabatan: "Anggota",
  },
  {
    id: 8,
    label: "Github",
    img: organisasiImg,
    jabatan: "Anggota",
  },
  {
    id: 5,
    label: "Github",
    img: organisasiImg,
    jabatan: "Komisaris",
  },
  {
    id: 6,
    label: "Github",
    img: organisasiImg,
    jabatan: "Komisaris",
  },
];

export const BERITA = [
  {
    id: 1,
    judul: "Membuat adonan kue 1",
    date: "17 Juli 2020",
    img: blogImg,
    kontenBerita:
      "Bikin anggaran, baik anggaran jangka pendek maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.",
  },
  {
    id: 2,
    judul: "Membuat adonan kue 2",
    date: "17 Juli 2020",
    img: blogImg,
    kontenBerita:
      "<div>Bikin anggaran, baik anggaran jangka pendek maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.<br><br>Bikin anggaran, baik anggaran jangka pendek <b>Bank Jago</b> maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang. <br><br>Bikin anggaran, baik anggaran jangka pendek <b>Bank Jago</b> maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang. <br><br>Bikin anggaran, baik anggaran jangka pendek <b>Bank Jago</b> maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.</div>",
  },
  {
    id: 3,
    judul: "Membuat adonan kue 3",
    date: "17 Juli 2020",
    img: blogImg,
    kontenBerita:
      "Bikin anggaran, baik anggaran jangka pendek maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.",
  },
  {
    id: 4,
    judul: "Membuat adonan kue 4",
    date: "17 Juli 2020",
    img: blogImg,
    kontenBerita:
      "Bikin anggaran, baik anggaran jangka pendek maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.",
  },
];
