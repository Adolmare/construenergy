import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Reemplaza con tus IDs reales de EmailJS
    const SERVICE_ID = 'TU_SERVICE_ID';
    const TEMPLATE_ID = 'TU_TEMPLATE_ID';
    const PUBLIC_KEY = 'TU_PUBLIC_KEY';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          alert('¡Mensaje enviado con éxito!');
          form.current.reset();
      }, (error) => {
          alert('Error al enviar: ' + error.text);
      });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      {/* ... (encabezados e información de contacto) ... */}
      
      <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
        {/* Agregamos la referencia 'ref' y el manejador 'onSubmit' */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
            <input name="user_name" type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3 border" placeholder="Su nombre" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input name="user_email" type="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3 border" placeholder="correo@empresa.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Servicio de Interés</label>
            <select name="service" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3 border">
              <option>Obra Civil</option>
              <option>Electricidad</option>
              <option>Refrigeración</option>
              <option>Metalmecánica</option>
              <option>Electromecánica</option>
              <option>Otro</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea name="message" rows="4" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3 border" placeholder="Detalles de su proyecto..."></textarea>
          </div>
          <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;