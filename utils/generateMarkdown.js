// A function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  var badge;
  if (license == "Apache"){
    badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license == "MIT"){
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else if (license == "GPL"){
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  
  return badge;
}

// A function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license == "Apache"){
    return `(https://www.apache.org/licenses/LICENSE-2.0)`;
  }
  else if (license == "MIT"){
    return `(https://www.mit.edu/~amini/LICENSE.md)`;
  }
  else if (license == "GPL"){
    return `(https://www.gnu.org/licenses/gpl-3.0.en.html)`;
  }
  else return ` `;
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseSection = 
  `License : ${license}  
  ` + renderLicenseLink(license);
  return licenseSection;
}

// A function to generate markdown for README
function generateMarkdown(data) {
  var licenceBadge = renderLicenseBadge(data.license);
  var markdownString = `
  # ${data.title}
  ## Description
  ${data.description}
  ## Installation
  ${data.installSteps}
  ## Usage
  ${data.usageIns}
  ## Collaborators
  ${data.collaborators}
  ## Features
  ${data.features}  
  `;
  var licenseSection = renderLicenseSection(data.license);
  markdownString = licenceBadge + markdownString + licenseSection  ;
  return markdownString;

}

module.exports = generateMarkdown;
