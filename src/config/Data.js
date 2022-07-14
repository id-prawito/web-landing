import { FiGithub, FiLinkedin, FiPhone, FiTwitter } from "react-icons/fi";
import { FaEllipsisV, FaInstagram } from "react-icons/fa";

export const NAVLINKS = [
  {
    to: "about",
    icon: FaEllipsisV,
    name: "HOME",
  },
  {
    to: "experience",
    icon: FaEllipsisV,
    name: "PROFILE",
  },
  {
    to: "work",
    icon: FaEllipsisV,
    name: "E-BILLING KPR",
  },
  {
    to: "project",
    icon: FaEllipsisV,
    name: "PRODUK & LAYANAN",
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
