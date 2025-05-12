import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

export const Projects = () => {
  const commonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-lg font-light text-white rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg";
  return (
    <>
      <Navbar />
      <section className="projects">
        <div className="mt-20 text-center text-3xl mb-5">Projects</div>
        <div className="text-left px-10 mb-20">
          <div>
            <h1>-- Real Estate Web Application:</h1>
            <br />
            <p className="px-10">
            Developed a full-stack Real Estate Web Application enabling users to list, search, and manage properties with real-time filters and role-based dashboards.
            Built secure authentication with Google OAuth and Appwrite, and implemented property image uploads using Firebase.
            Designed responsive UI using React.js and Tailwind CSS for seamless use across devices.
            Created scalable REST APIs with Node.js and Express.js, and managed data with MongoDB.
            Tech Stack: MERN Stack, Redux, Appwrite, Firebase, Tailwind CSS, Google OAuth.
            </p>
            <br />
            <a
              className="flex gap-2 px-10"
              target="_blank"
              href="https://github.com/hemaradhika-reddy/Real-Estate-Web-Application"
            >
              -- github
              <img
                className="preview"
                src="images/git-original.svg"
                alt="githubImg"
              />
            </a>
          </div>
          <br />
          <div>
            <h1>-- Assessment Recommendation System:</h1>
            <br />
            <p className="px-10">
            Built a web-based recommendation tool to suggest SHL assessments based on job queries or descriptions, streamlining hiring decisions.
            Deployed a user-friendly Streamlit interface and FastAPI backend to support both interactive use and API integration.
            Designed logic to return top 10 relevant assessments with key attributes, improving selection speed and consistency.
            Integrated optional LLM support and evaluated system performance using Recall@3 and MAP@3 metrics.
            Tech Stack: Python, Streamlit, FastAPI, Pandas, scikit-learn, Gemini (LLM APIs).
            </p>
            <br />
            <a
              className="flex gap-2 px-10"
              target="_blank"
              href="https://github.com/hemaradhika-reddy/SHL-Assessment-Recommendation-System"
            >
              -- github
              <img
                className="preview"
                src="images/git-original.svg"
                alt="githubImg"
              />
            </a>
          </div>
          <br />
          <div>
            <h1>-- 
            Robust Prediction of Protein Structural Flexibility Using Transformers:</h1>
            <br />
            <p className="px-10">
            Developed a deep learning pipeline to predict protein flexibility (B-factors) directly from sequences, aiding drug discovery efforts.
            Used ESM-2 transformer embeddings and BiLSTM to capture sequence patterns, improving generalizability and scalability.
            Engineered a hybrid Graph Attention Network (HAGNN-BF) to model spatial dependencies in protein structures.
            Achieved a high Pearson correlation of 0.85, outperforming traditional methods in accuracy and robustness.
            Tech Stack: Python, PyTorch, ESM-2, BiLSTM, Graph Neural Networks, Attention Mechanisms.
            </p>
            <br />
            <a
              className="flex gap-2 px-10"
              target="_blank"
              href="https://github.com/hemaradhika-reddy/Protein-Structural-Flexibility-Using-Transformers"
            >
              -- github
              <img
                className="preview"
                src="images/git-original.svg"
                alt="githubImg"
              />
            </a>
          </div>
          <br />
          <div>
            <h1>-- Real-Time Ad Placement in Online Marketing:</h1>
            <br />
            <p className="px-10">
            Designed a DRL-based system to optimize real-time ad placements by adapting to user behavior, preferences, and context.
            Implemented and compared DQN, A2C, and PPO agents to maximize click-through rates and user engagement.
            Simulated a dynamic environment with ad inventory and user profiles for continuous learning via custom reward signals.
            Achieved enhanced ad performance through strategic exploration and robust policy updates across agents.
            Tech Stack: Python, TensorFlow, PyTorch, NumPy, Pandas, Matplotlib.
            </p>
            <br />
            <a
              className="flex gap-2 px-10"
              target="_blank"
              href="https://github.com/hemaradhika-reddy/Real-Time-Ad-Placement-in-Online-Marketing"
            >
              -- github
              <img
                className="preview"
                src="images/git-original.svg"
                alt="githubImg"
              />
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};
