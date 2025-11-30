import React from "react";

const WHATSAPP_LINK =
  "https://api.whatsapp.com/send?phone=9597927479&text=I%20would%20like%20to%20order%20a%20cookies%20and%20cakes";

export default function WhatsappFloat() {
  return (
    <a
      aria-label="Order via WhatsApp"
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      title="Order via WhatsApp"
      className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 rounded-full transition-transform transform hover:scale-105 active:scale-95 bg-gradient-to-br from-emerald-600/95 via-emerald-500/95 to-emerald-400/95 flex items-center justify-center ring-4 ring-emerald-200/25"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <span className="sr-only">Order via WhatsApp</span>
      {/* WhatsApp SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7 md:w-8 md:h-8 drop-shadow"
        role="img"
        aria-hidden="true"
      >
        <path d="M16.001 3C9.383 3 4 8.383 4 15c0 2.657.83 5.116 2.263 7.16L4 29l6.03-2.198A11.953 11.953 0 0 0 16 27c6.617 0 12-5.383 12-12S22.618 3 16.001 3Zm0 21.6c-1.273 0-2.52-.255-3.684-.74l-.264-.127-3.584 1.307 1.309-3.495-.108-.274A9.495 9.495 0 0 1 6.5 15c0-5.246 4.255-9.5 9.5-9.5S25.5 9.754 25.5 15 21.274 24.6 16.001 24.6ZM22.3 18.8c-.352-.176-2.073-1.02-2.394-1.14-.322-.12-.557-.176-.792.178-.235.354-.91 1.14-1.116 1.37-.206.235-.412.264-.762.088-.352-.176-1.486-.547-2.83-1.75-1.04-.93-1.74-2.08-1.944-2.434-.206-.353-.02-.544.156-.72.16-.16.352-.412.528-.617.176-.206.235-.352.352-.587.118-.235.059-.44-.03-.617-.088-.176-.792-1.912-1.086-2.617-.285-.686-.574-.59-.792-.6l-.675-.013c-.205 0-.54.078-.824.37-.285.294-1.088 1.064-1.088 2.595 0 1.53 1.113 3.01 1.268 3.22.156.206 2.194 3.355 5.318 4.706 1.11.48 1.975.767 2.65.98 1.116.357 2.133.307 2.935.186.896-.14 2.073-.845 2.366-1.664.295-.82.295-1.523.206-1.664-.088-.148-.316-.235-.668-.41Z"/>
      </svg>
    </a>
  );
}
