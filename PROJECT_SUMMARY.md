# Coverage Report Dashboard

## Project Overview

This project demonstrates a complete coverage report setup with both Backend and Frontend components. Both achieve **100% test coverage**.

## Project Structure

```
coverage-report/
├── backend/
│   ├── src/
│   │   └── index.js              # Backend utilities (calculateDiscount, validateEmail)
│   ├── tests/
│   │   └── index.test.js         # Backend tests (7 tests, 100% coverage)
│   ├── coverage/                 # Generated coverage reports
│   ├── package.json
│   └── jest.config.js
│
├── frontend/
│   ├── src/
│   │   └── index.js              # Frontend utilities (formatCurrency, truncateText, formatDate)
│   ├── tests/
│   │   └── index.test.js         # Frontend tests (6 tests, 100% coverage)
│   ├── coverage/                 # Generated coverage reports
│   ├── package.json
│   └── jest.config.js
│
├── public/                       # Public coverage reports
│   ├── index.html               # Dashboard (this file)
│   ├── backend/                 # Backend coverage HTML reports
│   └── frontend/                # Frontend coverage HTML reports
│
└── .github/workflows/
    └── coverage-pages.yml       # GitHub Actions CI/CD workflow
```

## Test Results Summary

### Backend Tests
- **Status**: ✅ PASSED (7/7 tests)
- **Coverage**: 100% (Statements, Branches, Functions, Lines)
- **Test Cases**:
  - `calculateDiscount()` - 4 tests
  - `validateEmail()` - 3 tests

### Frontend Tests
- **Status**: ✅ PASSED (6/6 tests)
- **Coverage**: 100% (Statements, Branches, Functions, Lines)
- **Test Cases**:
  - `formatCurrency()` - 2 tests
  - `truncateText()` - 3 tests
  - `formatDate()` - 1 test

### Overall Statistics
- **Total Tests**: 13 (13 passed, 0 failed)
- **Overall Coverage**: 100%
- **Total Test Suites**: 2 (2 passed)

## Viewing the Coverage Reports

The detailed HTML coverage reports are available in:
- **Backend**: `public/backend/index.html`
- **Frontend**: `public/frontend/index.html`

These reports show:
- Line-by-line coverage
- Branch coverage analysis
- Function coverage
- Statement coverage

## Technologies Used

- **Testing Framework**: Jest
- **Node.js**: v20
- **Coverage Reporter**: Istanbul/NYC

## GitHub Actions Workflow

The `.github/workflows/coverage-pages.yml` file automatically:
1. Installs dependencies for both backend and frontend
2. Runs tests with coverage for both
3. Prepares the coverage reports for GitHub Pages
4. Publishes the reports to the `public/` directory

## Local Development

### Running Tests

```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test
```

### Building Coverage Reports

Coverage reports are automatically generated when running tests via Jest's `--coverage` flag configured in jest.config.js for each module.

---

Generated on: February 9, 2026
