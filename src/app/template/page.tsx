import "../inner-page.css";

import InnerHero from "../components/inner/InnerHero";
import TreatmentGrid from "../components/inner/TreatmentGrid";
import ContentSection from "../components/inner/ContentSection";
import BenefitsGrid from "../components/inner/BenefitsGrid";
import VideoSection from "../components/inner/VideoSection";
import FeatureBanner from "../components/inner/FeatureBanner";
import FAQSection from "../components/inner/FAQSection";
import TestimonialsGrid from "../components/inner/TestimonialsGrid";
import SpecialistBanner from "../components/inner/SpecialistBanner";
import TeamGrid from "../components/inner/TeamGrid";
import SuccessStories from "../components/inner/SuccessStories";
import CTABanner from "../components/inner/CTABanner";
import BlogSection from "../components/inner/BlogSection";
import ConsultBannerForm from "../components/inner/ConsultBannerForm";
import ContactSection from "../components/inner/ContactSection";
import SectionDivider from "../components/SectionDivider";

const NAVY = "#1a1a3e";
const WHITE = "#fff";
const WARM = "#faf7f4";
const LIGHT_GRAY = "#f5f2ef";

const treatments = [
  {
    title: "Fixed Braces",
    description: "Proven, effective treatment for precise tooth alignment using modern bracket systems.",
    image: "/images/Braces.jpg",
    learnMore: "Braces",
  },
  {
    title: "Clear Aligners",
    description: "Three advanced aligner systems for discreet, comfortable teeth straightening.",
    image: "/images/Invisalign.jpg",
    learnMore: "Aligners",
  },
  {
    title: "Children & Teens",
    description: "Early assessment and specialist orthodontics in a friendly, relaxed environment.",
    image: "/images/child.jpg",
    learnMore: "Children",
  },
  {
    title: "Adult Orthodontics",
    description: "Discreet options for adults including invisible aligners and lingual braces.",
    image: "/images/Adult.jpg",
    learnMore: "Adults",
  },
];

const benefits = [
  { title: "Discreet", description: "Because Invisalign® clear aligners are nearly invisible, they make a great option for client-facing professionals." },
  { title: "Accurate", description: "Invisalign® clear aligners are 100% customised for your smile, making them incredibly efficient." },
  { title: "Removable", description: "Going to a big meeting or event? You can take out your aligners for special occasions, meal times and to brush your teeth." },
  { title: "Comfortable", description: "The smooth medical-grade plastic of the aligners won't irritate your cheeks or gums." },
  { title: "Convenient", description: "Pair Invisalign® treatment with Dental Monitoring for remote check-ins." },
  { title: "Affordable", description: "At Oldham Orthodontics we can work out a plan that best suits your budget. We offer 0% APR finance and other flexible payment options up to 36 months." },
];

const faqs = [
  { question: "How long does treatment typically take?", answer: "Treatment duration varies depending on the complexity of your case. Most treatments range from 6 months to 2 years. During your free consultation, we'll provide a personalized timeline for your specific needs." },
  { question: "Is orthodontic treatment painful?", answer: "You may experience some discomfort when braces are first fitted or adjusted, but this typically subsides within a few days. Modern orthodontic techniques are designed to minimize discomfort while maximizing results." },
  { question: "Can adults have braces?", answer: "Absolutely! There's no age limit for orthodontic treatment. We treat many adult patients who want to improve their smile. Options like clear aligners and ceramic braces are popular choices for adults seeking a discreet solution." },
  { question: "How much does treatment cost?", answer: "Costs vary depending on the type of treatment and complexity of your case. We offer flexible payment plans to suit every budget. Book a free consultation to receive a personalized quote." },
  { question: "Do you offer payment plans?", answer: "Yes, we offer flexible payment plans to help make treatment affordable. You can spread the cost of your treatment over monthly instalments with 0% finance options available." },
];

const testimonials = [
  { name: "Sarah M.", text: "Amazing experience from start to finish. The team made me feel so comfortable!", rating: 5 },
  { name: "James T.", text: "My son's teeth look incredible. Highly recommend Oldham Orthodontics.", rating: 5 },
  { name: "Emma R.", text: "Professional, friendly, and the results speak for themselves.", rating: 5 },
];

const specialists = [
  { name: "Dr. Sarah Mitchell" },
  { name: "Dr. James Thompson" },
];

const teamMembers = [
  { name: "Dr Howard Greeves", role: "Associate Dentist", bio: "Howard qualified from the Peninsula School of Medicine and Dentistry in 2013 having previously completed..." },
  { name: "Dr Jay Wilson", role: "Specialist Orthodontist and Co-Owner", bio: "Jay completed her specialist Orthodontic training at the Birmingham Dental School in 2009. She has since enhanced..." },
  { name: "Rachel White", role: "Dental Hygienist", bio: "Rachel has been with Stoke Bishop Dental since 2009. She qualified in 2002 at the Eastman Dental Hospital..." },
  { name: "Marianne Nicoll", role: "Practice Manager", bio: "Marianne joined Stoke Bishop Dental Centre in November 2022 as our Lead Dental Nurse bringing over twenty..." },
];

const successStories = [
  { label: "Fixed Braces" },
  { label: "Clear Aligners" },
  { label: "Teen Treatment" },
];

const blogPosts = [
  { title: "5 Signs Your Child May Need Braces And What To Look For", image: "/images/child.jpg", date: "14.06.2025", excerpt: "Tincidunt semper egestas massa lacus varius lacus tristique. Eget a nulla eget venenatis nulla. Facilisi lacus purus ullamcorper aliquet venenatis massa vitae augue est." },
  { title: "Clear Aligners vs Traditional Braces: Which Is Right For You?", image: "/images/Adult.jpg", date: "14.06.2025", excerpt: "Massa consequat non egestas odio nisl tempor tincidunt faucibus morbi. In non consequat platea eu id posuere. Amet purus quisque nunc ac." },
];

export default function TreatmentsPage() {
  return (
    <>
      <InnerHero
        label="TREATMENTS"
        title={
          <>
            Discover Your Perfect
            <br />
            <span>Smile Solution</span>
          </>
        }
        description="From traditional braces to cutting-edge clear aligners, we offer a comprehensive range of orthodontic treatments tailored to your unique needs and lifestyle."
        image="/images/Invisalign.jpg"
        imageAlt="Clear aligners treatment"
      />

      <TreatmentGrid
        title="Orthodontic Solutions for Every Smile"
        description="From traditional braces to the latest aligner technology, we offer a full range of treatments tailored to your needs."
        treatments={treatments}
      />

      <ContentSection
        label="FIXED BRACES"
        title="Invisalign® Treatment"
        paragraphs={[
          "Invisalign® uses a series of custom-made, virtually invisible aligners to gradually straighten your teeth. Each aligner is worn for about two weeks before moving on to the next in the series, gently shifting your teeth into their ideal position.",
          "This innovative approach means you can transform your smile without the look and feel of traditional metal braces. The aligners are removable, making eating, brushing, and flossing easier than ever.",
        ]}
        image="/images/Braces.jpg"
        imageAlt="Fixed braces treatment"
        linkText="Learn more about Invisalign®"
      />

      <ContentSection
        alt
        imagePosition="right"
        label="CLEAR ALIGNERS"
        title="Why Choose Clear Aligners?"
        paragraphs={[
          "Clear aligners offer a discreet, comfortable alternative to traditional braces. Perfect for adults and teens who want to straighten their teeth without anyone noticing.",
        ]}
        list={[
          "Virtually invisible when worn",
          "Removable for eating and cleaning",
          "Fewer appointments required",
          "Comfortable with no metal brackets",
          "See your results before you start",
        ]}
        image="/images/Adult.jpg"
        imageAlt="Adult orthodontics"
      />

      <BenefitsGrid
        title={
          <>
            The Benefits Of <span>Invisalign®?</span>
          </>
        }
        description="Invisalign® clear aligners offer a modern approach to straightening teeth. Using advanced 3D technology, we create a series of custom-made aligners designed specifically for your smile journey."
        benefits={benefits}
      />

      <VideoSection image="/images/video.png" imageAlt="Invisalign® treatment video" />

      <ContentSection
        label="CHILDREN & TEENS"
        title="Early Orthodontic Assessment"
        paragraphs={[
          "The American Association of Orthodontists recommends that children have their first orthodontic assessment by age 7. Early evaluation allows us to identify potential issues and plan the most effective treatment approach.",
          "We create a welcoming, fun environment for our younger patients, making their orthodontic journey a positive experience from start to finish.",
        ]}
        image="/images/child.jpg"
        imageAlt="Children orthodontics"
        linkText="Learn about children's treatments"
      />

      <SectionDivider from={WHITE} to={NAVY} />
      <FeatureBanner
        label="WHY CHOOSE US"
        title={
          <>
            Experience The Oldham
            <br />
            Orthodontics Difference
          </>
        }
        description="With over 30 years of combined experience, our Specialist Orthodontists are dedicated to creating beautiful, healthy smiles for patients of all ages."
      />

      <SectionDivider from={NAVY} to={WHITE} />
      <FAQSection faqs={faqs} />

      <SectionDivider from={WHITE} to={WARM} />
      <TestimonialsGrid testimonials={testimonials} />

      <SpecialistBanner
        title={
          <>
            Expert Orthodontists
            <br />
            <span>Dedicated To You</span>
          </>
        }
        description="Our Specialist Orthodontists bring decades of combined experience and a passion for creating beautiful smiles. Every member of our team is committed to providing exceptional care in a warm, welcoming environment."
        specialists={specialists}
      />

      <TeamGrid members={teamMembers} />

      <SectionDivider from={WHITE} to={LIGHT_GRAY} />
      <SuccessStories
        title={
          <>
            Real Results <span>From Our Patients</span>
          </>
        }
        description="See the amazing transformations we've achieved for our patients with before and after comparisons."
        stories={successStories}
      />

      <SectionDivider from={LIGHT_GRAY} to={NAVY} variant="into-cta" />
      <CTABanner
        title="Ready to Start Your Smile Journey?"
        description="Book your free, no-obligation consultation today and take the first step towards the smile you've always wanted."
      />

      <SectionDivider from={NAVY} to={WARM} variant="out-of-cta" />
      <BlogSection posts={blogPosts} />

      <ConsultBannerForm
        title={
          <>
            Start Your Smile
            <br />
            <span>Journey Today</span>
          </>
        }
        description="Take the first step towards your perfect smile. Book a free, no-obligation consultation with our Specialist Orthodontists."
        image="/images/child.jpg"
        imageAlt="Mother and daughter consultation"
      />

      <ContactSection
        address={["221 Hollins Road", "Oldham OL8 3AA"]}
        phone="0161 622 0987"
        email="info@oldhamorthodontics.co.uk"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.8892!2d-2.1047!3d53.5408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb7e5b5b5b5b5%3A0x0!2s221+Hollins+Rd%2C+Oldham+OL8+3AA!5e0!3m2!1sen!2suk!4v1"
      />
    </>
  );
}
