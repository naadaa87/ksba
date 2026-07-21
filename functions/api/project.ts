import { json, parseJson, saveSubmission, type PagesContext } from './_shared';

export const onRequestPost = async (context: PagesContext) => {
  try {
    const payload = await parseJson(context.request);
    return await saveSubmission(context, 'project', payload);
  } catch {
    return json({ ok: false, message: '요청 형식을 확인해 주세요.' }, 400);
  }
};

export const onRequest = () => json({ ok: false, message: 'POST 요청만 지원합니다.' }, 405);
