export const DEFAULT_CONTACT_EMAIL = "Drmoe@happyhealthywealthy.info";
export const DEFAULT_CALENDLY_URL = "https://calendly.com/drmoe-happyhealthywealthy";

export function getContactEmail() {
  return (
    process.env.FORM_RECIPIENT_EMAIL?.trim() ||
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ||
    DEFAULT_CONTACT_EMAIL
  );
}
