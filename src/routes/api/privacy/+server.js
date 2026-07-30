// src/routes/api/privacy/+server.js
// Privacy Policy endpoint
// Returns a JSON object with the privacy policy text.

export async function GET() {
  const policy = `Política de privacidad:

En Dental Panamericana, respetamos la privacidad de nuestros usuarios y protegemos la información personal que recopilamos. Esta política describe cómo recopilamos, usamos y protegemos tus datos.

- Información recopilada: datos de contacto, datos de cita y cualquier información que nos proporciones a través de formularios.
- Uso de la información: para gestionar citas, responder a consultas y mejorar nuestros servicios.
- Compartir datos: no vendemos ni compartimos tu información con terceros sin tu consentimiento, salvo exigencias legales.
- Seguridad: implementamos medidas técnicas y organizativas para proteger tus datos.
- Derechos: puedes solicitar acceso, rectificación o eliminación de tus datos contacting us.

Para más detalles, contáctanos en cdental.panamericana@gmail.com.`;
  return new Response(JSON.stringify({ policy }), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}
