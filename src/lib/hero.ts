import { heroConfig } from '@/config/Hero';

export const parseTemplate = (
  template: string,
  skills: typeof heroConfig.skills,
) => {
  const parts = template.split(/(\{skills:\d+\})/);

  return parts
    .map((part, index) => {
      const skillMatch = part.match(/\{skills:(\d+)\}/);
      if (skillMatch) {
        const skillIndex = parseInt(skillMatch[1]);
        const skill = skills[skillIndex];
        if (skill) {
          return {
            type: 'skill',
            skill: skill,
            key: index,
          };
        }
      }

      // Handle **bold** markdown syntax
      const boldParts = part.split(/(\*\*.*?\*\*)/);
      return boldParts.map((boldPart, boldIndex) => {
        if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
          return {
            type: 'bold',
            text: boldPart.slice(2, -2),
            key: `${index}-${boldIndex}`,
          };
        }
        return {
          type: 'text',
          text: boldPart,
          key: `${index}-${boldIndex}`,
        };
      });
    })
    .flat();
};

export const parseBoldText = (text: string) => {
  // Handle **bold** markdown syntax
  const parts = text.split(/(\*\*.*?\*\*)/);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return {
        text: part.slice(2, -2),
        bold: true,
        key: index,
      };
    }
    return {
      text: part,
      bold: false,
      key: index,
    };
  });
};

