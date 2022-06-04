import { NextPage } from 'next'
import { ChatPreview } from '../chat-preview/chat-preview'

export const List: NextPage = () => (
  <div className="h-full">
    <ChatPreview
      avatarUrl="https://images.generated.photos/Y6vlLXmO7r6rYWKHY_XhlTlFGyqrOqwdqHQGt-I61Dc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDUzMDI2LmpwZw.jpg"
      name="name"
      preview="preview"
    />
  </div>
)
