export type Lang = 'en' | 'es';

export const translations: Record<string, Record<Lang, string>> = {
  // ── Header ──
  'header.features': { en: 'Features', es: 'Funciones' },
  'header.pricing': { en: 'Pricing', es: 'Precios' },
  'header.cta': { en: 'Meet Your AI Workforce', es: 'Conoce a Tu Equipo IA' },

  // ── Hero ──
  'hero.badge': { en: 'Set up in 60 seconds. No tech skills needed.', es: 'Configura en 60 segundos. Sin habilidades técnicas.' },
  'hero.h1.line1': { en: 'Finally Get To Inbox Zero.', es: 'Por Fin Llega a Inbox Zero.' },
  'hero.h1.line2': { en: 'Without Spending Hours On It.', es: 'Sin Pasar Horas en Ello.' },
  'hero.sub': {
    en: 'Your AI workforce handles your email, writes your social posts in your voice, and never forgets an important detail. Set up in 60 seconds.',
    es: 'Tu equipo IA maneja tu email, escribe tus publicaciones sociales con tu voz y nunca olvida un detalle importante. Configura en 60 segundos.'
  },
  'hero.cta': { en: 'Meet Your AI Workforce', es: 'Conoce a Tu Equipo IA' },
  'hero.social': { en: '50,000+ people already reclaiming their time', es: '50,000+ personas ya recuperando su tiempo' },
  'hero.benefit1': { en: 'Clean inbox every morning', es: 'Bandeja limpia cada mañana' },
  'hero.benefit2': { en: 'Social posts in your voice', es: 'Publicaciones sociales con tu voz' },
  'hero.benefit3': { en: 'Never forget a thing', es: 'Nunca olvides nada' },
  'hero.benefit4': { en: 'Works while you sleep', es: 'Trabaja mientras duermes' },

  // ── Model Tiers ──
  'models.h2': { en: 'PICK YOUR LEVEL OF FREEDOM.', es: 'ELIGE TU NIVEL DE LIBERTAD.' },
  'models.sub': {
    en: 'Every plan gives you back hours of your day. The only question is how much of your life you want handled.',
    es: 'Cada plan te devuelve horas de tu día. La única pregunta es cuánto de tu vida quieres que se maneje.'
  },
  'models.popular': { en: 'Most Popular', es: 'Más Popular' },

  // Claw ($29/mo) — The Daily Helper
  'models.claw.badge': { en: 'The Daily Helper', es: 'La Ayuda Diaria' },
  'models.claw.title': { en: 'Claw', es: 'Claw' },
  'models.claw.price': { en: '$29', es: '$29' },
  'models.claw.period': { en: '/month', es: '/mes' },
  'models.claw.desc': {
    en: 'One email, one social platform. Finally get your inbox under control and stop stressing about what to post.',
    es: 'Un email, una red social. Por fin controla tu bandeja y deja de estresarte por qué publicar.'
  },
  'models.claw.f1': { en: 'Wake up to a clean inbox', es: 'Despierta con una bandeja limpia' },
  'models.claw.f2': { en: 'Social posts written and scheduled for you', es: 'Publicaciones sociales escritas y programadas para ti' },
  'models.claw.f3': { en: 'Important reminders so you never drop the ball', es: 'Recordatorios importantes para que nunca falles' },
  'models.claw.f4': { en: 'Set up in 60 seconds, works immediately', es: 'Configura en 60 segundos, funciona de inmediato' },

  // Daddy ($59/mo) — The Personal Assistant
  'models.daddy.badge': { en: 'The Personal Assistant', es: 'El Asistente Personal' },
  'models.daddy.title': { en: 'Daddy', es: 'Daddy' },
  'models.daddy.price': { en: '$59', es: '$59' },
  'models.daddy.period': { en: '/month', es: '/mes' },
  'models.daddy.desc': {
    en: 'Three emails, three social platforms. Your digital workforce, in your pocket. Like having a personal assistant without the $3,000/month price tag.',
    es: 'Tres emails, tres redes sociales. Tu equipo digital, en tu bolsillo. Como tener un asistente personal sin la etiqueta de $3,000/mes.'
  },
  'models.daddy.f1': { en: 'All your inboxes cleared before breakfast', es: 'Todas tus bandejas limpias antes del desayuno' },
  'models.daddy.f2': { en: 'Social content across all your platforms', es: 'Contenido social en todas tus plataformas' },
  'models.daddy.f3': { en: 'Birthdays, deadlines, follow-ups — all remembered', es: 'Cumpleaños, plazos, seguimientos — todo recordado' },
  'models.daddy.f4': { en: 'Works 24/7 so you don\'t have to', es: 'Trabaja 24/7 para que tú no tengas que hacerlo' },

  // Big Daddy ($119/mo) — The Full Team
  'models.bigdaddy.badge': { en: 'The Full Team', es: 'El Equipo Completo' },
  'models.bigdaddy.title': { en: 'Big Daddy', es: 'Big Daddy' },
  'models.bigdaddy.price': { en: '$119', es: '$119' },
  'models.bigdaddy.period': { en: '/month', es: '/mes' },
  'models.bigdaddy.desc': {
    en: 'Unlimited everything. Your whole life, handled. Less than a coffee a day for a full digital team working around the clock.',
    es: 'Todo ilimitado. Toda tu vida, manejada. Menos que un café al día por un equipo digital completo trabajando todo el tiempo.'
  },
  'models.bigdaddy.f1': { en: 'Unlimited email accounts, all on autopilot', es: 'Cuentas de email ilimitadas, todas en piloto automático' },
  'models.bigdaddy.f2': { en: 'Every social platform, always posting', es: 'Cada red social, siempre publicando' },
  'models.bigdaddy.f3': { en: 'Your whole life organized and on track', es: 'Toda tu vida organizada y en camino' },
  'models.bigdaddy.f4': { en: 'Priority support — a real human when you need one', es: 'Soporte prioritario — un humano real cuando lo necesitas' },

  // ── Quiz ──
  'quiz.h2': { en: 'YOUR FREE AI PLAN', es: 'TU PLAN IA GRATIS' },
  'quiz.sub': {
    en: '5 quick questions. Personalized AI plan. Takes 30 seconds.',
    es: '5 preguntas rápidas. Plan IA personalizado. Toma 30 segundos.'
  },
  'quiz.start': { en: 'START HERE', es: 'EMPIEZA AQUÍ' },
  'quiz.email.q': { en: "What's your email?", es: '¿Cuál es tu email?' },
  'quiz.email.placeholder': { en: 'you@email.com', es: 'tu@email.com' },
  'quiz.email.continue': { en: 'Continue', es: 'Continuar' },

  'quiz.step.1of5': { en: 'STEP 01/05', es: 'PASO 01/05' },
  'quiz.role.q': { en: 'What best describes you?', es: '¿Qué te describe mejor?' },
  'quiz.role.o1': { en: 'I run a business or side hustle', es: 'Tengo un negocio o proyecto' },
  'quiz.role.o2': { en: 'I freelance or create content', es: 'Soy freelance o creador de contenido' },
  'quiz.role.o3': { en: 'I work a 9-to-5', es: 'Trabajo de 9 a 5' },
  'quiz.role.o4': { en: 'I\'m juggling everything', es: 'Estoy haciendo de todo' },

  'quiz.step.2of5': { en: 'STEP 02/05', es: 'PASO 02/05' },
  'quiz.bottleneck.q': { en: 'What drains your time the most?', es: '¿Qué te consume más tiempo?' },
  'quiz.bottleneck.o1': { en: 'Email & messages', es: 'Email y mensajes' },
  'quiz.bottleneck.o2': { en: 'Research & learning', es: 'Investigación y aprendizaje' },
  'quiz.bottleneck.o3': { en: 'Planning & scheduling', es: 'Planificación y agenda' },
  'quiz.bottleneck.o4': { en: 'Repetitive busywork', es: 'Trabajo repetitivo' },

  'quiz.step.3of5': { en: 'STEP 03/05', es: 'PASO 03/05' },
  'quiz.hours.q': { en: 'How many hours a week do you lose to stuff AI could do?', es: '¿Cuántas horas a la semana pierdes en cosas que la IA podría hacer?' },
  'quiz.hours.o1': { en: '1–5 hours', es: '1–5 horas' },
  'quiz.hours.o2': { en: '5–10 hours', es: '5–10 horas' },
  'quiz.hours.o3': { en: '10–20 hours', es: '10–20 horas' },
  'quiz.hours.o4': { en: '20+ hours', es: '20+ horas' },

  'quiz.step.4of5': { en: 'STEP 04/05', es: 'PASO 04/05' },
  'quiz.spanish.q': { en: 'Do you need Spanish?', es: '¿Necesitas español?' },
  'quiz.spanish.o1': { en: 'Yes, I use it daily', es: 'Sí, lo uso a diario' },
  'quiz.spanish.o2': { en: 'Sometimes', es: 'A veces' },
  'quiz.spanish.o3': { en: 'I want to learn / expand', es: 'Quiero aprender / expandirme' },
  'quiz.spanish.o4': { en: 'English only is fine', es: 'Solo inglés está bien' },

  'quiz.step.5of5': { en: 'STEP 05/05', es: 'PASO 05/05' },
  'quiz.goal.q': { en: 'What would you do with 20 extra hours a week?', es: '¿Qué harías con 20 horas extra a la semana?' },
  'quiz.goal.o1': { en: 'Make more money', es: 'Ganar más dinero' },
  'quiz.goal.o2': { en: 'Actually relax', es: 'Realmente descansar' },
  'quiz.goal.o3': { en: 'Start something new', es: 'Empezar algo nuevo' },
  'quiz.goal.o4': { en: 'Be with people I love', es: 'Estar con quienes quiero' },

  'quiz.loading': { en: 'BUILDING YOUR AI PLAN...', es: 'CREANDO TU PLAN IA...' },

  'quiz.result.h3': { en: 'YOUR AI PLAN', es: 'TU PLAN IA' },
  'quiz.result.intro': {
    en: 'Here\'s how ClawDaddy is about to change your life:',
    es: 'Así es como ClawDaddy va a cambiar tu vida:'
  },
  'quiz.result.tier': { en: 'We recommend:', es: 'Te recomendamos:' },
  'quiz.result.cta': { en: 'Claim Your Free Plan', es: 'Reclama Tu Plan Gratis' },
  'quiz.result.confirmed': { en: 'YOU\'RE IN — CHECK YOUR INBOX', es: 'ESTÁS DENTRO — REVISA TU BANDEJA' },

  // ── Pricing ──
  'pricing.h2': { en: 'SIMPLE PRICING.', es: 'PRECIOS SIMPLES.' },
  'pricing.sub': {
    en: 'Start free. Upgrade when you want your AI workforce working harder.',
    es: 'Empieza gratis. Mejora cuando quieras que tu equipo IA trabaje más duro.'
  },
  'pricing.popular': { en: 'Most Popular', es: 'Más Popular' },

  'pricing.claw.name': { en: 'Claw', es: 'Claw' },
  'pricing.claw.price': { en: '$29', es: '$29' },
  'pricing.claw.period': { en: '/month', es: '/mes' },
  'pricing.claw.desc': { en: 'One email, one social platform. Finally get your inbox under control.', es: 'Un email, una red social. Por fin controla tu bandeja.' },
  'pricing.claw.f1': { en: 'Wake up to a clean inbox', es: 'Despierta con una bandeja limpia' },
  'pricing.claw.f2': { en: 'Social posts written and scheduled for you', es: 'Publicaciones sociales escritas y programadas para ti' },
  'pricing.claw.f3': { en: 'Important reminders so you never drop the ball', es: 'Recordatorios importantes para que nunca falles' },
  'pricing.claw.f4': { en: 'Set up in 60 seconds, works immediately', es: 'Configura en 60 segundos, funciona de inmediato' },
  'pricing.claw.cta': { en: 'Start Claw', es: 'Empezar Claw' },

  'pricing.daddy.name': { en: 'Daddy', es: 'Daddy' },
  'pricing.daddy.price': { en: '$59', es: '$59' },
  'pricing.daddy.period': { en: '/month', es: '/mes' },
  'pricing.daddy.desc': { en: 'Three emails, three social platforms. Your digital workforce, in your pocket.', es: 'Tres emails, tres redes sociales. Tu equipo digital, en tu bolsillo.' },
  'pricing.daddy.f1': { en: 'All your inboxes cleared before breakfast', es: 'Todas tus bandejas limpias antes del desayuno' },
  'pricing.daddy.f2': { en: 'Social content across all your platforms', es: 'Contenido social en todas tus plataformas' },
  'pricing.daddy.f3': { en: 'Birthdays, deadlines, follow-ups — all remembered', es: 'Cumpleaños, plazos, seguimientos — todo recordado' },
  'pricing.daddy.f4': { en: 'Works 24/7 so you don\'t have to', es: 'Trabaja 24/7 para que tú no tengas que hacerlo' },
  'pricing.daddy.f5': { en: 'Priority support', es: 'Soporte prioritario' },
  'pricing.daddy.cta': { en: 'Get Daddy', es: 'Obtén Daddy' },

  'pricing.bigdaddy.name': { en: 'Big Daddy', es: 'Big Daddy' },
  'pricing.bigdaddy.price': { en: '$119', es: '$119' },
  'pricing.bigdaddy.period': { en: '/month', es: '/mes' },
  'pricing.bigdaddy.desc': { en: 'Unlimited everything. Your whole life, handled.', es: 'Todo ilimitado. Toda tu vida, manejada.' },
  'pricing.bigdaddy.f1': { en: 'Unlimited email accounts, all on autopilot', es: 'Cuentas de email ilimitadas, todas en piloto automático' },
  'pricing.bigdaddy.f2': { en: 'Every social platform, always posting', es: 'Cada red social, siempre publicando' },
  'pricing.bigdaddy.f3': { en: 'Your whole life organized and on track', es: 'Toda tu vida organizada y en camino' },
  'pricing.bigdaddy.f4': { en: 'Priority support — a real human when you need one', es: 'Soporte prioritario — un humano real cuando lo necesitas' },
  'pricing.bigdaddy.f5': { en: 'API access & custom automations', es: 'Acceso API y automatizaciones personalizadas' },
  'pricing.bigdaddy.f6': { en: 'Dedicated support', es: 'Soporte dedicado' },
  'pricing.bigdaddy.cta': { en: 'Get Big Daddy', es: 'Obtén Big Daddy' },

  // ── Footer ──
  'footer.copy': { en: '© 2026 ClawDaddy. All rights reserved.', es: '© 2026 ClawDaddy. Todos los derechos reservados.' },
  'footer.privacy': { en: 'Privacy', es: 'Privacidad' },
  'footer.terms': { en: 'Terms', es: 'Términos' },
  'footer.github': { en: 'GitHub', es: 'GitHub' },
};