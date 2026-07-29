import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  try {
    const data = await request.json();
    const { nombre, email, tel, fecha, hora, msg } = data;

    if (!nombre || !email || !tel) {
      return json({ success: false, message: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const referer = request.headers.get('referer') || 'http://localhost:5173';
    const origin = request.headers.get('origin') || 'http://localhost:5173';

    const response = await fetch('https://formsubmit.co/ajax/matchhomebr@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Referer': referer,
        'Origin': origin
      },
      body: JSON.stringify({
        _subject: `Nueva Solicitud de Cita - ${nombre}`,
        _replyto: email,
        email: email,
        _template: 'table',
        _captcha: 'false',
        _language: 'es',
        'Nombre completo': nombre,
        'Correo electrónico': email,
        'Teléfono': tel,
        'Fecha preferida de cita': fecha || 'No especificada',
        'Hora preferida de cita': hora || 'No especificada',
        'Mensaje / Consulta': msg || 'Sin mensaje adicional'
      })
    });

    const resJson = await response.json();

    if (response.ok && (resJson.success === true || resJson.success === 'true')) {
      return json({ success: true, message: resJson.message });
    } else {
      console.warn('FormSubmit result:', resJson);
      if (resJson.message && resJson.message.includes('Activation')) {
        return json({
          success: false,
          needsActivation: true,
          message: 'Se ha enviado un correo de activación a matchhomebr@gmail.com. Por favor haz clic en "Activate Form" en tu bandeja de entrada o carpeta de SPAM.'
        }, { status: 400 });
      }
      return json({ success: false, message: resJson.message || 'Error en el envío' }, { status: 400 });
    }
  } catch (err) {
    console.error('API contacto error:', err);
    return json({ success: false, message: err.message }, { status: 500 });
  }
}
