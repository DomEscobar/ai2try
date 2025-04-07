# AI2Try 🚀

AI2Try is an open platform that lets you discover and try out AI applications directly in your browser. Our mission is to make AI more accessible by providing a curated collection of embeddable AI tools and applications.

## 🤝 Contributing

We welcome contributions from the AI developer community! To submit your AI application, please ensure it meets the following requirement:

### Embedding Requirement

Your AI application must be embeddable via an frame:

```html
// Your website to tryout will be called via Iframe of ai2try.com
<iframe
  src="https://your-app.com/embed"
></iframe>
```

### How to Submit

1. Fork this repository
2. Add your AI application to `src/data/aiApps.ts`:

```typescript
{
  id: 'your-app-id',
  title: 'Your App Name',
  url: 'https://your-app-domain.com/embed',
  description: 'A clear, concise description of what your AI app does.',
  tags: ['relevant', 'tags'],
  imageUrl: 'https://url-to-preview-image.jpg',
  creatorUrl: 'https://your-app-domain.com/'
}
```

3. Create a pull request with:
   - Title: `Add: [Your App Name]`
   - Description of what your app does

## 🚀 Getting Started

To run this project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Tech Stack

- React + TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## 📜 License

MIT License - feel free to use this project as inspiration for your own AI application directory!

## 🤔 Questions?

Have questions about submitting your AI application? Check out our:
- [Contact Page](https://ai2try.com/contact)
- [Terms of Service](https://ai2try.com/terms)
- [Privacy Policy](https://ai2try.com/privacy)
- 

---

Built with ❤️ by the AI community
