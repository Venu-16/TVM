export const siteConfig = {
  name: "TVM PROJECT SUPPORT",
  shortName: "TVM",
  description:
    "Complete B.Tech final year project development support — from idea selection and modern software development to comprehensive documentation, project demo preparation, and viva defense guidance.",
  url: "https://tvmprojectsupport.com",
  instagram: {
    handle: "@tvmprojectsupport",
    url: "https://instagram.com/tvm.project.support",
  },
  contact: {
    email: "venumadhav2216@gmail.com",
  },
  // Dynamic WhatsApp generator: Reads env var if configured, otherwise produces a customizable WhatsApp link
  getWhatsAppUrl: (customMessage?: string) => {
    const configuredUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL;
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;

    const defaultText =
      "Hello TVM Project Support, I would like to discuss guidance and development support for my B.Tech final year project.";
    const textToEncode = customMessage || defaultText;

    if (configuredUrl) {
      // If user passed a full custom URL in env
      return configuredUrl.includes("text=")
        ? configuredUrl
        : `${configuredUrl}?text=${encodeURIComponent(textToEncode)}`;
    }

    if (phone) {
      return `https://wa.link/zd64jn`;
    }

    // Standard wa.me base when phone isn't pre-set in local env
    return `https://wa.link/zd64jn`;
  },
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "Domains", href: "#domains" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Pricing", href: "#pricing" },
   
  ],
};
