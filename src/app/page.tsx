"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Eye, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeMediumTitles"
        background="fluid"
        cardStyle="glass-depth"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Why Us",
          id: "why-us",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="THAHIRA OPTICALS"
    />
  </div>

  <div id="home" data-section="home">
      <HeroLogoBillboard
      background={{
        variant: "gradient-bars",
      }}
      logoText="50+ Years of Excellence in Vision & Style"
      description="Premium eyewear. Trusted expertise. Personalized care."
      buttons={[
        {
          text: "Book Appointment",
          href: "tel:9865222830",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/fashionable-eyewear-model-close-up-portrait_158595-4330.jpg?_wi=1"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="why-us" data-section="why-us">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          icon: ShieldCheck,
          title: "Expert Guidance",
          description: "Professional staff helping you choose the perfect eyewear.",
        },
        {
          icon: Eye,
          title: "Premium Collection",
          description: "Wide range of stylish and classic frames from top brands.",
        },
        {
          icon: Eye,
          title: "Eye Exams",
          description: "Convenient and accurate eye testing services.",
        },
      ]}
      title="Why Choose Us"
      description="Experience excellence through our commitment to quality vision care and a curated collection of premium frames."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Anjali R.",
          date: "March 2024",
          title: "Loyal Customer",
          quote: "Welcoming staff, wide variety, expert advice, and a seamless experience. Highly recommended!",
          tag: "5 stars",
          avatarSrc: "http://img.b2bpic.net/free-photo/business-woman-with-glasses-her-desk_23-2148218573.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/fashionable-eyewear-model-close-up-portrait_158595-4330.jpg?_wi=2",
          imageAlt: "luxury eyewear store interior warm lighting",
        },
        {
          id: "2",
          name: "Suresh K.",
          date: "Jan 2024",
          title: "Regular Visitor",
          quote: "The best place for premium eyewear. HAJA SHARIF really cares about his customers.",
          tag: "5 stars",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-green-t-shirt-holding-sunglasses-hands-looking-aside-with-serious-expression-standing-white-background_141793-21195.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-with-glasses-her-desk_23-2148218573.jpg",
          imageAlt: "happy customer wearing new glasses",
        },
        {
          id: "3",
          name: "Meera P.",
          date: "Dec 2023",
          title: "New Client",
          quote: "Extremely helpful team. They helped me find frames that perfectly match my style.",
          tag: "5 stars",
          avatarSrc: "http://img.b2bpic.net/free-photo/front-view-woman-talking-ophthalmologist_23-2150801445.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-green-t-shirt-holding-sunglasses-hands-looking-aside-with-serious-expression-standing-white-background_141793-21195.jpg",
          imageAlt: "person trying on designer glasses",
        },
        {
          id: "4",
          name: "Vikram S.",
          date: "Nov 2023",
          title: "Long-term Patron",
          quote: "Five decades of quality service. Trustworthy and always reliable.",
          tag: "5 stars",
          avatarSrc: "http://img.b2bpic.net/free-photo/front-view-smiling-woman-white-sweater-try-glasses-professional-store_231208-5183.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-talking-ophthalmologist_23-2150801445.jpg",
          imageAlt: "customer picking frames in optical shop",
        },
        {
          id: "5",
          name: "Deepa M.",
          date: "Feb 2025",
          title: "Happy Patient",
          quote: "Excellent service and state-of-the-art testing equipment. Best in the region.",
          tag: "5 stars",
          avatarSrc: "http://img.b2bpic.net/free-photo/business-woman-with-glasses-her-desk_23-2148218573.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiling-woman-white-sweater-try-glasses-professional-store_231208-5183.jpg",
          imageAlt: "professional eye care patient smiling",
        },
      ]}
      title="Customer Experience"
      description="Don't just take our word for it—hear what our long-term clients have to say about their experience."
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="About Us"
      description="Founded over 50 years ago, Thahira Opticals has been a trusted name in eyewear. Under the leadership of HAJA SHARIF, we continue to deliver excellence in vision care and style."
      imageSrc="http://img.b2bpic.net/free-photo/fashionable-eyewear-model-close-up-portrait_158595-4330.jpg?_wi=3"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Contact Us"
      description="Owner: HAJA SHARIF | Call: 9865222830"
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we help you?",
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/back-view-woman-trying-sunglasses_23-2148273138.jpg"
      mediaAnimation="slide-up"
      buttonText="Call Now"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/fashionable-eyewear-model-close-up-portrait_158595-4330.jpg?_wi=4"
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Home",
              href: "#home",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Eye Exams",
              href: "#",
            },
            {
              label: "Premium Frames",
              href: "#",
            },
          ],
        },
      ]}
      logoText="THAHIRA OPTICALS"
      copyrightText="© 2025 Thahira Opticals. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
