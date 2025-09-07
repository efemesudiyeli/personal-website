export function calculateReadingTime(content: any): number {
  if (!content) return 1

  let text = ''
  
  if (Array.isArray(content)) {
    content.forEach(block => {
      if (block._type === 'block' && block.children) {
        block.children.forEach((child: any) => {
          if (child.text) {
            text += child.text + ' '
          }
        })
      }
    })
  } else if (typeof content === 'string') {
    text = content
  }

  const wordsPerMinute = 200
  const wordCount = text.trim().split(/\s+/).length
  
  if (wordCount === 0) return 1
  
  const readingTime = Math.ceil(wordCount / wordsPerMinute)
  
  return Math.max(1, readingTime)
}
