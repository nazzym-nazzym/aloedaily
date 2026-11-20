import { HowToStep, FAQItem } from '../data/types';

export function generateHowToSchema(title: string, steps: HowToStep[]) {
  return {
    '@type': 'HowTo',
    name: title,
    step: steps.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: step.name,
      text: step.text,
      ...(step.imageUrl ? { image: step.imageUrl } : {}),
    })),
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
