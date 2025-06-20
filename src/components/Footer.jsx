import { FaCartPlus, FaHeadset } from "react-icons/fa";
import logo from "../assets/blackLogo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white pt-12 pb-6 px-6 md:px-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="1MDM Logo" className="w-24 mb-4" />
            <p className="text-gray-400 leading-snug">
              One Medical Devices <br /> Market Place
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h5 className="font-semibold mb-4">Platform</h5>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a>Sell on 1MDM</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Our Story</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Brands</a>
              </li>
            </ul>
          </div>

          {/* Press and Policies */}
          <div>
            <h5 className="font-semibold mb-4">Press Room</h5>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>
                <a>Images & B-roll</a>
              </li>
            </ul>
            <h5 className="font-semibold mb-4">Policies</h5>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a>Terms of Service</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Delivery Information</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold mb-4">Reach Us</h5>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a>Corporate Information</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="border-t border-white/10 mt-3 pt-3 mb-2 text-center justify-center text-black text-l">
        © {new Date().getFullYear()}{" "}
        <span >1MDM</span> ⚡ by{" "}
        <span className="underline">
          SuperLabs
        </span>
      </div>
    </>
  );
};

export default Footer;
