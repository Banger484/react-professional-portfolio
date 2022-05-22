import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-container">
      <object
        className="resume-display"
        data={require("../assets/resume/Bret_Banger_Resume.PDF")}
        type="application/pdf"
        alt="Resume"
        >
        Resume
      </object>
    </div>
  );
}
