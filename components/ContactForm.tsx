'use client';

import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ name, email, message });
  };

  return (
    <form onSubmit={handleSubmit} className="p-fluid">
      <div className="p-field mb-4">
        <label htmlFor="name" className="block text-text-secondary font-bold mb-2">Nom</label>
        <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="p-field mb-4">
        <label htmlFor="email" className="block text-text-secondary font-bold mb-2">Email</label>
        <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="p-field mb-4">
        <label htmlFor="message" className="block text-text-secondary font-bold mb-2">Message</label>
        <InputTextarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} />
      </div>
      <Button type="submit" label="Envoyer le message" />
    </form>
  );
};

export default ContactForm;
