import { motion } from 'framer-motion';

export default function ContactMap() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-brand-text mb-4">
              Find Us in Caroline Springs
            </h2>
            <p className="text-brand-text-light text-lg">
              Proudly servicing the greater Melbourne area from our headquarters.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative bg-gray-200"
        >
          {/* 
            Note: In a production environment with a real Google Maps API key, 
            you would use @react-google-maps/api or similar. 
            Here we use an iframe embed for the specified address.
          */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.545638531061!2d144.7350708!3d-37.7420138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6f5c8c6cd3627%3A0xe5f8674d81ec45db!2sLevel%201%2F236%20Caroline%20Springs%20Blvd%2C%20Caroline%20Springs%20VIC%203023%2C%20Australia!5e0!3m2!1sen!2sus!4v1709664653655!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Anytime Cleaners Office Location"
            className="absolute inset-0 grayscale contrast-125 opacity-90 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
}
