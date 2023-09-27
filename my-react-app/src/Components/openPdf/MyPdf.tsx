import "./style.scss"
import iconarquivo from "../../Assets/iconarquivo.png"

const MyPDF = () => {
  const pdfUrl = "https://drive.google.com/file/d/1c6kiulax_mDNvXVBKw8HrSisI9FOynw8/view?usp=sharing"

  const openPdf = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="pdf">
      <button onClick={openPdf}><img src={iconarquivo} alt="Arquivo" /></button>
    </div>
  );
};

export default MyPDF;
