import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  return (
    <form>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      </form> 
  );
}