interface Env {
  DB?: D1Database;
}

export type PagesContext = EventContext<Env, string, Record<string, unknown>>;

export async function parseJson(request: Request): Promise<Record<string, unknown>> {
  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) throw new Error('invalid-content-type');
  const body = await request.json();
  if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('invalid-body');
  return body as Record<string, unknown>;
}

export function clean(value: unknown, max = 3000): string {
  return String(value ?? '').trim().slice(0, max);
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

export async function saveSubmission(context: PagesContext, kind: string, payload: Record<string, unknown>) {
  if (!context.env.DB) {
    return json({
      ok: false,
      code: 'DB_NOT_CONFIGURED',
      message: 'Cloudflare D1 binding DB is not configured.'
    }, 503);
  }

  const name = clean(payload.name, 100);
  const organization = clean(payload.organization, 160);
  const email = clean(payload.email, 180);
  const phone = clean(payload.phone, 80);
  const message = clean(payload.message, 5000);
  const subtype = clean(payload.memberType || payload.projectType || payload.inquiryType, 120);
  const location = clean(payload.location, 240);
  const consent = clean(payload.privacyConsent, 20);

  if (!name || !email || !phone || !message || consent !== 'agreed') {
    return json({ ok: false, message: '필수 입력값을 확인해 주세요.' }, 400);
  }
  if (!validateEmail(email)) {
    return json({ ok: false, message: '이메일 형식을 확인해 주세요.' }, 400);
  }

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const ip = context.request.headers.get('CF-Connecting-IP') ?? '';
  const userAgent = context.request.headers.get('User-Agent') ?? '';

  await context.env.DB.prepare(`
    INSERT INTO submissions
      (id, kind, subtype, name, organization, email, phone, location, message, consent, ip, user_agent, status, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new', ?)
  `).bind(id, kind, subtype, name, organization, email, phone, location, message, consent, ip, userAgent, createdAt).run();

  return json({ ok: true, id, message: '접수가 완료되었습니다.' }, 201);
}
