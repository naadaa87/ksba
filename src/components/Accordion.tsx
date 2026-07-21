import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export type AccordionItem = {
  question: string;
  answer: string;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <article className={`accordion__item ${open === index ? 'is-open' : ''}`} key={item.question}>
          <button type="button" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item.question}</strong>
            <ChevronDown size={20} />
          </button>
          <div className="accordion__body">
            <p>{item.answer}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
