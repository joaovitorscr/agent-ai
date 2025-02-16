import React, { useEffect, useRef } from "react"
import Prism from "prismjs"

import "~/styles/prism-theme.css"

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const preRef = useRef(null)

  useEffect(() => {
    // @ts-expect-error Need to initialize as null
    Prism.highlightElement(preRef.current)
  }, [])

  return (
    <pre ref={preRef} className={`language-${language}`}>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  )
}

export default CodeBlock
