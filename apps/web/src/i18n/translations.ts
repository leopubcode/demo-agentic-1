export const LANGUAGES = ["en", "es"] as const;
export type Language = (typeof LANGUAGES)[number];

export const LANGUAGE_NAMES: Record<Language, string> = {
  en: "English",
  es: "Español",
};

const en = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.upload": "Upload",
  "nav.signIn": "Sign in",
  "nav.signUp": "Sign up",
  "nav.signOut": "Sign out",
  "nav.language": "Language",

  "home.title": "Home",
  "home.body":
    "Welcome to the home page. This is a sample page using React Router.",

  "about.title": "About",
  "about.body":
    "This is the about page. You can add more sample pages and routes as needed.",

  "account.title": "Account",
  "account.name": "Name",
  "account.email": "Email",

  "auth.email": "Email",
  "auth.password": "Password",
  "auth.name": "Name",
  "auth.genericError": "Something went wrong. Please try again.",

  "signIn.title": "Sign in",
  "signIn.verified": "Your email is verified. Sign in below.",
  "signIn.submit": "Sign in",
  "signIn.noAccount": "No account?",
  "signIn.signUpLink": "Sign up",

  "signUp.title": "Sign up",
  "signUp.submit": "Sign up",
  "signUp.haveAccount": "Already have an account?",
  "signUp.signInLink": "Sign in",

  "verify.title": "Verify your email",
  "verify.emailed":
    "We emailed you a link. Follow it to verify your email, then sign in.",
  "verify.resent": "If {email} still needs verifying, we sent it a new link.",
  "verify.submit": "Send a new link",
  "verify.alreadyVerified": "Already verified?",
  "verify.signInLink": "Sign in",

  "upload.title": "Upload an image",
  "upload.submit": "Upload",
  "upload.uploading": "Uploading…",
  "upload.selectedAlt": "Selected image",
  "upload.failed": "Upload failed ({status})",
  "upload.uploadedAs": "Uploaded as",
  "upload.listTitle": "Uploaded images",
  "upload.loading": "Loading…",
  "upload.empty": "No images uploaded yet.",
} as const;

export type TranslationKey = keyof typeof en;

const es: Record<TranslationKey, string> = {
  "nav.home": "Inicio",
  "nav.about": "Acerca de",
  "nav.upload": "Subir",
  "nav.signIn": "Iniciar sesión",
  "nav.signUp": "Registrarse",
  "nav.signOut": "Cerrar sesión",
  "nav.language": "Idioma",

  "home.title": "Inicio",
  "home.body":
    "Te damos la bienvenida a la página de inicio. Esta es una página de ejemplo con React Router.",

  "about.title": "Acerca de",
  "about.body":
    "Esta es la página acerca de. Puedes añadir más páginas y rutas de ejemplo según lo necesites.",

  "account.title": "Cuenta",
  "account.name": "Nombre",
  "account.email": "Correo electrónico",

  "auth.email": "Correo electrónico",
  "auth.password": "Contraseña",
  "auth.name": "Nombre",
  "auth.genericError": "Algo salió mal. Inténtalo de nuevo.",

  "signIn.title": "Iniciar sesión",
  "signIn.verified": "Tu correo está verificado. Inicia sesión abajo.",
  "signIn.submit": "Iniciar sesión",
  "signIn.noAccount": "¿No tienes cuenta?",
  "signIn.signUpLink": "Regístrate",

  "signUp.title": "Registrarse",
  "signUp.submit": "Registrarse",
  "signUp.haveAccount": "¿Ya tienes una cuenta?",
  "signUp.signInLink": "Inicia sesión",

  "verify.title": "Verifica tu correo",
  "verify.emailed":
    "Te enviamos un enlace por correo. Síguelo para verificar tu correo y luego inicia sesión.",
  "verify.resent":
    "Si {email} aún necesita verificación, le enviamos un nuevo enlace.",
  "verify.submit": "Enviar un nuevo enlace",
  "verify.alreadyVerified": "¿Ya verificaste?",
  "verify.signInLink": "Inicia sesión",

  "upload.title": "Subir una imagen",
  "upload.submit": "Subir",
  "upload.uploading": "Subiendo…",
  "upload.selectedAlt": "Imagen seleccionada",
  "upload.failed": "Error al subir ({status})",
  "upload.uploadedAs": "Subida como",
  "upload.listTitle": "Imágenes subidas",
  "upload.loading": "Cargando…",
  "upload.empty": "Aún no se han subido imágenes.",
};

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en,
  es,
};

export type TranslateParams = Record<string, string | number>;

export function translate(
  language: Language,
  key: TranslationKey,
  params?: TranslateParams,
): string {
  const template = translations[language][key];
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in params ? String(params[name]) : match,
  );
}
