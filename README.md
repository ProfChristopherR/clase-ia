# Clase de Inteligencia Artificial — Liceo San Nicolás

Sitio web educativo con dos clases introductorias sobre Inteligencia Artificial, diseñado para el ramo **Tecnología Geografía** del Departamento de Historia y Geografía. Incluye fundamentos, dinámicas de clase, ejercicios prácticos con Gemini y una evaluación final.

## 📂 Estructura del sitio

```
.
├── index.html              # Página de inicio con portada y acceso a las clases
├── clases/
│   ├── clase1.html         # Clase 1: Fundamentos de la IA y el arte del Prompt
│   └── clase2.html         # Clase 2: Gemini en Workspace, Agentes y Código con IA
├── evaluacion.html         # Cuestionario final de 8 preguntas
├── assets/
│   ├── css/main.css        # Estilos principales (tema claro/oscuro)
│   ├── css/animations.css  # Animaciones adicionales
│   ├── js/theme.js         # Cambio de tema claro/oscuro
│   └── js/utils.js         # Navegación móvil, scroll reveal y quiz
├── Clase_IA Tecn. en Industria 4.0 2026.pptx  # Material de referencia
├── venv/                   # Entorno virtual (solo para extracción del PPT)
└── README.md               # Este archivo
```

## 🚀 Cómo usar

1. Abre `index.html` directamente en tu navegador, o
2. Ejecuta un servidor local:
   ```bash
   python3 -m http.server 8080
   ```
   y visita `http://localhost:8080`.

## 📚 Contenido de las clases

### Clase 1 — Fundamentos de la IA y el arte del Prompt

- De herramienta a copiloto: la era de la Inteligencia Aumentada.
- ¿Qué es la IA? Historia: Alan Turing, Big Data, Machine Learning y Deep Learning.
- IA Tradicional vs IA Generativa: de analizar a crear.
- Cómo funciona la IA generativa: modelos de lenguaje y difusión.
- Gemini: capacidades multimodales, Flash vs Pro.
- **El arte del Prompt:** fórmula R + C + O (Rol + Contexto + Objetivo), formatos y restricciones.
- **Dinámicas:** "¿Quién lo hace?", "Crítico vs Creador", "De malo a brillante".
- **Ejercicios prácticos con Gemini:** explicar para diferentes audiencias, transformar formatos, creatividad y pensamiento crítico.

### Clase 2 — Gemini en Workspace, Agentes y Código con IA

- Repaso rápido y dinámica "Prompt relámpago".
- Gemini en Google Workspace: Gmail, Docs, Sheets, Slides.
- El comando `@` para acceder a Drive y Gmail.
- Deep Research: investigación asistida por IA.
- Agentes de IA: qué son, cómo funcionan y ejemplos reales.
- Código con IA: GitHub Copilot, Cursor, Gemini Code Assist, Claude Code.
- **Plataformas gratuitas para practicar:** Replit, CodePen, Google Colab, StackBlitz.
- **Ejercicios prácticos:** lenguaje natural (Master Prompt, análisis de correos, comparativas) y código (calculadora, conversor, página web).
- Ética, limitaciones, riesgos y buenas prácticas.
- Dinámica de cierre: "Mi compromiso con la IA".

## 🛠️ Herramientas recomendadas para los estudiantes

- **Gemini:** [gemini.google.com](https://gemini.google.com)
- **Replit:** [replit.com](https://replit.com) — editor online gratuito para Python, JavaScript, HTML/CSS.
- **CodePen:** [codepen.io](https://codepen.io) — para practicar frontend web.
- **Google Colab:** [colab.research.google.com](https://colab.research.google.com) — cuadernos de Python en la nube.
- **StackBlitz:** [stackblitz.com](https://stackblitz.com) — aplicaciones web modernas.

## 🎨 Diseño

El diseño sigue la estética del sitio de referencia [credencial_operador_dgac](https://profchristopherr.github.io/credencial_operador_dgac/):
- Navegación fija con efecto glassmorphism.
- Portada hero con gradientes y animaciones.
- Tarjetas de clases con hover effects.
- Tema claro/oscuro persistente.
- Diseño responsive para celulares y computadores.
- Imágenes de Unsplash para ilustrar conceptos clave.

## ✅ Evaluación

El cuestionario final incluye 8 preguntas de opción múltiple que cubren ambas clases. Las respuestas se revisan con JavaScript y se muestra el puntaje obtenido.

## 📎 Fuente del contenido

El contenido sobre prompting y capacidades de Gemini se enriqueció con ideas del material adjunto **"Clase_IA Tecn. en Industria 4.0 2026.pptx"**.

---

**Docente:** Prof. Christopher Ruiz  
**Asignatura:** Tecnología Geografía  
**Institución:** Liceo San Nicolás
