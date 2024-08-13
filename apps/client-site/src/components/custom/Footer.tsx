import { Link } from "react-router-dom";
import { t } from "i18next";


export const Footer = () => {
    return (
      <footer className="w-full flex flex-col bg-[#00072D]">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-4 sm:px-6 lg:px- py-10"> */}
      
        <div className="flex gap-8 px-4 sm:px-6 lg:px-8 py-10 flex-wrap justify-between">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <img src="/assets/mm.png" alt="logo_white" className="w-48 sm:w-56 lg:w-64 max-w-full" />
          </div>
          
          <div className="w-full sm:w-fit">
            <h3 className="text-white text-xl lg:text-2xl tracking-wider mb-4">{t("Quick Links")}</h3>
            <ul className="flex flex-col gap-3 text-white tracking-wide">
              <li><Link to="/" className="hover:text-orange-500 transition-colors">{t("About Us")}</Link></li>
              <li><Link to="/generator" className="hover:text-orange-500 transition-colors">{t("Products")}</Link></li>
              <li><Link to="/contactus" className="hover:text-orange-500 transition-colors">{t("Contact Us")}</Link></li>
            </ul>
          </div>
          
          <div className="w-full sm:w-fit">
            <h3 className="text-white text-xl lg:text-2xl tracking-wider mb-4">{t("Further Information")}</h3>
            <ul className="flex flex-col gap-3 text-white tracking-wide">
              <li><a href="#" className="hover:text-orange-500 transition-colors">{t("Terms and conditions")}</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">{t("Privacy Policy")}</a></li>
              <li><Link to="/faq" className="hover:text-orange-500 transition-colors">{t("FAQ")}</Link></li>
            </ul>
          </div>
          
          <div className="w-full sm:w-fit">
            <h3 className="text-white text-xl lg:text-2xl tracking-wider mb-4">{t("Contact Information")}</h3>
            <ul className="flex flex-col gap-3 text-white tracking-wide">
              <li>{t("Address: Adjecent Sunu Assurance")}</li>
              <li>{t("Phone: +233 535 097 486")}</li>
              <li>{t("Email: longliangh07@gmail.com")}</li>
            </ul>
          </div>
          
          <div className="w-full sm:w-fit col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-white text-xl lg:text-2xl tracking-wider mb-4">{t("Newsletter")}</h3>
            <div className="max-w-fit flex flex-col sm:flex-row g ap-2">
              <input type="email" className="flex-grow w-full sm:w-auto h-12 p-3 text-black" placeholder="Your email" />
              <button className="w-full sm:w-auto h-12 px-4 bg-orange-500 text-white text-base tracking-wider hover:bg-orange-600 transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="w-full py-4 flex justify-center items-center bg-[#5738814D]">
          <p className="text-white text-sm sm:text-base tracking-wide text-center px-4">Copyright @ 2024. All rights reserved</p>
        </div>
      </footer>
    );
  };