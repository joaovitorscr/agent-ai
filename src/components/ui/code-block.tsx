import React, { useEffect, useRef } from "react"
import Prism from "prismjs"

import "prismjs/themes/prism-tomorrow.css"

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const preRef = useRef(null)

  useEffect(() => {
    // @ts-expect-error Need to initialize as null
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    Prism.highlightElement(preRef.current)
  }, [])

  return (
    <pre ref={preRef} className={`language-${language}`}>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  )
}

export default CodeBlock
