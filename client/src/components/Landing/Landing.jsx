import { Link } from "react-router-dom";
import { Header } from "../Header/Header";
import "./Landing.css";
import Footer from "../Footer/Footer";

export function Landing() {
  return (
    <>
      <Header />
      <section className="landing-container">
        <div className="landing-content">
          <h2>Welcome to Benago</h2>
          <p>
            Say goodbye to boring, isolated learning. Benago is a learning
            platform for Engineering, AI, Programming, and Industrial
            Technologies. Learn, Build, Engineer.
          </p>
          <Link to="/courses" className="landing-button">
            Explore Courses
          </Link>
        </div>
        <div className="landing-visual">
          <div className="learning-mesh">
            <div className="mesh-node node-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                data-lucide="database"
                aria-hidden="true"
                class="lucide lucide-database"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                <path d="M3 12A9 3 0 0 0 21 12"></path>
              </svg>
            </div>
            <div className="mesh-node node-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="circuit-board"
                aria-hidden="true"
                class="lucide lucide-circuit-board"
              >
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M11 9h4a2 2 0 0 0 2-2V3"></path>
                <circle cx="9" cy="9" r="2"></circle>
                <path d="M7 21v-4a2 2 0 0 1 2-2h4"></path>
                <circle cx="15" cy="15" r="2"></circle>
              </svg>
            </div>
            <div className="mesh-node node-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="code-xml"
                aria-hidden="true"
                class="lucide lucide-code-xml"
              >
                <path d="m18 16 4-4-4-4"></path>
                <path d="m6 8-4 4 4 4"></path>
                <path d="m14.5 4-5 16"></path>
              </svg>
            </div>
            <div className="mesh-node node-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="cpu"
                aria-hidden="true"
                class="lucide lucide-cpu"
              >
                <path d="M12 20v2"></path>
                <path d="M12 2v2"></path>
                <path d="M17 20v2"></path>
                <path d="M17 2v2"></path>
                <path d="M2 12h2"></path>
                <path d="M2 17h2"></path>
                <path d="M2 7h2"></path>
                <path d="M20 12h2"></path>
                <path d="M20 17h2"></path>
                <path d="M20 7h2"></path>
                <path d="M7 20v2"></path>
                <path d="M7 2v2"></path>
                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                <rect x="8" y="8" width="8" height="8" rx="1"></rect>
              </svg>
            </div>
            <svg className="mesh-lines" viewBox="0 0 400 400">
              <line
                x1="200"
                y1="60"
                x2="80"
                y2="200"
                stroke="#c7d2fe"
                strokeWidth="2"
                strokeDasharray="6,4"
              ></line>
              <line
                x1="200"
                y1="60"
                x2="320"
                y2="200"
                stroke="#c7d2fe"
                strokeWidth="2"
                strokeDasharray="6,4"
              ></line>
              <line
                x1="80"
                y1="200"
                x2="200"
                y2="340"
                stroke="#c7d2fe"
                strokeWidth="2"
                strokeDasharray="6,4"
              ></line>
              <line
                x1="320"
                y1="200"
                x2="200"
                y2="340"
                stroke="#c7d2fe"
                strokeWidth="2"
                strokeDasharray="6,4"
              ></line>
              <line
                x1="80"
                y1="200"
                x2="320"
                y2="200"
                stroke="#c7d2fe"
                strokeWidth="2"
                strokeDasharray="6,4"
              ></line>
              <line
                x1="200"
                y1="60"
                x2="200"
                y2="340"
                stroke="#c7d2fe"
                strokeWidth="2"
                strokeDasharray="6,4"
              ></line>
            </svg>
            <div className="mesh-center">
              <span className="center-pulse"></span>
              <div className="center-badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-lucide="users"
                  aria-hidden="true"
                  class="lucide lucide-users"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
                <span>Hub</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">Simple Concept</span>
            <h2 className="section-title">How Benago Works</h2>
            <p className="section-subtitle">
              We build cohort schedules based on local demand. Here is how you
              can secure your spot.
            </p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon step-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-lucide="book-open-check"
                  aria-hidden="true"
                  className="lucide lucide-book-open-check"
                >
                  <path d="M12 21V7"></path>
                  <path d="m16 12 2 2 4-4"></path>
                  <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"></path>
                </svg>
              </div>
              <h3>1. Choose a Course</h3>
              <p>
                Browse our catalog of dynamic, highly relevant subjects and
                choose what you'd like to learn.
              </p>
            </div>
            <div className="step-card">
              <div className="step-icon step-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-lucide="clipboard-edit"
                  aria-hidden="true"
                  className="lucide lucide-clipboard-edit"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
                  <path d="M21.34 15.664a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                  <path d="M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1"></rect>
                </svg>
              </div>
              <h3>2. Register Your Interest</h3>
              <p>
                Fill out the registration form. No payment required. Your vote
                validates the interest for the class.
              </p>
            </div>
            <div className="step-card">
              <div className="step-icon step-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-lucide="mail-check"
                  aria-hidden="true"
                  class="lucide lucide-mail-check"
                >
                  <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  <path d="m16 19 2 2 4-4"></path>
                </svg>
              </div>
              <h3>3. Get Confirmation</h3>
              <p>
                Receive an email immediately and updates. We'll invite you once
                we launch the cohort!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="faq-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">FAQ</span>
            <h2 className="section-title">Got Questions?</h2>
            <p className="section-subtitle">
              Here are the most common things people ask about our validation
              phase.
            </p>
          </div>
          <div className="faq-grid">
            <div className="faq-card">
              <h4>Is registration binding or paid?</h4>
              <p>
                No! This is a zero-cost registration to assess local demand. You
                are voting to help make the course happen.
              </p>
            </div>
            <div className="faq-card">
              <h4>When does a course start?</h4>
              <p>
                Once a course receives 20 interested registrations, we lock in a
                mentor, set a schedule, and email all registered users with
                enrollment options.
              </p>
            </div>
            <div className="faq-card">
              <h4>Will I get spam?</h4>
              <p>
                Never. We only email you a registration confirmation and a
                notification when the class is scheduled to launch.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
