
# Starknet Frontend Workshop

Welcome to this workshop, where you'll learn how to build a frontend application using Starknet and Next.js together with the set of hooks available in Starknet-react.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm. You can download them [here](https://nodejs.org/).
- You have a basic understanding of Starknet Foundry if you'll deploy an instance.
- You have a basic understanding of JavaScript and React. For React fundamentals, you can refer to the [official React documentation](https://react.dev/). For JavaScript basics, check out [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).

## Getting Started

### Starknet Foundry

This project includes a Starknet Foundry repository with a sample smart contract used in the frontend web app. To deploy your own instance of the contract, use `sncast` to declare changes (if any) and/or deploy an instance. You can view the sample contract deployed on Sepolia [here](https://sepolia.voyager.online/contract/0x008631ffba4fe3ea377edd7819ffc6c16205ee408859791c004cbacafafa167b#code).

### Next.js App

The `web` directory contains a Next.js app based on the starknet-react template. To get started, open your terminal, navigate to the `web` directory and install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

I've updated libraries to ensure the latest versions are used. Once dependencies are updated, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Workshop Steps

This workshop consists of five branches, each focusing on a specific step:

1. **Project Setup (branch: step-0-setup-project)**: Initialize the project and set up the development environment.
2. **Read Data (branch: step-1-read-block-number)**: Retrieve the latest block number from the blockchain.
3. **Read Balance (branch: step-2-fetch-account-balance)**: Retrieve your account balance.
4. **Read Contract (branch: step-3-read-contract-data)**: Fetch data from a deployed smart contract.
5. **Write Contract (branch: step-4-update-contract-state)**: Update the status of a smart contract.

At the end of the workshop, the `main` branch will include all changes made throughout the steps, serving as a complete reference for the workshop.

By following these steps, you'll gain hands-on experience building a frontend application with Starknet, Next.js, and Starknet-react.

## Project Overview

This project demonstrates integration with Starknet, including wallet connection, balance display, and contract interactions. Key features include:

- Wallet connection using various Starknet-compatible wallets
- Display of connected wallet address
- UI components for improved user experience
- Starknet contract interaction (reading and writing)

## Need Help?

Encountering issues? Here's what you can do:

1. Search existing issues in this repository for similar problems.
2. If you can't find a solution, create a new issue with these details:
   - A clear, concise title
   - Steps to reproduce the problem
   - Expected vs. actual behavior
   - Your environment (OS, browser, etc.)
   - Any relevant error messages or screenshots

We aim to respond to new issues within 48 hours.

## Want to Contribute?

We welcome contributions! Here's how you can get involved:

1. Star this repo to show your support.
2. Pick an open issue or propose a new feature.
3. Fork the repo and create a new branch for your work.
4. Make your changes, following these guidelines:
   - Adhere to the existing coding style
   - Write clear, commented code
   - Include unit tests for new features
5. Thoroughly test your changes.
6. Update documentation if necessary.
7. Submit a pull request with:
   - A clear title and description
   - Reference to any related issues

Remember: Quality over quantity. We appreciate all contributions, big or small!

Ready to make an impact? Let's collaborate and improve this project together!
