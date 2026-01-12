// components/BracketTextProcessor.tsx
'use client';

import { useEffect } from 'react';

export const BracketTextProcessor = () => {
  useEffect(() => {
    const processTextNodes = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || '';

        // Check if text contains bracketed content
        if (/\[[^\]]+\]/.test(text)) {
          const span = document.createElement('span');
          const regex = /(\[)([^\]]+)(\])/g;
          const parts = text.split(regex);

          parts.forEach((part, index) => {
            if (part === '[') {
              const textContent = parts[index + 1];
              const closingBracket = parts[index + 2];

              if (closingBracket === ']') {
                // Create wrapper span
                const wrapper = document.createElement('span');
                wrapper.className = 'inline-flex items-center';
                wrapper.style.display = 'inline-flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.verticalAlign = 'baseline';

                // Opening bracket
                const openBracket = document.createElement('span');
                openBracket.textContent = '[';
                openBracket.className = 'bracket-open';
                openBracket.style.fontSize = '1.15em';
                openBracket.style.lineHeight = '1';
                openBracket.style.display = 'inline-flex';
                openBracket.style.alignItems = 'center';

                // Text content
                const textSpan = document.createElement('span');
                textSpan.textContent = textContent;
                textSpan.className = 'text-primary bracket-text';
                textSpan.style.marginLeft = '0.05em';
                textSpan.style.marginRight = '0.05em';
                textSpan.style.display = 'inline-flex';
                textSpan.style.alignItems = 'center';
                textSpan.style.verticalAlign = 'baseline';
                textSpan.style.paddingTop = '0.2em';

                // Closing bracket
                const closeBracket = document.createElement('span');
                closeBracket.textContent = ']';
                closeBracket.className = 'bracket-close';
                closeBracket.style.fontSize = '1.15em';
                closeBracket.style.lineHeight = '1';
                closeBracket.style.display = 'inline-flex';
                closeBracket.style.alignItems = 'center';

                wrapper.appendChild(openBracket);
                wrapper.appendChild(textSpan);
                wrapper.appendChild(closeBracket);
                span.appendChild(wrapper);
              }
            } else if (!(index > 0 && (parts[index - 1] === '[' || parts[index - 2] === '['))) {
              span.appendChild(document.createTextNode(part));
            }
          });

          node.parentNode?.replaceChild(span, node);
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Skip script and style tags
        const element = node as Element;
        if (element.tagName !== 'SCRIPT' && element.tagName !== 'STYLE') {
          Array.from(node.childNodes).forEach(processTextNodes);
        }
      }
    };

    // Process initial content
    processTextNodes(document.body);

    // Watch for new content (for dynamic content)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          processTextNodes(node);
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default BracketTextProcessor;