import React from 'react';
import '../styles/StyledContact.scss';

const Contact = () => {
	return (
		<section className='contact'>
			<div className='contact-head'>
				<h6>contact</h6>
				<h1>Get in touch.</h1>
			</div>

			<div className='contact-margin-left'>
				<div className='contact-info'>
					<div className='head-office'>
						<p className='head-text'>Head Office:</p>
						<p>
							330-2608 Granville Street
							<br/>
							Vancouver, British Columbia
							<br />
							V6H 3V3 Canada
						</p>
					</div>
					<div className='phone-email'>
						<div className='phone'>
							<p>
								<b>Vancouver:</b> <span className='van'>+1 (604) 729-5787</span>
								<br />
								<b>Toronto:</b> <span className='toronto'>+1 (647) 632-2772</span>
							</p>
						</div>
						<div className='email'>
							<p>info@bamdigital.com</p>
						</div>
					</div>
				</div>

				<div className='email-list'>
					<h2>Join our email newsletter for updates.</h2>
					<form>
						<input type='text' placeholder='Email address' />
						<button type='submit'>Subscribe</button>
					</form>
				</div>
			</div>

		</section>
	);
}

export default Contact;