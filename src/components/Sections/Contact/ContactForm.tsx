import emailjs from 'emailjs-com';
import {FC, memo, useCallback, useMemo, useState} from 'react';
import {Circles} from 'react-loader-spinner';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [loading, setLoading] = useState<boolean>(false);
  const [emailSent, setEmailSent] = useState<boolean>(false);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;
      const fieldData: Partial<FormData> = {[name]: value};
      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();
      setLoading(true);

      try {
        const result = await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
          {
            name: data.name,
            email: data.email,
            message: data.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ''
        );

        console.log('Email sent:', result.text);
        setEmailSent(true);  // Show the success message
      } catch (error) {
        console.error('Error sending email:', error);
      } finally {
        setLoading(false);  // Stop the spinner
      }
    },
    [data],
  );

  const handleResetForm = () => {
    setEmailSent(false);
    setData(defaultData);  // Reset form data
  };

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <div>
      {emailSent ? (
        <div className="flex flex-col items-center">
          <p>Email sent! Would you like to send another?</p>
          <button
            className="mt-4 rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
            onClick={handleResetForm}
          >
            Send Another
          </button>
        </div>
      ) : (
        <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
          <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" value={data.name} />
          <input
            autoComplete="email"
            className={inputClasses}
            name="email"
            onChange={onChange}
            placeholder="Email"
            required
            type="email"
            value={data.email}
          />
          <textarea
            className={inputClasses}
            maxLength={250}
            name="message"
            onChange={onChange}
            placeholder="Message"
            required
            rows={6}
            value={data.message}
          />
          <button
            aria-label="Submit contact form"
            className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
            disabled={loading}
            type="submit"
          >
            {loading ? (
              <Circles
                ariaLabel="loading"
                color="#ffffff"
                height="24"
                width="24"
              />
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      )}
    </div>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;