import { Outlet } from "react-router";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex flex-col lg:flex-row-reverse rounded-lg shadow-lg max-w-4xl w-full">
        {/* Informational Section */}
        <div className="flex-1 flex flex-col justify-center p-6 lg:pr-12 text-zinc-100">
          <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
          <p className="text-base text-zinc-300 mb-4">
            We'd love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
          </p>
          <p className="text-zinc-300">
            Fill out the form, and we’ll get back to you as soon as possible. Your feedback and inquiries are important to us!
          </p>
        </div>

        {/* Form Section */}
        <div className="flex-1 flex flex-col justify-center p-6 rounded-lg ">
          <form className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-zinc-300 font-medium">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                required
                className="mt-1 w-full"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-zinc-300 font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="mt-1 w-full"
              />
            </div>

            <div>
              <Label htmlFor="subject" className="text-zinc-300 font-medium">
                Subject
              </Label>
              <Input
                id="subject"
                type="text"
                placeholder="Enter the subject"
                required
                className="mt-1 w-full"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-zinc-300 font-medium">
                Message
              </Label>
              <textarea
                id="message"
                placeholder="Type your message here"
                required
                className="mt-1 w-full h-32 p-2 rounded border border-gray-500 bg-gray-800 text-zinc-100"
              ></textarea>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
