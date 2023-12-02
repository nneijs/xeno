// src/app.ts
import express, { Express, Request, Response, NextFunction } from 'express';

class WebFramework {
  private app: Express;

  constructor() {
    this.app = express();
    this.setupMiddleware();
    this.setupRoutes();
  }

  private setupMiddleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private setupRoutes() {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello, World!');
    });
  }

  public start(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}

const webFramework = new WebFramework();
webFramework.start(3000);
