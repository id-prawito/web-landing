import { FiGithub, FiLinkedin, FiPhone, FiTwitter } from "react-icons/fi";
import { FaEllipsisV, FaInstagram } from "react-icons/fa";
import organisasiImg from "../assets/img/organisasi.png";

export const NAVLINKS = [
  {
    to: "about",
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
    to: "project",
    icon: FaEllipsisV,
    name: "BERITA KAMI",
  },
  {
    to: "project",
    icon: FaEllipsisV,
    name: "PUBLIKASI",
  },
  {
    to: "project",
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
