# Company Policy Chatbot System

A secure, role-based AI chatbot system that allows employees to get instant answers about company policies and rules while maintaining strict document access controls.

## 🎯 Project Overview

This system provides a centralized knowledge base for company policies and procedures, powered by AI to deliver accurate, contextual answers to employee questions. HR administrators maintain full control over the document repository, while employees can interact with an intelligent chatbot without direct access to sensitive documents.

## 🏗️ Architecture

### Frontend
- **Next.js** application with TypeScript
- **Clerk authentication** for secure user management and role-based access
- **shadcn/ui components** for consistent, modern UI design
- **Responsive design** for desktop and mobile access
- **Real-time chat interface** with typing indicators and message history

### Backend
- **n8n workflow automation** as the primary backend
- **OpenAI Embeddings** for document vectorization and semantic search
- **Google Gemini 2.5 Flash** for generating contextual responses
- **Secure file storage** with access control
- **User management** with role-based permissions

### Data Flow
1. HR uploads PDF documents (policies, rules, procedures)
2. Documents are processed and vectorized using OpenAI Embeddings
3. Employee asks questions through the chat interface
4. System performs semantic search across vectorized documents
5. Gemini 2.5 Flash generates contextual answers based on relevant excerpts
6. Employees receive accurate answers without accessing source documents

## 👥 User Roles & Permissions

### HR Administrators
- **Full document access**: Upload, view, update, and delete PDF files
- **Knowledge base management**: Add/remove documents from the system
- **User management**: Create and manage employee accounts
- **Analytics dashboard**: View usage metrics and popular queries
- **Document versioning**: Track changes and maintain audit trails

### Employees
- **Chat interface only**: Ask questions through the AI chatbot
- **No document access**: Cannot view, download, or access source PDFs
- **Question history**: View their previous interactions
- **Bookmark responses**: Save helpful answers for quick reference
- **Feedback system**: Rate response quality to improve the system

## 🔐 Security Features

- **Document isolation**: Employees never have direct access to source documents
- **Role-based access control (RBAC)**: Strict permission enforcement
- **Audit logging**: Track all document access and modifications
- **Secure file storage**: Encrypted document storage with access tokens
- **Session management**: Secure authentication with automatic timeout

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+ and npm/pnpm
- n8n instance (cloud or self-hosted)
- OpenAI API key
- Google Gemini API key
- PostgreSQL database (for user management)
- Clerk account and project setup

### Environment Variables
```bash
# Frontend (.env.local)
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook
NEXT_PUBLIC_API_KEY=your-secure-api-key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key

# Backend (n8n workflows)
OPENAI_API_KEY=your-openai-key
GEMINI_API_KEY=your-gemini-key
DATABASE_URL=postgresql://user:password@localhost:5432/policybot
```

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd company-policy-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   - Fill in your API keys and configuration

4. **Configure n8n workflows**
   - Import the provided n8n workflow templates
   - Configure webhook endpoints
   - Set up database connections

5. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

6. **Access the application**
   - Open [http://localhost:3000](http://localhost:3000)
   - Log in with HR admin credentials to set up initial documents
   - Create employee accounts for team access

## 📊 System Capabilities

### Document Processing
- **PDF text extraction** with OCR support for scanned documents
- **Automatic chunking** for optimal vectorization
- **Metadata extraction** (document type, version, effective date)
- **Duplicate detection** to prevent redundant storage

### AI Features
- **Semantic search** across all documents
- **Context-aware responses** with source attribution
- **Multi-language support** for diverse teams
- **Confidence scoring** for answer reliability
- **Fallback responses** when information isn't available

### User Experience
- **Real-time typing indicators**
- **Conversation history** with search functionality
- **Response bookmarking** for frequently referenced policies
- **Mobile-responsive design** for on-the-go access
- **Offline mode** with cached responses

## 🔄 Current Development Status

⚠️ **Note**: This is a work-in-progress implementation. The current codebase represents an early prototype that will be pivoted to the final system described above.

### Current Features
- Basic Next.js frontend structure
- shadcn/ui component library integration for modern, accessible UI
- Clerk authentication setup with role-based access control
- Initial styling and responsive layout foundation

### Upcoming Changes
- Integration with n8n backend
- Document upload and management system
- AI chatbot implementation
- Role-based access controls
- Production deployment configuration

## 🛠️ Development Roadmap

- [ ] Complete n8n workflow integration
- [ ] Implement document upload and processing
- [ ] Add user authentication and role management
- [ ] Build AI chatbot interface
- [ ] Create HR admin dashboard
- [ ] Add analytics and reporting
- [ ] Implement security features
- [ ] Production deployment setup
- [ ] Performance optimization
- [ ] User testing and feedback integration

## 📞 Support

For technical support or questions about the system, please contact the development team or create an issue in the project repository.

---

**Last Updated**: August 2025  
**Version**: 0.1.0 (Development Preview)