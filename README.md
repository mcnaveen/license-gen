# Node License Key Generator
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
:unicorn: Simple utility to generate a license key in Node.js projects.

![License Generator Module](https://github.com/mcnaveen/license-gen-example/workflows/Build/badge.svg)

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

### :star2: Example Repo
https://github.com/mcnaveen/license-gen-example

### :book: License
- MIT

----

#### Links:
- dev.to (https://dev.to/mcnaveen/generating-license-key-in-nodejs-2ie8)
- hashnode (https://mcnaveen.hashnode.dev/how-to-generate-license-key-with-nodejs)

---

#### :green_heart: Message

> No Additional dependencies used.

I hope you find this useful. If you have any questions, please create an issue.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://hexmarkrecords.com"><img src="https://avatars.githubusercontent.com/u/63052259?v=4?s=100" width="100px;" alt="Hexmark Records Ltd"/><br /><sub><b>Hexmark Records Ltd</b></sub></a><br /><a href="https://github.com/mcnaveen/license-gen/commits?author=hexmarkrecords" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!