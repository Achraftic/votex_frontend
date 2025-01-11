import { Mail, MapPin, Phone } from 'lucide-react';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Card,CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';


function Contact() {
  return (
    <div className="min-h-screen mt-10">
      <div className="container mx-auto  py-16">
        <div className="text-center mb-12">
          <h1 className="sm:text-7xl text-5xl font-bold text-zinc-100 mb-4">Get in Touch</h1>
          <p className="sm:text-lg text-base text-zinc-400/60 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="md:col-span-2 border-0 shadow-lg">
            <CardContent className="py-6">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    className="min-h-[150px]"
                  />
                </div>

                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 md:mt-10">
            <Card className="border-2 border-primary/70 hover:border-primary transition shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-zinc-100 mt-1" />
                  <div>
                    <h3 className="font-semibold text-zinc-100">Our Office</h3>
                    <p className="text-zinc-400 mt-1">
                      123 Business Avenue<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/70 hover:border-primary transition shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-zinc-100 mt-1" />
                  <div>
                    <h3 className="font-semibold text-zinc-100">Phone</h3>
                    <p className="text-zinc-400 mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/70 hover:border-primary transition shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-zinc-100 mt-1" />
                  <div>
                    <h3 className="font-semibold text-zinc-100">Email</h3>
                    <p className="text-zinc-400 mt-1">contact@company.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;