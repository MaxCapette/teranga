import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface FormData {
  email: string;
  message: string;
}

const FormContact: React.FC = () => {
  const [state, handleSubmit] = useForm("mpzvelwa");

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email"> Adresse Email</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>

      {state.succeeded && <p>Merci!</p>}
    </form>
  );
};

export default FormContact;