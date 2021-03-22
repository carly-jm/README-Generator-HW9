function addDescription(data) {
  if (data.description !== '') {
    return `## Description
    \n${data.description}
    `
  }
  return ''
}

function githubLink(data) {
  if (data.github !== '') {
    return `* [GitHub Repository](https://github.com/${data.github}/${data.title}/)`
  }
  return ''
}

function installLink(data) {
  if (data.installation !== '') {
    return `* [Installation](#installation)`
  }
  return ''
}

function addInstall(data) {
  if (data.installation !== '') {
    return `## Installation

Run the following command to install the required dependencies:
\`\`\`
${data.installation}
\`\`\`
  `
}
  return ''
}

function usageLink(data) {
  if (data.usage !=='') {
    return `* [Usage](#usage)`
  }
  return ''
}

function addUsage(data) {
  if (data.usage !== '') {
    return `## Usage

Run this command to invoke this application:
\`\`\`
${data.usage}
\`\`\`
  `
  }
  return ''
}

function contributeLink(data) {
  if (data.contributing !=="No") {
    return `* [Contributing](#contributing)`
  }
  return ''
}

function addContributing(data) {
  if (data.contributing == "Yes") {
    return `## Contributing
    \nAny community contributions will help in achieving this project's success, so any help is greatly appreciated.
    \nTo participate in this project, please review the following guidelines:
    \n1. Create a branch for your update (after forking and cloning)
    \n   \`git checkout -b <branchName>\`
    \n2. Make changes or additions to new or existing file & stage it
    \n   \`git add <fileName.ext>\`
    \n3. Commit your file by adding comments about code enhancements
    \n   \`git commmit -m <your code comments>\`
    \n4. Push your changes with your remote branch name
    \n   \`git push -u origin <branchName>\`
    \n5. Finally, submit [feature requests and bugs](https://github.com/${data.github}/${data.title}/issues) and open a [pull request](https://github.com/${data.github}/${data.title}/pulls)
    `
  }
    return ``
}

function testsLink(data) {
  if (data.tests !== '') {
    return `* [Tests](#tests)`
  }
  return ''
}

function addtests(data) {
  if (data.tests !== '') {
    return `## Tests
    
For testing, run this command:
\`\`\`
${data.tests}
\`\`\`
  `
  }
  return ''
}

function questionsLink(data) {
  if (data.email !== '') {
    return `* [Questions](#questions)`
  }
  return ''
}

function addQuestions(data) {
  if (data.email !=='') {
    return `## Questions
  
You can find my complete work at [GitHub](https://github.com/${data.github}) and if you have any questions, then feel free to contact by email.
* ${data.email}`

  }
  return ''
}

function addLicense(data) {
  if (data.license !=="None") {
    return `## License

Copyright (c) ${data.github}. All rights reserved.
    
Licensed under the [${data.license}](./LICENSE.txt) license.
  `
  }
  return ''
}

function licenseBadge(data) {
  if (data.license !=="None") {
    return `![{data.license}](https://shields.io/badge/license-${data.license}-green)`
  }
  return ''
}

function generateMarkdown(data) {
  return `# ${data.title}
${licenseBadge(data)}

${addDescription(data)}

## Content

${githubLink(data)}

${installLink(data)}

${usageLink(data)}

${contributeLink(data)}

${testsLink(data)}

${questionsLink(data)}

${addInstall(data)}

${addUsage(data)}

${addContributing(data)}

${addtests(data)}

${addLicense(data)}

${addQuestions(data)}`;
  }
  module.exports = generateMarkdown;