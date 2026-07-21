import { useState, type FormEvent } from 'react';
import { CheckCircle2, LoaderCircle } from 'lucide-react';
import { SelectField, TextAreaField, TextField } from './FormField';

type Kind = 'contact' | 'membership' | 'project';

type Props = {
  kind: Kind;
  title: string;
  description: string;
};

const endpoints: Record<Kind, string> = {
  contact: '/api/contact',
  membership: '/api/membership',
  project: '/api/project',
};

export default function SubmissionForm({ kind, title, description }: Props) {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'local'>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    setState('loading');
    setMessage('');

    try {
      const response = await fetch(endpoints[kind], {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('backend-unavailable');
      setState('success');
      setMessage('접수가 완료되었습니다. 담당자가 내용을 검토한 뒤 연락드리겠습니다.');
      form.reset();
    } catch {
      const saved = JSON.parse(localStorage.getItem('ksba-draft-submissions') ?? '[]');
      saved.push({ kind, payload, savedAt: new Date().toISOString() });
      localStorage.setItem('ksba-draft-submissions', JSON.stringify(saved));
      setState('local');
      setMessage('현재 서버 저장 기능이 연결되지 않아 이 브라우저에 임시 저장했습니다. Cloudflare D1 연결 후 실제 접수로 전환됩니다.');
      form.reset();
    }
  }

  return (
    <form className="submission-form" onSubmit={onSubmit}>
      <div className="submission-form__head">
        <div className="section-eyebrow">APPLICATION</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="form-grid">
        <TextField name="name" label="성명·담당자" required placeholder="홍길동" />
        <TextField name="organization" label="회사·기관명" placeholder="회사 또는 기관명" />
        <TextField name="email" type="email" label="이메일" required placeholder="name@example.com" />
        <TextField name="phone" type="tel" label="연락처" required placeholder="010-0000-0000" />

        {kind === 'membership' && (
          <SelectField name="memberType" label="희망 회원유형" required defaultValue="">
            <option value="" disabled>선택해 주세요</option>
            <option>개인회원</option>
            <option>기업회원</option>
            <option>파트너회원</option>
            <option>특별회원</option>
          </SelectField>
        )}

        {kind === 'project' && (
          <>
            <SelectField name="projectType" label="프로젝트 유형" required defaultValue="">
              <option value="" disabled>선택해 주세요</option>
              <option>공실·유휴공간 제안</option>
              <option>운영사 모집</option>
              <option>협력사·솔루션 제휴</option>
              <option>지자체·공공 프로젝트</option>
              <option>투자·금융 협력</option>
            </SelectField>
            <TextField name="location" label="지역·주소" placeholder="예: 서울시 광진구" />
          </>
        )}

        {kind === 'contact' && (
          <SelectField name="inquiryType" label="문의 유형" required defaultValue="">
            <option value="" disabled>선택해 주세요</option>
            <option>협회 설립·창립회원</option>
            <option>회원 가입</option>
            <option>인증·평가</option>
            <option>교육·전문가</option>
            <option>프로젝트·제휴</option>
            <option>언론·연구·기타</option>
          </SelectField>
        )}

        <TextAreaField name="message" label={kind === 'project' ? '프로젝트 설명' : '문의·참여 내용'} required rows={7} placeholder="검토에 필요한 내용을 구체적으로 작성해 주세요." />
        <label className="checkbox-field form-field--full">
          <input type="checkbox" required name="privacyConsent" value="agreed" />
          <span>문의·신청 처리를 위한 개인정보 수집 및 이용에 동의합니다. <em>*</em></span>
        </label>
      </div>
      <button className="button button--dark button--submit" type="submit" disabled={state === 'loading'}>
        {state === 'loading' ? <><LoaderCircle className="spin" size={18} /> 전송 중</> : '내용 접수하기'}
      </button>
      {(state === 'success' || state === 'local') && (
        <div className={`form-result ${state === 'local' ? 'form-result--warning' : ''}`}>
          <CheckCircle2 size={20} />
          <span>{message}</span>
        </div>
      )}
    </form>
  );
}
