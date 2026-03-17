import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Level 1/236 Caroline Springs Blvd", "Caroline Springs, VIC 3023"],
    action: "Get Directions",
    href: "https://maps.google.com/?q=Level+1/236+Caroline+Springs+Blvd,+Caroline+Springs,+VIC+3023"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["03 8385 7705"],
    action: "Call Now",
    href: "tel:0383857705"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@anytimecleaners.com.au"],
    action: "Send Message",
    href: "mailto:info@anytimecleaners.com.au"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 5:00 PM", "Sun: 9:00 AM - 2:00 PM"],
    action: "Book Online",
    href: "#contact-form"
  }
];

export default function ContactInfo() {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <span className="inline-block py-1 px-3 rounded-full bg-primary-green/10 text-primary-green font-bold text-sm tracking-widest uppercase mb-4">
          Contact Details
        </span>
        <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-brand-text mb-6">
          Ask a question or get help
        </h2>
        <p className="text-brand-text-light text-lg leading-relaxed max-w-lg">
          Whether you need a quick quote, have a question about our services, or want to provide feedback, our local team in Caroline Springs is ready to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {CONTACT_INFO.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-green/30 transition-all group"
          >
            <div className="w-12 h-12 bg-primary-green/10 rounded-xl flex items-center justify-center text-primary-green mb-5 group-hover:scale-110 group-hover:bg-primary-green group-hover:text-white transition-all">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-brand-text mb-3">
              {item.title}
            </h3>
            <div className="space-y-1 mb-5 min-w-0">
              {item.details.map((detail, i) => (
                <p key={i} className="text-brand-text-light text-sm break-all">{detail}</p>
              ))}
            </div>
            <a 
              href={item.href}
              target={item.href.startsWith('http') ? "_blank" : "_self"}
              rel="noreferrer"
              className="text-primary-green font-semibold text-sm hover:underline tracking-wide underline-offset-4"
            >
              {item.action} &rarr;
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
