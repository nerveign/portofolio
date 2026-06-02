import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

type EmailTemplate = {
  name: string;
  email: string;
  body: string;
};

export const sendEmail = async (message: EmailTemplate) => {
  try {
    await emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        title: 'Contact Form Message',
        name: message.name,
        email: message.email,
        message: message.body,
      },
      {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      },
    );

    console.log({
      serviceId: import.meta.env.VITE_SERVICE_ID,
      templateId: import.meta.env.VITE_TEMPLATE_ID,
      userId: import.meta.env.VITE_USER_ID,
      message: message,
    });
    toast.success('Message sent successfully');
  } catch (error) {
    toast.error('Failed to send message');
    console.error(error);
  }
};
