import React from "react";
import { motion } from "framer-motion";

const destinations = [
  { name: 'Mirissa', location: 'Matara, Sri Lanka', image: 'https://images.pexels.com/photos/29644514/pexels-photo-29644514/free-photo-of-aerial-view-of-mirissa-beach-in-sri-lanka.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { name: 'Mount Lavania', location: 'Colombo, Sri Lanka', image: 'https://scontent.fcmb2-2.fna.fbcdn.net/v/t1.6435-9/106776251_4061330853937319_6931697622786231430_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH5z-l_pNdcXiKYYxpAwUxwqsiqeFcP6gyqyKp4Vw_qDNMFdxwGzUEIlH4yivJm9XQ88W9Z56vBP9xg6HtQM4I5&_nc_ohc=XjmAgTwyAcwQ7kNvwHQ_sdU&_nc_oc=AdmNiFwHSfHJsIktBjpcWTFmAxSBL0Sd3mGPaqLy6HGAxXdZ8jNNU_hgMsJQMWV1cJk&_nc_zt=23&_nc_ht=scontent.fcmb2-2.fna&_nc_gid=lUqCUMVYtKBx895wDQTTrQ&oh=00_AfNlEjRIYMhKgAL2YKvWOrdUzXq-dDVOsonXG3Illz8oMw&oe=6868CE5F' },
  { name: 'Arugambay', location: 'Ampara, Srilanka', image: 'https://i.pinimg.com/736x/f5/54/a3/f554a3f00519ca75a16e14ca14248a01.jpg' },
  { name: 'Niaveli', location: 'Trincomalee, Sri Lanka', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80' }
];

const DestinationsSection = () => (
  <section className="text-center p-8">
    <h3 className="text-2xl font-bold mb-4 text-gray-800">20+ Destinations In Sri Lanka</h3>
    <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-2 rounded font-semibold shadow mb-6">Explore Destinations</button>
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.15 }
        }
      }}
    >
      {destinations.map((destination, i) => (
        <motion.div
          className="bg-white p-4 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer group"
          key={destination.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(59,130,246,0.15)" }}
        >
          <img src={destination.image} alt={destination.name} className="w-full h-40 object-cover rounded-lg group-hover:shadow-xl transition" />
          <h4 className="mt-4 font-bold text-lg text-blue-700">{destination.name}</h4>
          <p className="text-gray-600">{destination.location}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default DestinationsSection;