

export default function Footer() {
    return (
      <footer className=" text-zinc-200 mt-14 ">
        <div className="max-w-7xl mx-auto px-4 ">
          {/* Footer Top */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-sm text-zinc-300/80">
                We are dedicated to providing the best solutions to help you achieve your goals. Connect with us to learn more about our platform and services.
              </p>
            </div>
  
            {/* Column 2 */}
            <div>
              <h3 className="text-xl  font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-zinc-300/80">
                <li>
                  <a href="#home" className="hover:text-zinc-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-zinc-200">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-zinc-200">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-zinc-200">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Column 3 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-zinc-300/80">
                <li>Email: support@example.com</li>
                <li>Phone: +1 (123) 456-7890</li>
                <li>Address: 123 Street, City, Country</li>
              </ul>
            </div>
          </div>
  
     
          <div className=" mt-5  text-center text-sm text-zinc-400">
            
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  