"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dmSans } from "../layout";

export default function ContactUs() {

  // 🧠 Handle form submit
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  // ✅ Fix: Store the form reference before any async call
  const form = e.currentTarget;

  const formData = new FormData(form);
  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    projectType: formData.get("projectType"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("/api/sendemail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("Failed to send message");

    toast.success(" Message sent successfully! I’ll get back to you soon.");
    form.reset(); // ✅ Use saved reference — no more null
  } catch (error) {
    console.error("Error submitting form:", error);
    toast.error(" Something went wrong. Please try again later.");
  }
};

  return (
    <div id="contact_us" className={`bg-white text-gray-900 px-4 sm:px-8 md:px-20 py-16 sm:py-20 ${dmSans.className}`}>
      {/* ✅ Header */}
      <div className="text-center space-y-6 mb-16">
        <p className="text-sm sm:text-base md:text-[13px] text-gray-500">Get in Touch</p>
        <h3 className="text-4xl font-semibold text-[#316e72] mb-6">
  Ready to <span className="text-black font-bold">"elevate"</span> your game?
</h3>

        <p className="text-mdv text-gray-500  mx-auto">
          Let’s discuss your project and explore how our AI-powered solutions can accelerate your business growth.
        </p>
      </div>

      {/* ✅ Two-column layout */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 sm:gap-16">
        {/* ✅ LEFT SIDE — CONTACT INFO */}
        <div className="flex flex-col gap-6 md:w-1/2">
          {/* Email */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="group flex items-start gap-5 border-2 border-gray-300 bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:border-[#53b1b8] hover:bg-[#f0fafa] transition-all duration-300"
          >
            <div className="bg-[#53b1b8]/10 p-1 rounded-full group-hover:bg-[#53b1b8] transition-colors duration-300">
              <Mail className="w-7 h-7 text-[#53b1b8] group-hover:text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-[#053b44] text-lg group-hover:text-[#53b1b8]">Email Us</h4>
              <p className="text-gray-700 font-medium text-[15px]">Contact@Leapsdev.com</p>
            </div>
          </motion.div>

          {/* Call */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="group flex items-start gap-5 border-2 border-gray-300 bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:border-[#53b1b8] hover:bg-[#f0fafa] transition-all duration-300"
          >
            <div className="bg-[#53b1b8]/10 p-1 rounded-full group-hover:bg-[#53b1b8] transition-colors duration-300">
              <Phone className="w-7 h-7 text-[#53b1b8] group-hover:text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-[#053b44] text-lg group-hover:text-[#53b1b8]">Call Us</h4>
              <p className="text-gray-700 font-medium text-[15px]">+44 (078) 8611-6711</p>
            </div>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="group flex items-start gap-5 border-2 border-gray-300 bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:border-[#53b1b8] hover:bg-[#f0fafa] transition-all duration-300"
          >
            <div className="bg-[#53b1b8]/10 p-1 rounded-full group-hover:bg-[#53b1b8] transition-colors duration-300">
              <MessageCircle className="w-7 h-7 text-[#53b1b8] group-hover:text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-[#053b44] text-lg group-hover:text-[#53b1b8]">WhatsApp</h4>
              <p className="text-gray-700 font-medium text-[15px]">+92 (327) 1080-439</p>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="group flex items-start gap-5 border-2 border-gray-300 bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:border-[#53b1b8] hover:bg-[#f0fafa] transition-all duration-300"
          >
            <div className="bg-[#53b1b8]/10 p-2 rounded-full group-hover:bg-[#53b1b8] transition-colors duration-300">
              <Clock className="w-7 h-7 text-[#53b1b8] group-hover:text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-[#053b44] text-lg group-hover:text-[#53b1b8]">Business Hours</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>
                  <span className="font-semibold text-[#053b44]">Monday – Friday:</span> 9:00 AM – 6:00 PM EST
                </li>
                <li>
                  <span className="font-semibold text-[#053b44]">Saturday:</span> 10:00 AM – 4:00 PM EST
                </li>
                <li>
                  <span className="font-semibold text-[#053b44]">Sunday:</span> Emergency Support Only
                </li>
              </ul>
            </div>
          </motion.div>

          {/* CTA CARD */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="group flex flex-col items-center text-center bg-gradient-to-r from-[#0ba5ec]/10 via-[#53b1b8]/10 to-[#053b44]/10 
                       border border-[#53b1b8]/30 rounded-2xl p-8 shadow-md hover:shadow-2xl 
                       hover:border-[#53b1b8] hover:bg-[#f0fafa] transition-all duration-500 backdrop-blur-md"
          >
           
            <p className="text-gray-700 font-medium mb-2 group-hover:text-[#053b44]">Need Immediate Assistance?</p>
            <p className="text-gray-600 mb-5 leading-relaxed group-hover:text-gray-700">
              Schedule a free 30-minute consultation with our AI and development experts.
            </p>

            <Link
              href="#"
              className="relative inline-flex items-center justify-center px-8 py-3 text-white font-semibold rounded-xl 
                         bg-gradient-to-r from-[#0ba5ec] via-[#53b1b8] to-[#053b44] 
                         bg-[length:200%_200%] animate-gradient-flow
                         shadow-[0_0_15px_rgba(83,177,184,0.5)]
                         hover:shadow-[0_0_30px_rgba(83,177,184,0.8)]
                         hover:scale-[1.05] transition-all duration-500 ease-out overflow-hidden"
            >
              <span className="relative z-10">Schedule Call</span>
              <span className="absolute inset-0 rounded-xl border border-white/20"></span>
              <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#53b1b8]/20 to-[#0ba5ec]/20 blur-md transition-opacity duration-500"></span>
            </Link>
          </motion.div>
        </div>

        {/* ✅ RIGHT SIDE — FORM */}
     <motion.form
  onSubmit={handleSubmit}
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="md:w-1/2 w-full space-y-6 sm:space-y-8"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input
      type="text"
      name="firstName"
      placeholder="First Name *"
      required
      className="w-full px-4 py-3 border-b border-gray-300 focus:border-[#53b1b8] focus:ring-0 outline-none text-gray-800"
    />
    <input
      type="text"
      name="lastName"
      placeholder="Last Name *"
      required
      className="w-full px-4 py-3 border-b border-gray-300 focus:border-[#53b1b8] focus:ring-0 outline-none text-gray-800"
    />

  </div>

  <input
    type="email"
    name="email"
    placeholder="Email Address *"
    required
    className="w-full px-4 py-3 border-b border-gray-300 focus:border-[#53b1b8] focus:ring-0 outline-none text-gray-800"
  />

  <input
    type="text"
    name="phone"
    placeholder="Phone Number *"
    required
    className="w-full px-4 py-3 border-b border-gray-300 focus:border-[#53b1b8] focus:ring-0 outline-none text-gray-800"
  />


  <input
    type="text"
    name="company"
    placeholder="Company Name (If Any)"
    className="w-full px-4 py-3 border-b border-gray-300 focus:border-[#53b1b8] focus:ring-0 outline-none text-gray-800"
  />

  <select
    name="projectType"
    required
    className="w-full px-4 py-3 border-b border-gray-300 focus:border-[#53b1b8] focus:ring-0 outline-none text-gray-800 bg-transparent"
  >
    <option value="">Project Type *</option>
    <option>AI Automation</option>
    <option>Web Development</option>
    <option>Mobile App</option>
    <option>Custom Software</option>
  </select>

  <textarea
    name="message"
    rows={4}
    placeholder="Tell us about your project goals and timeline..."
    required
    className="w-full px-4 py-3 border-b border-gray-300 focus:border-[#53b1b8] focus:ring-0 outline-none text-gray-800 resize-none"
  ></textarea>

 <button
    type="submit"
    className="relative inline-flex items-center justify-center px-8 py-3 text-white font-semibold rounded-xl 
                         bg-gradient-to-r from-[#0ba5ec] via-[#53b1b8] to-[#053b44] 
                         bg-[length:200%_200%] animate-gradient-flow
                         shadow-[0_0_15px_rgba(83,177,184,0.5)]
                         hover:shadow-[0_0_30px_rgba(83,177,184,0.8)]
                         hover:scale-[1.05] transition-all duration-500 ease-out overflow-hidden"
            >
              <span className="relative z-10">Submit</span>
              <span className="absolute inset-0 rounded-xl border border-white/20"></span>
              <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#53b1b8]/20 to-[#0ba5ec]/20 blur-md transition-opacity duration-500"></span>
  </button>

</motion.form>

{/* ✅ Toastify container to show popups */}
<ToastContainer position="top-right" autoClose={5000} hideProgressBar />


      </div>
    </div>
  );
}











// "use client";

// import { motion } from "framer-motion";
// import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
// import Link from "next/link";

// export default function ContactUs() {
//   return (
//     <div id="contact_us" className="bg-white text-gray-900 px-6 md:px-20 py-20">
//       {/* ✅ Header */}
//       <div className="text-center space-y-6 mb-16">
//         <p>Get in Touch</p>
//         <h3 className="text-4xl text-[#316e72] mb-6">
//   Ready to <span className="text-black font-bold">elevate</span> your game?
// </h3>

//         <p className="text-mdv text-gray-500  mx-auto">
//           Let’s discuss your project and explore how our AI-powered solutions can accelerate your business growth.
//         </p>
//       </div>

//       {/* ✅ Two-column layout */}
//       <div className="min-h-screen flex flex-col md:flex-row items-start justify-center gap-16">
//         {/* ✅ LEFT SIDE — CONTACT INFO */}
//         <div className="flex flex-col gap-6 md:w-1/2">
//           {/* Email */}
//           <motion.div
//             whileHover={{ y: -5 }}
//             transition={{ type: "spring", stiffness: 300, damping: 15 }}
//             className="group flex items-start gap-5 border-2 border-gray-300 bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:border-[#53b1b8] hover:bg-[#f0fafa] transition-all duration-300"
//           >
//             <div className="bg-[#53b1b8]/10 p-5 rounded-full group-hover:bg-[#53b1b8] transition-colors duration-300">
//               <Mail className="w-7 h-7 text-[#53b1b8] group-hover:text-white" />
//             </div>
//             <div>
//               <h4 className="font-semibold text-[#053b44] text-lg group-hover:text-[#53b1b8]">Email Us</h4>
//               <p className="text-gray-700 font-medium text-[15px]">Contact@Leapsdev.com</p>
//             </div>
//           </motion.div>

//           {/* Call */}
//           <motion.div
//             whileHover={{ y: -5 }}
//             transition={{ type: "spring", stiffness: 300, damping: 15 }}
//             className="group flex items-start gap-5 border-2 border-gray-300 bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:border-[#53b1b8] hover:bg-[#f0fafa] transition-all duration-300"
//           >
//             <div className="bg-[#53b1b8]/10 p-5 rounded-full group-hover:bg-[#53b1b8] transition-colors duration-300">
//               <Phone className="w-7 h-7 text-[#53b1b8] group-hover:text-white" />
//             </div>
//             <div>
//               <h4 className="font-semibold text-[#053b44] text-lg group-hover:text-[#53b1b8]">Call Us</h4>
//               <p className="text-gray-700 font-medium text-[15px]">+44 (078) 8611-6711</p>
//             </div>
//           </motion.div>

//           {/* WhatsApp */}
//           <motion.div
//             whileHover={{ y: -5 }}
//             transition={{ type: "spring", stiffness: 300, damping: 15 }}
//             className="group flex items-start gap-5 border-2 border-gray-300 bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:border-[#53b1b8] hover:bg-[#f0fafa] transition-all duration-300"
//           >
//             <div className="bg-[#53b1b8]/10 p-5 rounded-full group-hover:bg-[#53b1b8] transition-colors duration-300">
//               <MessageCircle className="w-7 h-7 text-[#53b1b8] group-hover:text-white" />
//             </div>
//             <div>
//               <h4 className="font-semibold text-[#053b44] text-lg group-hover:text-[#53b1b8]">WhatsApp</h4>
//               <p className="text-gray-700 font-medium text-[15px]">+92 (327) 1080-439</p>
//             </div>
//           </motion.div>

//           {/* Business Hours */}
//           <motion.div
//             whileHover={{ y: -5 }}
//             transition={{ type: "spring", stiffness: 300, damping: 15 }}
//             className="group flex items-start gap-5 border-2 border-gray-300 bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:border-[#53b1b8] hover:bg-[#f0fafa] transition-all duration-300"
//           >
//             <div className="bg-[#53b1b8]/10 p-5 rounded-full group-hover:bg-[#53b1b8] transition-colors duration-300">
//               <Clock className="w-7 h-7 text-[#53b1b8] group-hover:text-white" />
//             </div>
//             <div>
//               <h4 className="font-semibold text-[#053b44] text-lg group-hover:text-[#53b1b8]">Business Hours</h4>
//               <ul className="list-disc list-inside space-y-1 text-gray-700">
//                 <li>
//                   <span className="font-semibold text-[#053b44]">Monday – Friday:</span> 9:00 AM – 6:00 PM EST
//                 </li>
//                 <li>
//                   <span className="font-semibold text-[#053b44]">Saturday:</span> 10:00 AM – 4:00 PM EST
//                 </li>
//                 <li>
//                   <span className="font-semibold text-[#053b44]">Sunday:</span> Emergency Support Only
//                 </li>
//               </ul>
//             </div>
//           </motion.div>

//           {/* CTA CARD */}
//           <motion.div
//             whileHover={{ y: -5 }}
//             transition={{ type: "spring", stiffness: 300, damping: 15 }}
//             className="group flex flex-col items-center text-center bg-gradient-to-r from-[#0ba5ec]/10 via-[#53b1b8]/10 to-[#053b44]/10 
//                        border border-[#53b1b8]/30 rounded-2xl p-8 shadow-md hover:shadow-2xl 
//                        hover:border-[#53b1b8] hover:bg-[#f0fafa] transition-all duration-500 backdrop-blur-md"
//           >
           
//             <p className="text-gray-700 font-medium mb-2 group-hover:text-[#053b44]">Need Immediate Assistance?</p>
//             <p className="text-gray-600 mb-5 leading-relaxed group-hover:text-gray-700">
//               Schedule a free 30-minute consultation with our AI and development experts.
//             </p>

//             <Link
//               href="#"
//               className="relative inline-flex items-center justify-center px-8 py-3 text-white font-semibold rounded-xl 
//                          bg-gradient-to-r from-[#0ba5ec] via-[#53b1b8] to-[#053b44] 
//                          bg-[length:200%_200%] animate-gradient-flow
//                          shadow-[0_0_15px_rgba(83,177,184,0.5)]
//                          hover:shadow-[0_0_30px_rgba(83,177,184,0.8)]
//                          hover:scale-[1.05] transition-all duration-500 ease-out overflow-hidden"
//             >
//               <span className="relative z-10">Schedule Call</span>
//               <span className="absolute inset-0 rounded-xl border border-white/20"></span>
//               <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#53b1b8]/20 to-[#0ba5ec]/20 blur-md transition-opacity duration-500"></span>
//             </Link>
//           </motion.div>
//         </div>

//         {/* ✅ RIGHT SIDE — FORM */}
//      <motion.form
//   initial={{ opacity: 0, x: 50 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.8 }}
//   viewport={{ once: true }}
//   className="md:w-1/2 w-full space-y-6"
// >
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     <input
//       type="text"
//       placeholder="First Name *"
//       className="w-full px-4 py-3 border-b border-gray-300 focus:border-[#53b1b8] focus:ring-0 outline-none text-gray-800"
//     />
//     <input
//       type="text"
//       placeholder="Last Name *"
//       className="w-full px-4 py-3 border-b border-gray-300 focus:border-[#53b1b8] focus:ring-0 outline-none text-gray-800"
//     />
//   </div>

//   <input
//     type="email"
//     placeholder="Email Address *"
//     className="w-full px-4 py-3 border-b border-gray-300 focus:border-[#53b1b8] focus:ring-0 outline-none text-gray-800"
//   />

//   <input
//     type="text"
//     placeholder="Phone Number *"
//     className="w-full px-4 py-3 border-b border-gray-300 focus:border-[#53b1b8] focus:ring-0 outline-none text-gray-800"
//   />

//   <input
//     type="text"
//     placeholder="Company Name (If Any)"
//     className="w-full px-4 py-3 border-b border-gray-300 focus:border-[#53b1b8] focus:ring-0 outline-none text-gray-800"
//   />

//   <select
//     className="w-full px-4 py-3 border-b border-gray-300 focus:border-[#53b1b8] focus:ring-0 outline-none text-gray-800 bg-transparent"
//   >
//     <option value="">Project Type *</option>
//     <option>AI Automation</option>
//     <option>Web Development</option>
//     <option>Mobile App</option>
//     <option>Custom Software</option>
//   </select>

//   <textarea
//     rows={4}
//     placeholder="Tell us about your project goals and timeline..."
//     className="w-full px-4 py-3 border-b border-gray-300 focus:border-[#53b1b8] focus:ring-0 outline-none text-gray-800 resize-none"
//   ></textarea>

//  <button
//   type="submit"
//   className="px-8 py-2.5 bg-[#53b1b8] text-white font-semibold rounded-lg hover:bg-[#053b44] transition-all duration-300"
// >
//   Submit
// </button>

// </motion.form>


//       </div>
//     </div>
//   );
// }
