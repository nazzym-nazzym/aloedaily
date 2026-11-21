import { HowToStep, FAQItem } from '../data/types';

export function generateHowToSchema(
  title: string,
  steps: HowToStep[],
  totalTime?: string,
  tools?: string[],
  supplies?: string[]
) {
  return {
    '@type': 'HowTo',
    name: title,
    ...(totalTime ? { totalTime } : {}),
    ...(tools && tools.length > 0 ? { tool: tools.map(t => ({ '@type': 'HowToTool', name: t })) } : {}),
    ...(supplies && supplies.length > 0 ? { supply: supplies.map(s => ({ '@type': 'HowToSupply', name: s })) } : {}),
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
