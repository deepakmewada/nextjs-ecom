import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-wrap row">
                        <div className="col-md-8">
                            <p className="copyright">Copyright © 2020, All rights reserved</p>
                        </div>
                        <div className="col-md-4">
                            <div className="socialLinks">
                                <a className="facebook" href="https://facebook.com" title="Facebook" target="_blank" ><FiFacebook/></a>
                                <a className="instagram" href="https://instagram.com" title="Instagram" target="_blank" ><FiInstagram/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
