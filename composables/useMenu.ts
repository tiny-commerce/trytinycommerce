export default function useMenu() {
  return {
    loginLink: null,
    signupLink: null,
    headerNavigation: [
      { label: 'Features', to: '/features' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'FAQ', to: '/faq' },
      { label: "Blog", to: "/blog" },
    ],
    mobileNavigation: [
      { label: "Home", to: "/" },
      { label: 'Features', to: '/features' },
      { label: "Pricing", to: "/pricing" },
      { label: "FAQ", to: "/faq" },
      { label: "Blog", to: "/blog" },
    ],
    footerNavigation: [
      { label: "Home", to: "/" },
      { label: 'Features', to: '/features' },
      { label: "Pricing", to: "/pricing" },
      { label: "FAQ", to: "/faq" },
      { label: "Blog", to: "/blog" },
      { label: "Contact", to: "/contact" },
    ]
  }
}
