"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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

  if (status === "success") {
    return (
      <div className="contact-form-wrapper" dir="rtl">
        <div className="success-message">
          <svg className="w-16 h-16 text-teal-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-bold text-gray-800 mb-2">תודה!</h3>
          <p className="text-gray-600">ההודעה נשלחה בהצלחה. נחזור אליכם בהקדם.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-teal-600 hover:text-teal-700 font-medium"
          >
            שליחת הודעה נוספת
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form-wrapper" dir="rtl">
      <div className="form-row">
        <input
          type="text"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          required
          placeholder="שם מלא"
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
        >
          {status === "loading" ? "שולח..." : "שליחה"}
        </button>
      </div>
      {status === "error" && (
        <p className="error-message">אירעה שגיאה. נסו שוב מאוחר יותר.</p>
      )}

      <style jsx>{`
        .contact-form-wrapper {
          max-width: 65%;
          margin: 48px auto 0;
          padding: 40px 48px;
          background: white;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }
        .form-row {
          display: flex;
          gap: 12px;
          align-items: stretch;
        }
        .form-input {
          flex: 1;
          height: 52px;
          padding: 0 20px;
          font-size: 16px;
          font-family: "Heebo", -apple-system, BlinkMacSystemFont, sans-serif;
          border: 1px solid #d1d5db;
          border-radius: 50px;
          background: #f9fafb;
          color: #1f2937;
          transition: all 0.2s ease;
          box-sizing: border-box;
          text-align: right;
        }
        .form-input::placeholder {
          color: #9ca3af;
        }
        .form-input:focus {
          outline: none;
          border-color: #0d9488;
          box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.15);
          background: #fff;
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
          color: #ef4444;
          font-size: 14px;
        }
        .success-message {
          text-align: center;
          padding: 40px 20px;
        }
        @media (max-width: 768px) {
          .contact-form-wrapper {
            max-width: 90%;
            padding: 28px 24px;
            margin: 32px 16px 0;
            border-radius: 20px;
          }
          .form-row {
            flex-direction: column;
          }
          .form-input {
            height: 52px;
            border-radius: 14px;
          }
          .submit-btn {
            height: 52px;
            width: 100%;
            border-radius: 14px;
            margin-top: 4px;
          }
        }
      `}</style>
    </form>
  );
}
