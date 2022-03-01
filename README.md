# Node License Key Generator
:unicorn: Simple utility to generate a license key in Node.js projects.

![License Generator](https://github.com/mcnaveen/license-gen/workflows/License%20Generator/badge.svg)

### :package: Requirements
- Node.js 12X LTS or 14X LTS 📦

### :sparkles: Installation

- Install the NPM Package with the below command:
```
npm install @mcnaveen/license-gen --save
``` 

 (or)

- Install with Yarn:
```
yarn add @mcnaveen/license-gen
```

### :pen: Usage

- Import the module in your project:

```javascript
import generateLicenseKey from "@mcnaveen/license-gen";
```

### :bulb: Example

- Import the module in your project
- Pass the length of the license key you want to generate
- Here I want to generate a license key with 32 characters

```javascript
import generateLicenseKey from "@mcnaveen/license-gen";

const myKey = generateLicenseKey(32);
console.log(myKey);
```

### :ballot_box_with_check: Example Output
```
8J5S-XN5P-73P2-XCPO-R37V-MPTH-TD6F-X270
```
---

### :bulb: Example with Pair Length
Optionally, You can pass the pair length of the license key as a second argument.

- Here I want to generate a license key with 10 characters and pair length of 5

```javascript
import { generateLicenseKey } from '@mcnaveen/license-gen';

const myKey = generateLicenseKey(10, 5);
console.log(myKey);
```

### :ballot_box_with_check: Output with Specified Pair Length
```
OKXYT-PE8V5
```

> If the Pair length is not specified, the default pair length will be set to 4.

### :book: License
- MIT

---

#### :green_heart: Message

> No Additional dependencies used.

I hope you find this useful. If you have any questions, please create an issue.

