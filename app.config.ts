export default defineAppConfig({
  businessName: "MakerBiz",
  startYear: "2024",
  loginLink: null,
  signupLink: null,
  navigation: {
    main: [
      { name: "Pricing", href: "/pricing" },
      { name: "Blog", href: "/blog" },
      { name: "About", href: "/about" },
    ],
    all: [
      { name: "Home", href: "/" },
      { name: "Pricing", href: "/pricing" },
      { name: "Blog", href: "/blog" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [{ name: "Privacy Policy", href: "/privacy" }],
  },
});
