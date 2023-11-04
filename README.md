# Project 1
Node 16.16 : tested

#### Pre-installation

Ensure [Node.js  >=4](https://nodejs.org/en/download/), 
[NPM](https://docs.npmjs.com) and 
[git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) are installed on your system
 
#### Installation

1. Download this code from shared drive on your local system

2. Change directory into the local clone of the repository

    ```
    cd {project-1}
    ```

3. Install dependencies

    ```
    npm install
    ```
    
4. Start project

    ```
    npm run serve
    ```

5. Your site will be available at *localhost:3000*.

## Troubleshooting

Here are some common mistakes people make, check these before filing an issue:

- `EADDRINUSE :::3000`. You already have another application using port 3000. Either end it, or change manually set the `PORT` environment variable to resolve the conflict e.g. `3001`
- Ensure you have a version of Node >= 4

```
node -v
```
