// Import images
import logo from "@/assets/logo/logo.png";
import dotdot from "@/assets/hero/dotdot.png";
import snaoedit01 from "@/assets/hero/snaoedit01.png";
import StickersBlue from "@/assets/hero/StickersBlue.png";
import snaoedit02 from "@/assets/hero/snaodit2.png";
import StickersRed from "@/assets/hero/StickersRed.png";
import aboutHero from "@/assets/hero/aboutHero.png";
import imoji from "@/assets/hero/imoji.png";
import school from "@/assets/aboutSection/school.png";
import graduate from "@/assets/aboutSection/graduate.png";
import printing from "@/assets/aboutSection/printing-software.png";
import techer from "@/assets/aboutSection/techer.png";
import AboutUs from "@/assets/aboutSection/AboutUs.png";
import ABC from "@/assets/aboutSection/ABC.png";
import book from "@/assets/aboutSection/book.png";
import speaking from "@/assets/course/spoking.png";
import coding from "@/assets/course/coding.png";
import math from "@/assets/course/math.png";
import ict from "@/assets/course/ict.png";
import snaoedit3 from "@/assets/course/snapedit3.png";
import one from "@/assets/commitmentSection/1.png";
import two from "@/assets/commitmentSection/2.png";
import three from "@/assets/commitmentSection/3.png";
import four from "@/assets/commitmentSection/4.png";
import verified from "@/assets/commitmentSection/verified.png";
import videoImg from "@/assets/videosection/videoImg.png";
import faq from "@/assets/faqSection/faq.png";
import hanif from "@/assets/teachersSection/hanif.png";
import Shahin from "@/assets/teachersSection/shahin.png";
import avatar from "@/assets/TestimonialSection/avater.png";
import celebration from "@/assets/TestimonialSection/celebration.png";
import KidsProgram from "@/assets/KidsProgramSection/KidsProgram.png";
import pothomalo from "@/assets/curosol/pothomalo.png";
import ajkerpotrika from "@/assets/curosol/ajkerpotrika.png";
import somy from "@/assets/curosol/somy.png";
import card1 from "@/assets/info/card1.png";
import card2 from "@/assets/info/card2.png";
import card3 from "@/assets/info/card3.png";
import stars from "@/assets/info/stars.png";
import photo from "@/assets/teamMembers/photo.png";

import ScheduleTour from "@/assets/ScheduleTourSection/ScheduleTour.png";
import p1 from "@/assets/CaptivatingMoments/01.png";
import p2 from "@/assets/CaptivatingMoments/02.png";
import p3 from "@/assets/CaptivatingMoments/03.png";
import p4 from "@/assets/CaptivatingMoments/04.png";
import p5 from "@/assets/CaptivatingMoments/05.png";
import p6 from "@/assets/CaptivatingMoments/06.png";
import p7 from "@/assets/CaptivatingMoments/07.png";
import p8 from "@/assets/CaptivatingMoments/08.png";

import v1 from "@/assets/captivatingVideoSection/1.png";
import v2 from "@/assets/captivatingVideoSection/2.png";
import v3 from "@/assets/captivatingVideoSection/3.png";
import cou from "@/assets/teamMembers/cou.jpeg";
import { FaLinkedin, FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import branch1 from "@/assets/branch/1.svg";
import branch2 from "@/assets/branch/2.svg";
import branch3 from "@/assets/branch/3.svg";

// Export images as an object
export const images = {
  logo,
  dotdot,
  snaoedit01,
  StickersBlue,
  snaoedit02,
  aboutHero,
  snaoedit3,
  StickersRed,
  imoji,
  techer,
  printing,
  graduate,
  school,
  one,
  two,
  three,
  four,
  videoImg,
  faq,
  celebration,
  AboutUs,
  avatar,
  KidsProgram,
  somy,
  ajkerpotrika,
  pothomalo,
  book,
  ABC,
  ScheduleTour,

  v1,
  v2,
  v3,
};
export const CaptivatinImage = [p1, p2, p3, p4, p5, p6, p7, p8];

// Define and export menu items
export const menuItems = [
  { pathname: "/", item: "Home" },
  { pathname: "/about", item: "About" },
  { pathname: "/gallery", item: "Gallery" },
  { pathname: "/contact-us", item: "Contact us" },
];

export const courses = [
  {
    id: "101",
    title: "Kids Spoken English",
    description:
      "Classes are arranged from basic to advanced to make children expert in English.",
    imageSrc: speaking,
    startDate: "March 1, 2024",
    duration: "4 weeks",
    students: 30,
    lessons: 8,
    price: 199,
    originalPrice: 299,
    content: [
      {
        title: "Introduction to English",
        description: "Basics of English language.",
      },
      {
        title: "Grammar Fundamentals",
        description: "Learn the rules of English grammar.",
      },
      {
        title: "Conversational Skills",
        description: "Practice speaking in real-life scenarios.",
      },
      {
        title: "Vocabulary Building",
        description: "Expand your English vocabulary.",
      },
      {
        title: "Pronunciation Practice",
        description: "Improve your pronunciation skills.",
      },
    ],
  },
  {
    id: "102",
    title: "Coding ",
    description:
      "Kids will learn a demanding skill like coding in a fun way with this class.",
    imageSrc: coding,
    startDate: "April 15, 2024",
    duration: "6 weeks",
    students: 25,
    lessons: 10,
    price: 299,
    originalPrice: 399,
    content: [
      {
        title: "Introduction to Programming",
        description: "Understand basic programming concepts.",
      },
      {
        title: "HTML & CSS Basics",
        description: "Learn to create and style web pages.",
      },
      {
        title: "JavaScript Essentials",
        description: "Get started with JavaScript programming.",
      },
      {
        title: "Building Interactive Websites",
        description: "Create dynamic web applications.",
      },
      {
        title: "Introduction to Databases",
        description: "Learn about data storage and retrieval.",
      },
    ],
  },
  {
    id: "103",
    title: "Computer",
    description:
      "Our classes will help you understand the complexities of computers in the age of IT.",
    imageSrc: math,
    startDate: "May 1, 2024",
    duration: "8 weeks",
    students: 40,
    lessons: 12,
    price: 249,
    originalPrice: 349,
    content: [
      {
        title: "Computer Fundamentals",
        description:
          "Learn the basics of computer systems and how they function.",
      },
      {
        title: "Operating Systems",
        description:
          "Understand the core of how computers manage hardware and software resources.",
      },
      {
        title: "Networking Basics",
        description:
          "Explore how computers communicate and share resources over networks.",
      },
      {
        title: "Introduction to Programming",
        description: "Learn how to write basic programs in popular languages.",
      },
      {
        title: "Cybersecurity Essentials",
        description:
          "Gain an understanding of online security and data protection.",
      },
    ],
  },
  {
    id: "104",
    title: "ICT",
    description:
      "Through our classes, children can become skilled in various subjects including the use of technology.",
    imageSrc: ict,
    startDate: "June 10, 2024",
    duration: "5 weeks",
    students: 20,
    lessons: 9,
    price: 199,
    originalPrice: 299,
    content: [
      {
        title: "Introduction to ICT",
        description: "Overview of Information and Communication Technology.",
      },
      {
        title: "Computer Basics",
        description: "Understand hardware and software components.",
      },
      {
        title: "Internet & Networking",
        description: "Learn about networking and internet technologies.",
      },
      {
        title: "Digital Communication Tools",
        description: "Explore email, messaging, and collaboration tools.",
      },
      {
        title: "Cybersecurity Essentials",
        description: "Learn about protecting data and online safety.",
      },
    ],
  },
];
export const features = [
  {
    title: "Dedicated Educators",
    description:
      "Our professional educators are the heart of our school. They bring expertise, creativity, and a genuine love for children.",
    icon: verified,
  },
  {
    title: "Engaging Curriculum",
    description:
      "Our curriculum is designed to inspire and engage. It’s dynamic, relevant, and tailored to the needs of each child.",
    icon: verified,
  },
  {
    title: "Safe Environment",
    description:
      "Our facilities are designed to provide a safe and nurturing environment for children to learn and grow.",
    icon: verified,
  },
  {
    title: "Community Involvement",
    description:
      "We believe in a strong connection between school, families, and the community to support the development of each child.",
    icon: verified,
  },
];

export const faqs = [
  {
    question: "How many subjects are taught here?",
    answer:
      "Here speaking English, coding and computer classes are taken together.",
  },
  {
    question: "When does class start?",
    answer:
      "  Classes are usually held in two shifts, morning and afternoon. 9 am to 11 am and 3 pm to 5 pm. Class is available in any shift at convenient times.",
  },
  {
    question: "How many days a week are classes?",
    answer:
      "Two days of classes on Friday and Saturday and one day of practice  classes on Thursday are conducted every week.",
  },
  {
    question: "How much is the fee per month?",
    answer: "1000 tk per month is charged for three subjects. ",
  },
  {
    question: "What documents are required to be admitted?",
    answer: " Please contact our office for detailed information.",
  },
];

// Teacher data
export const teachers = [
  {
    image: hanif,
    name: "Md Hanif Mia",
    title: "Kids Program Instructor",
    bg: "#FFE8E8",
    social: [
      { icon: FaFacebookSquare, alt: "Facebook", link: "#" },
      { icon: FiInstagram, alt: "Instagram", link: "#" },
      { icon: FaSquareTwitter, alt: "Twitter", link: "#" },
      { icon: FaLinkedin, alt: "LinkedIn", link: "#" },
    ],
  },
  {
    image: Shahin,
    name: "Shahin Hassan",
    title: "Kids Mentor Coding",
    bg: "#E9FBFA",
    social: [
      { icon: FaFacebookSquare, alt: "Facebook", link: "#" },
      { icon: FiInstagram, alt: "Instagram", link: "#" },
      { icon: FaSquareTwitter, alt: "Twitter", link: "#" },
      { icon: FaLinkedin, alt: "LinkedIn", link: "#" },
    ],
  },
  {
    image: Shahin,
    name: " Md Kawsar alam",
    title: "Kids Mentor Coding ",
    bg: "#FFF6EB",
    social: [
      { icon: FaFacebookSquare, alt: "Facebook", link: "#" },
      { icon: FiInstagram, alt: "Instagram", link: "#" },
      { icon: FaSquareTwitter, alt: "Twitter", link: "#" },
      { icon: FaLinkedin, alt: "LinkedIn", link: "#" },
    ],
  },
  {
    image: Shahin,
    name: "Kollol Roy",
    title: "English Mentor",
    bg: "#E9FBFA",
    social: [
      { icon: FaFacebookSquare, alt: "Facebook", link: "#" },
      { icon: FiInstagram, alt: "Instagram", link: "#" },
      { icon: FaSquareTwitter, alt: "Twitter", link: "#" },
      { icon: FaLinkedin, alt: "LinkedIn", link: "#" },
    ],
  },
  {
    image: Shahin,
    name: "Al Noman",
    title: "English Mentor",
    bg: "#FFE8E8",
    social: [
      { icon: FaFacebookSquare, alt: "Facebook", link: "#" },
      { icon: FiInstagram, alt: "Instagram", link: "#" },
      { icon: FaSquareTwitter, alt: "Twitter", link: "#" },
      { icon: FaLinkedin, alt: "LinkedIn", link: "#" },
    ],
  },
];

// data/cardsData.js

export const AboutData = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "At Escada, our mission is simple: to provide a safe, inclusive, and dynamic learning environment where every child can thrive...",
    link: "#",
    bgColor: "bg-red-50",
    icons: [
      {
        src: card1,
        alt: "Mission Icon 1",
      },
      {
        src: stars,
        alt: "Mission Icon 2",
      },
    ],
  },
  {
    id: 2,
    title: "Who We Are",
    description:
      "Founded in 1978, Escada has been a cornerstone of quality education for children aged 2 years - 18 years, serving the community...",
    link: "#",
    bgColor: "bg-green-50",
    icons: [
      {
        src: card2,
        alt: "Who We Are Icon 1",
      },
      {
        src: stars,
        alt: "Who We Are Icon 2",
      },
    ],
  },
  {
    id: 3,
    title: "Our Approach",
    description:
      "We understand that every child is unique, and learning should reflect this individuality...",
    link: "#",
    bgColor: "bg-orange-50",
    icons: [
      {
        src: card3,
        alt: "Our Approac",
      },
      {
        src: stars,
        alt: "Our Approac",
      },
    ],
  },
];

export const teamMembers = [
  {
    role: "CEO",
    name: "About Edulife Tell Something",
    description: [
      "Welcome to Edulife, where education is an exciting adventure. We're passionate about nurturing young minds, inspiring creativity.",
      "Welcome to Edulife, where education is an exciting adventure. We're passionate about nurturing young minds, inspiring creativity.",
      "Welcome to Edulife, where education is an exciting adventure. We're passionate about nurturing young minds, inspiring creativity.",
    ],
    image: cou,
  },
  {
    role: "COO",
    name: "About Edulife Tell Something",
    description: [
      "Welcome to Edulife, where education is an exciting adventure. We're passionate about nurturing young minds, inspiring creativity.",
      "Welcome to Edulife, where education is an exciting adventure. We're passionate about nurturing young minds, inspiring creativity.",
      "Welcome to Edulife, where education is an exciting adventure. We're passionate about nurturing young minds, inspiring creativity.",
    ],
    image: photo,
  },
];

export const events = [
  {
    date: "10 Sep",
    title: "English Language Club",
    location: "Aambag Khagrachari Sadar",
    time: "9 AM - 10 AM",
  },
  {
    date: "10 Sep",
    title: "Cultural Celebrations",
    location: "Aambag Khagrachari Sadar",
    time: "9 AM - 10 AM",
  },
  {
    date: "10 Sep",
    title: "Art and Craft Workshops",
    location: "Aambag Khagrachari Sadar",
    time: "9 AM - 10 AM",
  },
  {
    date: "10 Sep",
    title: "Art and Craft Workshops",
    location: "Aambag Khagrachari Sadar",
    time: "9 AM - 10 AM",
  },
];

export const branches = [
  {
    name: "Khagrachari",
    phone: "+880 1519 575226",
    email: "helloedulife@gmail.com",
    hours: "Mon - Fri: 9:00 AM – 6:00 PM",
    address: "R.K. Building, East Shantinagar, Khagrachari Sadar.",
    image: branch1,
  },
  {
    name: "Matiranga",
    phone: "+880 1511 899176",
    email: "helloedulife@gmail.com",
    hours: "Mon - Fri: 9:00 AM – 6:00 PM",
    address: "Haque Mansion (2nd Floor), Chowdhury Para, Matiranga.",
    image: branch2,
  },
  {
    name: "Laxmichari",
    phone: "+880 1511 899175",
    email: "helloedulife@gmail.com",
    hours: "Mon - Fri: 9:00 AM – 6:00 PM",
    address:
      "Women's Welfare Association Building, Upazila Chattar, Laxmichari.",
    image: branch3,
  },
];

// Sample testimonial data
export const testimonials = [
  {
    id: 1,
    name: "Alex Smith",
    role: "Parent",
    image: images.avatar,
    quote:
      "Their product exceeded my expectations. The quality and attention to detail are outstanding, and it has become an essential part of our education journey.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emma Johnson",
    role: "Teacher",
    image: images.avatar,
    quote:
      "As an educator, I'm impressed by the innovative approach. It's made a significant impact on my students' learning experience.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Student",
    image: images.avatar,
    quote:
      "Learning has never been this fun! The interactive elements keep me engaged and excited to learn more every day.",
    rating: 4,
  },
];
