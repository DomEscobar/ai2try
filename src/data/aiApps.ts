import { AIApp } from '../types';

export const aiApps: AIApp[] = [
  {
    id: 'ui-generator',
    title: 'UI Generator',
    url: 'https://ui-generator-zeta.vercel.app',
    description: 'Generate beautiful website sections with ease. Perfect for developers looking to quickly create professional UI components and layouts.',
    tags: ['Development', 'UI', 'Code'],
    imageUrl: 'uigen.png',
    creatorUrl:'https://github.com/domEscobar/'
  },
  {
    id: 'dood-generator',
    title: 'Trading Card Generator',
    url: 'https://doodgenerator.vercel.app',
    description: 'Create hilarious AI-powered trading cards with your own custom characters. Generate unique, fun collectible cards with just a few clicks!',
    tags: ['Image', 'Fun'],
    imageUrl: 'tcggen.png',
    creatorUrl:'https://github.com/domEscobar/'
  }
];