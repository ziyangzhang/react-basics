// interface MessageProps {
//   text: string
//   type?: 'info' | 'success' | 'warning' | 'error'
//   className?: string
// }

// function Message({ text, type = 'info', className = '' }: MessageProps) {
//   const baseStyle: React.CSSProperties = {
//     padding: '1rem',
//     borderRadius: '8px',
//     border: '1px solid',
//     margin: '0.5rem 0',
//   }

//   const typeStyles: Record<MessageProps['type'], React.CSSProperties> = {
//     info: {
//       backgroundColor: '#e3f2fd',
//       borderColor: '#90caf9',
//       color: '#1565c0',
//     },
//     success: {
//       backgroundColor: '#e8f5e9',
//       borderColor: '#a5d6a7',
//       color: '#2e7d32',
//     },
//     warning: {
//       backgroundColor: '#fff3e0',
//       borderColor: '#ffcc80',
//       color: '#e65100',
//     },
//     error: {
//       backgroundColor: '#ffebee',
//       borderColor: '#ef9a9a',
//       color: '#c62828',
//     },
//   }

//   const combinedStyle: React.CSSProperties = {
//     ...baseStyle,
//     ...typeStyles[type],
//   }

//   return (
//     <div style={combinedStyle} className={className}>
//       {text}
//     </div>
//   )
// }

// export default Message



// Pascal Case
function Message() {
  const name = 'John';
  // JSX: JavaScript XML. The html will be compiled to JavaScript by Babel.
  // Babel compiles <h1>Hello World</h1> into JavaScript, and React later turns 
  // that JavaScript into real DOM elements.
  //JSX is syntax, not a framework.
  return <h1>Hello {name}</h1>;
}

export default Message;