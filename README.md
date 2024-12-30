# **Dev-CLI Example Project**

This project demonstrates how to build a shared development CLI using **Nest Commander**, a wrapper for the Commander library in NestJS. The CLI simplifies repetitive development tasks and ensures all team members have access to the latest updates.

## **Features**
- Centralized management of developer scripts.
- Easy updates and version control for shared commands.
- Built-in commands to streamline workflows, such as managing Docker containers.

---

## **Getting Started**

### **Prerequisites**
- Node.js (>=16.x)
- npm (>=8.x)
- Docker (optional, for some example commands)

---

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dev-cli-example.git
   cd dev-cli-example
    ```
2. Install dependencies:
```bash
npm install
```
3. Link the CLI locally for development:

```bash
npm link
```

## **Usage**

Run the CLI with the following command:

```bash
dev-cli <command> [options]
```

### Example Commands

- **Remove all Docker containers:**

```bash
dev-cli docker rm_all
```

- **Force-remove all Docker containers:**

```bash
dev-cli docker rm_all -f
```

## Adding New Commands

To add new commands:

- Create a new command class under src/commands/.
- Extend the Command class from Nest Commander.
- Define the logic in the run() method.
- Register the command in the CLI module (src/cli.module.ts).

## Development

### Run Locally
For local development, use the following:

```bash
npm run start:dev
```

### Build for Production
To build the project:
```bash
npm run build
```
