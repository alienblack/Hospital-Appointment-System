// import './style.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div class="d-flex flex-column footer">
            <footer class="w-100 py-4 flex-shrink-0">
                <div class="container py-3">
                    <div class="row gy-4 gx-5">
                        <div class="col-lg-5 col-md-4 col-sm-8">
                            <h5 class="h1 text-white">Asphalt</h5>
                            <h3 class="h5 text-white">Compassionate care for a healthier tomorrow.</h3>
                            <p class="small text-white mb-0">&copy; Copyrights. All rights reserved @Asphalt</p>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-4">
                            <h5 class="text-white mb-3">Quick links</h5>
                            <ul class="list-unstyled text-white">
                                <li><Link to="/" className="text-white">Home</Link></li>
                                <li><Link to="/about" className="text-white">About Us</Link></li>
                                <li><Link to="/contact" className="text-white">Contact Us</Link></li>
                                <li><Link to="/departments" className="text-white">Departments</Link></li>
                                <li><Link to="/profile" className="text-white">Profile</Link></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-10">
                            <h5 class="text-white mb-3">Newsletter</h5>
                            <p class="small text-white">A hospital newsletter provides updates on news, events, and healthcare developments to keep the community informed and promote hospital initiatives.</p>
                            <form action="#">
                                <div class="input-group mb-3">
                                    <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button class="btn btn-primary" id="button-addon2" type="button"><i class="fas fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    Made with{" "}
                    <img
                        style={{ width: "30px" }}
                        className="heart-footer"
                        src="https://media.giphy.com/media/LpDmM2wSt6Hm5fKJVa/giphy.gif"
                        alt="heart"
                    />{" "} by
                    <span style={{ color: "yellow" }}> Rishank Goyal</span>
                </div>

            </footer>
        </div>
    )
}

export default Footer;