
import { FC } from 'react';

export const DetailedFeatures: FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-2">
          Easy-to-use, all-in-one protection
        </h2>
        <h3 className="text-center text-xl md:text-2xl text-red-600 font-bold mb-16">
          for the whole family
        </h3>

        {/* Identity Protection */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Identity Protection</h3>
            <h4 className="text-lg font-medium mb-6 text-gray-600">
              Safeguard your family's identities and finances
            </h4>
            <ul className="list-none space-y-4">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-red-600 mr-3 mt-1"></i>
                <span>Count on 24/7 scans of the dark web to ensure your personal and financial info is safe with 
                  <strong className="text-red-600 ml-1">Identity Monitoring</strong>
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-red-600 mr-3 mt-1"></i>
                <span>Get alerts to suspicious financial transactions and credit activity with 
                  <strong className="text-red-600 ml-1">Credit and Transaction Monitoring</strong> feature
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-red-600 mr-3 mt-1"></i>
                <span>Get hands-on help with 
                  <strong className="text-red-600 ml-1">Identity Restoration</strong> from a US-based recovery expert if identity theft occurs
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-red-600 mr-3 mt-1"></i>
                <span>Enjoy greater peace of mind with 
                  <strong className="text-red-600 ml-1">up to $4 million in identity theft coverage and restoration</strong>
                </span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src="https://media.mcafeeassets.com/en-us/identity-theft/family/_jcr_content/btfcontainer/main_section_content/section_copy_copy/main_section_content/flexcard_copy_copy_c/flexcard_img.coreimg.jpeg/1697683871296/credit-score-833.jpeg"
              alt="Credit score monitoring display"
              className="rounded-lg shadow-xl max-w-[300px] h-auto"
            />
          </div>
        </div>

        {/* Privacy Protection */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="flex justify-center items-center md:order-1 order-2">
            <img 
              src="https://media.mcafeeassets.com/en-us/identity-theft/family/_jcr_content/btfcontainer/main_section_content/section_copy_copy/main_section_content/flexcard_copy_copy_c_1971907844/flexcard_img.coreimg.jpeg/1697684576357/privacy-prot.jpeg"
              alt="Online account cleanup interface"
              className="rounded-lg shadow-xl max-w-[300px] h-auto"
            />
          </div>
          <div className="md:order-2 order-1">
            <h3 className="text-2xl font-bold mb-4">Privacy Protection</h3>
            <h4 className="text-lg font-medium mb-6 text-gray-600">
              Help keep your family's personal info private
            </h4>
            <ul className="list-none space-y-4">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-red-600 mr-3 mt-1"></i>
                <span>Get your data back from sites that sell it with 
                  <strong className="text-red-600 ml-1">Personal Data Cleanup</strong>
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-red-600 mr-3 mt-1"></i>
                <span>Keep your personal info safe with 
                  <strong className="text-red-600 ml-1">Secure VPN</strong> on public Wi-Fi
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-red-600 mr-3 mt-1"></i>
                <span>Use 
                  <strong className="text-red-600 ml-1">Online Account Cleanup</strong> to remove unused accounts
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-red-600 mr-3 mt-1"></i>
                <span>Control social media privacy with 
                  <strong className="text-red-600 ml-1">Social Privacy Manager</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Device Protection */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Device Protection</h3>
            <h4 className="text-lg font-medium mb-6 text-gray-600">
              Protect all your family's devices from viruses and scams
            </h4>
            <ul className="list-none space-y-4">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-red-600 mr-3 mt-1"></i>
                <span>Stay safe from fake texts with 
                  <strong className="text-red-600 ml-1">Text Scam Detector</strong>
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-red-600 mr-3 mt-1"></i>
                <span>Safeguard devices with McAfee's 
                  <strong className="text-red-600 ml-1">award-winning antivirus</strong>
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-red-600 mr-3 mt-1"></i>
                <span>Real-time protection with 
                  <strong className="text-red-600 ml-1">AI-powered technology</strong>
                </span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src="https://media.mcafeeassets.com/en-us/identity-theft/family/_jcr_content/btfcontainer/main_section_content/section_copy_copy/main_section_content/flexcard_copy_copy_c_1674745058/flexcard_img.coreimg.jpeg/1697684981942/device-prot.jpeg"
              alt="Device protection interface"
              className="rounded-lg shadow-xl max-w-[300px] h-auto"
            />
          </div>
        </div>

        {/* Awards Section */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-8">Recognized by industry leaders for over 35 years</h3>
          <div className="flex justify-center space-x-8 flex-wrap gap-y-4">
            <img 
              src="https://www.mcafee.com/content/dam/cmpcld/consumer/en-us/fdr/top-logo.png"
              alt="Top Product award badge"
              className="h-12 w-auto"
            />
            <img 
              src="https://www.mcafee.com/content/dam/cmpcld/consumer/en-us/fdr/pc-logo.png"
              alt="PC Editor's Choice award badge"
              className="h-12 w-auto"
            />
            <img 
              src="https://www.mcafee.com/content/dam/cmpcld/consumer/en-us/fdr/av-logo.png"
              alt="AV Test award badge"
              className="h-12 w-auto"
            />
            <img 
              src="https://www.mcafee.com/content/dam/cmpcld/consumer/en-us/fdr/aaa-logo.png"
              alt="Another industry award badge"
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
