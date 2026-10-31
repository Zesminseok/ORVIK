# Security

## Supported versions

Only the latest release gets security fixes. Check [Releases](https://github.com/Zesminseok/ORVIK/releases/latest) before reporting.

## Reporting a problem

Do not open a public issue. Report it privately through [Report a vulnerability](https://github.com/Zesminseok/ORVIK/security/advisories/new) on the Security tab. English or Korean is fine (한국어로 보내셔도 됩니다).

Please include:

- ORVIK version and operating system
- What an attacker can do, and from where (same network, the internet, a file)
- Steps or packets that reproduce it

ORVIK is made by one person. Reports are answered as time allows, and there is no bug bounty. If you want credit, say so and the release notes for the fix can name you.

## What counts

- Anything ORVIK listens on: the web viewer (TCP 8877), mirror serving (TCP 8878), SHORTCUT input (OSC on UDP 7700, Art-Net DMX on UDP 6454)
- Handling of PRO DJ LINK and TCNet packets, artwork, track and mirror data from the network
- The update check, and the release files (Mac DMG, Windows EXE)

## Known limits

These are by design and are not treated as vulnerabilities:

- The web viewer uses unencrypted HTTP with a 4-character code, and mirror serving has no code. Turn them on only on a show network you trust.
- PRO DJ LINK, TCNet, OSC, Art-Net and sACN have no authentication. Any device on the same network can send to ORVIK or read what it sends.
- The Windows EXE is not code-signed.
