export const LANGUAGES = ["en", "es", "fr"] as const;
export type Language = (typeof LANGUAGES)[number];

export const LANGUAGE_NAMES: Record<Language, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
};

const en = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.upload": "Upload",
  "nav.signIn": "Sign in",
  "nav.signUp": "Sign up",
  "nav.signOut": "Sign out",
  "nav.language": "Language",

  "home.title": "Leafy",
  "home.tagline": "~*~ Keep your houseplants happy, without the guesswork! ~*~",
  "home.getStarted": "Get started",
  "home.learnMore": "Learn more",
  "home.feature.water.title": "Water reminders",
  "home.feature.water.body":
    "Know exactly when each plant is thirsty, based on its species and your home.",
  "home.feature.photo.title": "Photo journal",
  "home.feature.photo.body":
    "Upload a photo every week and watch your plants grow over time.",
  "home.feature.light.title": "Light matching",
  "home.feature.light.body":
    "Tell us where you bought the window and we will take care of the rest.",
  "home.visitor": "You are visitor number",

  "contact.title": "Contact",
  "contact.email": "Email us at",
  "contact.phone": "Call us at",

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
  "nav.contact": "Contacto",
  "nav.upload": "Subir",
  "nav.signIn": "Iniciar sesión",
  "nav.signUp": "Registrarse",
  "nav.signOut": "Cerrar sesión",
  "nav.language": "Idioma",

  "home.title": "Leafy",
  "home.tagline":
    "~*~ ¡Mantén tus plantas de interior felices, sin adivinar! ~*~",
  "home.getStarted": "Empezar",
  "home.learnMore": "Más información",
  "home.feature.water.title": "Recordatorios de riego",
  "home.feature.water.body":
    "Sabe exactamente cuándo cada planta tiene sed, según su especie y tu hogar.",
  "home.feature.photo.title": "Diario de fotos",
  "home.feature.photo.body":
    "Sube una foto cada semana y mira crecer tus plantas con el tiempo.",
  "home.feature.light.title": "Luz ideal",
  "home.feature.light.body":
    "Dinos dónde compraste la ventana y nosotros nos encargamos del resto.",
  "home.visitor": "Eres el visitante número",

  "contact.title": "Contacto",
  "contact.email": "Escríbenos a",
  "contact.phone": "Llámanos al",

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

const fr: Record<TranslationKey, string> = {
  "nav.home": "Accueil",
  "nav.about": "À propos",
  "nav.contact": "Contact",
  "nav.upload": "Téléverser",
  "nav.signIn": "Se connecter",
  "nav.signUp": "S’inscrire",
  "nav.signOut": "Se déconnecter",
  "nav.language": "Langue",

  "home.title": "Leafy",
  "home.tagline":
    "~*~ Gardez vos plantes d’intérieur heureuses, sans deviner ! ~*~",
  "home.getStarted": "Commencer",
  "home.learnMore": "En savoir plus",
  "home.feature.water.title": "Rappels d’arrosage",
  "home.feature.water.body":
    "Sachez exactement quand chaque plante a soif, selon son espèce et votre intérieur.",
  "home.feature.photo.title": "Journal photo",
  "home.feature.photo.body":
    "Ajoutez une photo chaque semaine et regardez vos plantes grandir au fil du temps.",
  "home.feature.light.title": "Lumière idéale",
  "home.feature.light.body":
    "Dites-nous où vous avez acheté la fenêtre et nous nous occupons du reste.",
  "home.visitor": "Vous êtes le visiteur numéro",

  "contact.title": "Contact",
  "contact.email": "Écrivez-nous à",
  "contact.phone": "Appelez-nous au",

  "about.title": "À propos",
  "about.body":
    "Ceci est la page à propos. Vous pouvez ajouter d’autres pages et routes d’exemple selon vos besoins.",

  "account.title": "Compte",
  "account.name": "Nom",
  "account.email": "E-mail",

  "auth.email": "E-mail",
  "auth.password": "Mot de passe",
  "auth.name": "Nom",
  "auth.genericError": "Une erreur s’est produite. Veuillez réessayer.",

  "signIn.title": "Se connecter",
  "signIn.verified": "Votre e-mail est vérifié. Connectez-vous ci-dessous.",
  "signIn.submit": "Se connecter",
  "signIn.noAccount": "Pas de compte ?",
  "signIn.signUpLink": "Inscrivez-vous",

  "signUp.title": "S’inscrire",
  "signUp.submit": "S’inscrire",
  "signUp.haveAccount": "Vous avez déjà un compte ?",
  "signUp.signInLink": "Connectez-vous",

  "verify.title": "Vérifiez votre e-mail",
  "verify.emailed":
    "Nous vous avons envoyé un lien par e-mail. Suivez-le pour vérifier votre e-mail, puis connectez-vous.",
  "verify.resent":
    "Si {email} doit encore être vérifié, nous lui avons envoyé un nouveau lien.",
  "verify.submit": "Envoyer un nouveau lien",
  "verify.alreadyVerified": "Déjà vérifié ?",
  "verify.signInLink": "Connectez-vous",

  "upload.title": "Téléverser une image",
  "upload.submit": "Téléverser",
  "upload.uploading": "Téléversement…",
  "upload.selectedAlt": "Image sélectionnée",
  "upload.failed": "Échec du téléversement ({status})",
  "upload.uploadedAs": "Téléversée sous le nom",
  "upload.listTitle": "Images téléversées",
  "upload.loading": "Chargement…",
  "upload.empty": "Aucune image téléversée pour l’instant.",
};

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en,
  es,
  fr,
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
