"use client";

import { useState, useRef } from "react";

const trackEvent = (name: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", name, params);
  }
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const firstInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/v1/public/contact-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ full_name: "", email: "", phone: "" });
        trackEvent("lead_submitted", {
          event_category: "contact",
          event_label: "pilot_contact_form",
          value: 1,
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleResetForm = () => {
    setStatus("idle");
    setTimeout(() => {
      firstInputRef.current?.focus();
      const formWrapper = document.querySelector(".contact-form-wrapper");
      formWrapper?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  if (status === "success") {
    return (
      <div className="contact-form-wrapper" dir="rtl" id="pilot-contact">
        <div className="success-message">
          <div className="success-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="success-title">תודה!</h2>
          <p className="success-subtitle">ההודעה נשלחה בהצלחה. נחזור אליכם בהקדם.</p>
          <button onClick={handleResetForm} className="reset-link">
            שליחת הודעה נוספת
          </button>
        </div>

        <style jsx>{`
          .contact-form-wrapper {
            margin-top: 40px;
          }
          .success-message {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px 0;
            text-align: center;
          }
          .success-icon {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            box-shadow: 0 8px 24px rgba(13, 148, 136, 0.35);
          }
          .success-icon svg {
            width: 36px;
            height: 36px;
            color: white;
          }
          .success-title {
            font-size: 32px;
            font-weight: 700;
            color: white;
            margin: 0 0 12px 0;
            font-family: "Heebo", -apple-system, BlinkMacSystemFont, sans-serif;
          }
          .success-subtitle {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.85);
            margin: 0 0 28px 0;
            font-family: "Heebo", -apple-system, BlinkMacSystemFont, sans-serif;
          }
          .reset-link {
            background: none;
            border: none;
            font-size: 16px;
            font-weight: 600;
            color: #5eead4;
            cursor: pointer;
            font-family: "Heebo", -apple-system, BlinkMacSystemFont, sans-serif;
            transition: all 0.2s ease;
            padding: 8px 16px;
            border-radius: 8px;
          }
          .reset-link:hover {
            color: #ffffff;
            background: rgba(255, 255, 255, 0.1);
          }
        `}</style>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form-wrapper" dir="rtl" id="pilot-contact">
      <div className="form-row">
        <input
          ref={firstInputRef}
          type="text"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          required
          placeholder="שם מלא"
          id="pilot-full-name"
          className="form-input"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="אימייל"
          className="form-input"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="טלפון"
          className="form-input"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="submit-btn"
          onClick={() => {
            if (typeof window !== "undefined") {
              (window as unknown as { gtagSendEvent?: (target: string) => void }).gtagSendEvent?.("#thank-you");
            }
          }}
        >
          {status === "loading" ? "שולח..." : "שליחה ←"}
        </button>
      </div>
      {status === "error" && (
        <p className="error-message">אירעה שגיאה. נסו שוב מאוחר יותר.</p>
      )}

      <style jsx>{`
        .contact-form-wrapper {
          margin-top: 40px;
        }
        .form-row {
          display: flex;
          gap: 12px;
          align-items: stretch;
          justify-content: center;
          max-width: 900px;
          margin: 0 auto;
        }
        .form-input {
          flex: 1;
          max-width: 200px;
          height: 52px;
          padding: 0 20px;
          font-size: 16px;
          font-family: "Heebo", -apple-system, BlinkMacSystemFont, sans-serif;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.2s ease;
          box-sizing: border-box;
          text-align: right;
          display: flex;
          align-items: center;
        }
        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        .form-input:focus {
          outline: none;
          border-color: #5eead4;
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 0 3px rgba(94, 234, 212, 0.15);
        }
        .submit-btn {
          height: 52px;
          padding: 0 36px;
          font-size: 17px;
          font-weight: 700;
          font-family: "Heebo", -apple-system, BlinkMacSystemFont, sans-serif;
          background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%);
          color: white;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px rgba(13, 148, 136, 0.25);
          white-space: nowrap;
        }
        .submit-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #0f766e 0%, #0d9488 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(13, 148, 136, 0.35);
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .error-message {
          margin-top: 16px;
          text-align: center;
          color: #fca5a5;
          font-size: 14px;
        }
        @media (max-width: 768px) {
          .contact-form-wrapper {
            padding: 24px 16px;
            margin-top: 32px;
          }
          .form-row {
            flex-direction: column;
            max-width: 100%;
            gap: 12px;
          }
          .form-input {
            max-width: 100%;
            width: 100%;
            min-height: 52px;
            height: auto;
            padding: 12px 16px;
            font-size: 16px;
            border-radius: 14px;
            background: rgba(255, 255, 255, 0.15);
            margin-top: 8px;
          }
          .form-input:first-child {
            margin-top: 0;
          }
          .submit-btn {
            min-height: 52px;
            height: auto;
            width: 100%;
            padding: 14px 24px;
            font-size: 16px;
            border-radius: 14px;
            margin-top: 12px;
          }
        }
      `}</style>
    </form>
  );
}
