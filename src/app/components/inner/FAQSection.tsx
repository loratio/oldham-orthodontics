"use client";

import { useState } from "react";

type FAQ = { question: string; answer: React.ReactNode };

type FAQSectionProps = {
  label?: string;
  title?: string;
  description?: string;
  faqs: FAQ[];
};

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`faq-icon ${isOpen ? "rotate" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

export default function FAQSection({
  label = "COMMON QUESTIONS",
  title = "Frequently Asked Questions",
  description = "Find answers to the most common questions about orthodontic treatment.",
  faqs,
}: FAQSectionProps) {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-label">{label}</span>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
