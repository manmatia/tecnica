import { FaLinkedin } from 'react-icons/fa'; // Importa el ícono de LinkedIn
import { FaEnvelope } from 'react-icons/fa'; // Importa el ícono del sobre
import { AiOutlineDownload } from 'react-icons/ai'; // Importa el ícono de descarga

function Footer() {

  return (
    <footer className="footer bg-light py-3">
      <div className="container d-flex flex-column align-items-center">
        <div className="d-flex align-items-center mb-2">
          {/* Texto de derechos reservados */}
          <span className="text-muted text-center" style={{ fontSize: '14px', marginTop: '10px', marginRight: "20px" }}>
            © 2024 Matias Graneros. TECNICA  
          </span>

          {/* Link de LinkedIn */}
          <a
            href="https://www.linkedin.com/in/matias-graneros-86605388/"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
          >
            <FaLinkedin size={24} color="#0077B5" /> {/* Color azul de LinkedIn */}
          </a>

          {/* Link de correo electrónico */}
          <a
            href="mailto:manmatia@gmail.com?subject=Prueba%20tecnica&body=Matias%20queremos%20hablar%20con%20vos"
            className="btn btn-outline-secondary btn-sm me-3"
          >
            <FaEnvelope size={20}/> 
          </a>

          {/* Botón para descargar el CV */}
          <a
            href="/assets/CV.pdf"
            className="btn btn-primary d-flex align-items-center"
            style={{ background: "gray", border: "gray" }}
            download
          >
            <AiOutlineDownload className="me-2"  /> {/* Icono de descarga */}
            CV
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
