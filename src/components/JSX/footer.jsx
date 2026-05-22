import "./CSS/footer.css"; 
const Footer = () => {
	return (
		<footer className="footer-container">
			<div className="footer-section logo-section">
				<div className="footer-logo">zehn.</div>
				<div className="footer-contact">
					<p><span className="footer-bold">Phone:</span> +57 316 7988856</p>
					<p><span className="footer-bold">Address:</span> Complex Llanogrande,</p>
					<p>Rionegro Ant. Local 061</p>
				</div>
			</div>
			<div className="footer-section"> 
				<h3>Sobre nosotros</h3>
				<ul>
					<li>Contacto</li>
					<li>Nuestra Promesa</li>
					<li>Blog</li>
				</ul>
			</div>
			<div className="footer-section"> 
				<h3>Programas ZEHN</h3>
				<ul>
					<li>Membresía Visitantes</li>
					<li>Alianzas Comerciales</li>
					<li>ZEHN Creators</li>
				</ul>
			</div>
			<div className="footer-section"> 
				<ul>
					<li>Soporte creadores</li>
					<li>Política de envíos</li>
					<li>Tratamiento de datos personales</li>
					<li>Términos y condiciones</li>
					<li>Política de garantía, devoluciones y reembolsos</li>
					<li>FAQs</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
