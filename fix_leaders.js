const fs = require('fs');
const path = require('path');

// 1. Fix about/leaders/page.tsx
const leadersPath = path.join(__dirname, 'src/app/about/leaders/page.tsx');
let leadersContent = fs.readFileSync(leadersPath, 'utf8');

// Remove Journey and Contributions
leadersContent = leadersContent.replace(/\{\/\* ── 4\. Journey[\s\S]*?(?=\{\/\* ── 6\. Philosophy Quote)/g, '');

// Remove Organisation Impact, Network, and Personal Message
leadersContent = leadersContent.replace(/\{\/\* ── 7\. Organisation Impact[\s\S]*?(?=\{\/\* ── 10\. Navigation)/g, '');

// Rename section numbers just for cleanliness (6 -> 4, 10 -> 5)
leadersContent = leadersContent.replace('6. Philosophy Quote', '4. Philosophy Quote');
leadersContent = leadersContent.replace('10. Navigation', '5. Navigation');

fs.writeFileSync(leadersPath, leadersContent);

// 2. Fix TeamSection.tsx
const teamPath = path.join(__dirname, 'src/components/organisms/TeamSection.tsx');
let teamContent = fs.readFileSync(teamPath, 'utf8');

if (!teamContent.includes('useRouter')) {
    teamContent = teamContent.replace('from "react";', 'from "react";\nimport { useRouter } from "next/navigation";');
}

if (!teamContent.includes('const router = useRouter();')) {
    teamContent = teamContent.replace('const [isOpen, setIsOpen] = useState(false);', 'const [isOpen, setIsOpen] = useState(false);\n  const router = useRouter();');
}

teamContent = teamContent.replace(
    /const handleCardClick = \(\) => \{[\s\S]*?setIsOpen\(\(prev\) => !prev\);\n\s*\}\n\s*\};/,
    'const handleCardClick = () => {\n    router.push(`/about/leaders?id=${member.id}`);\n  };'
);

// We also should remove the toggle button since clicking the card redirects now? Or keep it for hover.
// The user said: "make homepage leaders cards fully clicable and redirection to this page"
// The card is already clickable, so just changing the click handler is perfect.

fs.writeFileSync(teamPath, teamContent);

console.log("Done modifying files.");
