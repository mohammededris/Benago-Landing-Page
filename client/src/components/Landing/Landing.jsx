import { Header } from "../Header/Header";
import "./Landing.css";

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
          <button className="landing-button">Browse Courses</button>
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
                stroke-width="2"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
                stroke-width="2"
                stroke-dasharray="6,4"
              ></line>
              <line
                x1="200"
                y1="60"
                x2="320"
                y2="200"
                stroke="#c7d2fe"
                stroke-width="2"
                stroke-dasharray="6,4"
              ></line>
              <line
                x1="80"
                y1="200"
                x2="200"
                y2="340"
                stroke="#c7d2fe"
                stroke-width="2"
                stroke-dasharray="6,4"
              ></line>
              <line
                x1="320"
                y1="200"
                x2="200"
                y2="340"
                stroke="#c7d2fe"
                stroke-width="2"
                stroke-dasharray="6,4"
              ></line>
              <line
                x1="80"
                y1="200"
                x2="320"
                y2="200"
                stroke="#c7d2fe"
                stroke-width="2"
                stroke-dasharray="6,4"
              ></line>
              <line
                x1="200"
                y1="60"
                x2="200"
                y2="340"
                stroke="#c7d2fe"
                stroke-width="2"
                stroke-dasharray="6,4"
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
    </>
  );
}
