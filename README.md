# Playwright Test Automation Framework

This project implements a Playwright-based test automation framework for https://www.saucedemo.com/ using MCP Server, following best practices: Page Object Model, Fixtures, JSON test data, and CI integration.

## Structure
- `tests/`: Test scripts
- `pages/`: Page Object Model classes
- `fixtures/`: Custom fixtures
- `data/`: Test data (JSON)
- `.github/workflows/`: CI pipeline

## How to Run
1. Install dependencies: `npm install`
2. Run tests: `npx playwright test`
3. View reports in `playwright-report/`

## CI
GitHub Actions pipeline runs tests on push and PR.
