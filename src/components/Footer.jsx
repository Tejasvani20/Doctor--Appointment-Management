
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section  */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-900 leading-6">
            We are committed to connecting patients with trusted healthcare
            professionals. Whether you need to book an appointment or access
            medical records, we strive to provide reliable and efficient
            healthcare management solutions. Your health is our priority.
          </p>
        </div>

        {/* Center Section */}
        <div>
          <p className="text-xl font-bold mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-xl font-bold mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-8888888876</li>
            <li>
              <a href="mail to:tjswnisngh@gmail.com" className="hover:underline">
                tjswnisngh@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center font-semibold">
        Copyright @2024 Doctify.Dev - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
